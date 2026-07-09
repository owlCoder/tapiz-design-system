import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface FilterChipProps extends BaseProps {
  children: ReactNode;
  active?: boolean;
  onRemove?: () => void;
}

export function FilterChip({ children, active = false, onRemove, className = "" }: FilterChipProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 border px-2.5 py-1 text-[11px] font-medium",
        active
          ? "border-[var(--tapiz-border-strong)] bg-[var(--tapiz-accent-soft)] text-[var(--tapiz-text-primary)]"
          : "border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] text-[var(--tapiz-text-muted)]",
        className,
      ].join(" ")}
    >
      {children}
      {onRemove ? (
        <button type="button" onClick={onRemove} className="text-[var(--tapiz-text-muted)] hover:text-[var(--tapiz-danger)]" aria-label="Remove filter">
          ×
        </button>
      ) : null}
    </span>
  );
}
