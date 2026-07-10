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

  variant?: "surface" | "raised";
}

const trendClasses: Record<MetricTrendTone, string> = {
  positive: "border-good text-good bg-good/12",
  negative: "border-warn text-warn bg-warn/12",
  warning: "border-signal-400 text-signal-400 bg-signal-400/12",
  neutral: "border-border-hi text-txt-3 bg-ink-300",
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
          <p className="text-[11px] font-semibold text-txt-3">
            {label}
          </p>
          <div className="mt-2 font-display text-3xl font-semibold tracking-tighter text-txt-1">
            {value}
          </div>
        </div>
        {icon ? (
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border-hi bg-(--color-icon-bg) text-primary-300">
            {icon}
          </div>
        ) : null}
      </div>
      {(description || trend) ? (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {trend ? (
            <span className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] font-semibold ${trendClasses[trendTone]}`}>
              {trend}
            </span>
          ) : null}
          {description ? <p className="text-xs text-txt-3">{description}</p> : null}
        </div>
      ) : null}
    </Card>
  );
}
