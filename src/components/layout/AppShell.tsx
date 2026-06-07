import type { ReactNode } from "react";

export interface AppShellProps {
  sidebar?: ReactNode;
  topbar?: ReactNode;
  children: ReactNode;
  aside?: ReactNode;
  className?: string;
  contentClassName?: string;
  variant?: "default" | "grid" | "noise";
}

const variantClasses = {
  default: "bg-[var(--tapiz-bg-page)]",
  grid: "bg-[var(--tapiz-bg-page)] tapiz-grid-bg",
  noise: "bg-[var(--tapiz-bg-page)] tapiz-noise-bg",
};

export function AppShell({ sidebar, topbar, children, aside, className = "", contentClassName = "", variant = "default" }: AppShellProps) {
  return (
    <div className={`min-h-screen text-[var(--tapiz-text-primary)] ${variantClasses[variant]} ${className}`}>
      {topbar}
      <div className="mx-auto flex w-full max-w-[1600px]">
        {sidebar ? <aside className="hidden min-h-[calc(100vh-1px)] w-72 shrink-0 border-r border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] lg:block">{sidebar}</aside> : null}
        <main className={`min-w-0 flex-1 px-[var(--tapiz-space-page-x)] py-6 ${contentClassName}`}>{children}</main>
        {aside ? <aside className="hidden w-80 shrink-0 border-l border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] xl:block">{aside}</aside> : null}
      </div>
    </div>
  );
}
