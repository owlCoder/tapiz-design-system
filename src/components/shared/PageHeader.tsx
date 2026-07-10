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

  variant?: "default" | "enterprise";
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
  const variantClass = variant === "enterprise"
    ? "rounded-lg border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) p-5 shadow-(--tapiz-shadow-sm)"
    : "border-b border-(--tapiz-border-subtle) pb-4";

  return (
    <div className={`page-header mb-5 flex flex-col gap-3 animate-fade-in-up ${variantClass} ${className}`.trim()}>
      {breadcrumbs ? <div className="text-[11px] font-medium text-(--tapiz-text-muted)">{breadcrumbs}</div> : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          {subtitle ? <div className="kicker mb-1.5">{subtitle}</div> : null}
          <div className="flex items-center gap-2.5">
            {icon ? <span className="text-(--tapiz-accent)">{icon}</span> : null}
            <h2 className="font-(--font-display) text-[22px] tracking-[-0.03em] text-(--tapiz-text-primary) md:text-[26px]">
              {title}
            </h2>
          </div>
          {description ? <div className="mt-2 max-w-3xl text-sm leading-6 text-(--tapiz-text-muted)">{description}</div> : null}
          {meta ? <div className="mt-3 text-[11px] font-medium text-(--tapiz-text-disabled)">{meta}</div> : null}
        </div>
        {resolvedActions ? <div className="flex shrink-0 flex-wrap gap-2">{resolvedActions}</div> : null}
      </div>
      {banner ? banner : null}
    </div>
  );
}
