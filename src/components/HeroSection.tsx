import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";

export default function HeroSection({
  dict,
  locale,
  headline,
  subhead,
}: {
  dict: Dictionary;
  locale: Locale;
  headline?: string;
  subhead?: string;
}) {
  const routes = ROUTES[locale];
  const isEn = locale === "en";

  const trustSignals = [
    {
      icon: (
        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      text: isEn ? "500+ clients helped" : "500+ clientes ayudados",
    },
    {
      icon: (
        <span className="text-lg font-extrabold text-yellow-400">$</span>
      ),
      text: isEn ? "$50M+ recovered" : "$50M+ recuperados",
    },
    {
      icon: (
        <svg className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      text: isEn ? "Texas truck accident specialists" : "Especialistas en accidentes de camión en Texas",
    },
  ];

  /* Shared CTA buttons */
  const ctaButtons = (centered: boolean) => (
    <div className={`mt-6 flex flex-col gap-3 sm:flex-row ${centered ? "items-center sm:justify-center" : "items-start"}`}>
      <Link
        href={routes.contact}
        className="btn-lift btn-glow-coral inline-flex items-center justify-center gap-2 rounded-lg bg-brand-coral px-6 py-3 text-base font-bold text-white transition-colors hover:bg-brand-coral-light"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {dict.hero.cta1}
      </Link>
      <a
        href={`tel:+1${PHONE_NUMBER}`}
        className="btn-lift btn-glow-rose inline-flex items-center justify-center gap-2 rounded-lg bg-brand-rose px-6 py-3 text-base font-bold text-white transition-colors hover:bg-brand-rose-dark"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        {dict.hero.cta2}: {PHONE_DISPLAY}
      </a>
    </div>
  );

  /* Shared trust signals */
  const trustBadges = (centered: boolean) => (
    <div className={`mt-6 flex flex-wrap gap-x-6 gap-y-2 ${centered ? "justify-center" : "justify-start"}`}>
      {trustSignals.map((s) => (
        <div key={s.text} className="flex items-center gap-2 text-sm font-medium text-gray-200">
          {s.icon}
          {s.text}
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* ── Mobile / Tablet ── hero image as full background */}
      <div className="relative lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/laura-hero.png"
            alt={isEn ? "Trucking Chicas attorney" : "Abogada de Trucking Chicas"}
            fill
            className="object-cover object-[center_20%]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-brand-navy/55 to-brand-navy/80" />
        </div>

        <div className="relative px-6 py-14 sm:py-20">
          <h1 className="w-4/5 text-left text-4xl font-extrabold leading-[1.1] md:text-5xl">
            {headline || dict.hero.headline}
          </h1>
          <p className="mt-4 w-4/5 text-left text-lg leading-relaxed text-gray-200 md:text-xl">
            {subhead || dict.hero.subhead}
          </p>
          {ctaButtons(true)}
          {trustBadges(true)}
        </div>
      </div>

      {/* ── Desktop ── full-width two-column with image on right */}
      <div className="relative hidden min-h-[600px] lg:block xl:min-h-[640px]">
        {/* Background image spanning full width */}
        <div className="absolute inset-0">
          <Image
            src="/laura-hero.png"
            alt={isEn ? "Trucking Chicas attorney" : "Abogada de Trucking Chicas"}
            fill
            className="object-cover object-[center_20%]"
            sizes="100vw"
            priority
          />
          {/* Gradient: solid navy on left for text, fading to transparent on right to reveal image */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-brand-navy)_0%,var(--color-brand-navy)_35%,transparent_75%)]" />
        </div>

        {/* Content */}
        <div className="relative mx-auto grid max-w-7xl grid-cols-2">
          {/* Left: text */}
          <div className="flex flex-col justify-center py-16 pl-6 pr-8 xl:py-20 xl:pl-16">
            <h1 className="text-4xl font-extrabold leading-[1.08] lg:text-5xl xl:text-6xl">
              {headline || dict.hero.headline}
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-300 xl:text-xl">
              {subhead || dict.hero.subhead}
            </p>
            {ctaButtons(false)}
            {trustBadges(false)}
          </div>

          {/* Right: empty space where image shows through */}
          <div className="min-h-[480px]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
