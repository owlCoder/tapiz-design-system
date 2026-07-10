import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Avatar } from "../shared/Avatar";

export interface AuditLogItem {
  actor: string;
  action: ReactNode;
  timestamp: ReactNode;
  detail?: ReactNode;
  initials?: string;
}

export interface AuditLogProps extends BaseProps {
  items: AuditLogItem[];
}

export function AuditLog({ items, className = "" }: AuditLogProps) {
  return (
    <div className={`divide-y divide-(--tapiz-border-subtle) overflow-hidden rounded-lg border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex gap-3 p-4">
          <Avatar name={item.initials ?? item.actor} size="sm" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm text-(--tapiz-text-secondary)"><strong className="text-(--tapiz-text-primary)">{item.actor}</strong> {item.action}</p>
              <span className="font-mono text-[11px] text-(--tapiz-text-muted)">{item.timestamp}</span>
            </div>
            {item.detail ? <div className="mt-1 text-xs leading-5 text-(--tapiz-text-muted)">{item.detail}</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
