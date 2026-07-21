import { ReactNode, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "../forms/Button";
import { X, Check, Trash, Info, WarningTriangle } from "../icons/index";
import { useModalLifecycle } from "./useModalLifecycle";

const dialogDefaults = { confirmLabel: "Confirm", cancelLabel: "Cancel" };

/** Set app-wide default labels (call from the host app, e.g. on i18n language change). */
export function setConfirmDialogDefaults(defaults: Partial<typeof dialogDefaults>) {
  Object.assign(dialogDefaults, defaults);
}

export interface ConfirmDialogProps {
  title: string;
  description?: ReactNode;
  message?: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  loading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  icon?: ReactNode;
  danger?: boolean;
  open?: boolean;
}

export function ConfirmDialog({
  title,
  description,
  message,
  confirmLabel,
  cancelLabel,
  loading = false,
  onConfirm,
  onCancel,
  icon,
  danger = false,
  open = true,
}: ConfirmDialogProps) {
  const resolvedConfirm = confirmLabel ?? dialogDefaults.confirmLabel;
  const resolvedCancel = cancelLabel ?? dialogDefaults.cancelLabel;
  const resolvedDescription = description ?? message;
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  useModalLifecycle(open, onCancel, dialogRef);
  if (!open) return null;

  const resolvedIcon = icon ?? (danger
    ? <WarningTriangle size={20} />
    : <Info size={20} />);

  return createPortal(
    <div
      role={danger ? "alertdialog" : "dialog"}
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={resolvedDescription ? descriptionId : undefined}
      className="fixed inset-0 z-300 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ background: "color-mix(in srgb, var(--color-ink-000) 58%, transparent)" }}
      onClick={(event) => event.target === event.currentTarget && onCancel()}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        aria-busy={loading || undefined}
        className="relative isolate w-full max-w-md overflow-hidden rounded-2xl border border-border/65 bg-ink-200 shadow-(--tapiz-shadow-lg) outline-none animate-scale-in"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${danger ? "text-warn" : "text-primary-300"}`}
        >
          <span className="absolute -right-7 -top-8 h-28 w-28 rotate-12 opacity-[0.065] [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-[0.8]">{resolvedIcon}</span>
          <span className="absolute -bottom-10 -left-9 h-24 w-24 -rotate-12 opacity-[0.04] [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-[0.8]">{resolvedIcon}</span>
        </div>

        <div className="relative z-10 flex flex-col gap-5 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${danger ? "border-warn/25 bg-warn/10 text-warn" : "border-primary-300/20 bg-primary-300/8 text-primary-300"}`}
            >
              {resolvedIcon}
            </div>
            <h3 id={titleId} className="min-w-0 font-display text-base font-semibold text-txt-1">
              {title}
            </h3>
          </div>

          {resolvedDescription ? (
            <div className="rounded-xl border border-border/55 bg-ink-300/45 px-4 py-3.5">
              <div id={descriptionId} className="text-sm leading-6 text-txt-2">
                {resolvedDescription}
              </div>
            </div>
          ) : null}

          <div className="flex flex-col-reverse gap-2 border-t border-border/55 pt-4 sm:flex-row sm:items-center sm:justify-end">
            <Button variant="ghost" size="sm" icon={<X size={13} />} onClick={onCancel} disabled={loading}>
              {resolvedCancel}
            </Button>
            <Button
              variant={danger ? "danger" : "primary"}
              size="sm"
              icon={danger ? <Trash size={13} /> : <Check size={13} />}
              onClick={onConfirm}
              loading={loading}
            >
              {resolvedConfirm}
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
