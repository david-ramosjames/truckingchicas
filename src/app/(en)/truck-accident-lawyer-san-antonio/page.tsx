import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import NearbyAreas from "@/components/NearbyAreas";
import JsonLd from "@/components/JsonLd";
import { cityLegalServiceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Truck Accident Lawyer in San Antonio, TX",
  description: "Injured in a truck accident in San Antonio? Trucking Chicas helps victims recover compensation. Call now for a free consultation.",
  alternates: {
    canonical: `${SITE_URL}/truck-accident-lawyer-san-antonio`,
    languages: { en: `${SITE_URL}/truck-accident-lawyer-san-antonio`, es: `${SITE_URL}/es/abogado-accidentes-camion-san-antonio` },
  },
  openGraph: {
    title: "Truck Accident Lawyer in San Antonio, TX",
    description: "Injured in a truck accident in San Antonio? Trucking Chicas helps victims recover compensation. Call now for a free consultation.",
    url: `${SITE_URL}/truck-accident-lawyer-san-antonio`,
  },
};

export default function SanAntonioPage() {
  const dict = getDictionary("en");
  const d = dict.cityPages.sanAntonio;
  const cp = dict.cityPages;
  const routes = ROUTES.en;

  return (
    <PageShell dict={dict} locale="en">
      <JsonLd data={cityLegalServiceSchema("San Antonio", "TX", "en")} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Areas We Serve", url: "/areas-we-serve" }, { name: "San Antonio", url: "/truck-accident-lawyer-san-antonio" }])} />
      <JsonLd data={faqSchema(d.faq)} />

      <HeroSection dict={dict} locale="en" headline={d.heroHeadline} subhead={d.heroSubhead} />

      {/* City Photo */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 flex justify-center">
          <Image src={IMAGES.cities.sanAntonio} alt="San Antonio, Texas" width={800} height={450} className="rounded-xl" />
        </div>
      </section>

      {/* Localized Content */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.localTitle}</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">{d.localContent}</p>
        </div>
      </section>

      {/* Truck Accident Map */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-4 flex justify-center">
          <Image src={IMAGES.maps.sanAntonio} alt="San Antonio area truck accident map" width={800} height={450} className="rounded-xl" />
        </div>
      </section>

      {/* Highways & Danger Zones */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">
            Dangerous Highways &amp; Truck Accident Hotspots
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {d.highways.map((h) => (
              <div key={h.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-brand-navy">{h.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{h.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold text-brand-navy">High-Risk Locations in San Antonio</h3>
            <ul className="mt-4 space-y-3">
              {d.dangerZones.map((zone) => (
                <li key={zone} className="flex items-start gap-3 text-gray-600">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm leading-relaxed">{zone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">{cp.servicesTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {cp.services.map((s) => (
              <div key={s.title} className="card-lift card-border-left rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-navy">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dict={dict} locale="en" variant="dark" />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">{cp.whyUsTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {cp.whyUsItems.map((item) => (
              <div key={item.title} className="card-lift rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">
            Truck Accident FAQ: San Antonio
          </h2>
          <div className="mt-10">
            <FAQAccordion items={d.faq} />
          </div>
        </div>
      </section>

      <NearbyAreas currentCity="sanAntonio" locale="en" />

      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">{cp.finalCtaHeading}</h2>
          <p className="mt-4 text-lg text-gray-600">{cp.finalCtaSubhead}</p>
          <div className="mt-8">
            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="btn-lift btn-glow-coral inline-flex items-center gap-3 rounded-xl bg-brand-red px-10 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-brand-red-light"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">{dict.cta.microcopy}</p>
        </div>
      </section>
    </PageShell>
  );
}
