import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface TimelineItem {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  time?: ReactNode;
  icon?: ReactNode;
  tone?: "neutral" | "info" | "success" | "warning" | "danger";
}

export interface TimelineProps extends BaseProps {
  items: TimelineItem[];
}

const tones = {
  neutral: "border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] text-[var(--tapiz-text-muted)]",
  info: "border-[var(--tapiz-info)] bg-[var(--tapiz-info-soft)] text-[var(--tapiz-info)]",
  success: "border-[var(--tapiz-success)] bg-[var(--tapiz-success-soft)] text-[var(--tapiz-success)]",
  warning: "border-[var(--tapiz-warning)] bg-[var(--tapiz-warning-soft)] text-[var(--tapiz-warning)]",
  danger: "border-[var(--tapiz-danger)] bg-[var(--tapiz-danger-soft)] text-[var(--tapiz-danger)]",
};

export function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <ol className={`relative space-y-4 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[var(--tapiz-border-subtle)] ${className}`}>
      {items.map((item) => (
        <li key={item.id} className="relative flex gap-3">
          <span className={`z-10 grid size-8 shrink-0 place-items-center border text-xs ${tones[item.tone ?? "neutral"]}`}>{item.icon ?? "•"}</span>
          <span className="min-w-0 flex-1 pb-2">
            <span className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-semibold text-[var(--tapiz-text-primary)]">{item.title}</span>
              {item.time ? <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--tapiz-text-muted)]">{item.time}</span> : null}
            </span>
            {item.description ? <span className="mt-1 block text-sm text-[var(--tapiz-text-secondary)]">{item.description}</span> : null}
          </span>
        </li>
      ))}
    </ol>
  );
}
