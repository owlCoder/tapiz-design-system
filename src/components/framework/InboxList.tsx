import type { ReactNode } from "react";
import { Badge } from "../shared/Badge";

export interface InboxItem {
  title: ReactNode;
  sender?: ReactNode;
  snippet?: ReactNode;
  time?: ReactNode;
  unread?: boolean;
  tag?: ReactNode;
}

export interface InboxListProps {
  items: InboxItem[];
  className?: string;
}

export function InboxList({ items, className = "" }: InboxListProps) {
  return (
    <div className={["divide-y divide-[var(--tapiz-border-subtle)] border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)]", className].filter(Boolean).join(" ")}>
      {items.map((item, index) => <article key={index} className={["p-4 transition hover:bg-[var(--tapiz-bg-surface-muted)]", item.unread ? "border-l-4 border-l-[var(--tapiz-accent)]" : ""].join(" ")}><div className="flex items-start justify-between gap-3"><div className="min-w-0"><h3 className="truncate text-sm font-semibold text-[var(--tapiz-text-primary)]">{item.title}</h3>{item.sender ? <p className="mt-1 text-xs text-[var(--tapiz-text-muted)]">{item.sender}</p> : null}</div><div className="flex shrink-0 items-center gap-2">{item.tag ? <Badge>{item.tag}</Badge> : null}{item.time ? <span className="font-mono text-[10px] text-[var(--tapiz-text-muted)]">{item.time}</span> : null}</div></div>{item.snippet ? <p className="mt-2 line-clamp-2 text-sm text-[var(--tapiz-text-muted)]">{item.snippet}</p> : null}</article>)}
    </div>
  );
}
