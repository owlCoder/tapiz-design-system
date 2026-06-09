import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface AnnouncementBarProps extends BaseProps {
  children: ReactNode;
  action?: ReactNode;
}

export function AnnouncementBar({ children, action, className = "" }: AnnouncementBarProps) {
  return <div className={["border-b border-[var(--tapiz-border-strong)] bg-[var(--tapiz-accent-soft)] px-4 py-3 text-sm text-[var(--tapiz-text-primary)]", className].filter(Boolean).join(" ")}><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-center"> <span>{children}</span>{action ? <span>{action}</span> : null}</div></div>;
}
