import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Card } from "./Card";

export interface SectionCardProps extends BaseProps {
  title?: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
}

export function SectionCard({ title, eyebrow, description, action, children, className = "" }: SectionCardProps) {
  return (
    <Card variant="surface" padding="none" className={className}>
      {(title || eyebrow || description || action) ? (
        <div className="flex flex-col gap-3 border-b border-[var(--tapiz-border-subtle)] px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            {eyebrow ? <div className="kicker mb-1">{eyebrow}</div> : null}
            {title ? <h3 className="text-lg font-semibold text-[var(--tapiz-text-primary)]">{title}</h3> : null}
            {description ? <p className="mt-1 text-sm text-[var(--tapiz-text-muted)]">{description}</p> : null}
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </div>
      ) : null}
      <div className="p-5">{children}</div>
    </Card>
  );
}
