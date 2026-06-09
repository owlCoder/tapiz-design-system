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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,6,8,0.75)] backdrop-blur-[2px]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`w-full ${sizeClass[size]} p-6 space-y-4 bg-ink-200 border border-border-hi border-t-2 border-t-primary-300 animate-scale-in`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="flex items-center justify-center w-10 h-10 shrink-0 bg-ink-300 border border-border-hi text-primary-300">
                {icon}
              </div>
            )}
            <div>
              <h3 id={titleId} className="font-display text-[15px] font-semibold text-txt-1">{title}</h3>
              {subtitle && (
                <p className="font-mono text-[10px] text-primary-300 mt-0.5 tracking-widest">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {xShown && (
            <button
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center text-txt-3 border border-transparent hover:text-txt-1 hover:border-border-hi transition-colors"
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
