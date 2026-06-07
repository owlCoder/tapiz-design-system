import type { InputHTMLAttributes, ReactNode } from "react";

export interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  revealLabel?: ReactNode;
}

export function PasswordInput({ revealLabel = "Show", className = "", ...props }: PasswordInputProps) {
  return (
    <div className={`flex border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] focus-within:border-[var(--tapiz-border-focus)] focus-within:shadow-[inset_3px_0_0_0_var(--tapiz-signal)] ${className}`}>
      <input
        {...props}
        type="password"
        className="min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm text-[var(--tapiz-text-primary)] outline-none"
      />
      <button type="button" className="border-l border-[var(--tapiz-border-subtle)] px-3 font-mono text-xs text-[var(--tapiz-text-muted)]" tabIndex={-1}>
        {revealLabel}
      </button>
    </div>
  );
}
