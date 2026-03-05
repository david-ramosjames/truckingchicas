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
          className={`mt-4 text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          {dict.cta.subtext}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`tel:+1${PHONE_NUMBER}`}
            className="w-full rounded-lg bg-brand-red px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-red-dark sm:w-auto"
          >
            {dict.cta.callNow}: {PHONE_DISPLAY}
          </a>
          <Link
            href={routes.contact}
            className="w-full rounded-lg bg-brand-gold px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:bg-brand-gold-light sm:w-auto"
          >
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
