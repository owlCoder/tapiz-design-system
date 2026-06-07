import type { ReactNode } from "react";

export interface LogoCloudItem {
  name: string;
  logo?: ReactNode;
}

export interface LogoCloudProps {
  title?: ReactNode;
  items: LogoCloudItem[];
  className?: string;
}

export function LogoCloud({ title, items, className = "" }: LogoCloudProps) {
  return (
    <section className={`border-y border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] py-8 ${className}`}>
      <div className="mx-auto max-w-7xl px-[var(--tapiz-space-page-x)]">
        {title ? <p className="mb-6 text-center font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--tapiz-text-muted)]">{title}</p> : null}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {items.map((item) => (
            <div key={item.name} className="grid min-h-20 place-items-center border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface-muted)] px-4 text-center text-sm font-semibold text-[var(--tapiz-text-secondary)]">
              {item.logo ?? item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
