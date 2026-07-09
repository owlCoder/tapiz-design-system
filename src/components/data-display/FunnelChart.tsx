import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface FunnelStep {
  label: ReactNode;
  value: number;
  meta?: ReactNode;
}

export interface FunnelChartProps extends BaseProps {
  steps: FunnelStep[];
}

export function FunnelChart({ steps, className = "" }: FunnelChartProps) {
  const max = Math.max(1, ...steps.map((step) => step.value));
  return (
    <div className={["space-y-3", className].filter(Boolean).join(" ")}>
      {steps.map((step, index) => {
        const width = Math.max(8, (step.value / max) * 100);
        return (
          <div key={index}>
            <div className="mb-1 flex items-center justify-between gap-3 text-sm"><span className="font-medium text-(--tapiz-text-primary)">{step.label}</span><span className="font-mono text-xs text-(--tapiz-text-muted)">{step.value}{step.meta ? ` · ${String(step.meta)}` : ""}</span></div>
            <div className="h-9 border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface-muted)"><div className="h-full border-r border-(--tapiz-border-strong) bg-(--tapiz-accent-soft)" style={{ width: `${width}%` }} /></div>
          </div>
        );
      })}
    </div>
  );
}
