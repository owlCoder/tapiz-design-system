import type { ReactNode } from "react";

export interface MockupFrameProps {
  children: ReactNode;
  title?: ReactNode;
  toolbar?: ReactNode;
  className?: string;
}

export function MockupFrame({ children, title, toolbar, className = "" }: MockupFrameProps) {
  return (
    <div className={`overflow-hidden border-2 border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] shadow-[var(--tapiz-shadow-brutal)] ${className}`}>
      <div className="flex items-center justify-between border-b border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface-muted)] px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-danger)]" />
          <span className="h-2.5 w-2.5 border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-warning)]" />
          <span className="h-2.5 w-2.5 border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-success)]" />
        </div>
        {title ? <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--tapiz-text-muted)]">{title}</div> : null}
        <div>{toolbar}</div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
