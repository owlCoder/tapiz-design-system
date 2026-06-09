import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface CodeBlockProps extends BaseProps {
  children: ReactNode;
  language?: string;
  title?: ReactNode;
  actions?: ReactNode;
}

export function CodeBlock({ children, language, title, actions, className = "" }: CodeBlockProps) {
  return (
    <figure className={`overflow-hidden border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] ${className}`}>
      {(title || language || actions) ? (
        <figcaption className="flex items-center justify-between gap-3 border-b border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface-muted)] px-3 py-2">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--tapiz-text-muted)]">{title ?? language}</span>
          {actions}
        </figcaption>
      ) : null}
      <pre className="overflow-auto p-4 text-sm leading-6 text-[var(--tapiz-text-secondary)]"><code>{children}</code></pre>
    </figure>
  );
}
