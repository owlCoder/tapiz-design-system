import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
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

export function ActionMenu({
  label,
  items,
  icon,
  buttonSize = "sm",
  buttonVariant = "secondary",
  buttonClassName = "",
  menuClassName = "absolute bottom-full right-0 z-50 mb-1 w-[min(20rem,calc(100vw-1.5rem))] max-w-[calc(100vw-1.5rem)] overflow-auto sm:min-w-52 sm:w-auto",
  menuStyle,
  fullWidth = false,
  closeLabel,
}: ActionMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div ref={rootRef} className="relative">
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

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[3px]"
            aria-label={closeLabel ?? label}
            onClick={() => setOpen(false)}
          />
          <div className={menuClassName} style={{ ...defaultMenuStyle, ...menuStyle }}>
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
      ) : null}
    </div>
  );
}
