import type { ReactNode } from "react";

export interface StatGridProps {
  children: ReactNode;
  className?: string;
  minColumnWidth?: string;
}

export function StatGrid({ children, className = "", minColumnWidth = "14rem" }: StatGridProps) {
  return (
    <div
      className={`grid gap-4 ${className}`}
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))` }}
    >
      {children}
    </div>
  );
}
