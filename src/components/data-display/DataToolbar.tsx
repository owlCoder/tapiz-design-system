import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface DataToolbarProps extends BaseProps {
  title?: ReactNode;
  description?: ReactNode;
  search?: ReactNode;
  filters?: ReactNode;
  actions?: ReactNode;
}

export function DataToolbar({ title, description, search, filters, actions, className = "" }: DataToolbarProps) {
  return (
    <div className={`border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] p-4 ${className}`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          {title ? <h3 className="text-base font-semibold text-[var(--tapiz-text-primary)]">{title}</h3> : null}
          {description ? <p className="mt-1 text-sm text-[var(--tapiz-text-muted)]">{description}</p> : null}
        </div>
        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </div>
      {(search || filters) ? (
        <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {search ? <div className="min-w-0 flex-1">{search}</div> : null}
          {filters ? <div className="flex flex-wrap gap-2">{filters}</div> : null}
        </div>
      ) : null}
    </div>
  );
}
