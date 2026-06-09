import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Switch } from "../forms/Switch";
import { Badge } from "../shared/Badge";

export interface FeatureFlag {
  key: string;
  name: ReactNode;
  description?: ReactNode;
  enabled?: boolean;
  rollout?: ReactNode;
}

export interface FeatureFlagTableProps extends BaseProps {
  flags: FeatureFlag[];
  onToggle?: (key: string, enabled: boolean) => void;
}

export function FeatureFlagTable({ flags, onToggle, className = "" }: FeatureFlagTableProps) {
  return (
    <div className={["overflow-hidden border border-[var(--tapiz-border-subtle)]", className].filter(Boolean).join(" ")}>
      {flags.map((flag) => <div key={flag.key} className="grid gap-3 border-b border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] p-4 last:border-b-0 md:grid-cols-[1fr_auto_auto] md:items-center"><div><div className="flex flex-wrap items-center gap-2"><h3 className="text-sm font-semibold text-[var(--tapiz-text-primary)]">{flag.name}</h3><Badge>{flag.key}</Badge></div>{flag.description ? <p className="mt-1 text-sm text-[var(--tapiz-text-muted)]">{flag.description}</p> : null}</div><div className="text-sm text-[var(--tapiz-text-muted)]">{flag.rollout}</div><Switch checked={flag.enabled} onChange={(checked) => onToggle?.(flag.key, checked)} /></div>)}
    </div>
  );
}
