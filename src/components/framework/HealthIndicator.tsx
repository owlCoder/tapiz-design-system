import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export type HealthTone = "operational" | "degraded" | "outage" | "unknown";

export interface HealthIndicatorProps extends BaseProps {
  tone?: HealthTone;
  label?: ReactNode;
  detail?: ReactNode;
}

const toneClasses: Record<HealthTone, string> = {
  operational: "bg-(--tapiz-success)",
  degraded: "bg-(--tapiz-warning)",
  outage: "bg-(--tapiz-danger)",
  unknown: "bg-(--tapiz-text-disabled)",
};

const defaultLabel: Record<HealthTone, string> = {
  operational: "Operational",
  degraded: "Degraded",
  outage: "Outage",
  unknown: "Unknown",
};

export function HealthIndicator({ tone = "unknown", label, detail, className = "" }: HealthIndicatorProps) {
  return (
    <div className={`inline-flex items-center gap-3 rounded-full border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) px-3 py-2 ${className}`}>
      <span className={`size-2.5 ${toneClasses[tone]}`} aria-hidden="true" />
      <span className="text-sm font-medium text-(--tapiz-text-primary)">{label ?? defaultLabel[tone]}</span>
      {detail ? <span className="font-mono text-xs text-(--tapiz-text-muted)">{detail}</span> : null}
    </div>
  );
}
