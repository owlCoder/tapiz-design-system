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
          ? "border-(--tapiz-border-strong) bg-(--tapiz-accent-soft) text-(--tapiz-text-primary)"
          : "border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) text-(--tapiz-text-muted)",
        className,
      ].join(" ")}
    >
      {children}
      {onRemove ? (
        <button type="button" onClick={onRemove} className="text-(--tapiz-text-muted) hover:text-(--tapiz-danger)" aria-label="Remove filter">
          ×
        </button>
      ) : null}
    </span>
  );
}
