import { ReactNode, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "../icons/index";
import { acquireBodyScrollLock } from "./scrollLock";

export interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  /** Optional sticky footer area (e.g. submit/cancel buttons). */
  footer?: ReactNode;
  children: ReactNode;
  width?: "md" | "lg" | "xl";
  /** Side the panel slides in from. Defaults to "right". */
  side?: "left" | "right";
  closeLabel?: string;
  /** Hide the header's X button — set false when the footer already has its own cancel/close action. Defaults to true. */
  showCloseButton?: boolean;
}

// Max width in rem per size. Applied via inline style (not a Tailwind class) so the
// panel is not full-width even when the consuming app does not scan this dist with
// Tailwind's `@source` — the responsive `sm:max-w-*` utilities would otherwise be
// purged and the panel would span the whole viewport.
const widthRem: Record<NonNullable<SidePanelProps["width"]>, number> = {
  md: 28,
  lg: 42,
  xl: 48,
};

const MOBILE_QUERY = "(max-width: 639px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

// Single source of truth for enter/exit timing. The slide transition and the
// unmount timer share this duration so open and close feel identical and the
// panel never unmounts before the exit transition finishes.
const TRANSITION_MS = 240;
const TRANSITION_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Right-side slide-in panel for create/edit forms — the panel counterpart to BaseModal.
 * Enter/exit use CSS transitions (translate + opacity): deterministic, no keyframe replay
 * flash; the panel unmounts after the exit transition. On mobile it goes full-width and
 * locks body scroll. Decoupled from app i18n — pass `closeLabel` for the close button.
 */
export function SidePanel({
  isOpen,
  onClose,
  title,
  subtitle,
  icon,
  footer,
  children,
  width = "md",
  side = "right",
  closeLabel = "Close panel",
  showCloseButton = true,
}: SidePanelProps) {
  const titleId = useId();
  const [mounted, setMounted] = useState(isOpen);
  const [shown, setShown] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches,
  );
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches,
  );
  // Sync during render (React pattern, avoids setState-in-effect).
  if (isOpen && !mounted) setMounted(true);
  if (!isOpen && shown) setShown(false);

  useEffect(() => {
    if (isOpen) {
      // Double rAF: first paint must render the hidden state before transitioning.
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
      return () => cancelAnimationFrame(raf);
    }
    const timer = setTimeout(() => setMounted(false), TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const mobileMq = window.matchMedia(MOBILE_QUERY);
    const motionMq = window.matchMedia(REDUCED_MOTION_QUERY);
    const sync = () => {
      setIsMobile(mobileMq.matches);
      setReduceMotion(motionMq.matches);
    };
    sync();
    mobileMq.addEventListener("change", sync);
    motionMq.addEventListener("change", sync);
    return () => {
      mobileMq.removeEventListener("change", sync);
      motionMq.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const releaseBodyScrollLock = acquireBodyScrollLock();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      releaseBodyScrollLock();
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  // Transform/transition applied inline (not Tailwind) so the GPU-composited slide works
  // in any consumer regardless of its Tailwind `@source` scan; reduced-motion disables it.
  const hiddenOffset = side === "right" ? "100%" : "-100%";
  const panelStyle: React.CSSProperties = {
    maxWidth: isMobile ? "100%" : `${widthRem[width]}rem`,
    transform: shown ? "translateX(0)" : `translateX(${hiddenOffset})`,
    transition: reduceMotion ? "none" : `transform ${TRANSITION_MS}ms ${TRANSITION_EASE}`,
    willChange: "transform",
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={`fixed inset-0 z-50 flex backdrop-blur-xs ${
        side === "right" ? "justify-end" : "justify-start"
      } ${shown ? "opacity-100" : "opacity-0"}`}
      style={{
        background: "color-mix(in srgb, var(--color-ink-000) 45%, transparent)",
        transition: reduceMotion ? "none" : `opacity ${TRANSITION_MS}ms ${TRANSITION_EASE}`,
        // Chromium insets fixed elements by the root's reserved scrollbar gutter
        // (scrollbar-gutter: stable in theme.css) — extend past it so the panel
        // hugs the true viewport edge. Var is set by the body scroll lock.
        right: "calc(-1 * var(--tapiz-scrollbar-comp, 0px))",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onWheel={(e) => e.preventDefault()}
      onTouchMove={(e) => e.preventDefault()}
    >
      <div
        className={`relative isolate flex h-full max-sm:h-dvh w-full flex-col overflow-hidden bg-ink-200 ${
          side === "right"
            ? "rounded-l-2xl border-l border-border-hi max-sm:rounded-none max-sm:border-l-0"
            : "rounded-r-2xl border-r border-border-hi max-sm:rounded-none max-sm:border-r-0"
        }`}
        style={panelStyle}
      >
        {icon ? (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-primary-300">
            <span className="absolute -right-8 top-28 h-28 w-28 rotate-12 opacity-[0.065] [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-[0.8]">{icon}</span>
            <span className="absolute -bottom-9 -left-8 h-24 w-24 -rotate-12 opacity-[0.045] [&_svg]:h-full [&_svg]:w-full [&_svg]:stroke-[0.8]">{icon}</span>
          </div>
        ) : (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-primary-300">
            <span className="absolute -right-8 top-28 h-24 w-24 rotate-12 rounded-3xl border-2 border-current opacity-[0.055]" />
            <span className="absolute -bottom-9 -left-8 h-24 w-24 rounded-full border-2 border-current opacity-[0.04]" />
          </div>
        )}
        <div className="relative z-10 flex shrink-0 items-center justify-between gap-3 border-b border-border/60 px-4 py-3.5 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            {icon && (
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary-300/20 bg-primary-300/8 text-primary-300">
                {icon}
              </div>
            )}
            <div className="min-w-0">
              <h3 id={titleId} className="truncate font-display text-base font-semibold text-txt-1">{title}</h3>
              {subtitle && (
                <p className="mt-0.5 truncate text-[13px] text-txt-3">{subtitle}</p>
              )}
            </div>
          </div>
          {showCloseButton && (
            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              title={closeLabel}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-transparent text-txt-3 transition-colors hover:border-border-hi hover:bg-ink-300 hover:text-txt-1"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <div
          className="relative z-10 min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {children}
        </div>
        {footer && <div className="relative z-10 shrink-0 border-t border-border/60 bg-ink-200/92 px-4 py-3 sm:px-5">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}
