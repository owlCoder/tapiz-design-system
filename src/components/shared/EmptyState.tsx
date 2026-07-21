import type { ReactNode } from "react";
import { Info } from "../icons/index";

export interface EmptyStateProps {
  title?: string;
  description?: string;
  message?: string;
  icon?: ReactNode;
  action?: ReactNode;
  /** Compact is intended for bounded table/list regions. */
  size?: "compact" | "default" | "large";
  className?: string;
}

export function EmptyState({
  title,
  description,
  message,
  icon,
  action,
  size = "default",
  className = "",
}: EmptyStateProps) {
  const resolvedTitle = title ?? message ?? "No data";
  const sizeClass = size === "compact"
    ? "min-h-44 px-5 py-9"
    : size === "large"
      ? "min-h-96 px-7 py-14"
      : "min-h-64 px-6 py-12";

  return (
    <div className={`relative isolate flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-ink-200/80 text-center shadow-sm ${sizeClass} ${className}`.trim()}>
      {icon ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden text-primary-300">
          <span className="absolute -right-8 -top-9 h-28 w-28 rotate-12 opacity-[0.065] [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-[0.8]">{icon}</span>
          <span className="absolute -bottom-10 -left-8 h-24 w-24 -rotate-12 opacity-[0.045] [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-[0.8]">{icon}</span>
        </div>
      ) : null}
      <div className="mb-4 flex justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-300/20 bg-primary-300/8 text-primary-300">
          {icon ?? <Info size={20} />}
        </span>
      </div>
      <p className="font-display text-base font-semibold text-txt-1">{resolvedTitle}</p>
      {description ? (
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-txt-3">{description}</p>
      ) : null}
      {action ? <div className="mt-5 flex flex-wrap justify-center gap-2">{action}</div> : null}
    </div>
  );
}

export function ErrorState({
  title = "Failed to load",
  error,
}: {
  title?: string;
  error: Error | null;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-warn/40 bg-ink-200/80 px-5 py-10 text-center shadow-sm">
      <div className="mb-4 flex justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-warn/30 bg-tint-peach text-warn">
          <Info size={20} />
        </span>
      </div>
      <p className="font-display text-base font-semibold text-warn">{title}</p>
      {error ? <p className="mt-2 text-sm text-txt-3">{error.message}</p> : null}
    </div>
  );
}
