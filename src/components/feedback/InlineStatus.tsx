import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export type InlineStatusTone = "neutral" | "success" | "warning" | "danger" | "info";

export interface InlineStatusProps extends BaseProps {
  tone?: InlineStatusTone;
  children: ReactNode;
  pulse?: boolean;
}

const toneClasses: Record<InlineStatusTone, string> = {
  neutral: "bg-(--tapiz-text-muted)",
  success: "bg-(--tapiz-success)",
  warning: "bg-(--tapiz-warning)",
  danger: "bg-(--tapiz-danger)",
  info: "bg-(--tapiz-info)",
};

export function InlineStatus({ tone = "neutral", children, pulse = false, className = "" }: InlineStatusProps) {
  return <span className={["inline-flex items-center gap-2 text-sm text-(--tapiz-text-muted)", className].filter(Boolean).join(" ")}><span className={["h-2 w-2 rounded-full", toneClasses[tone], pulse ? "animate-pulse" : ""].filter(Boolean).join(" ")} />{children}</span>;
}
