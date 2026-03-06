"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import { getAlternateUrl } from "@/lib/i18n";

/* Tiny inline flag components — no external images needed */
function USFlag({ className = "h-4 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="20" height="14" rx="1" fill="#fff" />
      <rect width="20" height="1.077" fill="#B22234" />
      <rect y="2.154" width="20" height="1.077" fill="#B22234" />
      <rect y="4.308" width="20" height="1.077" fill="#B22234" />
      <rect y="6.462" width="20" height="1.077" fill="#B22234" />
      <rect y="8.615" width="20" height="1.077" fill="#B22234" />
      <rect y="10.769" width="20" height="1.077" fill="#B22234" />
      <rect y="12.923" width="20" height="1.077" fill="#B22234" />
      <rect width="8" height="7.538" fill="#3C3B6E" />
      <circle cx="1.5" cy="1" r="0.4" fill="#fff" />
      <circle cx="3" cy="1" r="0.4" fill="#fff" />
      <circle cx="4.5" cy="1" r="0.4" fill="#fff" />
      <circle cx="6" cy="1" r="0.4" fill="#fff" />
      <circle cx="2.25" cy="2" r="0.4" fill="#fff" />
      <circle cx="3.75" cy="2" r="0.4" fill="#fff" />
      <circle cx="5.25" cy="2" r="0.4" fill="#fff" />
      <circle cx="1.5" cy="3" r="0.4" fill="#fff" />
      <circle cx="3" cy="3" r="0.4" fill="#fff" />
      <circle cx="4.5" cy="3" r="0.4" fill="#fff" />
      <circle cx="6" cy="3" r="0.4" fill="#fff" />
      <circle cx="2.25" cy="4" r="0.4" fill="#fff" />
      <circle cx="3.75" cy="4" r="0.4" fill="#fff" />
      <circle cx="5.25" cy="4" r="0.4" fill="#fff" />
      <circle cx="1.5" cy="5" r="0.4" fill="#fff" />
      <circle cx="3" cy="5" r="0.4" fill="#fff" />
      <circle cx="4.5" cy="5" r="0.4" fill="#fff" />
      <circle cx="6" cy="5" r="0.4" fill="#fff" />
      <circle cx="2.25" cy="6" r="0.4" fill="#fff" />
      <circle cx="3.75" cy="6" r="0.4" fill="#fff" />
      <circle cx="5.25" cy="6" r="0.4" fill="#fff" />
      <circle cx="6.75" cy="1" r="0.4" fill="#fff" />
      <circle cx="6.75" cy="3" r="0.4" fill="#fff" />
      <circle cx="6.75" cy="5" r="0.4" fill="#fff" />
    </svg>
  );
}

function MXFlag({ className = "h-4 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="20" height="14" rx="1" fill="#fff" />
      <rect width="6.667" height="14" fill="#006847" />
      <rect x="13.333" width="6.667" height="14" fill="#CE1126" />
      <circle cx="10" cy="7" r="1.8" fill="#6D3A1F" />
      <circle cx="10" cy="7" r="1.2" fill="#A8D48A" />
    </svg>
  );
}

export default function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const routes = ROUTES[locale];
  const altLocale: Locale = locale === "en" ? "es" : "en";
  const altPath = getAlternateUrl(pathname, altLocale);

  const links = [
    { href: routes.home, label: dict.nav.home, short: dict.nav.homeShort },
    { href: routes.truckAccident, label: dict.nav.truckAccident, short: dict.nav.truckAccidentShort },
    { href: routes.eighteenWheeler, label: dict.nav.eighteenWheeler, short: dict.nav.eighteenWheelerShort },
    { href: routes.areas, label: dict.nav.areas, short: dict.nav.areasShort },
    { href: routes.faq, label: dict.nav.faq, short: dict.nav.faqShort },
    { href: routes.about, label: dict.nav.about, short: dict.nav.aboutShort },
    { href: routes.contact, label: dict.nav.contact, short: dict.nav.contactShort },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-navy text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href={routes.home} className="shrink-0 text-xl font-bold tracking-tight">
          <span className="text-brand-coral">TRUCKING</span>{" "}
          <span>CHICAS</span>
        </Link>

        {/* Desktop nav — centered with consistent alignment */}
        <nav
          className="mx-4 hidden flex-1 items-center justify-center gap-5 xl:gap-6 lg:flex"
          aria-label="Main navigation"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap text-center text-[13px] font-medium leading-tight transition-colors hover:text-brand-coral ${
                pathname === l.href ? "text-brand-coral" : ""
              }`}
            >
              {l.short}
            </Link>
          ))}
        </nav>

        {/* Right side: lang toggle + CTA + hamburger */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Language toggle with flag */}
          <Link
            href={altPath}
            className="flex items-center gap-1.5 rounded-md border border-white/25 px-2.5 py-1.5 text-xs font-bold transition-colors hover:bg-white/10"
            aria-label={`Switch to ${altLocale === "en" ? "English" : "Español"}`}
          >
            {altLocale === "en" ? (
              <>
                <USFlag className="h-3.5 w-4.5" />
                <span>English</span>
              </>
            ) : (
              <>
                <MXFlag className="h-3.5 w-4.5" />
                <span>Español</span>
              </>
            )}
          </Link>

          {/* Desktop CTA with pulse halo */}
          <a
            href={`tel:+1${PHONE_NUMBER}`}
            className="pulse-halo btn-lift hidden items-center gap-2 rounded-xl bg-brand-coral px-4 py-2 text-sm font-bold text-white btn-glow-coral transition-colors hover:bg-brand-coral-light md:inline-flex"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {dict.nav.callNow}: {PHONE_DISPLAY}
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/10 bg-brand-navy-dark lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded px-3 py-2 text-base font-medium transition-colors hover:bg-white/10 ${
                  pathname === l.href ? "text-brand-coral" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            {/* Language toggle in mobile menu */}
            <Link
              href={altPath}
              className="flex items-center gap-2 rounded px-3 py-2 text-base font-medium transition-colors hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {altLocale === "en" ? (
                <>
                  <USFlag className="h-4 w-5" />
                  <span>Switch to English</span>
                </>
              ) : (
                <>
                  <MXFlag className="h-4 w-5" />
                  <span>Cambiar a Español</span>
                </>
              )}
            </Link>

            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="pulse-halo mt-3 flex items-center justify-center gap-2 rounded-lg bg-brand-rose px-4 py-3 text-center font-bold transition-colors hover:bg-brand-rose-dark"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {dict.nav.callNow}: {PHONE_DISPLAY}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
