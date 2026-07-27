import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown } from "../icons";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

interface ParsedOption {
  value: string;
  label: string;
  /** Quiet qualifier rendered after the label, kept whole while the label truncates. */
  meta?: string | undefined;
  disabled?: boolean | undefined;
  group?: string | undefined;
}

/** Text of an `<option>`'s children, which are plain strings or interpolated fragments. */
function optionText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(optionText).join("");
  if (isValidElement(node)) {
    return optionText((node.props as { children?: ReactNode }).children);
  }
  return "";
}

/**
 * Reads `<option>`/`<optgroup>` children into a flat list.
 *
 * Keeping the native children API is what makes this a drop-in for `<select>`: call sites already
 * map their data to `<option>` elements, so they migrate by changing the tag alone.
 */
function parseOptions(children: ReactNode, group?: string): ParsedOption[] {
  const result: ParsedOption[] = [];
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
    if (child.type === "optgroup") {
      const props = child.props as { label?: string; children?: ReactNode };
      result.push(...parseOptions(props.children, props.label));
      return;
    }
    if (child.type === "option") {
      const props = child.props as {
        value?: string | number;
        children?: ReactNode;
        disabled?: boolean;
        "data-meta"?: string;
      };
      result.push({
        value: String(props.value ?? ""),
        label: optionText(props.children),
        meta: props["data-meta"],
        disabled: props.disabled,
        group,
      });
    }
  });
  return result;
}

/**
 * Themed select.
 *
 * A native `<select>`'s popup is drawn by the operating system and ignores the app's tokens, so it
 * lands as a system-styled list in the middle of a themed UI. This keeps the native element's API
 * (`value`, `onChange`, `<option>` children) but renders the list itself, portalled to the body so
 * it escapes any dialog overflow or stacking context.
 */
