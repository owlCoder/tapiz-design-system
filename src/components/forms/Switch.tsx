import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface SwitchProps extends BaseProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: ReactNode;
  description?: ReactNode;
}

export function Switch({ checked = false, onChange, disabled, label, description, className = "" }: SwitchProps) {
  return (
    <label className={`flex cursor-pointer items-center gap-3 ${(label || description) ? "justify-between" : ""} ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`}>
      {(label || description) ? (
        <span>
          {label ? <span className="block text-sm font-semibold text-(--tapiz-text-primary)">{label}</span> : null}
          {description ? <span className="mt-1 block text-xs text-(--tapiz-text-muted)">{description}</span> : null}
        </span>
      ) : null}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border p-[3px] outline-none transition-[background-color,border-color,box-shadow] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-(--tapiz-accent)/40 focus-visible:ring-offset-2 focus-visible:ring-offset-(--tapiz-bg-surface) motion-reduce:transition-none ${
          checked
            ? "border-(--tapiz-accent) bg-(--tapiz-accent)"
            : "border-(--tapiz-border-strong) bg-(--tapiz-bg-surface-muted)"
        }`}
      >
        <span
          className={`block size-4 shrink-0 rounded-full shadow-sm transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            checked ? "translate-x-5 bg-white" : "translate-x-0 bg-(--tapiz-text-muted)"
          }`}
        />
      </button>
    </label>
  );
}
