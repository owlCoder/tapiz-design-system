import type { BaseProps } from "../../types";
export interface SkeletonProps extends BaseProps {
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return <div aria-hidden="true" className={`skeleton ${className}`} />;
}
