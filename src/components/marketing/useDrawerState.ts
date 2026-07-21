import { useEffect, useState } from "react";

export interface UseDrawerStateResult {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  renderDrawer: boolean;
  shown: boolean;
}

const TRANSITION_MS = 260;

export function useDrawerState(): UseDrawerStateResult {
  const [open, setOpen] = useState(false);
  const [renderDrawer, setRenderDrawer] = useState(false);
  const [shown, setShown] = useState(false);

  if (open && !renderDrawer) setRenderDrawer(true);
  if (!open && shown) setShown(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    document.body.classList.add("tapiz-landing-navbar-open");
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("tapiz-landing-navbar-open");
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
      return () => cancelAnimationFrame(raf);
    }
    const timer = window.setTimeout(() => setRenderDrawer(false), TRANSITION_MS);
    return () => window.clearTimeout(timer);
  }, [open]);

  return { open, setOpen, renderDrawer, shown };
}
