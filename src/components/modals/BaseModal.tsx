import { ReactNode, useId } from "react";
import { createPortal } from "react-dom";
import { X } from "../icons/index";

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  xShown?: boolean;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  closeLabel?: string;
}

const sizeClass: Record<NonNullable<BaseModalProps["size"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
};

export function BaseModal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  icon,
  xShown = false,
  size = "md",
  closeLabel = "Close dialog",
}: BaseModalProps) {
  const titleId = useId();
  if (!isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(5,6,8,0.75)", backdropFilter: "blur(2px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`w-full ${sizeClass[size]} p-6 space-y-4`}
        style={{
          background: "var(--color-ink-200)",
          border: "1px solid var(--color-border-hi)",
          borderTop: "2px solid var(--color-primary-300)",
          animation: "var(--animate-scale-in)",
        }}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {icon && (
              <div
                className="flex items-center justify-center w-10 h-10 shrink-0"
                style={{ background: "var(--color-ink-300)", border: "1px solid var(--color-border-hi)", color: "var(--color-primary-300)" }}
              >
                {icon}
              </div>
            )}
            <div>
              <h3 id={titleId} style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600, color: "var(--color-txt-1)" }}>{title}</h3>
              {subtitle && (
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-primary-300)", marginTop: 2, letterSpacing: "0.1em" }}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {xShown && (
            <button
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center"
              style={{ color: "var(--color-txt-3)", border: "1px solid transparent" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-txt-1)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-hi)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--color-txt-3)"; (e.currentTarget as HTMLElement).style.borderColor = "transparent"; }}
              aria-label={closeLabel}
              title={closeLabel}
            >
              <X size={14} />
            </button>
          )}
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
}
