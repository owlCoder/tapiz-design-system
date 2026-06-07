import type { ReactNode } from "react";

export type HealthTone = "operational" | "degraded" | "outage" | "unknown";

export interface HealthIndicatorProps {
  tone?: HealthTone;
  label?: ReactNode;
  detail?: ReactNode;
  className?: string;
}

const toneClasses: Record<HealthTone, string> = {
  operational: "bg-[var(--tapiz-success)]",
  degraded: "bg-[var(--tapiz-warning)]",
  outage: "bg-[var(--tapiz-danger)]",
  unknown: "bg-[var(--tapiz-text-disabled)]",
};

const defaultLabel: Record<HealthTone, string> = {
  operational: "Operational",
  degraded: "Degraded",
  outage: "Outage",
  unknown: "Unknown",
};

export function HealthIndicator({ tone = "unknown", label, detail, className = "" }: HealthIndicatorProps) {
  return (
    <div className={`inline-flex items-center gap-3 border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] px-3 py-2 ${className}`}>
      <span className={`size-2.5 ${toneClasses[tone]}`} aria-hidden="true" />
      <span className="text-sm font-medium text-[var(--tapiz-text-primary)]">{label ?? defaultLabel[tone]}</span>
      {detail ? <span className="font-mono text-xs text-[var(--tapiz-text-muted)]">{detail}</span> : null}
    </div>
  );
}
