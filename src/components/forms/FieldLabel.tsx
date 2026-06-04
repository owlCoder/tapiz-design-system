import type { LabelHTMLAttributes, ReactNode } from "react";

export interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function FieldLabel({ children, className = "", ...props }: FieldLabelProps) {
  return (
    <label {...props} className={`kicker mb-1 block ${className}`.trim()}>
      {children}
    </label>
  );
}