export function Select({
  className = "",
  invalid = false,
  children,
  value,
  defaultValue,
  onChange,
  disabled,
  name,
  required,
  id,
  title,
  tabIndex,
  autoFocus,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
}: SelectProps) {
  const options = useMemo(() => parseOptions(children), [children]);
  const [uncontrolled, setUncontrolled] = useState<string>(
    () => String(defaultValue ?? ""),
  );
  const isControlled = value !== undefined;
  const currentValue = isControlled ? String(value ?? "") : uncontrolled;

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const selectedIndex = options.findIndex((option) => option.value === currentValue);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const commit = useCallback((index: number) => {
    const option = options[index];
    if (!option || option.disabled) return;
    if (!isControlled) setUncontrolled(option.value);
    /*
     * Call sites read `event.target.value`, so the handler is given a minimal target carrying the
     * chosen value. That is what lets existing `<select>` handlers keep working untouched.
     */
    onChange?.({
      target: { value: option.value, name: name ?? "" },
      currentTarget: { value: option.value, name: name ?? "" },
    } as React.ChangeEvent<HTMLSelectElement>);
    close();
  }, [options, isControlled, onChange, name, close]);

  useEffect(() => {
    if (open) setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
  }, [open, selectedIndex]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setOpen(false);
    };
    // `pointerdown` covers mouse, touch and pen in one listener, so a tap outside closes the menu
    // on phones as reliably as a click does on desktop.
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Anchored to the trigger and flipped upward when the list would overflow the viewport bottom.
  useEffect(() => {
    if (!open) return;
    const updatePosition = () => {
      const trigger = triggerRef.current;
      const menu = menuRef.current;
      if (!trigger || !menu) return;

      const rect = trigger.getBoundingClientRect();
      /*
       * `visualViewport` is the part of the page actually on screen: on mobile it shrinks when the
       * on-screen keyboard opens, which a plain `innerHeight` misses. Without it the menu is sized
       * against a viewport that is largely hidden behind the keyboard.
       */
      const viewport = window.visualViewport;
      const viewportHeight = viewport?.height ?? window.innerHeight;
      const viewportWidth = viewport?.width ?? window.innerWidth;
      const offsetTop = viewport?.offsetTop ?? 0;

      const menuHeight = menu.offsetHeight;
      const spaceBelow = viewportHeight + offsetTop - rect.bottom - 8;
      const spaceAbove = rect.top - offsetTop - 8;
      const openUp = spaceBelow < menuHeight && spaceAbove > spaceBelow;

      // Cap to whichever side it opens into, so a long list scrolls inside the menu rather than
      // running past the edge of a short viewport.
      const available = Math.max(120, openUp ? spaceAbove : spaceBelow);

      setMenuStyle({
        position: "fixed",
        top: openUp
          ? Math.max(offsetTop + 8, rect.top - Math.min(menuHeight, available) - 6)
          : Math.min(offsetTop + viewportHeight - Math.min(menuHeight, available) - 8, rect.bottom + 6),
        left: Math.max(8, Math.min(viewportWidth - rect.width - 8, rect.left)),
        width: rect.width,
        maxHeight: available,
        zIndex: 9999,
      });
    };

    const rafId = window.requestAnimationFrame(updatePosition);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    // The visual viewport changes independently of `resize` when the mobile keyboard opens or the
    // user pinch-zooms, so it needs its own subscription to keep the menu anchored.
    window.visualViewport?.addEventListener("resize", updatePosition);
    window.visualViewport?.addEventListener("scroll", updatePosition);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      window.visualViewport?.removeEventListener("resize", updatePosition);
      window.visualViewport?.removeEventListener("scroll", updatePosition);
    };
  }, [open]);

  // Keeps the highlighted row in view while navigating a long list by keyboard. Guarded because
  // `scrollIntoView` is absent in jsdom and other non-browser DOM implementations.
  useEffect(() => {
    if (!open) return;
    const active = menuRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    if (active instanceof HTMLElement && typeof active.scrollIntoView === "function") {
      active.scrollIntoView({ block: "nearest" });
    }
  }, [open, activeIndex]);

  const step = (from: number, direction: 1 | -1): number => {
    let next = from;
    for (let i = 0; i < options.length; i += 1) {
      next += direction;
      if (next < 0 || next >= options.length) return from;
      if (!options[next]?.disabled) return next;
    }
    return from;
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => step(i, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => step(i, -1));
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(step(-1, 1));
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(step(options.length, -1));
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      commit(activeIndex);
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  };

  let renderedGroup: string | undefined;

  return (
    <>
      {/* Mirrors the value for uncontrolled/native form submission and validation. */}
      {name ? <input type="hidden" name={name} value={currentValue} required={required} /> : null}
      <button
        ref={triggerRef}
        id={id}
        type="button"
        role="combobox"
        title={title}
        tabIndex={tabIndex}
        autoFocus={autoFocus}
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        aria-haspopup="listbox"
        aria-invalid={invalid || undefined}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className={[
          "input-field flex items-center gap-2 text-left",
          invalid ? "border-warn focus:border-warn" : "",
          disabled ? "cursor-not-allowed opacity-60" : "",
          className,
        ].filter(Boolean).join(" ")}
      >
        <span className="min-w-0 flex-1 truncate">{selected?.label ?? ""}</span>
        {selected?.meta ? (
          <span className="shrink-0 text-2xs text-txt-4">{selected.meta}</span>
        ) : null}
        <ChevronDown
          size={15}
          aria-hidden="true"
          className={`shrink-0 text-txt-4 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? createPortal(
        <div
          ref={menuRef}
          id={listboxId}
          role="listbox"
          tabIndex={-1}
          onKeyDown={onKeyDown}
          /* Parked off-screen (not `visibility: hidden`) for the frame before it is measured:
             a hidden element is excluded from the accessibility tree, which would make the
             listbox unreachable to assistive tech and role-based queries. */
          style={menuStyle ?? { position: "fixed", top: -9999, left: -9999, maxHeight: 288, zIndex: 9999 }}
          /* Scrolling lives in a nested element so the scrollbar is clipped by the rounded
             border rather than painted across it. */
          className="overflow-hidden rounded-xl border border-border/70 bg-ink-200/95 shadow-2xl backdrop-blur-lg"
        >
          {/* Inherits the measured cap from the wrapper so the list scrolls within the space the
              viewport actually has, instead of a fixed height that overflows small screens. */}
          <div className="flex max-h-[inherit] flex-col gap-1 overflow-y-auto overscroll-contain p-1">
            {options.map((option, index) => {
              const isSelected = option.value === currentValue;
              const isActive = index === activeIndex;
              const groupHeader = option.group && option.group !== renderedGroup
                ? option.group
                : null;
              renderedGroup = option.group;
              return (
                <div key={`${option.group ?? ""}:${option.value}:${index}`}>
                  {groupHeader ? (
                    <span className="block px-2.5 pb-1 pt-2 text-3xs font-semibold uppercase tracking-wide text-txt-4">
                      {groupHeader}
                    </span>
                  ) : null}
                  <button
                    type="button"
                    role="option"
                    data-index={index}
                    aria-selected={isSelected}
                    disabled={option.disabled}
                    onClick={() => commit(index)}
                    onMouseEnter={() => !option.disabled && setActiveIndex(index)}
                    className={[
                      // min-height keeps rows at a comfortable touch target on phones; pointer
                      // devices are unaffected because the text already fits well inside it.
                      "flex w-full min-h-11 items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition-colors sm:min-h-0",
                      option.disabled
                        ? "cursor-not-allowed text-txt-4 opacity-60"
                        : isSelected
                          ? "bg-primary-300/10 text-primary-300"
                          : isActive
                            ? "bg-ink-300 text-txt-1"
                            : "text-txt-2",
                    ].join(" ")}
                  >
                    {/* The label truncates while the qualifier stays whole: with several entries
                        sharing a name, the qualifier is what tells them apart. */}
                    <span className="min-w-0 flex-1 truncate">{option.label}</span>
                    {option.meta ? (
                      <span className="shrink-0 text-2xs text-txt-4">{option.meta}</span>
                    ) : null}
                    {isSelected ? <Check size={13} className="shrink-0" /> : null}
                  </button>
                </div>
              );
            })}
          </div>
        </div>,
        document.body,
      ) : null}
    </>
  );
}
