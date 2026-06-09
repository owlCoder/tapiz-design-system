import type { BaseProps } from "../../types";
export interface DividerProps extends BaseProps {
  orientation?: "horizontal" | "vertical";
  label?: string;
}

export function Divider({ orientation = "horizontal", label, className = "" }: DividerProps) {
  if (orientation === "vertical") {
    return <div className={`mx-2 min-h-6 w-px bg-[var(--tapiz-border-subtle)] ${className}`} aria-hidden="true" />;
  }

  if (label) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="h-px flex-1 bg-[var(--tapiz-border-subtle)]" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--tapiz-text-muted)]">{label}</span>
        <div className="h-px flex-1 bg-[var(--tapiz-border-subtle)]" />
      </div>
    );
  }

  return <hr className={`border-[var(--tapiz-border-subtle)] ${className}`} />;
}
