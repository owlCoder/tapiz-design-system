import type { TextareaHTMLAttributes } from "react";

export interface TextareaCounterProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength: number;
  value?: string;
}

export function TextareaCounter({ maxLength, value = "", className = "", ...props }: TextareaCounterProps) {
  const count = value.length;
  return (
    <div className={className}>
      <textarea {...props} value={value} maxLength={maxLength} className="input-field min-h-28" />
      <div className="mt-1 text-right font-mono text-[11px] text-[var(--tapiz-text-muted)]">{count}/{maxLength}</div>
    </div>
  );
}
