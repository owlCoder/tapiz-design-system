import { useEffect, useState, type ReactNode } from "react";
import { Menu, Moon, Sun, X } from "../icons/index";
import type { BaseProps } from "../../types";

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
  mobileLanguageSwitcher,
  mobileNavLabel,
  onThemeToggle,
  theme,
  themeLabels,
}: LandingNavbarShellProps) {
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

      {renderDrawer ? (
        <button
          type="button"
          className="tapiz-landing-navbar__scrim"
          data-state={open ? "open" : "closed"}
          aria-label={resolvedCloseMenuLabel}
          onClick={() => setOpen(false)}
        />
      ) : null}

      {renderDrawer ? (
        <div
          className="tapiz-landing-navbar__drawer"
          data-state={open ? "open" : "closed"}
          role="dialog"
          aria-modal="true"
          aria-label={drawerLabel}
        >
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

          {mobileLanguageSwitcher ? (
            <div className="tapiz-landing-navbar__language tapiz-landing-navbar__language--mobile">{mobileLanguageSwitcher}</div>
          ) : null}

          {mobileActions ? <div className="tapiz-landing-navbar__drawer-actions">{mobileActions}</div> : null}
        </div>
      ) : null}
    </>
  );
}
