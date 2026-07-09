import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Button } from "../forms/Button";
import { X, Check, Trash } from "../icons/index";

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
  const resolvedConfirm = confirmLabel ?? "Confirm";
  const resolvedCancel = cancelLabel ?? "Cancel";
  const resolvedDescription = description ?? message;
  if (!open) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-300 flex items-center justify-center px-4 bg-[rgba(5,6,8,0.4)] backdrop-blur-sm"
      onClick={onCancel}
    >
      <div
        className="relative w-full max-w-sm rounded-xl bg-ink-200 border border-border-hi animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 flex flex-col gap-4">
          {/* Icon + title row */}
          <div className="flex items-center gap-3">
            {icon && (
              <div
                className={`flex items-center justify-center w-9 h-9 shrink-0 rounded-md border ${danger ? "bg-[rgba(248,113,113,0.1)] border-[rgba(248,113,113,0.25)] text-(--color-danger,#f87171)" : "bg-primary-300/8 border-primary-300/15 text-primary-300"}`}
              >
                {icon}
              </div>
            )}
            <p className="text-sm font-semibold text-txt-1">
              {title}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-txt-3">
            {resolvedDescription}
          </p>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2">
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
