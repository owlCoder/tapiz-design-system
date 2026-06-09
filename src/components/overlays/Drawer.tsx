import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface DrawerProps extends BaseProps {
  open: boolean;
  onClose?: () => void;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  side?: "left" | "right";
}

export function Drawer({ open, onClose, title, description, children, footer, side = "right", className = "" }: DrawerProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <button type="button" aria-label="Close drawer" className="absolute inset-0 bg-[var(--tapiz-bg-overlay)]" onClick={onClose} />
      <section className={`absolute top-0 h-full w-full max-w-md border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] shadow-[var(--tapiz-shadow-lg)] ${side === "right" ? "right-0 border-l" : "left-0 border-r"} ${className}`}>
        <header className="flex items-start justify-between gap-4 border-b border-[var(--tapiz-border-subtle)] p-5">
          <div>
            {title ? <h2 className="text-lg font-semibold text-[var(--tapiz-text-primary)]">{title}</h2> : null}
            {description ? <p className="mt-1 text-sm text-[var(--tapiz-text-muted)]">{description}</p> : null}
          </div>
          <button type="button" onClick={onClose} className="border border-[var(--tapiz-border-subtle)] px-2 py-1 font-mono text-sm text-[var(--tapiz-text-muted)] hover:text-[var(--tapiz-text-primary)]">×</button>
        </header>
        <div className="max-h-[calc(100vh-9rem)] overflow-auto p-5">{children}</div>
        {footer ? <footer className="border-t border-[var(--tapiz-border-subtle)] p-4">{footer}</footer> : null}
      </section>
    </div>
  );
}
