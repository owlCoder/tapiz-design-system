import { memo, type ReactNode } from "react";
import type { Column, ColumnAlign } from "./types";

const ALIGN_CLASS: Record<ColumnAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

interface DataTableRowProps<T> {
  row: T;
  columns: Column<T>[];
  onRowClick?: (row: T) => void;
  rowActions?: (row: T) => ReactNode;
}

function DataTableRowInner<T>({ row, columns, onRowClick, rowActions }: DataTableRowProps<T>) {
  const clickable = Boolean(onRowClick);
  return (
    <tr
      onClick={clickable ? () => onRowClick?.(row) : undefined}
      className={`border-b border-border transition-colors hover:bg-ink-300/30 ${
        clickable ? "cursor-pointer" : ""
      }`}
    >
      {columns.map((column) => (
        <td
          key={column.id}
          className={`px-3 py-2 text-xs text-txt-3 ${ALIGN_CLASS[column.align ?? "left"]} ${
            column.className ?? ""
          }`}
        >
          {column.cell(row)}
        </td>
      ))}
      {rowActions !== undefined && (
        <td className="px-3 py-2 text-right">{rowActions(row)}</td>
      )}
    </tr>
  );
}

/**
 * Memoized row. Re-renders only when its `row`, `columns`, or `onRowClick`
 * reference changes — keeping large lists cheap to re-render.
 *
 * `memo` strips generics, so we re-assert the generic signature on the export.
 */
export const DataTableRow = memo(DataTableRowInner) as typeof DataTableRowInner;
