import type { ReactNode } from "react";

export interface StatsBandItem {
  value: ReactNode;
  label: ReactNode;
  description?: ReactNode;
}

export interface StatsBandProps {
  items: StatsBandItem[];
  className?: string;
}

export function StatsBand({ items, className = "" }: StatsBandProps) {
  return (
    <section className={`border-y border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface-inverse)] text-[var(--tapiz-text-inverse)] ${className}`}>
      <div className="mx-auto grid max-w-7xl divide-y divide-[color-mix(in_srgb,var(--tapiz-text-inverse)_24%,transparent)] px-[var(--tapiz-space-page-x)] md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map((item, index) => (
          <div key={index} className="p-6 md:p-8">
            <div className="text-3xl font-semibold tracking-tight">{item.value}</div>
            <div className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] opacity-70">{item.label}</div>
            {item.description ? <div className="mt-3 text-sm opacity-70">{item.description}</div> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
