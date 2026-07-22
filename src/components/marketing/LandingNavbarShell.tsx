import { type ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, Moon, Sun, X } from "../icons/index";
import type { BaseProps } from "../../types";
import { useDrawerState } from "./useDrawerState";

export interface LandingNavbarItem {
  href: string;
  icon?: ReactNode;
  label: string;
  /**
   * Optional dropdown/mega-menu panel for this item. When present, the desktop
   * link renders as a disclosure trigger (button + chevron) instead of a plain
   * anchor; `render` receives the panel's DOM id (for `aria-controls`/the panel's
   * own `id`) and whether it is currently open. On mobile the item instead
   * renders as an inline expandable disclosure (grid-rows height animation)
   * inside the drawer, showing `dropdownMobile` (or `dropdown` if that's not set).
   */
  dropdown?: (panelId: string, isOpen: boolean) => ReactNode;
  dropdownMobile?: ReactNode;
}

export interface LandingNavbarThemeLabels {
  dark: string;
  light: string;
}

export interface LandingNavbarShellProps extends BaseProps {
  ariaNavLabel: string;
  brand: ReactNode;
  closeMenuLabel?: string;
  desktopActions?: ReactNode;
  desktopLanguageSwitcher?: ReactNode;
  items: LandingNavbarItem[];
  menuLabel: string;
  mobileActions?: ReactNode;
  mobileDialogLabel?: string;
  mobileLanguageSwitcher?: ReactNode;
  mobileNavLabel?: string;
  onThemeToggle: () => void;
  theme: string;
  themeLabels: LandingNavbarThemeLabels;
  containerClassName?: string;
}

