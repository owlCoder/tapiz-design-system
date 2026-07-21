import { useLayoutEffect, useState } from "react";

export interface MenuPosition {
  top?: number;
  bottom?: number;
  left: number;
  width: number;
  maxHeight?: number;
}

export function useMenuPosition(
  open: boolean,
  btnRef: React.RefObject<HTMLElement | null>,
  itemCount: number,
): MenuPosition | null {
  const [pos, setPos] = useState<MenuPosition | null>(null);

  useLayoutEffect(() => {
    if (!open || !btnRef.current) return;

    const updatePosition = () => {
      const buttonElement = btnRef.current;
      if (!buttonElement) return;
      const rect = buttonElement.getBoundingClientRect();
      const viewportPadding = 8;
      const menuOffset = 8;
      const menuW = Math.min(272, window.innerWidth - viewportPadding * 2);
      const left = Math.max(
        viewportPadding,
        Math.min(rect.right - menuW, window.innerWidth - menuW - viewportPadding),
      );
      const estimatedMenuHeight = Math.min(320, itemCount * 52 + 16);
      const spaceAbove = Math.max(0, rect.top - viewportPadding - menuOffset);
      const spaceBelow = Math.max(0, window.innerHeight - rect.bottom - viewportPadding - menuOffset);
      const preferBelow = spaceBelow >= estimatedMenuHeight || spaceBelow >= spaceAbove;

      if (preferBelow) {
        setPos({
          top: Math.min(rect.bottom + menuOffset, window.innerHeight - viewportPadding),
          left,
          width: menuW,
          maxHeight: Math.max(120, spaceBelow),
        });
        return;
      }

      setPos({
        bottom: Math.max(window.innerHeight - rect.top + menuOffset, viewportPadding),
        left,
        width: menuW,
        maxHeight: Math.max(120, spaceAbove),
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    document.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      document.removeEventListener("scroll", updatePosition, true);
    };
  }, [itemCount, open, btnRef]);

  return pos;
}
