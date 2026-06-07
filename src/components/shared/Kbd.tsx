import type { ReactNode } from "react";

export interface KbdProps {
  children: ReactNode;
  className?: string;
}

export function Kbd({ children, className = "" }: KbdProps) {
  return <kbd className={`inline-flex min-w-5 items-center justify-center border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface-muted)] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[var(--tapiz-text-secondary)] shadow-[1px_1px_0_var(--tapiz-border-strong)] ${className}`}>{children}</kbd>;
}
