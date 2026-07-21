import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface PageHeaderProps extends BaseProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
  action?: ReactNode;
  actions?: ReactNode;
  /** Contextual content shown on the right, usually InfoBanner or a picker. */
  aside?: ReactNode;
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
  aside,
  icon,
  banner,
  breadcrumbs,
  meta,
  className = "",
  variant = "default",
}: PageHeaderProps) {
  const resolvedActions = actions ?? action;
  const variantClass = variant === "enterprise"
    ? "border-(--tapiz-border-strong) bg-(--tapiz-bg-surface-raised) shadow-(--tapiz-shadow-md)"
    : "border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) shadow-(--tapiz-shadow-sm)";

  return (
    <div className={`page-header relative isolate mb-5 overflow-hidden rounded-2xl border p-5 animate-fade-in-up ${variantClass} ${className}`.trim()}>
      {icon ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-(--tapiz-accent)">
          <span className="absolute -right-5 -top-7 h-28 w-28 rotate-12 opacity-[0.075] [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-[0.8]">
            {icon}
          </span>
          <span className="absolute -bottom-9 left-[42%] h-20 w-20 -rotate-12 opacity-[0.045] [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-[0.8]">
            {icon}
          </span>
        </div>
      ) : null}

      <div className="relative z-10 flex flex-col gap-3">
        {breadcrumbs ? <div className="text-xs font-medium text-(--tapiz-text-muted)">{breadcrumbs}</div> : null}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-center gap-4">
            {icon ? (
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary-300/15 bg-primary-300/8 text-(--tapiz-accent)">
                {icon}
              </span>
            ) : null}
            <div className="min-w-0">
              <h2 className="font-(--font-display) text-2xl font-semibold tracking-tight text-(--tapiz-text-primary) sm:text-3xl">
                {title}
              </h2>
              {subtitle ? <p className="mt-1 text-sm leading-relaxed text-(--tapiz-text-muted)">{subtitle}</p> : null}
              {description ? <div className="mt-2 max-w-3xl text-sm leading-6 text-(--tapiz-text-muted)">{description}</div> : null}
              {meta ? <div className="mt-3 text-xs font-medium text-(--tapiz-text-disabled)">{meta}</div> : null}
              {resolvedActions ? (
                <div className="mt-3 flex flex-wrap gap-2 [&_button]:min-h-9">
                  {resolvedActions}
                </div>
              ) : null}
            </div>
          </div>
          {aside ? <div className="w-full shrink-0 lg:w-[42%]">{aside}</div> : null}
        </div>
        {banner}
      </div>
    </div>
  );
}
