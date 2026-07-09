import type { HTMLAttributes, ReactNode } from "react";

export interface FieldHintProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function FieldHint({ children, className = "", ...props }: FieldHintProps) {
  return (
    <p {...props} className={`text-[11px] text-txt-4 ${className}`.trim()}>
      {children}
    </p>
  );
}
