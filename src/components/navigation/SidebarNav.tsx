import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface SidebarNavItem {
  label: ReactNode;
  href?: string;
  icon?: ReactNode;
  badge?: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface SidebarNavGroup {
  label?: ReactNode;
  items: SidebarNavItem[];
}

export interface SidebarNavProps extends BaseProps {
  groups: SidebarNavGroup[];
  header?: ReactNode;
  footer?: ReactNode;
}

export function SidebarNav({ groups, header, footer, className = "" }: SidebarNavProps) {
  return (
    <div className={`flex h-full min-h-screen flex-col bg-(--tapiz-bg-surface) ${className}`}>
      {header ? <div className="border-b border-(--tapiz-border-subtle) p-4">{header}</div> : null}
      <nav className="flex-1 space-y-6 p-3">
        {groups.map((group, groupIndex) => (
          <div key={groupIndex}>
            {group.label ? <div className="mb-2 px-2 text-[11px] font-semibold text-(--tapiz-text-muted)">{group.label}</div> : null}
            <div className="space-y-1">
              {group.items.map((item, itemIndex) => <SidebarNavLink key={itemIndex} item={item} />)}
            </div>
          </div>
        ))}
      </nav>
      {footer ? <div className="border-t border-(--tapiz-border-subtle) p-4">{footer}</div> : null}
    </div>
  );
}

function SidebarNavLink({ item }: { item: SidebarNavItem }) {
  const className = [
    "flex w-full items-center gap-3 rounded-md border px-3 py-2 text-left text-sm font-medium",
    item.active
      ? "border-(--tapiz-border-strong) bg-(--tapiz-accent-soft) text-(--tapiz-text-primary) shadow-[inset_3px_0_0_var(--tapiz-accent)]"
      : "border-transparent text-(--tapiz-text-secondary) hover:border-(--tapiz-border-subtle) hover:bg-(--tapiz-bg-surface-muted) hover:text-(--tapiz-text-primary)",
    item.disabled ? "pointer-events-none opacity-40" : "",
  ].filter(Boolean).join(" ");

  const content = (
    <>
      {item.icon ? <span className="grid size-5 place-items-center text-(--tapiz-text-muted)">{item.icon}</span> : null}
      <span className="min-w-0 flex-1 truncate">{item.label}</span>
      {item.badge ? <span>{item.badge}</span> : null}
    </>
  );

  return item.href ? <a className={className} href={item.href}>{content}</a> : <button type="button" className={className} onClick={item.onClick} disabled={item.disabled}>{content}</button>;
}
