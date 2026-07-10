import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface LogoCloudItem {
  name: string;
  logo?: ReactNode;
}

export interface LogoCloudProps extends BaseProps {
  title?: ReactNode;
  items: LogoCloudItem[];
}

export function LogoCloud({ title, items, className = "" }: LogoCloudProps) {
  return (
    <section className={`border-y border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) py-8 ${className}`}>
      <div className="mx-auto max-w-7xl px-(--tapiz-space-page-x)">
        {title ? <p className="mb-6 text-center text-[11px] font-semibold text-(--tapiz-text-muted)">{title}</p> : null}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {items.map((item) => (
            <div key={item.name} className="grid min-h-20 place-items-center rounded-lg border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface-muted) px-4 text-center text-sm font-semibold text-(--tapiz-text-secondary)">
              {item.logo ?? item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
