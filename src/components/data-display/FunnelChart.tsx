import type { ReactNode } from "react";

export interface FunnelStep {
  label: ReactNode;
  value: number;
  meta?: ReactNode;
}

export interface FunnelChartProps {
  steps: FunnelStep[];
  className?: string;
}

export function FunnelChart({ steps, className = "" }: FunnelChartProps) {
  const max = Math.max(1, ...steps.map((step) => step.value));
  return (
    <div className={["space-y-3", className].filter(Boolean).join(" ")}>
      {steps.map((step, index) => {
        const width = Math.max(8, (step.value / max) * 100);
        return (
          <div key={index}>
            <div className="mb-1 flex items-center justify-between gap-3 text-sm"><span className="font-medium text-[var(--tapiz-text-primary)]">{step.label}</span><span className="font-mono text-xs text-[var(--tapiz-text-muted)]">{step.value}{step.meta ? ` · ${String(step.meta)}` : ""}</span></div>
            <div className="h-9 border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface-muted)]"><div className="h-full border-r border-[var(--tapiz-border-strong)] bg-[var(--tapiz-accent-soft)]" style={{ width: `${width}%` }} /></div>
          </div>
        );
      })}
    </div>
  );
}
