import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface SectionTitleProps extends BaseProps {
  children: ReactNode;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return <h3 className={`mb-1 text-sm font-semibold text-txt-1 ${className}`.trim()}>{children}</h3>;
}
