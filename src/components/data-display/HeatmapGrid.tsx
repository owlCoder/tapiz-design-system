import type { ReactNode } from "react";

export interface HeatmapCell {
  value: number;
  label?: ReactNode;
  title?: string;
}

export interface HeatmapGridProps {
  cells: HeatmapCell[];
  columns?: number;
  max?: number;
  className?: string;
}

export function HeatmapGrid({ cells, columns = 7, max, className = "" }: HeatmapGridProps) {
  const peak = max ?? Math.max(1, ...cells.map((cell) => cell.value));
  return (
    <div className={["grid gap-1", className].filter(Boolean).join(" ")} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
      {cells.map((cell, index) => {
        const opacity = 0.15 + Math.min(1, cell.value / peak) * 0.75;
        return <div key={index} title={cell.title} className="aspect-square border border-[var(--tapiz-border-subtle)]" style={{ background: `color-mix(in srgb, var(--tapiz-accent) ${Math.round(opacity * 100)}%, transparent)` }}>{cell.label ? <span className="sr-only">{cell.label}</span> : null}</div>;
      })}
    </div>
  );
}
