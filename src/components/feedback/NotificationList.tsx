import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface NotificationItem {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  time?: ReactNode;
  unread?: boolean;
  action?: ReactNode;
}

export interface NotificationListProps extends BaseProps {
  items: NotificationItem[];
}

export function NotificationList({ items, className = "" }: NotificationListProps) {
  return (
    <div className={`divide-y divide-[var(--tapiz-border-subtle)] border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] ${className}`}>
      {items.map((item) => (
        <article key={item.id} className="flex gap-3 p-4">
          <span className={`mt-1 size-2.5 ${item.unread ? "bg-[var(--tapiz-accent)]" : "bg-[var(--tapiz-border-subtle)]"}`} aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-medium text-[var(--tapiz-text-primary)]">{item.title}</h3>
              {item.time ? <span className="font-mono text-[11px] text-[var(--tapiz-text-muted)]">{item.time}</span> : null}
            </div>
            {item.description ? <p className="mt-1 text-sm leading-5 text-[var(--tapiz-text-muted)]">{item.description}</p> : null}
            {item.action ? <div className="mt-3">{item.action}</div> : null}
          </div>
        </article>
      ))}
    </div>
  );
}
