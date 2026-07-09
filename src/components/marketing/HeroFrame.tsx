import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface HeroFrameProps extends BaseProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
  meta?: ReactNode;
}

export function HeroFrame({ eyebrow, title, description, actions, visual, meta, className = "" }: HeroFrameProps) {
  return (
    <section className={`mx-auto grid max-w-7xl gap-10 px-(--tapiz-space-page-x) py-(--tapiz-space-section-y) lg:grid-cols-[1fr_0.9fr] lg:items-center ${className}`}>
      <div className="animate-fade-in-up">
        {eyebrow ? <div className="kicker mb-4">{eyebrow}</div> : null}
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-(--tapiz-text-primary) md:text-7xl">
          {title}
        </h1>
        {description ? <p className="mt-6 max-w-2xl text-base leading-7 text-(--tapiz-text-secondary) md:text-lg">{description}</p> : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        {meta ? <div className="mt-8 border-l-2 border-(--tapiz-accent) pl-4 font-mono text-xs text-(--tapiz-text-muted)">{meta}</div> : null}
      </div>
      {visual ? (
        <div className="animate-scale-in border-2 border-(--tapiz-border-strong) bg-(--tapiz-bg-surface) p-3 shadow-(--tapiz-shadow-brutal-lg)">
          {visual}
        </div>
      ) : null}
    </section>
  );
}
