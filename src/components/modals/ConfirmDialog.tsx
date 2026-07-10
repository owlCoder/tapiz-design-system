import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Button } from "../forms/Button";
import { X, Check, Trash } from "../icons/index";

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
  if (!open) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-300 flex items-center justify-center px-4 backdrop-blur-sm"
      style={{ background: "color-mix(in srgb, var(--color-ink-000) 45%, transparent)" }}
      onClick={onCancel}
    >
      <div
        className="relative w-full max-w-sm rounded-xl bg-ink-200 border border-border-hi shadow-(--tapiz-shadow-lg) animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 flex flex-col gap-4">
          {/* Icon + title row */}
          <div className="flex items-center gap-3">
            {icon && (
              <div
                className={`flex items-center justify-center size-10 shrink-0 rounded-lg border ${danger ? "bg-warn/10 border-warn/25 text-warn" : "bg-primary-300/8 border-primary-300/15 text-primary-300"}`}
              >
                {icon}
              </div>
            )}
            <p className="text-[15px] font-semibold text-txt-1">
              {title}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-txt-3">
            {resolvedDescription}
          </p>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 pt-1">
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
