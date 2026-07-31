import { EmptyStateGlyph } from "./EmptyStateGlyph";

export interface LoadingStateProps {
  /** Localized wait label. Callers pass their own so this stays i18n-agnostic. */
  message?: string;
  /**
   * `compact` suits a bounded region inside an existing card or table; `default`
   * is for a whole page or list area.
   */
  size?: "compact" | "default";
  className?: string;
}

/**
 * The single in-flight state for list, table, and page regions.
 *
 * The label is what makes the glyph legible: a lone animated mark on an empty
 * page reads as a broken image rather than as work in progress. It stays
 * optional only so a caller with its own adjacent heading can suppress it.
 *
 * Deliberately says nothing about the data: while a request is open the result
 * count is unknown, so this must never borrow an empty state's copy. It also is
 * not the button spinner, which belongs to a pressed control rather than to a
 * whole region.
 */
export function LoadingState({ message, size = "default", className = "" }: LoadingStateProps) {
  const isCompact = size === "compact";

  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${isCompact ? "py-8" : "py-14"} ${className}`.trim()}
      role="status"
      aria-live="polite"
    >
      {/* Bare glyph, matching EmptyState: the two states swap in the same slot as
          a request resolves, so a tile on one and not the other would jump. */}
      <span className="flex items-center justify-center text-primary-300">
        <EmptyStateGlyph name="fetching" size={isCompact ? 56 : 68} loading />
      </span>
      {message ? <p className="mt-3 text-xs-plus font-medium text-txt-1">{message}</p> : null}
    </div>
  );
}
