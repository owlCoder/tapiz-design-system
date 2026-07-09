import type { BaseProps } from "../../types";
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

export interface InboxListProps extends BaseProps {
  items: InboxItem[];
}

export function InboxList({ items, className = "" }: InboxListProps) {
  return (
    <div className={["divide-y divide-(--tapiz-border-subtle) border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface)", className].filter(Boolean).join(" ")}>
      {items.map((item, index) => <article key={index} className={["p-4 transition hover:bg-(--tapiz-bg-surface-muted)", item.unread ? "border-l-4 border-l-(--tapiz-accent)" : ""].join(" ")}><div className="flex items-start justify-between gap-3"><div className="min-w-0"><h3 className="truncate text-sm font-semibold text-(--tapiz-text-primary)">{item.title}</h3>{item.sender ? <p className="mt-1 text-xs text-(--tapiz-text-muted)">{item.sender}</p> : null}</div><div className="flex shrink-0 items-center gap-2">{item.tag ? <Badge>{item.tag}</Badge> : null}{item.time ? <span className="font-mono text-[10px] text-(--tapiz-text-muted)">{item.time}</span> : null}</div></div>{item.snippet ? <p className="mt-2 line-clamp-2 text-sm text-(--tapiz-text-muted)">{item.snippet}</p> : null}</article>)}
    </div>
  );
}
