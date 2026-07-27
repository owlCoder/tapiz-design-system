import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../forms/Button";
import { Spinner } from "../feedback/Spinner";
import { ChevronDown } from "../icons/index";
import { useMenuPosition } from "./useMenuPosition";
import { acquireBodyScrollLock } from "../overlays/scrollLock";

export interface ActionMenuItem {
  key: string;
  label: string;
  onSelect: () => void;
  icon?: ReactNode;
  danger?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export interface ActionMenuProps {
  label: string;
  items: ActionMenuItem[];
  icon?: ReactNode;
  buttonSize?: "xs" | "sm" | "md" | "lg" | "xl";
  buttonVariant?: "primary" | "secondary" | "danger" | "ghost" | "success" | "warning" | "info" | "muted-primary" | "outline-primary" | "outline-secondary" | "outline-danger" | "outline-success" | "link";
  buttonClassName?: string;
  menuClassName?: string;
  menuStyle?: CSSProperties;
  fullWidth?: boolean;
  closeLabel?: string;
  /** Renders the trigger as a square, icon-only button (no label, no chevron) — `label` is still used for a11y and the menu's `aria-label`. */
  buttonIconOnly?: boolean;
}

const defaultMenuStyle: CSSProperties = {
  background: "color-mix(in srgb, var(--color-ink-200) 96%, transparent)",
  border: "1px solid color-mix(in srgb, var(--color-border-hi) 72%, transparent)",
  borderRadius: "16px",
  padding: "8px",
  boxShadow: "0 24px 64px -18px rgba(0,0,0,0.62), 0 8px 24px -16px rgba(0,0,0,0.72)",
  backdropFilter: "blur(18px)",
  maxHeight: "min(320px, calc(100vh - 180px))",
};

const itemBaseClass =
  "group/menu-item relative flex min-h-11 w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left text-sm font-medium outline-none transition-[background-color,color,transform] duration-150 hover:bg-primary-300/8 focus-visible:bg-primary-300/8 focus-visible:ring-1 focus-visible:ring-primary-300/40 active:scale-[0.985] disabled:cursor-not-allowed disabled:opacity-40";

const iconBaseClass =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-150";

export function ActionMenu({
  label,
  items,
  icon,
  buttonSize = "sm",
  buttonVariant = "secondary",
  buttonClassName = "",
  menuClassName,
  menuStyle,
  fullWidth = false,
  closeLabel,
  buttonIconOnly = false,
}: ActionMenuProps) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pos = useMenuPosition(open, btnRef, items.length);

  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent | KeyboardEvent) {
      if (e instanceof KeyboardEvent) { if (e.key === "Escape") setOpen(false); return; }
      const target = e.target as Node;
      if (btnRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    document.addEventListener("keydown", handle);
    return () => { document.removeEventListener("mousedown", handle); document.removeEventListener("keydown", handle); };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const releaseBodyScrollLock = acquireBodyScrollLock();
    return releaseBodyScrollLock;
  }, [open]);

  // closeLabel is accepted for API compatibility but not rendered in the trigger button
  void closeLabel;

  const menuNode = open && pos ? (
    <>
      <div className="fixed inset-0 z-9998" onClick={() => setOpen(false)} />
      <div
        role="menu"
        aria-label={label}
        className={["relative overflow-hidden animate-scale-in", menuClassName].filter(Boolean).join(" ")}
        style={{
          position: "fixed",
          top: pos.top !== undefined ? pos.top : undefined,
          bottom: pos.bottom !== undefined ? pos.bottom : undefined,
          left: pos.left,
          width: pos.width,
          maxWidth: "calc(100vw - 16px)",
          zIndex: 9999,
          ...defaultMenuStyle,
          maxHeight: pos.maxHeight ?? defaultMenuStyle.maxHeight,
          ...menuStyle,
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full border border-primary-300/10 bg-primary-300/4"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -left-8 h-20 w-20 rounded-full border border-primary-300/8"
        />
        <div ref={menuRef} className="relative max-h-full overflow-y-auto overflow-x-hidden">
        {items.map((item, index) => (
          <div key={item.key} className="relative">
            {index > 0 && item.danger ? <div className="my-2 border-t border-border/60" /> : null}
            <button
              type="button"
              role="menuitem"
              className={`${itemBaseClass} ${item.danger ? "text-warn hover:bg-warn/8 focus-visible:bg-warn/8 focus-visible:ring-warn/35" : "text-txt-2 hover:text-txt-1"}`}
              disabled={item.disabled || item.loading}
              onClick={() => {
                setOpen(false);
                item.onSelect();
              }}
            >
              {item.loading ? (
                <span className={`${iconBaseClass} border-border/60 bg-ink-300/60 text-txt-3`}>
                  <Spinner color="text-txt-3" />
                </span>
              ) : item.icon ? (
                <span
                  className={`${iconBaseClass} ${
                    item.danger
                      ? "border-warn/18 bg-warn/7 text-warn group-hover/menu-item:border-warn/28 group-hover/menu-item:bg-warn/10"
                      : "border-primary-300/14 bg-primary-300/7 text-primary-300 group-hover/menu-item:border-primary-300/24 group-hover/menu-item:bg-primary-300/11"
                  }`}
                >
                  {item.icon}
                </span>
              ) : null}
              <span className="min-w-0 flex-1 truncate">{item.label}</span>
            </button>
          </div>
        ))}
        </div>
      </div>
    </>
  ) : null;

  return (
    <div ref={btnRef} className={fullWidth ? "relative w-full" : "relative inline-block max-w-full"}>
      <Button
        size={buttonSize}
        variant={buttonVariant}
        icon={icon}
        iconRight={buttonIconOnly ? undefined : <ChevronDown size={12} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />}
        iconOnly={buttonIconOnly}
        title={buttonIconOnly ? label : undefined}
        onClick={() => setOpen(value => !value)}
        /*
         * Softer geometry than the stock secondary button: the menu surface it opens uses a large
         * radius and low-contrast borders, and a hard 4px-radius trigger with a full-strength
         * border reads as a leftover from the older button language next to it.
         */
        className={[
          "rounded-xl border-border/55! bg-ink-200/60 text-txt-2 transition-colors",
          "hover:border-border-hi! hover:bg-ink-200 hover:text-txt-1",
          open ? "border-primary-300/45! bg-primary-300/8 text-primary-300" : "",
          buttonClassName,
        ].filter(Boolean).join(" ").trim()}
        fullWidth={fullWidth}
      >
        {buttonIconOnly ? undefined : label}
      </Button>
      {typeof document !== "undefined" ? createPortal(menuNode, document.body) : null}
    </div>
  );
}
