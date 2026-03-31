"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import { getAlternateUrl } from "@/lib/i18n";

/* Tiny inline flag components */
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

/* Social icon components */
function InstagramIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const routes = ROUTES[locale];
  const altLocale: Locale = locale === "en" ? "es" : "en";
  const altPath = getAlternateUrl(pathname, altLocale);

  const isEn = locale === "en";

  const truckDropdownItems = [
    { href: routes.eighteenWheeler, label: isEn ? "18-Wheeler Accidents" : "Accidentes de 18 Ruedas" },
    { href: routes.deliveryTruck, label: isEn ? "FedEx & UPS Accidents" : "Accidentes FedEx y UPS" },
    { href: routes.oilfieldTanker, label: isEn ? "Oilfield & Tanker Accidents" : "Accidentes de Cisterna" },
    { href: routes.dumpTruck, label: isEn ? "Dump Truck & Construction" : "Camiones de Volteo" },
    { href: routes.boxTruck, label: isEn ? "Box Truck & Commercial Van" : "Camiones de Carga" },
    { href: routes.truckAccident, label: isEn ? "All Truck Accidents" : "Todos los Accidentes" },
  ];

  const areasDropdownItems = [
    { href: routes.houston, label: "Houston" },
    { href: routes.dallas, label: "Dallas" },
    { href: routes.austin, label: "Austin" },
    { href: routes.sanAntonio, label: "San Antonio" },
    { href: routes.fortWorth, label: "Fort Worth" },
    { href: routes.elPaso, label: "El Paso" },
    { href: routes.arlington, label: "Arlington" },
    { href: routes.corpusChristi, label: "Corpus Christi" },
    { href: routes.plano, label: "Plano" },
    { href: routes.lubbock, label: "Lubbock" },
    { href: routes.areas, label: isEn ? "All Areas" : "Todas las Áreas" },
  ];

  const navLinks = [
    { href: routes.home, label: dict.nav.home, short: dict.nav.homeShort },
    { href: routes.help, label: dict.nav.help, short: dict.nav.helpShort },
    { href: routes.faq, label: dict.nav.faq, short: dict.nav.faqShort },
    { href: routes.caseEstimate, label: dict.nav.caseEstimate, short: dict.nav.caseEstimateShort },
    { href: routes.about, label: dict.nav.about, short: dict.nav.aboutShort },
    { href: routes.contact, label: dict.nav.contact, short: dict.nav.contactShort },
  ];

  const truckAccidentPaths: string[] = truckDropdownItems.map((i) => i.href);
  const isTruckPage = truckAccidentPaths.includes(pathname);
  const areasPaths: string[] = areasDropdownItems.map((i) => i.href);
  const isAreaPage = areasPaths.includes(pathname);

  const socialLinks = [
    { icon: <InstagramIcon />, href: "#", label: "Instagram" },
    { icon: <FacebookIcon />, href: "#", label: "Facebook" },
    { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
    { icon: <TikTokIcon />, href: "#", label: "TikTok" },
    { icon: <YouTubeIcon />, href: "#", label: "YouTube" },
  ];

  const phoneCta = (
    <a
      href={`tel:+1${PHONE_NUMBER}`}
      className="pulse-halo inline-flex items-center gap-2.5 rounded-lg bg-brand-red px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-light hover:shadow-brand-red/30"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      {PHONE_DISPLAY}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-brand-navy text-white shadow-lg">
      {/* ===== DESKTOP HEADER — 2-column grid, logo spans both rows ===== */}
      <div className="mx-auto hidden max-w-7xl lg:grid" style={{ gridTemplateColumns: "auto 1fr", gridTemplateRows: "auto auto" }}>
        {/* Logo block — spans both rows */}
        <div className="row-span-2 flex items-center px-6 py-2">
          <Link href={routes.home} className="block">
            <Image
              src="/logo-transparent-crop.png"
              alt="Trucking Chicas"
              width={365}
              height={100}
              className="h-[100px] w-auto"
              priority
            />
          </Link>
        </div>

        {/* Top utility row */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
          {/* CTA badges + social */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
              <span className="text-brand-red">
                {locale === "en" ? "No Fees Unless We Win" : "No Cobramos Si No Ganamos"}
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-brand-red">
                {locale === "en" ? "Available 24/7" : "Disponible 24/7"}
              </span>
            </div>
            <span className="text-gray-500">|</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-gray-400 transition-colors hover:text-brand-red"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-1">
            <Link
              href={locale === "en" ? pathname : altPath}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-bold transition-colors ${
                locale === "en"
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-label="English"
            >
              <USFlag className="h-3.5 w-4.5" />
              <span>EN</span>
            </Link>
            <Link
              href={locale === "es" ? pathname : altPath}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-bold transition-colors ${
                locale === "es"
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-label="Español"
            >
              <MXFlag className="h-3.5 w-4.5" />
              <span>ES</span>
            </Link>
          </div>
        </div>

        {/* Bottom nav row */}
        <div className="flex items-center justify-between px-4 py-3">
          <nav
            className="flex items-center gap-5 xl:gap-6"
            aria-label="Main navigation"
          >
            {/* Home */}
            <Link
              href={routes.home}
              className={`whitespace-nowrap text-[13px] font-medium leading-tight transition-colors hover:text-brand-red ${
                pathname === routes.home ? "text-brand-red" : ""
              }`}
            >
              {dict.nav.homeShort}
            </Link>

            {/* Truck Accidents dropdown */}
            <div className="group relative">
              <button
                className={`flex items-center gap-1 whitespace-nowrap text-[13px] font-medium leading-tight transition-colors hover:text-brand-red ${
                  isTruckPage ? "text-brand-red" : ""
                }`}
              >
                {isEn ? "Truck Accidents" : "Accidentes"}
                <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full z-50 min-w-[240px] pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="rounded-lg border border-white/10 bg-brand-navy-dark py-2 shadow-xl">
                  {truckDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-white/10 hover:text-brand-red ${
                        pathname === item.href ? "text-brand-red" : "text-gray-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Areas dropdown */}
            <div className="group relative">
              <button
                className={`flex items-center gap-1 whitespace-nowrap text-[13px] font-medium leading-tight transition-colors hover:text-brand-red ${
                  isAreaPage ? "text-brand-red" : ""
                }`}
              >
                {isEn ? "Areas" : "Áreas"}
                <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full z-50 min-w-[220px] pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="rounded-lg border border-white/10 bg-brand-navy-dark py-2 shadow-xl">
                  {areasDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-white/10 hover:text-brand-red ${
                        pathname === item.href ? "text-brand-red" : "text-gray-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Rest of nav */}
            {navLinks.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`whitespace-nowrap text-[13px] font-medium leading-tight transition-colors hover:text-brand-red ${
                  pathname === l.href ? "text-brand-red" : ""
                }`}
              >
                {l.short}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          {phoneCta}
        </div>
      </div>

      {/* ===== MOBILE HEADER ===== */}
      <div className="flex items-center justify-between px-4 py-3 lg:hidden">
        {/* Logo */}
        <Link href={routes.home} className="shrink-0">
          <Image
            src="/logo-transparent-crop.png"
            alt="Trucking Chicas"
            width={256}
            height={70}
            className="h-[70px] w-auto"
            priority
          />
        </Link>

        {/* Right controls */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Language toggle */}
          <Link
            href={altPath}
            className="flex items-center gap-1.5 rounded-md border border-white/25 px-2.5 py-1.5 text-xs font-bold transition-colors hover:bg-white/10"
            aria-label={`Switch to ${altLocale === "en" ? "English" : "Español"}`}
          >
            {altLocale === "en" ? (
              <>
                <USFlag className="h-3.5 w-4.5" />
                <span>EN</span>
              </>
            ) : (
              <>
                <MXFlag className="h-3.5 w-4.5" />
                <span>ES</span>
              </>
            )}
          </Link>

          {/* Phone CTA (compact on mobile) */}
          <a
            href={`tel:+1${PHONE_NUMBER}`}
            className="pulse-halo inline-flex items-center gap-2 rounded-lg bg-brand-red px-3 py-2 text-sm font-bold text-white shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-light"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          </a>

          {/* Hamburger */}
          <button
            className="p-1"
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

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <nav className="border-t border-white/10 bg-brand-navy-dark lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {/* Home */}
            <Link
              href={routes.home}
              className={`block rounded px-3 py-2 text-base font-medium transition-colors hover:bg-white/10 ${
                pathname === routes.home ? "text-brand-red" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {dict.nav.home}
            </Link>

            {/* Truck Accidents section */}
            <div className="rounded px-3 py-2 text-sm font-bold uppercase tracking-wider text-gray-400">
              {isEn ? "Truck Accidents" : "Accidentes de Cami\u00f3n"}
            </div>
            {truckDropdownItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded px-6 py-2 text-base font-medium transition-colors hover:bg-white/10 ${
                  pathname === item.href ? "text-brand-red" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Areas section */}
            <div className="rounded px-3 py-2 text-sm font-bold uppercase tracking-wider text-gray-400">
              {isEn ? "Areas We Serve" : "Áreas que Servimos"}
            </div>
            {areasDropdownItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded px-6 py-2 text-base font-medium transition-colors hover:bg-white/10 ${
                  pathname === item.href ? "text-brand-red" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Other nav links */}
            {navLinks.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded px-3 py-2 text-base font-medium transition-colors hover:bg-white/10 ${
                  pathname === l.href ? "text-brand-red" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            {/* Social icons */}
            <div className="mt-2 flex items-center gap-4 border-t border-white/10 px-3 pt-3 py-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-gray-400 transition-colors hover:text-brand-red"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Language toggle */}
            <Link
              href={altPath}
              className="flex items-center gap-2 rounded px-3 py-2 text-base font-medium transition-colors hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {altLocale === "en" ? (
                <>
                  <USFlag className="h-4 w-5" />
                  <span>English (EN)</span>
                </>
              ) : (
                <>
                  <MXFlag className="h-4 w-5" />
                  <span>Español (ES)</span>
                </>
              )}
            </Link>

            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="pulse-halo mt-3 flex items-center justify-center gap-2 rounded-lg bg-brand-red px-4 py-3 text-center font-bold shadow-lg transition-colors hover:bg-brand-red-light"
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
