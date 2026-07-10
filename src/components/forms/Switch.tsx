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
        className={`relative mt-0.5 h-6 w-11 rounded-full border transition-colors duration-200 ${
          checked
            ? "border-(--tapiz-accent) bg-(--tapiz-accent)"
            : "border-(--tapiz-border-strong) bg-(--tapiz-bg-surface-muted)"
        }`}
      >
        <span
          className={`absolute top-1/2 size-4 -translate-y-1/2 rounded-full shadow-sm transition-[left,background-color] duration-200 ${
            checked ? "left-[calc(100%-1.25rem)] bg-white" : "left-1 bg-(--tapiz-text-muted)"
          }`}
        />
      </button>
      {(label || description) ? (
        <span>
          {label ? <span className="block text-sm font-semibold text-(--tapiz-text-primary)">{label}</span> : null}
          {description ? <span className="block text-xs text-(--tapiz-text-muted)">{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
}
