import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface PageHeaderProps extends BaseProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
  action?: ReactNode;
  actions?: ReactNode;
  icon?: ReactNode;
  banner?: ReactNode;
  breadcrumbs?: ReactNode;
  meta?: ReactNode;

  variant?: "default" | "enterprise" | "brutal";
}

export function PageHeader({
  title,
  subtitle,
  description,
  action,
  actions,
  icon,
  banner,
  breadcrumbs,
  meta,
  className = "",
  variant = "default",
}: PageHeaderProps) {
  const resolvedActions = actions ?? action;
  const variantClass = variant === "brutal"
    ? "border-2 border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] p-5 shadow-[var(--tapiz-shadow-brutal)]"
    : variant === "enterprise"
      ? "border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] p-5 shadow-[var(--tapiz-shadow-sm)]"
      : "border-b border-[var(--tapiz-border-subtle)] pb-4";

  return (
    <div className={`page-header mb-5 flex flex-col gap-3 animate-fade-in-up ${variantClass} ${className}`.trim()}>
      {breadcrumbs ? <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--tapiz-text-muted)]">{breadcrumbs}</div> : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          {subtitle ? <div className="kicker mb-1.5">{subtitle}</div> : null}
          <div className="flex items-center gap-2.5">
            {icon ? <span className="text-[var(--tapiz-accent)]">{icon}</span> : null}
            <h2 className="font-(--font-display) text-[22px] tracking-[-0.03em] text-[var(--tapiz-text-primary)] md:text-[26px]">
              {title}
            </h2>
          </div>
          {description ? <div className="mt-2 max-w-3xl text-sm leading-6 text-[var(--tapiz-text-muted)]">{description}</div> : null}
          {meta ? <div className="mt-3 font-mono text-[11px] text-[var(--tapiz-text-disabled)]">{meta}</div> : null}
        </div>
        {resolvedActions ? <div className="flex shrink-0 flex-wrap gap-2">{resolvedActions}</div> : null}
      </div>
      {banner ? banner : null}
    </div>
  );
}
