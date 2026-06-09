import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface FeatureGridProps extends BaseProps {
  children: ReactNode;
}

export function FeatureGrid({ children, className = "" }: FeatureGridProps) {
  return <div className={`grid gap-4 md:grid-cols-2 xl:grid-cols-3 ${className}`}>{children}</div>;
}
