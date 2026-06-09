import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface CTASectionProps extends BaseProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}

export function CTASection({ eyebrow, title, description, actions, className = "" }: CTASectionProps) {
  return (
    <section className={`mx-auto max-w-7xl px-[var(--tapiz-space-page-x)] py-[var(--tapiz-space-section-y)] ${className}`}>
      <div className="border-2 border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] p-8 shadow-[var(--tapiz-shadow-brutal-lg)] md:p-12">
        {eyebrow ? <div className="kicker mb-3">{eyebrow}</div> : null}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-5xl">{title}</h2>
            {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--tapiz-text-secondary)]">{description}</p> : null}
          </div>
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
