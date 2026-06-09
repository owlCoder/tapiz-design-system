import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { StatusBadge } from "../shared/StatusBadge";

export type IntegrationStatus = "connected" | "disconnected" | "syncing" | "error";

export interface IntegrationCardProps extends BaseProps {
  name: ReactNode;
  description?: ReactNode;
  logo?: ReactNode;
  status?: IntegrationStatus;
  lastSync?: ReactNode;
  actions?: ReactNode;
}

const statusLabel: Record<IntegrationStatus, string> = {
  connected: "Connected",
  disconnected: "Disconnected",
  syncing: "Syncing",
  error: "Error",
};

const statusVariant: Record<IntegrationStatus, "success" | "default" | "info" | "danger"> = {
  connected: "success",
  disconnected: "default",
  syncing: "info",
  error: "danger",
};

export function IntegrationCard({ name, description, logo, status = "disconnected", lastSync, actions, className = "" }: IntegrationCardProps) {
  return (
    <article className={`border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] p-5 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex size-11 items-center justify-center border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface-muted)] text-[var(--tapiz-accent)]">
            {logo ?? <span className="font-mono text-xs">API</span>}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--tapiz-text-primary)]">{name}</h3>
            {description ? <p className="mt-1 text-sm leading-5 text-[var(--tapiz-text-muted)]">{description}</p> : null}
          </div>
        </div>
        <StatusBadge variant={statusVariant[status]} label={statusLabel[status]} />
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--tapiz-border-subtle)] pt-4">
        <div className="font-mono text-xs text-[var(--tapiz-text-muted)]">{lastSync ?? "No sync yet"}</div>
        {actions ? <div className="flex gap-2">{actions}</div> : null}
      </div>
    </article>
  );
}
