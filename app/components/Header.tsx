"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/operations", label: "Operations" },
  { href: "/advisory", label: "Advisory" },
  { href: "/compliance", label: "Compliance" },
  { href: "/contact", label: "Contact" },
];

type Theme = "light" | "dark";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

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

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}${!isHome ? " on-light" : ""}`}
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

        <nav className="nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "active" : ""}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-utility">
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
        </div>
      </div>
    </header>
  );
}
