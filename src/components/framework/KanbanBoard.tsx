import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface KanbanCardItem {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  tone?: "default" | "accent" | "success" | "warning" | "danger";
}

export interface KanbanColumn {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  items: KanbanCardItem[];
}

export interface KanbanBoardProps extends BaseProps {
  columns: KanbanColumn[];
}

const toneClasses: Record<NonNullable<KanbanCardItem["tone"]>, string> = {
  default: "border-(--tapiz-border-subtle)",
  accent: "border-(--tapiz-accent)",
  success: "border-(--tapiz-success)",
  warning: "border-(--tapiz-warning)",
  danger: "border-(--tapiz-danger)",
};

export function KanbanBoard({ columns, className = "" }: KanbanBoardProps) {
  return (
    <div className={`grid gap-4 overflow-x-auto md:grid-flow-col md:auto-cols-[minmax(18rem,1fr)] ${className}`}>
      {columns.map((column) => (
        <section key={column.id} className="rounded-lg border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface-muted) p-3">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-(--tapiz-text-primary)">{column.title}</h3>
              {column.description ? <p className="mt-1 text-xs text-(--tapiz-text-muted)">{column.description}</p> : null}
            </div>
            <span className="font-mono text-xs text-(--tapiz-text-muted)">{column.items.length}</span>
          </div>
          <div className="space-y-3">
            {column.items.map((item) => (
              <article key={item.id} className={`rounded-md border-l-2 bg-(--tapiz-bg-surface) p-3 shadow-(--tapiz-shadow-sm) ${toneClasses[item.tone ?? "default"]}`}>
                <h4 className="text-sm font-medium text-(--tapiz-text-primary)">{item.title}</h4>
                {item.description ? <p className="mt-1 text-xs leading-5 text-(--tapiz-text-muted)">{item.description}</p> : null}
                {item.meta ? <div className="mt-3 font-mono text-[11px] text-(--tapiz-text-muted)">{item.meta}</div> : null}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
