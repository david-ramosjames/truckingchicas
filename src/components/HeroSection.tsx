import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

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

  const reassurance = (
    <>
      <span className="whitespace-nowrap">
        ✔ {isEn ? "No Fee Unless We Win" : "No Cobramos si No Ganamos"}
      </span>
      <span className="whitespace-nowrap">✔ Se Habla Español</span>
    </>
  );

  const trustSignals = [
    {
      icon: (
        <svg className="h-5 w-5 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      text: isEn ? "500+ Clients Helped" : "500+ Clientes Atendidos",
    },
    {
      icon: (
        <span className="text-lg font-extrabold text-[#FBBF24]">$</span>
      ),
      text: isEn ? "Millions Recovered" : "Millones Recuperados",
    },
    {
      icon: (
        <svg className="h-5 w-5 text-[#FBBF24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      text: isEn ? "Texas Truck Accident Attorneys" : "Abogados de Accidentes de Camión en Texas",
    },
  ];

  /* Above-the-fold CTA buttons, call is PRIMARY, form is SECONDARY (ghost) */
  const ctaButtons = (centered: boolean) => (
    <div className={`mt-4 flex flex-col gap-3 sm:flex-row lg:mt-6 ${centered ? "items-center sm:justify-center" : "items-start"}`}>
      {/* PRIMARY: Call CTA (phone number shown on desktop only) */}
      <a
        href={`tel:+1${PHONE_NUMBER}`}
        className="pulse-halo btn-lift inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-red/30 transition-colors hover:bg-brand-red-light sm:w-auto"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="lg:hidden">{isEn ? "Call Now" : "Llamar Ahora"}</span>
        <span className="hidden lg:inline">{dict.hero.cta2}: {PHONE_DISPLAY}</span>
      </a>
      {/* SECONDARY: Free Case Review (ghost/outline) */}
      <Link
        href={routes.contact}
        className="btn-lift inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-red bg-transparent px-6 py-3 text-base font-bold text-white transition-colors hover:bg-brand-red/10 sm:w-auto"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {dict.hero.cta1}
      </Link>
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
      {/* ── Mobile / Tablet ── headline overlaid on image, CTA below ── */}
      <div className="bg-[#121212] lg:hidden">
        {/* Image block with headline overlaid; tall crop, fully right-justified */}
        <div className="relative h-[400px] overflow-hidden sm:h-[470px]">
          <Image
            src={IMAGES.hero}
            alt={isEn ? "Trucking Chicas legal team" : "Equipo legal de Trucking Chicas"}
            fill
            className="object-cover object-[110%_30%]"
            sizes="100vw"
            priority
          />
          {/* Left edge: red band fading to black at the outer edge, clear before the faces */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-2/5 bg-[linear-gradient(to_right,#121212_0%,rgba(198,38,32,0.55)_26%,transparent_50%)]" />
          {/* Right edge: mirror of the left */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-[linear-gradient(to_left,#121212_0%,rgba(198,38,32,0.55)_26%,transparent_50%)]" />
          {/* Top fade to black (over the reds so the top edge and corners read black) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-2/5 bg-[linear-gradient(to_bottom,#121212_0%,rgba(18,18,18,0.92)_40%,transparent_100%)]" />
          {/* Bottom fade to black (over the reds so the bottom edge and corners read black) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-[linear-gradient(to_top,#121212_0%,rgba(18,18,18,0.9)_42%,transparent_100%)]" />

          {/* Headline overlaid at the very top, centered above the team */}
          <div className="relative px-6 pt-1 sm:pt-3">
            <h1 className="mx-auto max-w-md text-center text-4xl font-extrabold leading-[1.1] md:text-5xl">
              {headline || dict.hero.headline}
            </h1>
          </div>

          {/* Attorney name labels — centered near the bottom of the image */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-row gap-4 sm:bottom-6">
            <div className="rounded-md bg-black/60 px-4 py-2 text-center backdrop-blur-sm">
              <p className="text-sm font-bold text-white sm:text-base">Laura Ramos James</p>
              <p className="text-xs text-gray-300 sm:text-sm">{isEn ? "Attorney" : "Abogada"}</p>
            </div>
            <div className="rounded-md bg-black/60 px-4 py-2 text-center backdrop-blur-sm">
              <p className="text-sm font-bold text-white sm:text-base">Lyliana Zamora</p>
              <p className="text-xs text-gray-300 sm:text-sm">{isEn ? "Senior Paralegal" : "Paralegal Sénior"}</p>
            </div>
          </div>
        </div>

        {/* CTA, centered trust signals, and secondary text below the image */}
        <div className="px-6 pb-10 pt-0">
          {/* PRIMARY: Call CTA */}
          <a
            href={`tel:+1${PHONE_NUMBER}`}
            className="pulse-halo btn-lift inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-red/30 transition-colors hover:bg-brand-red-light"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {isEn ? "Call Now — Free Consultation" : "Llamar Ahora — Consulta Gratis"}
          </a>
          {/* Reassurance line under the call button */}
          <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm font-medium text-gray-200">
            {reassurance}
          </div>
          {/* SECONDARY: Free Case Review (ghost/outline) */}
          <Link
            href={routes.contact}
            className="btn-lift mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-red bg-transparent px-6 py-3 text-base font-bold text-white transition-colors hover:bg-brand-red/10"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {isEn ? "Start Free Case Review" : "Iniciar Evaluación Gratis"}
          </Link>
          {trustBadges(true)}
          <p className="mt-5 text-center text-base leading-relaxed text-[#D1D5DB]">
            {subhead || dict.hero.subhead}
          </p>
        </div>
      </div>

      {/* ── Desktop ── full-width two-column with image on right */}
      <div className="relative hidden min-h-[600px] lg:block xl:min-h-[640px]">
        {/* Background image spanning full width */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt={isEn ? "Trucking Chicas attorney" : "Abogada de Trucking Chicas"}
            fill
            className="object-cover object-[center_20%]"
            sizes="100vw"
            priority
          />
          {/* Dark overlay on left half, fully transparent at 50% */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_0%,#121212_30%,rgba(18,18,18,0.5)_42%,transparent_50%)]" />
          {/* Strong red glow on the left side */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_8%_45%,rgba(229,57,53,0.5)_0%,rgba(229,57,53,0.2)_30%,transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="relative mx-auto grid max-w-7xl grid-cols-2">
          {/* Left: text */}
          <div className="flex flex-col justify-center py-16 pl-6 pr-8 xl:py-20 xl:pl-16">
            <h1 className="text-4xl font-extrabold leading-[1.08] lg:text-5xl xl:text-6xl">
              {headline || dict.hero.headline}
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#D1D5DB] xl:text-xl">
              {subhead || dict.hero.subhead}
            </p>
            <p className="mt-2 text-sm font-medium text-brand-red">
              {isEn ? "Speak to a lawyer now: Available 24/7" : "Habla con un abogado ahora: Disponible 24/7"}
            </p>
            {ctaButtons(false)}
            {/* Reassurance line under the CTA buttons */}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium text-gray-200">
              {reassurance}
            </div>
            {trustBadges(false)}
          </div>

          {/* Right: empty space where the image shows through */}
          <div className="min-h-[480px]" aria-hidden="true" />
        </div>

        {/* Attorney name tags, positioned independently over the image (full-width %) */}
        <div
          className="absolute z-10 rounded bg-black/60 px-3 py-1.5 backdrop-blur-sm"
          style={{ left: "58%", top: "85%" }}
        >
          <p className="text-sm font-bold text-white">Laura Ramos James</p>
          <p className="text-xs text-gray-300">{isEn ? "Attorney" : "Abogada"}</p>
        </div>
        <div
          className="absolute z-10 rounded bg-black/60 px-3 py-1.5 backdrop-blur-sm"
          style={{ left: "76%", top: "85%" }}
        >
          <p className="text-sm font-bold text-white">Lyliana Zamora</p>
          <p className="text-xs text-gray-300">{isEn ? "Senior Paralegal" : "Paralegal Sénior"}</p>
        </div>
      </div>
    </section>
  );
}
