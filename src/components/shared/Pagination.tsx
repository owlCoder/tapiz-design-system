import { ChevronLeft, ChevronRight } from "../icons/index";

export interface PaginationLabels {
  showing?: (args: { from: number; to: number; total: number }) => string;
  page?: (args: { page: number; totalPages: number }) => string;
  prev?: string;
  next?: string;
  prevTitle?: string;
  nextTitle?: string;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  totalItems?: number;
  pageSize?: number;
  labels?: PaginationLabels;
}

function getPageNumbers(page: number, totalPages: number): (number | "…")[] {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
  const pages: (number | "…")[] = [1];
  if (page > 3) pages.push("…");
  for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i += 1) pages.push(i);
  if (page < totalPages - 2) pages.push("…");
  pages.push(totalPages);
  return pages;
}

const defaultLabels: Required<PaginationLabels> = {
  showing: ({ from, to, total }) => `Showing ${from}-${to} of ${total}`,
  page: ({ page, totalPages }) => `Page ${page} of ${totalPages}`,
  prev: "Prev",
  next: "Next",
  prevTitle: "Previous page",
  nextTitle: "Next page",
};

export function Pagination({ page, totalPages, onChange, totalItems, pageSize, labels }: PaginationProps) {
  if (totalPages <= 1) return null;

  const copy = { ...defaultLabels, ...labels };
  const pageNumbers = getPageNumbers(page, totalPages);
  const from = pageSize ? (page - 1) * pageSize + 1 : null;
  const to = pageSize && totalItems ? Math.min(page * pageSize, totalItems) : null;

  return (
    <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-3 sm:flex-row">
      {totalItems != null && from != null && to != null ? (
        <span className="order-2 text-[12px] text-txt-4 sm:order-1">
          {copy.showing({ from, to, total: totalItems })}
        </span>
      ) : (
        <span className="order-2 text-[12px] text-txt-4 sm:order-1">
          {copy.page({ page, totalPages })}
        </span>
      )}

      <div className="order-1 flex items-center gap-1 sm:order-2">
        <button
          type="button"
          onClick={() => onChange(Math.max(1, page - 1))}
          disabled={page === 1}
          title={copy.prevTitle}
          className="flex items-center gap-1 rounded-sm border border-border px-2.5 py-1.5 text-[12px] font-medium text-txt-3 transition-colors hover:border-border-hi hover:text-txt-1 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={12} />
          <span className="hidden sm:inline">{copy.prev}</span>
        </button>

        <div className="flex items-center gap-1">
          {pageNumbers.map((entry, index) =>
            entry === "…" ? (
              <span key={`ellipsis-${index}`} className="w-7 text-center text-[12px] text-txt-4">
                …
              </span>
            ) : (
              <button
                key={entry}
                type="button"
                onClick={() => onChange(entry)}
                className={`h-7 w-7 rounded-sm border text-[12px] font-medium transition-colors ${
                  page === entry
                    ? "border-primary-300 bg-primary-300/10 text-primary-300"
                    : "border-border text-txt-3 hover:border-border-hi hover:text-txt-1"
                }`}
              >
                {entry}
              </button>
            ),
          )}
        </div>

        <button
          type="button"
          onClick={() => onChange(Math.min(totalPages, page + 1))}
          disabled={page >= totalPages}
          title={copy.nextTitle}
          className="flex items-center gap-1 rounded-sm border border-border px-2.5 py-1.5 text-[12px] font-medium text-txt-3 transition-colors hover:border-border-hi hover:text-txt-1 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <span className="hidden sm:inline">{copy.next}</span>
          <ChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}
