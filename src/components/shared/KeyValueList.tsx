import type { ReactNode } from "react";

export interface KeyValueItem {
  keyLabel: ReactNode;
  value: ReactNode;
  description?: ReactNode;
}

export interface KeyValueListProps {
  items: KeyValueItem[];
  className?: string;
  density?: "compact" | "normal";
}

export function KeyValueList({ items, className = "", density = "normal" }: KeyValueListProps) {
  return (
    <dl className={`divide-y divide-[var(--tapiz-border-subtle)] border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] ${className}`}>
      {items.map((item, index) => (
        <div key={index} className={`grid gap-2 ${density === "compact" ? "p-3 md:grid-cols-[160px_1fr]" : "p-4 md:grid-cols-[220px_1fr]"}`}>
          <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--tapiz-text-muted)]">{item.keyLabel}</dt>
          <dd>
            <div className="text-sm font-semibold text-[var(--tapiz-text-primary)]">{item.value}</div>
            {item.description ? <div className="mt-1 text-xs text-[var(--tapiz-text-muted)]">{item.description}</div> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
