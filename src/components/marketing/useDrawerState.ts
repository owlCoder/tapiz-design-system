import { useEffect, useState } from "react";

export interface UseDrawerStateResult {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  renderDrawer: boolean;
}

export function useDrawerState(): UseDrawerStateResult {
  const [open, setOpen] = useState(false);
  const [renderDrawer, setRenderDrawer] = useState(false);

  useEffect(() => {
    if (open) {
      setRenderDrawer(true);
      document.body.style.overflow = "hidden";
      document.body.classList.add("tapiz-landing-navbar-open");
      return () => {
        document.body.style.overflow = "";
        document.body.classList.remove("tapiz-landing-navbar-open");
      };
    }

    const timeoutId = window.setTimeout(() => {
      setRenderDrawer(false);
      document.body.style.overflow = "";
      document.body.classList.remove("tapiz-landing-navbar-open");
    }, 220);

    return () => window.clearTimeout(timeoutId);
  }, [open]);

  return { open, setOpen, renderDrawer };
}
