import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES, PHONE_NUMBER, PHONE_DISPLAY, type CityRouteKey } from "@/lib/constants";

interface CityData {
  desc: string;
  why: string[];
  accidents: string[];
}

export default function CitySection({
  city,
  data,
  dict,
  locale,
  routeKey,
}: {
  city: string;
  data: CityData;
  dict: Dictionary;
  locale: Locale;
  routeKey?: CityRouteKey;
}) {
  const routes = ROUTES[locale];
  const slug = city.toLowerCase().replace(/\s+/g, "-");

  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* City photo */}
      <div className="relative h-48 w-full bg-brand-navy/5">
        <Image
          src={`/cities/${slug}.jpg`}
          alt={city}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="p-6 md:p-8">
      <h2 className="text-2xl font-bold text-brand-navy">
        {locale === "en"
          ? `${city} Truck Accident Lawyer`
          : `Abogado de Accidentes de Camión en ${city}`}
      </h2>

      <p className="mt-3 leading-relaxed text-brand-steel">{data.desc}</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {/* Why truck accidents happen here */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy">
            {locale === "en"
              ? `Why truck accidents happen in ${city}`
              : `Por qué ocurren accidentes de camión en ${city}`}
          </h3>
          <ul className="mt-2 space-y-1.5">
            {data.why.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-steel">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-coral" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Common accidents */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy">
            {locale === "en"
              ? `Common accidents in ${city}`
              : `Accidentes comunes en ${city}`}
          </h3>
          <ul className="mt-2 space-y-1.5">
            {data.accidents.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-steel">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-rose" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Internal links */}
      <p className="mt-5 text-sm text-brand-steel">
        {locale === "en" ? (
          <>
            Our <Link href={routes.eighteenWheeler} className="font-medium text-brand-coral underline hover:text-brand-rose">18-wheeler accident lawyers</Link> investigate
            trucking companies and drivers responsible for crashes. Have questions?{" "}
            <Link href={routes.faq} className="font-medium text-brand-coral underline hover:text-brand-rose">See our FAQ</Link>.
          </>
        ) : (
          <>
            Nuestros <Link href={routes.eighteenWheeler} className="font-medium text-brand-coral underline hover:text-brand-rose">abogados de accidentes de 18 ruedas</Link> investigan
            a las compañías de camiones y conductores responsables de los choques. ¿Tienes preguntas?{" "}
            <Link href={routes.faq} className="font-medium text-brand-coral underline hover:text-brand-rose">Consulta nuestras preguntas frecuentes</Link>.
          </>
        )}
      </p>

      {/* Single CTA: Call only */}
      <div className="mt-5">
        <a
          href={`tel:+1${PHONE_NUMBER}`}
          className="pulse-halo inline-flex items-center gap-2 rounded-lg bg-brand-rose px-6 py-3 font-bold text-white transition-colors hover:bg-brand-rose-dark"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="lg:hidden">{locale === "en" ? "Call Now — Free Consultation" : "Llamar Ahora — Consulta Gratis"}</span><span className="hidden lg:inline">{dict.cta.callNow}: {PHONE_DISPLAY}</span>
        </a>
        {routeKey && (
          <Link
            href={routes[routeKey]}
            className="ml-4 inline-flex items-center gap-1 font-medium text-brand-coral underline transition-colors hover:text-brand-rose"
          >
            {locale === "en" ? "Learn More" : "Más Información"}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
      </div>
    </article>
  );
}
