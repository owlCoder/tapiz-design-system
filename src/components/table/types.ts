import type { ReactNode } from "react";

export type ColumnAlign = "left" | "center" | "right";

export type SortDirection = "asc" | "desc";

/**
 * Declarative description of a single column for {@link DataTable}.
 *
 * `header` and any user-facing text are passed in as `ReactNode` so callers
 * own translation (i18n) — the component never hardcodes strings.
 */
export interface Column<T> {
  /** Stable identifier, also used as the React key for the header cell. */
  id: string;
  /** Header content. Pass an already-translated string/node. */
  header: ReactNode;
  /** Renders the cell body for a given row. */
  cell: (row: T) => ReactNode;
  /** Enables client-side sorting on this column. Requires `sortAccessor`. */
  sortable?: boolean;
  /** Returns the comparable value used when sorting by this column. */
  sortAccessor?: (row: T) => string | number | boolean | Date | null | undefined;
  /** Text alignment for header and cells. Defaults to "left". */
  align?: ColumnAlign;
  /** Extra classes applied to the body cell (`<td>`). */
  className?: string;
}

export interface SortState {
  columnId: string;
  direction: SortDirection;
}

/** Controls server-driven sort when passed to {@link DataTable}. */
export interface ServerSort {
  /** The currently sorted column id. */
  field: string;
  /** Current sort direction. */
  dir: SortDirection;
  /** Called with the column id when a sortable header is clicked. */
  onSort: (field: string) => void;
}
