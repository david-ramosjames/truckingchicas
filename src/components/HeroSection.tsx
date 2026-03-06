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

  return (
    <section className="relative bg-brand-navy py-16 text-white md:py-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNi0yLjY4NyA2LTZzLTIuNjg3LTYtNi02LTYgMi42ODctNiA2IDIuNjg3IDYgNiA2ek0zNiA0OGMzLjMxMyAwIDYtMi42ODcgNi02cy0yLjY4Ny02LTYtNi02IDIuNjg3LTYgNiAyLjY4NyA2IDYgNnpNNiAxOGMzLjMxMyAwIDYtMi42ODcgNi02cy0yLjY4Ny02LTYtNi02IDIuNjg3LTYgNiAyLjY4NyA2IDYgNnpNNiA0OGMzLjMxMyAwIDYtMi42ODcgNi02cy0yLjY4Ny02LTYtNi02IDIuNjg3LTYgNiAyLjY4NyA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
          {headline || dict.hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
          {subhead || dict.hero.subhead}
        </p>

        {/* CTA Buttons — Coral primary, Rose secondary */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={routes.contact}
            className="btn-lift btn-glow-coral flex w-full items-center justify-center gap-2 rounded-xl bg-brand-coral px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-coral-light sm:w-auto"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {dict.hero.cta1}
          </Link>
          <div className="flex flex-col items-center">
            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="btn-lift btn-glow-rose flex w-full items-center justify-center gap-2 rounded-xl bg-brand-rose px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-rose-dark sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {dict.hero.cta2}: {PHONE_DISPLAY}
            </a>
            <span className="mt-1.5 text-xs text-gray-400">{dict.nav.callMicrocopy}</span>
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[dict.hero.trust1, dict.hero.trust2, dict.hero.trust3].map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm text-gray-300">
              <svg className="h-5 w-5 text-brand-coral" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
