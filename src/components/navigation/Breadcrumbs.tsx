import type { ReactNode } from "react";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  className?: string;
}

export function Breadcrumbs({ items, separator = "/", className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--tapiz-text-muted)] ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true" className="text-[var(--tapiz-text-disabled)]">{separator}</span> : null}
            {item.href && !item.current ? (
              <a className="hover:text-[var(--tapiz-accent)]" href={item.href}>{item.label}</a>
            ) : (
              <span aria-current={item.current ? "page" : undefined} className={item.current ? "text-[var(--tapiz-text-primary)]" : ""}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
