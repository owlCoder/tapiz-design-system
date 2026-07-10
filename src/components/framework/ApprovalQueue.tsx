import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Button } from "../forms/Button";
import { Badge } from "../shared/Badge";

export interface ApprovalItem {
  title: ReactNode;
  requester?: ReactNode;
  description?: ReactNode;
  priority?: "low" | "medium" | "high";
}

export interface ApprovalQueueProps extends BaseProps {
  items: ApprovalItem[];
  onApprove?: (index: number) => void;
  onReject?: (index: number) => void;
}

export function ApprovalQueue({ items, onApprove, onReject, className = "" }: ApprovalQueueProps) {
  return (
    <div className={["space-y-3", className].filter(Boolean).join(" ")}>
      {items.map((item, index) => <article key={index} className="rounded-lg border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) p-4"><div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"><div><div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold text-(--tapiz-text-primary)">{item.title}</h3>{item.priority ? <Badge variant={item.priority === "high" ? "danger" : item.priority === "medium" ? "warning" : "default"}>{item.priority}</Badge> : null}</div>{item.requester ? <p className="mt-1 text-xs text-(--tapiz-text-muted)">Requested by {item.requester}</p> : null}{item.description ? <p className="mt-2 text-sm text-(--tapiz-text-muted)">{item.description}</p> : null}</div><div className="flex gap-2"><Button size="sm" variant="secondary" onClick={() => onReject?.(index)}>Reject</Button><Button size="sm" onClick={() => onApprove?.(index)}>Approve</Button></div></div></article>)}
    </div>
  );
}
