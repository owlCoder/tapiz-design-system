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
  /** Split is intended for full-width page empty states with a supporting rail. */
  layout?: "centered" | "split";
  aside?: ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  message,
  icon,
  action,
  size = "default",
  layout = "centered",
  aside,
  className = "",
}: EmptyStateProps) {
  const resolvedTitle = title ?? message ?? "No data";
  const isSplit = layout === "split" && Boolean(aside);
  const sizeClass = size === "compact"
    ? "min-h-44 px-5 py-9"
    : size === "large"
      ? "min-h-96 px-7 py-14"
      : "min-h-64 px-6 py-12";

  const content = (
    <>
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
    </>
  );

  return (
    <div className={`relative isolate overflow-hidden rounded-2xl border border-border/60 bg-ink-200/80 text-center shadow-sm ${isSplit ? "grid min-h-96 grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.75fr)]" : `flex flex-col items-center justify-center ${sizeClass}`} ${className}`.trim()}>
      {icon ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden text-primary-300">
          <span className="absolute -right-8 -top-9 h-28 w-28 rotate-12 opacity-[0.075] [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-[0.8]">{icon}</span>
          <span className="absolute -bottom-10 -left-8 h-24 w-24 -rotate-12 opacity-[0.055] [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-[0.8]">{icon}</span>
        </div>
      ) : null}
      {isSplit ? (
        <>
          <div className="flex flex-col items-center justify-center px-7 py-14">{content}</div>
          <aside className="flex flex-col justify-center border-t border-border/55 bg-ink-100/28 p-5 text-left lg:border-l lg:border-t-0">
            {aside}
          </aside>
        </>
      ) : content}
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
