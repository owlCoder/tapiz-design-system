import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Avatar } from "../shared/Avatar";

export interface ActivityFeedItem {
  actor: string;
  action: ReactNode;
  time?: ReactNode;
  avatarUrl?: string;
  meta?: ReactNode;
}

export interface ActivityFeedProps extends BaseProps {
  items: ActivityFeedItem[];
}

export function ActivityFeed({ items, className = "" }: ActivityFeedProps) {
  return (
    <div className={["divide-y divide-[var(--tapiz-border-subtle)] border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)]", className].filter(Boolean).join(" ")}>
      {items.map((item, index) => <div key={index} className="flex gap-3 p-4"><Avatar name={item.actor} src={item.avatarUrl} size="sm" /><div className="min-w-0 flex-1"><p className="text-sm text-[var(--tapiz-text-primary)]"><strong>{item.actor}</strong> {item.action}</p>{item.meta ? <div className="mt-1 text-sm text-[var(--tapiz-text-muted)]">{item.meta}</div> : null}</div>{item.time ? <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--tapiz-text-muted)]">{item.time}</div> : null}</div>)}
    </div>
  );
}
