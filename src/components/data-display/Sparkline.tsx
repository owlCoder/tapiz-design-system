import type { BaseProps } from "../../types";
import type { CSSProperties } from "react";

export interface SparklineProps extends BaseProps {
  values: number[];
  width?: number;
  height?: number;
  label?: string;

  style?: CSSProperties;
}

export function Sparkline({ values, width = 160, height = 48, label = "Trend", className = "", style }: SparklineProps) {
  const safeValues = values.length ? values : [0];
  const min = Math.min(...safeValues);
  const max = Math.max(...safeValues);
  const range = max - min || 1;
  const step = safeValues.length > 1 ? width / (safeValues.length - 1) : width;
  const points = safeValues
    .map((value, index) => {
      const x = index * step;
      const y = height - ((value - min) / range) * (height - 6) - 3;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg className={className} style={style} width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label}>
      <polyline points={points} fill="none" stroke="var(--tapiz-accent)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
      <line x1="0" x2={width} y1={height - 1} y2={height - 1} stroke="var(--tapiz-border-subtle)" strokeWidth="1" />
    </svg>
  );
}
