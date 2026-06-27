let lockCount = 0;
let originalHtmlOverflow = "";
let originalBodyOverflow = "";

export function acquireBodyScrollLock() {
  if (lockCount === 0) {
    originalHtmlOverflow = document.documentElement.style.overflow;
    originalBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  lockCount += 1;

  return () => {
    lockCount = Math.max(0, lockCount - 1);

    if (lockCount === 0) {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      originalHtmlOverflow = "";
      originalBodyOverflow = "";
    }
  };
}
