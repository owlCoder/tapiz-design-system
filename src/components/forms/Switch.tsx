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
    <label className={`flex cursor-pointer items-start gap-3 ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative mt-0.5 h-6 w-11 border border-[var(--tapiz-border-strong)] ${checked ? "bg-[var(--tapiz-accent)]" : "bg-[var(--tapiz-bg-surface-muted)]"}`}
      >
        <span className={`absolute top-0.5 size-4 border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] transition-transform ${checked ? "left-5" : "left-0.5"}`} />
      </button>
      {(label || description) ? (
        <span>
          {label ? <span className="block text-sm font-semibold text-[var(--tapiz-text-primary)]">{label}</span> : null}
          {description ? <span className="block text-xs text-[var(--tapiz-text-muted)]">{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
}