export function LandingNavbarShell({
  ariaNavLabel,
  brand,
  className = "",
  closeMenuLabel,
  containerClassName = "",
  desktopActions,
  desktopLanguageSwitcher,
  items,
  menuLabel,
  mobileActions,
  mobileDialogLabel,
  mobileNavLabel,
  onThemeToggle,
  theme,
  themeLabels,
}: LandingNavbarShellProps) {
  const { open, setOpen, renderDrawer, shown } = useDrawerState();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Record<string, boolean>>({});
  const navRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const drawerLabel = mobileDialogLabel ?? menuLabel;
  const resolvedCloseMenuLabel = closeMenuLabel ?? menuLabel;
  const resolvedMobileNavLabel = mobileNavLabel ?? ariaNavLabel;
  const themeLabel = theme === "dark" ? themeLabels.light : themeLabels.dark;

  // The trigger button and its panel are separate DOM elements with a real
  // gap between them; each has its own mouseleave handler. Closing
  // immediately on the button's mouseleave used to unmount the panel
  // (isOpen && ...) before the pointer could ever reach it in transit,
  // so the panel's own mouseenter never got a chance to re-open it. A short
  // delay (cancelled by either element's mouseenter) gives the pointer time
  // to land on whichever element is next, without leaving the dropdown open
  // indefinitely after a genuine leave.
  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };
  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!activeDropdown) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (navRef.current?.contains(event.target as Node)) return;
      setActiveDropdown(null);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDropdown]);

  return (
    <>
      <header className={["tapiz-landing-navbar", className].filter(Boolean).join(" ")}>
        <div className={["tapiz-landing-navbar__container", containerClassName].filter(Boolean).join(" ")}>
          <div className="tapiz-landing-navbar__brand">{brand}</div>

          <nav ref={navRef} className="tapiz-landing-navbar__links" aria-label={ariaNavLabel}>
            {items.map((item) => {
              if (!item.dropdown) {
                return (
                  <a key={item.href} href={item.href} className="tapiz-landing-navbar__link">
                    {item.icon ? <span aria-hidden="true" className="tapiz-landing-navbar__link-icon">{item.icon}</span> : null}
                    <span>{item.label}</span>
                  </a>
                );
              }

              const panelId = `${item.href.replace(/[^a-zA-Z0-9_-]/g, "")}-dropdown`;
              const isOpen = activeDropdown === item.href;
              return (
                <div key={item.href} className="tapiz-landing-navbar__dropdown">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setActiveDropdown((current) => (current === item.href ? null : item.href))}
                    onMouseEnter={() => {
                      cancelClose();
                      setActiveDropdown(item.href);
                    }}
                    onMouseLeave={scheduleClose}
                    className={`tapiz-landing-navbar__link tapiz-landing-navbar__link--trigger${isOpen ? " is-open" : ""}`}
                  >
                    {item.icon ? <span aria-hidden="true" className="tapiz-landing-navbar__link-icon">{item.icon}</span> : null}
                    <span>{item.label}</span>
                    <ChevronDown size={14} aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                      {item.dropdown(panelId, isOpen)}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="tapiz-landing-navbar__actions">
            {desktopLanguageSwitcher ? (
              <div className="tapiz-landing-navbar__language tapiz-landing-navbar__language--desktop">{desktopLanguageSwitcher}</div>
            ) : null}

            <button
              type="button"
              className={`tapiz-landing-navbar__theme is-${theme}`}
              aria-label={themeLabel}
              onClick={onThemeToggle}
            >
              <span className="tapiz-landing-navbar__theme-track" aria-hidden="true">
                <span className="tapiz-landing-navbar__theme-thumb">
                  <Sun size={13} className="tapiz-landing-navbar__theme-sun" />
                  <Moon size={13} className="tapiz-landing-navbar__theme-moon" />
                </span>
              </span>
            </button>

            {desktopActions ? <div className="tapiz-landing-navbar__desktop-actions">{desktopActions}</div> : null}

            <button
              type="button"
              className="tapiz-landing-navbar__menu"
              aria-label={menuLabel}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {renderDrawer && typeof document !== "undefined"
        ? createPortal(
            <>
              <button
                type="button"
                className="tapiz-landing-navbar__scrim"
                data-state={shown ? "open" : "closed"}
                aria-label={resolvedCloseMenuLabel}
                onClick={() => setOpen(false)}
                style={{ backdropFilter: "none", WebkitBackdropFilter: "none" }}
              />

              <div
                className="tapiz-landing-navbar__drawer"
                data-state={shown ? "open" : "closed"}
                role="dialog"
                aria-modal="true"
                aria-label={drawerLabel}
                style={{ backdropFilter: "none", WebkitBackdropFilter: "none" }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={resolvedCloseMenuLabel}
                  className="tapiz-landing-navbar__drawer-close"
                >
                  <X size={18} />
                </button>

                <nav className="tapiz-landing-navbar__drawer-nav" aria-label={resolvedMobileNavLabel}>
                  {items.map((item) => {
                    if (!item.dropdown) {
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className="tapiz-landing-navbar__drawer-link"
                          onClick={() => setOpen(false)}
                        >
                          {item.icon ? <span aria-hidden="true" className="tapiz-landing-navbar__link-icon">{item.icon}</span> : null}
                          <span>{item.label}</span>
                        </a>
                      );
                    }

                    const mobileOpen = openMobileDropdowns[item.href] ?? false;
                    return (
                      <div key={item.href} className="tapiz-landing-navbar__drawer-group">
                        <button
                          type="button"
                          aria-expanded={mobileOpen}
                          onClick={() => setOpenMobileDropdowns((current) => ({ ...current, [item.href]: !mobileOpen }))}
                          className={`tapiz-landing-navbar__drawer-link tapiz-landing-navbar__drawer-link--trigger${mobileOpen ? " is-open" : ""}`}
                        >
                          {item.icon ? <span aria-hidden="true" className="tapiz-landing-navbar__link-icon">{item.icon}</span> : null}
                          <span>{item.label}</span>
                          <ChevronDown size={14} aria-hidden="true" />
                        </button>
                        <div className={`tapiz-landing-navbar__drawer-collapse${mobileOpen ? " is-open" : ""}`}>
                          <div className="tapiz-landing-navbar__drawer-collapse-inner">
                            {item.dropdownMobile ?? item.dropdown("", mobileOpen)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </nav>

                {mobileActions ? <div className="tapiz-landing-navbar__drawer-actions">{mobileActions}</div> : null}
              </div>
            </>,
            document.body,
          )
        : null}
    </>
  );
}
