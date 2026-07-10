import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface KeyValueItem {
  keyLabel: ReactNode;
  value: ReactNode;
  description?: ReactNode;
}

export interface KeyValueListProps extends BaseProps {
  items: KeyValueItem[];

  density?: "compact" | "normal";
}

export function KeyValueList({ items, className = "", density = "normal" }: KeyValueListProps) {
  return (
    <dl className={`divide-y divide-(--tapiz-border-subtle) overflow-hidden rounded-lg border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) ${className}`}>
      {items.map((item, index) => (
        <div key={index} className={`grid gap-2 ${density === "compact" ? "p-3 md:grid-cols-[160px_1fr]" : "p-4 md:grid-cols-[220px_1fr]"}`}>
          <dt className="text-[11px] font-semibold text-(--tapiz-text-muted)">{item.keyLabel}</dt>
          <dd>
            <div className="text-sm font-semibold text-(--tapiz-text-primary)">{item.value}</div>
            {item.description ? <div className="mt-1 text-xs text-(--tapiz-text-muted)">{item.description}</div> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
