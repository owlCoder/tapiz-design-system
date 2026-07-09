import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Card } from "./Card";

export type MetricTrendTone = "positive" | "negative" | "neutral" | "warning";

export interface MetricCardProps extends BaseProps {
  label: ReactNode;
  value: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  trend?: ReactNode;
  trendTone?: MetricTrendTone;

  variant?: "surface" | "raised" | "brutal";
}

const trendClasses: Record<MetricTrendTone, string> = {
  positive: "border-[var(--tapiz-success)] text-[var(--tapiz-success)] bg-[var(--tapiz-success-soft)]",
  negative: "border-[var(--tapiz-danger)] text-[var(--tapiz-danger)] bg-[var(--tapiz-danger-soft)]",
  warning: "border-[var(--tapiz-warning)] text-[var(--tapiz-warning)] bg-[var(--tapiz-warning-soft)]",
  neutral: "border-[var(--tapiz-border-strong)] text-[var(--tapiz-text-muted)] bg-[var(--tapiz-bg-surface-muted)]",
};

export function MetricCard({
  label,
  value,
  description,
  icon,
  trend,
  trendTone = "neutral",
  className = "",
  variant = "surface",
}: MetricCardProps) {
  return (
    <Card variant={variant} padding="md" hover className={`relative overflow-hidden ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold text-[var(--tapiz-text-muted)]">
            {label}
          </p>
          <div className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--tapiz-text-primary)]">
            {value}
          </div>
        </div>
        {icon ? (
          <div className="grid h-10 w-10 shrink-0 place-items-center border border-[var(--tapiz-border-strong)] bg-[var(--color-icon-bg)] text-[var(--tapiz-accent)]">
            {icon}
          </div>
        ) : null}
      </div>
      {(description || trend) ? (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {trend ? (
            <span className={`inline-flex border px-2 py-0.5 text-[11px] font-semibold ${trendClasses[trendTone]}`}>
              {trend}
            </span>
          ) : null}
          {description ? <p className="text-xs text-[var(--tapiz-text-muted)]">{description}</p> : null}
        </div>
      ) : null}
    </Card>
  );
}
