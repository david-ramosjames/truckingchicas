import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, TEXAS_CITIES, PHONE_NUMBER, PHONE_DISPLAY, ROUTES } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import CitySection from "@/components/CitySection";
import FAQAccordion from "@/components/FAQAccordion";
import TexasMap from "@/components/TexasMap";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Áreas que Servimos: Abogado de Accidentes de Camión en Texas",
  description:
    "Trucking Chicas sirve a víctimas de accidentes de camión y tráiler en todo Texas, incluyendo Houston, Dallas, Austin, San Antonio y más.",
  alternates: {
    canonical: `${SITE_URL}/es/areas-que-servimos`,
    languages: {
      en: `${SITE_URL}/areas-we-serve`,
      es: `${SITE_URL}/es/areas-que-servimos`,
    },
  },
};

export default function AreasPageES() {
  const dict = getDictionary("es");
  const d = dict.areas;
  const routes = ROUTES.es;

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={localBusinessSchema("es")} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/es" }, { name: d.title, url: "/es/areas-que-servimos" }])} />

      <HeroSection dict={dict} locale="es" headline={d.heading} subhead={d.subhead} />

      {/* Texas Map */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <TexasMap locale="es" />
          <p className="mt-4 text-sm text-brand-steel">
            Representamos a víctimas de accidentes de camión en cada ciudad resaltada y en todo Texas.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-brand-cream py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.statsTitle}</h2>
          <ul className="mt-6 space-y-3">
            {d.stats.map((stat) => (
              <li key={stat} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 shrink-0 text-brand-coral" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-brand-steel">{stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Major Trucking Routes */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.routesTitle}</h2>
          <p className="mt-3 text-brand-steel">{d.routesSubhead}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {d.routes.map((route) => (
              <div key={route.name} className="rounded-lg border border-gray-200 bg-brand-cream/50 p-5">
                <h3 className="text-lg font-bold text-brand-navy">{route.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-steel">{route.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Cards */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {TEXAS_CITIES.map((city) => (
              <CitySection
                key={city}
                city={city}
                data={d.cities[city]}
                dict={dict}
                locale="es"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.faqTitle}</h2>
          <div className="mt-6">
            <FAQAccordion items={d.faqItems} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{d.bottomCtaHeading}</h2>
          <p className="mt-4 text-lg text-gray-300">{d.bottomCtaSubhead}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={routes.contact}
              className="pulse-halo-coral w-full rounded-lg bg-brand-coral px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-brand-coral-light sm:w-auto"
            >
              {dict.cta.freeReview}
            </Link>
            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="pulse-halo w-full rounded-lg bg-brand-rose px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-rose-dark sm:w-auto"
            >
              {dict.cta.callNow}: {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">{dict.cta.microcopy}</p>
        </div>
      </section>
    </PageShell>
  );
}
