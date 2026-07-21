import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Menu, Moon, Sun, X } from "../icons/index";
import type { BaseProps } from "../../types";
import { useDrawerState } from "./useDrawerState";

export interface LandingNavbarItem {
  href: string;
  icon?: ReactNode;
  label: string;
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

  const drawerLabel = mobileDialogLabel ?? menuLabel;
  const resolvedCloseMenuLabel = closeMenuLabel ?? menuLabel;
  const resolvedMobileNavLabel = mobileNavLabel ?? ariaNavLabel;
  const themeLabel = theme === "dark" ? themeLabels.light : themeLabels.dark;

  return (
    <>
      <header className={["tapiz-landing-navbar", className].filter(Boolean).join(" ")}>
        <div className={["tapiz-landing-navbar__container", containerClassName].filter(Boolean).join(" ")}>
          <div className="tapiz-landing-navbar__brand">{brand}</div>

          <nav className="tapiz-landing-navbar__links" aria-label={ariaNavLabel}>
            {items.map((item) => (
              <a key={item.href} href={item.href} className="tapiz-landing-navbar__link">
                {item.icon ? <span aria-hidden="true" className="tapiz-landing-navbar__link-icon">{item.icon}</span> : null}
                <span>{item.label}</span>
              </a>
            ))}
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
                  {items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="tapiz-landing-navbar__drawer-link"
                      onClick={() => setOpen(false)}
                    >
                      {item.icon ? <span aria-hidden="true" className="tapiz-landing-navbar__link-icon">{item.icon}</span> : null}
                      <span>{item.label}</span>
                    </a>
                  ))}
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
