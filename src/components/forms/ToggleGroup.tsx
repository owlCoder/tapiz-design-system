import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface ToggleOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface ToggleGroupProps extends BaseProps {
  options: ToggleOption[];
  value?: string;
  onChange?: (value: string) => void;

  fullWidth?: boolean;
}

export function ToggleGroup({ options, value, onChange, className = "", fullWidth = false }: ToggleGroupProps) {
  return (
    <div className={`inline-flex border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface-muted)] p-1 ${fullWidth ? "w-full" : ""} ${className}`}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            disabled={option.disabled}
            onClick={() => onChange?.(option.value)}
            className={`px-3 py-1.5 text-sm font-semibold disabled:opacity-40 ${fullWidth ? "flex-1" : ""} ${selected ? "bg-[var(--tapiz-bg-surface)] text-[var(--tapiz-text-primary)] shadow-[inset_0_-2px_0_var(--tapiz-accent)]" : "text-[var(--tapiz-text-muted)] hover:text-[var(--tapiz-text-primary)]"}`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
