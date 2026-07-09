import type { BaseProps } from "../../types";
import type { InputHTMLAttributes, ReactNode } from "react";

export interface FileDropzoneProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "title"> { 
  title?: ReactNode;
  description?: ReactNode;
  actionLabel?: ReactNode;

}

export function FileDropzone({ title = "Drop files here", description, actionLabel = "Browse", className = "", ...props }: FileDropzoneProps) {
  return (
    <label className={`block cursor-pointer rounded-lg border-2 border-dashed border-(--tapiz-border-strong) bg-(--tapiz-bg-surface) p-6 text-center hover:bg-(--tapiz-bg-surface-muted) ${className}`}>
      <input {...props} type="file" className="sr-only" />
      <span className="block text-sm font-semibold text-(--tapiz-text-primary)">{title}</span>
      {description ? <span className="mt-2 block text-sm text-(--tapiz-text-muted)">{description}</span> : null}
      <span className="mt-4 inline-flex rounded-sm border border-(--tapiz-border-strong) px-3 py-1.5 text-xs font-semibold text-(--tapiz-accent)">{actionLabel}</span>
    </label>
  );
}
