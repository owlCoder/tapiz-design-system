import { useMemo, useState } from "react";
import type { Column, ServerSort, SortState } from "./types";

function compareValues(
  a: ReturnType<NonNullable<Column<unknown>["sortAccessor"]>>,
  b: ReturnType<NonNullable<Column<unknown>["sortAccessor"]>>,
): number {
  if (a == null && b == null) return 0;
  if (a == null) return -1;
  if (b == null) return 1;
  if (a instanceof Date && b instanceof Date) return a.getTime() - b.getTime();
  if (typeof a === "number" && typeof b === "number") return a - b;
  if (typeof a === "boolean" && typeof b === "boolean") return Number(a) - Number(b);
  return String(a).localeCompare(String(b));
}

export interface UseSortedDataResult<T> {
  sortedData: T[];
  sort: SortState | null;
  toggleSort: (columnId: string) => void;
}

export function useSortedData<T>(
  data: T[],
  columns: Column<T>[],
  serverSort: ServerSort | undefined,
): UseSortedDataResult<T> {
  const [sort, setSort] = useState<SortState | null>(null);

  const sortedData = useMemo(() => {
    if (serverSort) return data;
    if (!sort) return data;
    const column = columns.find((c) => c.id === sort.columnId);
    if (!column?.sortAccessor) return data;
    const accessor = column.sortAccessor;
    const factor = sort.direction === "asc" ? 1 : -1;
    return [...data].sort((a, b) => compareValues(accessor(a), accessor(b)) * factor);
  }, [data, columns, sort, serverSort]);

  const toggleSort = (columnId: string) => {
    if (serverSort) {
      serverSort.onSort(columnId);
      return;
    }
    setSort((prev) => {
      if (prev?.columnId !== columnId) return { columnId, direction: "asc" };
      return { columnId, direction: prev.direction === "asc" ? "desc" : "asc" };
    });
  };

  return { sortedData, sort, toggleSort };
}
