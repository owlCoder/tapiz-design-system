import type { CSSProperties, ReactNode } from "react";

export interface PageRailItem {
  label: ReactNode;
  href?: string;
  active?: boolean;
  meta?: ReactNode;
}

export interface PageRailProps {
  title?: ReactNode;
  items: PageRailItem[];
  actions?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function PageRail({ title, items, actions, className = "", style }: PageRailProps) {
  return (
    <aside className={["sticky top-20 rounded-none border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] p-3 shadow-[var(--tapiz-shadow-sm)]", className].filter(Boolean).join(" ")} style={style}>
      {title ? <div className="kicker mb-3 px-2">{title}</div> : null}
      <nav className="flex flex-col gap-1">
        {items.map((item, index) => {
          const content = <><span className="truncate">{item.label}</span>{item.meta ? <span className="font-mono text-[10px] text-[var(--tapiz-text-muted)]">{item.meta}</span> : null}</>;
          const classes = ["flex items-center justify-between gap-3 border px-3 py-2 text-sm transition", item.active ? "border-[var(--tapiz-border-strong)] bg-[var(--tapiz-accent-soft)] text-[var(--tapiz-text-primary)]" : "border-transparent text-[var(--tapiz-text-muted)] hover:border-[var(--tapiz-border-subtle)] hover:text-[var(--tapiz-text-primary)]"].join(" ");
          return item.href ? <a key={index} href={item.href} className={classes}>{content}</a> : <div key={index} className={classes}>{content}</div>;
        })}
      </nav>
      {actions ? <div className="mt-3 border-t border-[var(--tapiz-border-subtle)] pt-3">{actions}</div> : null}
    </aside>
  );
}
