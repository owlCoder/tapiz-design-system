// Auto side-effect: keeps `scrollbar-gutter: stable` (set in theme.css) from
// reserving a visible strip on short pages that have no real overflow. The
// CSS property itself has no "only when scrolling" mode — it always reserves
// the gutter — so the toggle has to happen in JS based on measured overflow.
//
// Imported once for its side effect from index.ts so every consumer gets this
// for free without wiring a provider (login/auth pages, marketing pages, etc.
// mount no shared app shell, so this can't live behind an opt-in component).
const STABLE = "stable";
const AUTO = "auto";

function hasVerticalOverflow(): boolean {
  const root = document.documentElement;
  return root.scrollHeight > root.clientHeight + 1;
}

/** Exported so callers that are about to measure/lock scroll (see
 * scrollLock.ts) can force a synchronous re-check instead of racing the
 * ResizeObserver's async callback. */
export function syncScrollGutter() {
  const root = document.documentElement;
  const next = hasVerticalOverflow() ? STABLE : AUTO;
  if (root.style.scrollbarGutter !== next) {
    root.style.scrollbarGutter = next;
  }
}

if (typeof window !== "undefined" && typeof ResizeObserver !== "undefined") {
  const observer = new ResizeObserver(syncScrollGutter);
  const start = () => {
    observer.observe(document.documentElement);
    observer.observe(document.body);
    syncScrollGutter();
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
}
