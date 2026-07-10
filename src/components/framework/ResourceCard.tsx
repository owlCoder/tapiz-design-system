import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Badge } from "../shared/Badge";

export interface ResourceCardProps extends BaseProps {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  icon?: ReactNode;
  meta?: ReactNode;
  status?: ReactNode;
  actions?: ReactNode;
  href?: string;
}

export function ResourceCard({ title, description, eyebrow, icon, meta, status, actions, href, className = "" }: ResourceCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          {icon ? <div className="rounded-md border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface-muted) p-2 text-(--tapiz-accent)">{icon}</div> : null}
          <div className="min-w-0">
            {eyebrow ? <div className="kicker mb-2">{eyebrow}</div> : null}
            <h3 className="truncate text-base font-semibold text-(--tapiz-text-primary)">{title}</h3>
            {description ? <p className="mt-2 line-clamp-2 text-sm leading-6 text-(--tapiz-text-muted)">{description}</p> : null}
          </div>
        </div>
        {status ? <Badge>{status}</Badge> : null}
      </div>
      {(meta || actions) ? (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-(--tapiz-border-subtle) pt-4">
          {meta ? <div className="font-mono text-xs text-(--tapiz-text-muted)">{meta}</div> : <span />}
          {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
        </div>
      ) : null}
    </>
  );

  const classes = `block rounded-lg border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) p-5 shadow-(--tapiz-shadow-sm) hover:border-(--tapiz-border-strong) hover:shadow-(--tapiz-shadow-md) ${className}`;

  return href ? <a href={href} className={classes}>{content}</a> : <article className={classes}>{content}</article>;
}
