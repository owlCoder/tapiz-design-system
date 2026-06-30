let lockCount = 0;
let originalHtmlOverflow = "";
let originalBodyOverflow = "";
let originalBodyPaddingRight = "";

const SCROLLBAR_VAR = "--tapiz-scrollbar-comp";

export function acquireBodyScrollLock() {
  if (lockCount === 0) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    originalHtmlOverflow = document.documentElement.style.overflow;
    originalBodyOverflow = document.body.style.overflow;
    originalBodyPaddingRight = document.body.style.paddingRight;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      const currentPadding = Number.parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
      document.body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
      // Expose the compensation width as a CSS variable so fixed/absolute elements
      // (e.g. desktop sidebar) can shift by the same amount without a layout jump.
      document.documentElement.style.setProperty(SCROLLBAR_VAR, `${scrollbarWidth}px`);
    } else {
      document.documentElement.style.setProperty(SCROLLBAR_VAR, "0px");
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
