import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, TEXAS_CITIES, PHONE_NUMBER, PHONE_DISPLAY, ROUTES, type CityRouteKey } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import CitySection from "@/components/CitySection";
import FAQAccordion from "@/components/FAQAccordion";
import TexasMap from "@/components/TexasMap";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas We Serve: Texas Truck Accident Lawyer",
  description:
    "Trucking Chicas serves truck and 18-wheeler accident victims across Texas, including Houston, Dallas, Austin, San Antonio, and more.",
  alternates: {
    canonical: `${SITE_URL}/areas-we-serve`,
    languages: {
      en: `${SITE_URL}/areas-we-serve`,
      es: `${SITE_URL}/es/areas-que-servimos`,
    },
  },
};

export default function AreasPage() {
  const dict = getDictionary("en");
  const d = dict.areas;
  const routes = ROUTES.en;

  const cityRouteMap: Record<string, CityRouteKey> = {
    Houston: "houston",
    Dallas: "dallas",
    Austin: "austin",
    "San Antonio": "sanAntonio",
    "Fort Worth": "fortWorth",
    "El Paso": "elPaso",
    Arlington: "arlington",
    "Corpus Christi": "corpusChristi",
    Plano: "plano",
    Lubbock: "lubbock",
  };

  return (
    <PageShell dict={dict} locale="en">
      <JsonLd data={localBusinessSchema("en")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: d.title, url: "/areas-we-serve" },
        ])}
      />

      <HeroSection dict={dict} locale="en" headline={d.heading} subhead={d.subhead} />

      {/* Texas Map */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <TexasMap locale="en" />
          <p className="mt-4 text-sm text-brand-steel">
            We represent truck accident victims in every highlighted city and throughout Texas.
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

      {/* City Cards, 2-column grid on desktop, stacks on mobile */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {TEXAS_CITIES.map((city) => (
              <CitySection
                key={city}
                city={city}
                data={d.cities[city]}
                dict={dict}
                locale="en"
                routeKey={cityRouteMap[city]}
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

      {/* Bottom CTA, stronger copy */}
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
              <span className="lg:hidden">Call Now — Free Consultation</span><span className="hidden lg:inline">{dict.cta.callNow}: {PHONE_DISPLAY}</span>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">{dict.cta.microcopy}</p>
        </div>
      </section>
    </PageShell>
  );
}
