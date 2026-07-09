import type { BaseProps } from "../../types";
import type { CSSProperties, ReactNode } from "react";

export interface PageRailItem {
  label: ReactNode;
  href?: string;
  active?: boolean;
  meta?: ReactNode;
}

export interface PageRailProps extends BaseProps {
  title?: ReactNode;
  items: PageRailItem[];
  actions?: ReactNode;

  style?: CSSProperties;
}

export function PageRail({ title, items, actions, className = "", style }: PageRailProps) {
  return (
    <aside className={["sticky top-20 rounded-lg border border-border bg-ink-200 p-3 shadow-(--tapiz-shadow-sm)", className].filter(Boolean).join(" ")} style={style}>
      {title ? <div className="kicker mb-3 px-2">{title}</div> : null}
      <nav className="flex flex-col gap-1">
        {items.map((item, index) => {
          const content = <><span className="truncate">{item.label}</span>{item.meta ? <span className="font-mono text-[10px] text-txt-3">{item.meta}</span> : null}</>;
          const classes = ["flex items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm transition", item.active ? "border-border-hi bg-primary-300/12 text-txt-1" : "border-transparent text-txt-3 hover:border-border hover:text-txt-1"].join(" ");
          return item.href ? <a key={index} href={item.href} className={classes}>{content}</a> : <div key={index} className={classes}>{content}</div>;
        })}
      </nav>
      {actions ? <div className="mt-3 border-t border-border pt-3">{actions}</div> : null}
    </aside>
  );
}
