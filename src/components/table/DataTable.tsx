import { useMemo, useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "../icons/index";
import { DataTableRow } from "./DataTableRow";
import type { Column, ColumnAlign, ServerSort, SortDirection, SortState } from "./types";

const ALIGN_CLASS: Record<ColumnAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  /** Stable unique key per row. */
  rowKey: (row: T) => string;
  isLoading?: boolean;
  /** Rendered (inside a full-width row) when there is no data. */
  emptyState?: ReactNode;
  onRowClick?: (row: T) => void;
  /** Number of skeleton rows shown while loading. Defaults to 8. */
  loadingRows?: number;
  /**
   * When provided, renders an extra right-aligned column at the end of every
   * row. The function receives the row and must return a `ReactNode` (e.g.
   * action buttons). When omitted, no extra column is added.
   */
  rowActions?: (row: T) => ReactNode;
  /**
   * When provided, disables internal client-side sort and delegates sorting to
   * the caller. Clicking a sortable column header calls `onSort(column.id)`.
   * `aria-sort` reflects `field` and `dir`.
   */
  serverSort?: ServerSort;
  /**
   * When provided, renders the node below the `<table>` inside the outer
   * border wrapper. No styling is added — callers own all padding/layout.
   */
  footer?: ReactNode;
  /**
   * When provided:
   * - The `<table>` is hidden on small screens (`hidden md:table`).
   * - A `<div className="md:hidden">` is rendered before the table, mapping
   *   each row to a card via this function (keyed by `rowKey(row)`).
   */
  mobileCard?: (row: T) => ReactNode;
}

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

function ariaSort(active: boolean, direction: SortDirection): "ascending" | "descending" | "none" {
  if (!active) return "none";
  return direction === "asc" ? "ascending" : "descending";
}

/**
 * Generic, accessible, client-sortable table.
 *
 * - Pass already-translated `ReactNode`s for headers and `emptyState`; the
 *   component never hardcodes user-facing strings (full i18n compatibility).
 * - Sorting toggles asc/desc on sortable columns and is purely client-side
 *   unless `serverSort` is provided.
 * - Rows are memoized and the sorted view is memoized via `useMemo`.
 * - Optional `rowActions`, `serverSort`, `footer`, and `mobileCard` props are
 *   all additive — existing usages continue to work with zero changes.
 */
export function DataTable<T>({
  data,
  columns,
  rowKey,
  isLoading = false,
  emptyState,
  onRowClick,
  loadingRows = 8,
  rowActions,
  serverSort,
  footer,
  mobileCard,
}: DataTableProps<T>) {
  const [sort, setSort] = useState<SortState | null>(null);

  // When serverSort is active, skip client-side sort entirely.
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

  const hasActions = rowActions !== undefined;
  const colCount = columns.length + (hasActions ? 1 : 0);
  const tableClass = mobileCard !== undefined ? "hidden md:table w-full text-sm table-collapse" : "w-full text-sm table-collapse";

  return (
    <div className="border border-border overflow-x-auto">
      {/* Mobile card slot — only present when mobileCard is provided */}
      {mobileCard !== undefined && (
        <div className="md:hidden">
          {isLoading
            ? Array.from({ length: loadingRows }).map((_, i) => (
                <div key={i} className="h-16 animate-pulse bg-ink-300" />
              ))
            : sortedData.length === 0
              ? emptyState
              : sortedData.map((row) => (
                  <div key={rowKey(row)}>{mobileCard(row)}</div>
                ))}
        </div>
      )}

      <table className={tableClass}>
        <thead>
          <tr className="border-b border-border bg-ink-300">
            {columns.map((column) => {
              const baseClass = `px-3 py-2.5 ${ALIGN_CLASS[column.align ?? "left"]} font-mono text-[11px] tracking-[.08em] text-txt-4 font-semibold whitespace-nowrap`;

              if (!column.sortable || !column.sortAccessor) {
                return (
                  <th key={column.id} scope="col" className={baseClass}>
                    {column.header}
                  </th>
                );
              }

              // aria-sort: serverSort drives the active column; fall back to local sort state.
              const active = serverSort
                ? serverSort.field === column.id
                : sort?.columnId === column.id;
              const direction = serverSort
                ? serverSort.dir
                : (sort?.direction ?? "asc");

              return (
                <th
                  key={column.id}
                  scope="col"
                  aria-sort={ariaSort(active, direction)}
                  className={baseClass}
                >
                  <button
                    type="button"
                    onClick={() => toggleSort(column.id)}
                    className={`inline-flex items-center gap-1 select-none transition-colors hover:text-txt-1 ${
                      active ? "text-txt-1" : ""
                    }`}
                  >
                    {column.header}
                    {active &&
                      (direction === "asc" ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
                  </button>
                </th>
              );
            })}
            {hasActions && (
              <th scope="col" className="px-3 py-2.5 text-right font-mono text-[11px] tracking-[.08em] text-txt-4 font-semibold whitespace-nowrap" />
            )}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            Array.from({ length: loadingRows }).map((_, rowIndex) => (
              <tr key={rowIndex} className="border-b border-border">
                {Array.from({ length: colCount }).map((__, colIndex) => (
                  <td key={colIndex} className="px-3 py-2">
                    <div className="h-4 bg-ink-300 rounded animate-pulse w-24" />
                  </td>
                ))}
              </tr>
            ))
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={colCount} className="px-4 py-10 text-center text-txt-4 text-sm font-mono">
                {emptyState}
              </td>
            </tr>
          ) : (
            sortedData.map((row) => (
              <DataTableRow
                key={rowKey(row)}
                row={row}
                columns={columns}
                onRowClick={onRowClick}
                rowActions={rowActions}
              />
            ))
          )}
        </tbody>
      </table>

      {footer !== undefined && footer}
    </div>
  );
}
