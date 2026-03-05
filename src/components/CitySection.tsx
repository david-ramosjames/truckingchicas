import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";

export default function CitySection({
  city,
  description,
  dict,
  locale,
}: {
  city: string;
  description: string;
  dict: Dictionary;
  locale: Locale;
}) {
  const routes = ROUTES[locale];

  return (
    <section className="border-b border-gray-200 py-10 last:border-0">
      <h2 className="text-2xl font-bold text-brand-navy">
        {locale === "en"
          ? `${city} Truck Accident Lawyer`
          : `Abogado de Accidentes de Camión en ${city}`}
      </h2>
      <p className="mt-3 leading-relaxed text-gray-600">{description}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={`tel:+1${PHONE_NUMBER}`}
          className="rounded-lg bg-brand-red px-6 py-3 text-center font-bold text-white transition-colors hover:bg-brand-red-dark"
        >
          {dict.cta.callNow}: {PHONE_DISPLAY}
        </a>
        <Link
          href={routes.contact}
          className="rounded-lg bg-brand-gold px-6 py-3 text-center font-bold text-brand-navy transition-colors hover:bg-brand-gold-light"
        >
          {dict.cta.freeReview}
        </Link>
      </div>
    </section>
  );
}
