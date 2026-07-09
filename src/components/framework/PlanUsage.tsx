import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface PlanUsageItem {
  label: ReactNode;
  used: number;
  limit: number;
}

export interface PlanUsageProps extends BaseProps {
  title?: ReactNode;
  items: PlanUsageItem[];
}

export function PlanUsage({ title = "Plan usage", items, className = "" }: PlanUsageProps) {
  return (
    <section className={["border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) p-5", className].filter(Boolean).join(" ")}>
      <h3 className="text-sm font-semibold text-(--tapiz-text-primary)">{title}</h3>
      <div className="mt-4 space-y-4">
        {items.map((item, index) => { const pct = item.limit ? Math.min(100, (item.used / item.limit) * 100) : 0; return <div key={index}><div className="mb-1 flex justify-between text-sm"><span className="text-(--tapiz-text-primary)">{item.label}</span><span className="font-mono text-xs text-(--tapiz-text-muted)">{item.used}/{item.limit}</span></div><div className="h-2 border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface-muted)"><div className="h-full bg-(--tapiz-accent)" style={{ width: `${pct}%` }} /></div></div>; })}
      </div>
    </section>
  );
}
