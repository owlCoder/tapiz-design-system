import type { InputHTMLAttributes, ReactNode } from "react";

export interface FileDropzoneProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "title"> {
  title?: ReactNode;
  description?: ReactNode;
  actionLabel?: ReactNode;
  className?: string;
}

export function FileDropzone({ title = "Drop files here", description, actionLabel = "Browse", className = "", ...props }: FileDropzoneProps) {
  return (
    <label className={`block cursor-pointer border-2 border-dashed border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] p-6 text-center hover:bg-[var(--tapiz-bg-surface-muted)] ${className}`}>
      <input {...props} type="file" className="sr-only" />
      <span className="block text-sm font-semibold text-[var(--tapiz-text-primary)]">{title}</span>
      {description ? <span className="mt-2 block text-sm text-[var(--tapiz-text-muted)]">{description}</span> : null}
      <span className="mt-4 inline-flex border border-[var(--tapiz-border-strong)] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[var(--tapiz-accent)]">{actionLabel}</span>
    </label>
  );
}
