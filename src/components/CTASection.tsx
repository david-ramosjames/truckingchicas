import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";

export default function CTASection({
  dict,
  locale,
  variant = "default",
}: {
  dict: Dictionary;
  locale: Locale;
  variant?: "default" | "dark";
}) {
  const routes = ROUTES[locale];
  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 ${isDark ? "bg-brand-navy text-white" : "bg-brand-cream"}`}
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{dict.cta.heading}</h2>
        <p
          className={`mt-4 text-lg ${isDark ? "text-[#D1D5DB]" : "text-gray-600"}`}
        >
          {dict.cta.subtext}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* Below-the-fold: both buttons can be filled, call stays primary */}
          <a
            href={`tel:+1${PHONE_NUMBER}`}
            className="btn-lift btn-glow-coral flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-red-light sm:w-auto"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="lg:hidden">{locale === "en" ? "Call Now — Free Consultation" : "Llamar Ahora — Consulta Gratis"}</span><span className="hidden lg:inline">{dict.cta.callNow}: {PHONE_DISPLAY}</span>
          </a>
          <Link
            href={routes.contact}
            className="btn-lift flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red-dark px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-[#A52222] sm:w-auto"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {dict.cta.freeReview}
          </Link>
        </div>
        <p
          className={`mt-4 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
        >
          {dict.cta.microcopy}
        </p>
      </div>
    </section>
  );
}
