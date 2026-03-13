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
        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
        </svg>
      ),
      text: isEn ? "$50M+ recovered" : "$50M+ recuperados",
    },
    {
      icon: (
        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2L3 7h2v7h4V10h2v4h4V7h2L10 2zm0 2.236L14.764 8H5.236L10 4.236z" clipRule="evenodd" />
          <path d="M3 16h14v2H3v-2z" />
        </svg>
      ),
      text: isEn ? "Texas truck accident specialists" : "Especialistas en accidentes de camión en Texas",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* Desktop: side-by-side layout */}
      <div className="relative mx-auto grid max-w-7xl lg:grid-cols-2">
        {/* Left: Content */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-10 md:py-24 lg:py-28 xl:px-16">
          <h1 className="text-center text-4xl font-extrabold leading-[1.1] md:text-5xl lg:text-left lg:text-6xl">
            {headline || dict.hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-gray-300 md:text-xl lg:mx-0 lg:text-left">
            {subhead || dict.hero.subhead}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href={routes.contact}
              className="btn-lift btn-glow-coral flex w-full items-center justify-center gap-2 rounded-xl bg-brand-coral px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-coral-light sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {dict.hero.cta1}
            </Link>
            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="btn-lift btn-glow-rose flex w-full items-center justify-center gap-2 rounded-xl bg-brand-rose px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-rose-dark sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {dict.hero.cta2}: {PHONE_DISPLAY}
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
            {trustSignals.map((s) => (
              <div key={s.text} className="flex items-center gap-2 text-sm font-medium text-gray-200">
                {s.icon}
                {s.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Full-height hero image — desktop */}
        <div className="relative hidden min-h-[500px] lg:block">
          <Image
            src="/laura-hero.png"
            alt={isEn ? "Trucking Chicas attorney" : "Abogada de Trucking Chicas"}
            fill
            className="object-cover object-top"
            sizes="50vw"
            priority
          />
          {/* Left edge gradient to blend into navy */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-navy to-transparent" />
          {/* Decorative glow accents */}
          <div className="absolute -left-10 top-1/4 h-40 w-40 rounded-full bg-brand-coral/15 blur-3xl" />
          <div className="absolute -left-10 bottom-1/4 h-40 w-40 rounded-full bg-brand-rose/15 blur-3xl" />
        </div>
      </div>

      {/* Mobile hero image — shown below content on mobile/tablet */}
      <div className="relative h-80 sm:h-96 lg:hidden">
        <Image
          src="/laura-hero.png"
          alt={isEn ? "Trucking Chicas attorney" : "Abogada de Trucking Chicas"}
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
      </div>
    </section>
  );
}
