import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import NearbyAreas from "@/components/NearbyAreas";
import JsonLd from "@/components/JsonLd";
import { cityLegalServiceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Truck Accident Lawyer in Beaumont, TX",
  description: "Injured in a truck accident in Beaumont? Trucking Chicas represents victims of 18-wheeler, tanker, and refinery-truck crashes on I-10. Free consultation.",
  alternates: {
    canonical: `${SITE_URL}/truck-accident-lawyer-beaumont`,
    languages: {
      en: `${SITE_URL}/truck-accident-lawyer-beaumont`,
      es: `${SITE_URL}/es/abogado-accidentes-camion-beaumont`,
      "x-default": `${SITE_URL}/truck-accident-lawyer-beaumont`,
    },
  },
  openGraph: {
    title: "Truck Accident Lawyer in Beaumont, TX",
    description: "Injured in a truck accident in Beaumont? Trucking Chicas represents victims of 18-wheeler, tanker, and refinery-truck crashes on I-10. Free consultation.",
    url: `${SITE_URL}/truck-accident-lawyer-beaumont`,
  },
};

export default function BeaumontPage() {
  const dict = getDictionary("en");
  const d = dict.cityPages.beaumont;
  const cp = dict.cityPages;

  return (
    <PageShell dict={dict} locale="en">
      <JsonLd data={cityLegalServiceSchema("Beaumont", "TX", "en")} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Areas We Serve", url: "/areas-we-serve" }, { name: "Beaumont", url: "/truck-accident-lawyer-beaumont" }])} />
      <JsonLd data={faqSchema(d.faq)} />

      <HeroSection dict={dict} locale="en" headline={d.heroHeadline} subhead={d.heroSubhead} />

      {/* Localized Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.localTitle}</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">{d.localContent}</p>
        </div>
      </section>

      {/* Highways & Danger Zones */}
      <section className="bg-gray-50 py-16">
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
            <h3 className="text-xl font-bold text-brand-navy">High-Risk Locations in Beaumont</h3>
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
      <section className="py-16">
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

      {/* CTA */}
      <CTASection dict={dict} locale="en" variant="dark" />

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
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

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">
            Truck Accident FAQ: Beaumont
          </h2>
          <div className="mt-10">
            <FAQAccordion items={d.faq} />
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <NearbyAreas currentCity="beaumont" locale="en" />

      {/* Final CTA */}
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
              <span className="lg:hidden">Call Now — Free Consultation</span><span className="hidden lg:inline">Call Now: {PHONE_DISPLAY}</span>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">{dict.cta.microcopy}</p>
        </div>
      </section>
    </PageShell>
  );
}
