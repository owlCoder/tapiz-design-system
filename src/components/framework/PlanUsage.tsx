import type { ReactNode } from "react";

export interface PlanUsageItem {
  label: ReactNode;
  used: number;
  limit: number;
}

export interface PlanUsageProps {
  title?: ReactNode;
  items: PlanUsageItem[];
  className?: string;
}

export function PlanUsage({ title = "Plan usage", items, className = "" }: PlanUsageProps) {
  return (
    <section className={["border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] p-5", className].filter(Boolean).join(" ")}>
      <h3 className="text-sm font-semibold text-[var(--tapiz-text-primary)]">{title}</h3>
      <div className="mt-4 space-y-4">
        {items.map((item, index) => { const pct = item.limit ? Math.min(100, (item.used / item.limit) * 100) : 0; return <div key={index}><div className="mb-1 flex justify-between text-sm"><span className="text-[var(--tapiz-text-primary)]">{item.label}</span><span className="font-mono text-xs text-[var(--tapiz-text-muted)]">{item.used}/{item.limit}</span></div><div className="h-2 border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface-muted)]"><div className="h-full bg-[var(--tapiz-accent)]" style={{ width: `${pct}%` }} /></div></div>; })}
      </div>
    </section>
  );
}
