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
  neutral: "border-(--tapiz-border-strong) bg-(--tapiz-bg-surface) text-(--tapiz-text-muted)",
  info: "border-(--tapiz-info) bg-(--tapiz-info-soft) text-(--tapiz-info)",
  success: "border-(--tapiz-success) bg-(--tapiz-success-soft) text-(--tapiz-success)",
  warning: "border-(--tapiz-warning) bg-(--tapiz-warning-soft) text-(--tapiz-warning)",
  danger: "border-(--tapiz-danger) bg-(--tapiz-danger-soft) text-(--tapiz-danger)",
};

export function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <ol className={`relative space-y-4 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-(--tapiz-border-subtle) ${className}`}>
      {items.map((item) => (
        <li key={item.id} className="relative flex gap-3">
          <span className={`z-10 grid size-8 shrink-0 place-items-center border text-xs ${tones[item.tone ?? "neutral"]}`}>{item.icon ?? "•"}</span>
          <span className="min-w-0 flex-1 pb-2">
            <span className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-semibold text-(--tapiz-text-primary)">{item.title}</span>
              {item.time ? <span className="text-[11px] font-medium text-(--tapiz-text-muted)">{item.time}</span> : null}
            </span>
            {item.description ? <span className="mt-1 block text-sm text-(--tapiz-text-secondary)">{item.description}</span> : null}
          </span>
        </li>
      ))}
    </ol>
  );
}
