import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface SLAStatusProps extends BaseProps {
  label: ReactNode;
  value: number;
  target?: number;
}

export function SLAStatus({ label, value, target = 95, className = "" }: SLAStatusProps) {
  const ok = value >= target;
  return (
    <div className={["border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) p-4", className].filter(Boolean).join(" ")}>
      <div className="flex items-center justify-between gap-3"><span className="text-sm font-medium text-(--tapiz-text-primary)">{label}</span><span className={["font-mono text-xs", ok ? "text-(--tapiz-success)" : "text-(--tapiz-warning)"].join(" ")}>{ok ? "Within SLA" : "At risk"}</span></div>
      <div className="mt-3 h-2 border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface-muted)"><div className="h-full bg-(--tapiz-accent)" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} /></div>
      <div className="mt-2 flex justify-between text-[11px] font-medium text-(--tapiz-text-muted)"><span>{value}%</span><span>Target {target}%</span></div>
    </div>
  );
}
