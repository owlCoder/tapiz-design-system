import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface BarListItem {
  label: ReactNode;
  value: number;
  detail?: ReactNode;
}

export interface BarListProps extends BaseProps {
  items: BarListItem[];
  max?: number;
  valueFormatter?: (value: number) => ReactNode;
}

export function BarList({ items, max, valueFormatter = (value) => value, className = "" }: BarListProps) {
  const computedMax = max ?? Math.max(1, ...items.map((item) => item.value));

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const percent = Math.max(0, Math.min(100, (item.value / computedMax) * 100));
        return (
          <div key={index}>
            <div className="mb-1 flex items-center justify-between gap-3 text-sm">
              <span className="font-medium text-[var(--tapiz-text-secondary)]">{item.label}</span>
              <span className="font-mono text-xs text-[var(--tapiz-text-muted)]">{valueFormatter(item.value)}</span>
            </div>
            <div className="h-2 border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface-muted)]">
              <div className="h-full bg-[var(--tapiz-accent)]" style={{ width: `${percent}%` }} />
            </div>
            {item.detail ? <div className="mt-1 text-xs text-[var(--tapiz-text-muted)]">{item.detail}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
