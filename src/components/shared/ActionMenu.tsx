import type { CSSProperties, ReactNode } from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../forms/Button";
import { Spinner } from "../feedback/Spinner";
import { ChevronDown } from "../icons/index";

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
}

const defaultMenuStyle: CSSProperties = {
  background: "var(--color-ink-200)",
  border: "1px solid var(--color-border-hi)",
  borderTop: "2px solid var(--color-primary-300)",
  boxShadow: "0 16px 48px -8px rgba(0,0,0,0.45)",
  maxHeight: "min(320px, calc(100vh - 180px))",
};

const itemBaseClass =
  "flex w-full items-center gap-2.5 border-l-2 border-transparent px-4 py-2.5 text-left text-sm transition-colors duration-100 hover:border-[var(--color-primary-300)] disabled:cursor-not-allowed disabled:opacity-40";

interface MenuPosition {
  top?: number;
  bottom?: number;
  left: number;
  width: number;
  maxHeight?: number;
}

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
}: ActionMenuProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<MenuPosition | null>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!open || !btnRef.current) return;

    const updatePosition = () => {
      const buttonElement = btnRef.current;
      if (!buttonElement) return;
      const rect = buttonElement.getBoundingClientRect();
      const viewportPadding = 8;
      const menuOffset = 4;
      const menuW = Math.min(320, window.innerWidth - viewportPadding * 2);
      const left = Math.max(
        viewportPadding,
        Math.min(rect.right - menuW, window.innerWidth - menuW - viewportPadding),
      );
      const estimatedMenuHeight = Math.min(320, items.length * 44 + 16);
      const spaceAbove = Math.max(0, rect.top - viewportPadding - menuOffset);
      const spaceBelow = Math.max(0, window.innerHeight - rect.bottom - viewportPadding - menuOffset);
      const preferBelow = spaceBelow >= estimatedMenuHeight || spaceBelow >= spaceAbove;

      if (preferBelow) {
        setPos({
          top: Math.min(rect.bottom + menuOffset, window.innerHeight - viewportPadding),
          left,
          width: menuW,
          maxHeight: Math.max(120, spaceBelow),
        });
        return;
      }

      setPos({
        bottom: Math.max(window.innerHeight - rect.top + menuOffset, viewportPadding),
        left,
        width: menuW,
        maxHeight: Math.max(120, spaceAbove),
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    document.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      document.removeEventListener("scroll", updatePosition, true);
    };
  }, [items.length, open]);

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

  const menuNode = open && pos ? (
    <>
      <div className="fixed inset-0 z-9998" onClick={() => setOpen(false)} />
      <div
        ref={menuRef}
        className={menuClassName ?? "overflow-auto"}
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
        {items.map((item, index) => (
          <div key={item.key}>
            {index > 0 && item.danger ? <div style={{ borderTop: "1px solid var(--color-border)" }} /> : null}
            <button
              type="button"
              className={itemBaseClass}
              style={{ color: item.danger ? "var(--color-warn)" : "var(--color-txt-2)" }}
              disabled={item.disabled || item.loading}
              onClick={() => {
                setOpen(false);
                item.onSelect();
              }}
            >
              {item.loading ? (
                <Spinner color="text-[var(--color-txt-3)]" />
              ) : (
                <span className={item.danger ? "shrink-0 text-warn" : "shrink-0 text-primary-300"}>{item.icon}</span>
              )}
              <span>{item.label}</span>
            </button>
          </div>
        ))}
      </div>
    </>
  ) : null;

  return (
    <div ref={btnRef} className={fullWidth ? "relative w-full" : "relative inline-block max-w-full"}>
      <Button
        size={buttonSize}
        variant={buttonVariant}
        icon={icon}
        iconRight={<ChevronDown size={11} />}
        onClick={() => setOpen(value => !value)}
        className={buttonClassName}
        fullWidth={fullWidth}
      >
        {label}
      </Button>
      {typeof document !== "undefined" ? createPortal(menuNode, document.body) : null}
    </div>
  );
}
