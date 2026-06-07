import type { ReactNode } from "react";

export interface FeatureGridProps {
  children: ReactNode;
  className?: string;
}

export function FeatureGrid({ children, className = "" }: FeatureGridProps) {
  return <div className={`grid gap-4 md:grid-cols-2 xl:grid-cols-3 ${className}`}>{children}</div>;
}
