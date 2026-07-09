import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../forms/Button";
import { Spinner } from "../feedback/Spinner";
import { ChevronDown } from "../icons/index";
import { useMenuPosition } from "./useMenuPosition";

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
  borderRadius: "10px",
  padding: "4px",
  boxShadow: "0 16px 48px -8px rgba(0,0,0,0.45)",
  maxHeight: "min(320px, calc(100vh - 180px))",
};

const itemBaseClass =
  "flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-left text-sm transition-colors duration-100 hover:bg-ink-300 disabled:cursor-not-allowed disabled:opacity-40";

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

  // closeLabel is accepted for API compatibility but not rendered in the trigger button
  void closeLabel;

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
                <Spinner color="text-txt-3" />
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
