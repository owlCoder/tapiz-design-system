import type { ReactNode } from "react";

interface DataTableMobileCardProps<T> {
  data: T[];
  isLoading: boolean;
  loadingRows: number;
  emptyState: ReactNode | undefined;
  rowKey: (row: T) => string;
  mobileCard: (row: T) => ReactNode;
}

export function DataTableMobileCard<T>({
  data,
  isLoading,
  loadingRows,
  emptyState,
  rowKey,
  mobileCard,
}: DataTableMobileCardProps<T>) {
  return (
    <div className="md:hidden">
      {isLoading
        ? Array.from({ length: loadingRows }).map((_, i) => (
            <div key={i} className="h-16 animate-pulse bg-ink-300" />
          ))
        : data.length === 0
          ? emptyState
          : data.map((row) => (
              <div key={rowKey(row)}>{mobileCard(row)}</div>
            ))}
    </div>
  );
}
