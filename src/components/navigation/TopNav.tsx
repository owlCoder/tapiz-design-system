import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface TopNavLink {
  label: ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

export interface TopNavProps extends BaseProps {
  brand?: ReactNode;
  links?: TopNavLink[];
  actions?: ReactNode;

  sticky?: boolean;
}

export function TopNav({ brand, links = [], actions, className = "", sticky = true }: TopNavProps) {
  return (
    <header className={`${sticky ? "sticky top-0 z-40" : ""} border-b border-(--tapiz-border-subtle) bg-[color-mix(in_srgb,var(--tapiz-bg-surface)_88%,transparent)] backdrop-blur-xl ${className}`}>
      <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-6 px-(--tapiz-space-page-x)">
        {brand ? <div className="shrink-0">{brand}</div> : null}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link, index) => {
            const cls = `border px-3 py-1.5 text-sm font-medium ${link.active ? "border-(--tapiz-border-strong) bg-(--tapiz-bg-surface-muted) text-(--tapiz-text-primary)" : "border-transparent text-(--tapiz-text-secondary) hover:border-(--tapiz-border-subtle) hover:text-(--tapiz-text-primary)"}`;
            return link.href ? <a key={index} href={link.href} className={cls}>{link.label}</a> : <button key={index} type="button" onClick={link.onClick} className={cls}>{link.label}</button>;
          })}
        </nav>
        {actions ? <div className="ml-auto flex items-center gap-2">{actions}</div> : null}
      </div>
    </header>
  );
}
