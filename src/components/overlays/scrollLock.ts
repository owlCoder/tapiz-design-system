import { syncScrollGutter } from "../../scrollGutter";

let lockCount = 0;
let originalHtmlOverflow = "";
let originalBodyOverflow = "";
let originalBodyPaddingRight = "";

const SCROLLBAR_VAR = "--tapiz-scrollbar-comp";

export function acquireBodyScrollLock() {
  if (lockCount === 0) {
    // Force a synchronous re-check before measuring: the gutter toggle in
    // scrollGutter.ts runs off an async ResizeObserver, which could otherwise
    // still read "auto" here on a page that has real overflow but hasn't
    // been observed yet, causing a mid-lock layout jump.
    syncScrollGutter();
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    originalHtmlOverflow = document.documentElement.style.overflow;
    originalBodyOverflow = document.body.style.overflow;
    originalBodyPaddingRight = document.body.style.paddingRight;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    // With `scrollbar-gutter: stable` (set in theme.css) the gutter stays
    // reserved while overflow is hidden, so padding compensation would itself
    // cause a horizontal jump — skip it.
    const gutterStable = window
      .getComputedStyle(document.documentElement)
      .scrollbarGutter?.includes("stable");
    if (!gutterStable && scrollbarWidth > 0) {
      const currentPadding = Number.parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
      document.body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
      document.documentElement.style.setProperty(SCROLLBAR_VAR, "0px");
    } else {
      // With a stable gutter, Chromium insets fixed elements by the reserved gutter,
      // so `right: 0` overlays stop short of the real viewport edge. Expose the gutter
      // width so overlays (SidePanel etc.) can extend past it.
      document.documentElement.style.setProperty(SCROLLBAR_VAR, `${scrollbarWidth}px`);
    }
  }

  lockCount += 1;

  return () => {
    lockCount = Math.max(0, lockCount - 1);

    if (lockCount === 0) {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.paddingRight = originalBodyPaddingRight;
      document.documentElement.style.removeProperty(SCROLLBAR_VAR);
      originalHtmlOverflow = "";
      originalBodyOverflow = "";
      originalBodyPaddingRight = "";
    }
  };
}
