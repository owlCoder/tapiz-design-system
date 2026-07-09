import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface AppShellProps extends BaseProps {
  sidebar?: ReactNode;
  topbar?: ReactNode;
  children: ReactNode;
  aside?: ReactNode;

  contentClassName?: string;
  variant?: "default" | "grid" | "noise";
}

const variantClasses = {
  default: "bg-(--tapiz-bg-page)",
  grid: "bg-(--tapiz-bg-page) tapiz-grid-bg",
  noise: "bg-(--tapiz-bg-page) tapiz-noise-bg",
};

export function AppShell({ sidebar, topbar, children, aside, className = "", contentClassName = "", variant = "default" }: AppShellProps) {
  return (
    <div className={`min-h-screen text-(--tapiz-text-primary) ${variantClasses[variant]} ${className}`}>
      {topbar}
      <div className="mx-auto flex w-full max-w-[1600px]">
        {sidebar ? <aside className="hidden min-h-[calc(100vh-1px)] w-72 shrink-0 border-r border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) lg:block">{sidebar}</aside> : null}
        <main className={`min-w-0 flex-1 px-(--tapiz-space-page-x) py-6 ${contentClassName}`}>{children}</main>
        {aside ? <aside className="hidden w-80 shrink-0 border-l border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) xl:block">{aside}</aside> : null}
      </div>
    </div>
  );
}
