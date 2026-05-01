"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "../../i18n/navigation";
import { routing } from "../../i18n/routing";

const NAV_KEYS = [
  "home",
  "about",
  "operations",
  "advisory",
  "compliance",
  "contact",
] as const;

const PATHS: Record<(typeof NAV_KEYS)[number], string> = {
  home: "/",
  about: "/about",
  operations: "/operations",
  advisory: "/advisory",
  compliance: "/compliance",
  contact: "/contact",
};

type Theme = "light" | "dark";

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname(); // strips the /[locale] prefix
  const t = useTranslations("nav");
  const tLang = useTranslations("languageSwitcher");
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("excom-theme");
      if (saved === "dark" || saved === "light") setTheme(saved);
    } catch {
      // ignore localStorage failures (private mode, etc.)
    }
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("excom-theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // close mobile menu on route change
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleNav = () => setNavOpen((o) => !o);

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}${!isHome ? " on-light" : ""}${navOpen ? " nav-open" : ""}`}
    >
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="ExCom — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-logo brand-logo-light"
            src="/assets/excom-logo-color.png"
            alt="ExCom"
            width={160}
            height={40}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-logo brand-logo-dark"
            src="/assets/excom-logo-white.png"
            alt=""
            aria-hidden="true"
            width={160}
            height={40}
          />
          <span className="meta">SOURCE TO SETTLEMENT</span>
        </Link>

        <nav
          id="primary-nav"
          className={`nav${navOpen ? " open" : ""}`}
          aria-label="Primary"
        >
          {NAV_KEYS.map((key) => {
            const href = PATHS[key];
            const active =
              href === "/" ? pathname === "/" : pathname?.startsWith(href);
            return (
              <Link
                key={key}
                href={href}
                className={active ? "active" : ""}
                aria-current={active ? "page" : undefined}
                onClick={() => setNavOpen(false)}
              >
                {t(key)}
              </Link>
            );
          })}
        </nav>

        <div className="header-utility">
          <div
            className="lang-switch"
            role="group"
            aria-label={tLang("label")}
          >
            {routing.locales.map((loc) => (
              <Link
                key={loc}
                href={pathname}
                locale={loc}
                className={`lang-link${loc === locale ? " active" : ""}`}
                aria-current={loc === locale ? "true" : undefined}
              >
                {tLang(loc)}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="nav-toggle"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
            aria-controls="primary-nav"
            onClick={toggleNav}
          >
            {navOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
