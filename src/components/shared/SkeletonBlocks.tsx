import { Skeleton } from "./Skeleton";

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`card ${className}`.trim()}>
      <Skeleton className="mb-3 h-4 w-2/5" />
      <Skeleton className="mb-2 h-3 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  );
}

export function SkeletonKpiCard({ delay = 0 }: { delay?: number }) {
  return (
    <div
      className="card animate-pulse"
      style={{
        animationDelay: `${delay}ms`,
        minHeight: 142,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 18px",
        borderLeft: "3px solid var(--color-border-hi)",
      }}
    >
      <Skeleton className="mb-1 h-2 w-24" />
      <Skeleton className="h-8 w-16" />
      <Skeleton className="mt-1 h-2 w-20" />
    </div>
  );
}

export function SkeletonBanner() {
  return (
    <div
      className="animate-pulse overflow-hidden p-5"
      style={{
        background: "var(--color-ink-300)",
        border: "1px solid var(--color-border)",
        borderTop: "2px solid var(--color-border-hi)",
      }}
    >
      <Skeleton className="mb-2 h-3 w-24" />
      <Skeleton className="mb-3 h-6 w-48" />
      <div className="flex gap-4">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
}

function SkeletonTableRow({ cols = 4 }: { cols?: number }) {
  const widths = ["w-24", "w-40", "w-32", "w-20", "w-16"];
  return (
    <tr className="border-b border-border">
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} className="px-4 py-3">
          <Skeleton className={`h-4 ${widths[i % widths.length]}`} />
        </td>
      ))}
    </tr>
  );
}

export function SkeletonTable({ rows = 6, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div className="card overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-ink-300">
              {Array.from({ length: cols }).map((_, i) => (
                <th key={i} className="px-4 py-3">
                  <Skeleton className="h-3 w-16" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, i) => (
              <SkeletonTableRow key={i} cols={cols} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function SkeletonPageHeader() {
  return (
    <div className="flex animate-pulse items-center justify-between">
      <div>
        <Skeleton className="mb-2 h-7 w-40" />
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="h-9 w-32" />
    </div>
  );
}
