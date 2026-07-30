import { ReactNode, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "../icons/index";
import { useModalLifecycle } from "./useModalLifecycle";

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  /**
   * Actions pinned below the scrollable body. Use this rather than putting buttons at the end of
   * `children`: content there scrolls away, so in a tall dialog the confirm action is only
   * reachable after scrolling to the bottom.
   */
  footer?: ReactNode;
  xShown?: boolean;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  closeLabel?: string;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
}

const sizeClass: Record<NonNullable<BaseModalProps["size"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
  "2xl": "max-w-4xl",
};

export function BaseModal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  icon,
  xShown = false,
  size = "md",
  closeLabel = "Close dialog",
  closeOnBackdrop = true,
  closeOnEscape = true,
}: BaseModalProps) {
  const titleId = useId();
  const subtitleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  useModalLifecycle(isOpen, onClose, dialogRef, closeOnEscape);
  if (!isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={subtitle ? subtitleId : undefined}
      className="fixed inset-0 z-300 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ background: "color-mix(in srgb, var(--color-ink-000) 58%, transparent)" }}
      onClick={(e) => closeOnBackdrop && e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={`relative isolate flex max-h-[min(80vh,48rem)] w-full ${sizeClass[size]} flex-col overflow-hidden rounded-2xl border border-border/65 bg-ink-200 shadow-(--tapiz-shadow-lg) outline-none animate-scale-in`}
        onClick={(event) => event.stopPropagation()}
      >
        {icon ? (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-primary-300">
            <span className="absolute -right-8 -top-7 h-28 w-28 rotate-12 opacity-[0.065] [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-[0.8]">{icon}</span>
            <span className="absolute -bottom-10 -left-8 h-24 w-24 -rotate-12 opacity-[0.045] [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-[0.8]">{icon}</span>
          </div>
        ) : (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-primary-300">
            <span className="absolute -right-8 -top-8 h-24 w-24 rotate-12 rounded-3xl border-2 border-current opacity-[0.055]" />
            <span className="absolute -bottom-10 -left-8 h-24 w-24 rounded-full border-2 border-current opacity-[0.04]" />
          </div>
        )}

        <div className="relative z-10 flex min-h-18 shrink-0 items-center justify-between gap-3 border-b border-border/60 px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            {icon && (
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary-300/20 bg-primary-300/8 text-primary-300">
                {icon}
              </div>
            )}
            <div className="min-w-0">
              <h3 id={titleId} className="font-display text-base font-semibold text-txt-1">{title}</h3>
              {subtitle && (
                <p id={subtitleId} className="mt-0.5 text-[13px] leading-relaxed text-txt-3">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {xShown && (
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-transparent text-txt-3 transition-colors hover:border-border-hi hover:bg-ink-300 hover:text-txt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/45"
              aria-label={closeLabel}
              title={closeLabel}
            >
              <X size={16} />
            </button>
          )}
        </div>
        <div className="relative z-10 min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5">
          {children}
        </div>
        {footer ? (
          <div className="relative z-10 flex shrink-0 flex-wrap items-center justify-end gap-2 border-t border-border/60 bg-ink-200 px-5 py-4">
            {footer}
          </div>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
