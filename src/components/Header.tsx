"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import { getAlternateUrl } from "@/lib/i18n";

export default function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const routes = ROUTES[locale];
  const altLocale: Locale = locale === "en" ? "es" : "en";
  const altPath = getAlternateUrl(pathname, altLocale);

  const links = [
    { href: routes.home, label: dict.nav.home },
    { href: routes.truckAccident, label: dict.nav.truckAccident },
    { href: routes.eighteenWheeler, label: dict.nav.eighteenWheeler },
    { href: routes.areas, label: dict.nav.areas },
    { href: routes.faq, label: dict.nav.faq },
    { href: routes.about, label: dict.nav.about },
    { href: routes.contact, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-navy text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <Link href={routes.home} className="text-xl font-bold tracking-tight">
          <span className="text-brand-coral">TRUCKING</span>{" "}
          <span>CHICAS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-brand-coral ${
                pathname === l.href ? "text-brand-coral" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side: lang toggle + CTA + hamburger */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <Link
            href={altPath}
            className="rounded border border-white/30 px-2 py-1 text-xs font-bold transition-colors hover:bg-white/10"
            aria-label={`Switch to ${altLocale === "en" ? "English" : "Español"}`}
          >
            {altLocale === "en" ? "EN" : "ES"}
          </Link>

          {/* Desktop CTA */}
          <a
            href={`tel:+1${PHONE_NUMBER}`}
            className="hidden rounded-lg bg-brand-coral px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-coral-light md:inline-block"
          >
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
            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="mt-3 block rounded-lg bg-brand-rose px-4 py-3 text-center font-bold transition-colors hover:bg-brand-rose-dark"
            >
              {dict.nav.callNow}: {PHONE_DISPLAY}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
