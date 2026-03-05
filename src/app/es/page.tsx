import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { SITE_URL } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Abogados de Accidentes de Camión en Texas | Trucking Chicas",
  description:
    "¿Te chocó un camión en Texas? Trucking Chicas lucha por las víctimas de accidentes de camión y tráiler. Evaluación gratis. No cobramos si no ganamos.",
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: { en: SITE_URL, es: `${SITE_URL}/es` },
  },
  openGraph: {
    title: "Abogados de Accidentes de Camión en Texas | Trucking Chicas",
    description:
      "¿Te chocó un camión en Texas? Trucking Chicas lucha por las víctimas de accidentes de camión y tráiler. Evaluación gratis. No cobramos si no ganamos.",
    url: `${SITE_URL}/es`,
    locale: "es_MX",
  },
};

export default function HomePageES() {
  const dict = getDictionary("es");

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={localBusinessSchema("es")} />
      <JsonLd data={faqSchema(dict.faq.items.slice(0, 7))} />

      <HeroSection dict={dict} locale="es" />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {dict.home.whyDifferentTitle}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {dict.home.whyDifferentItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dict={dict} locale="es" variant="dark" />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {dict.home.recoverTitle}
          </h2>
          <ul className="mt-8 space-y-3">
            {dict.home.recoverItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 shrink-0 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection dict={dict} locale="es" />

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {dict.home.whyUsTitle}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {dict.home.whyUsItems.map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {dict.home.stepsTitle}
          </h2>
          <ol className="mt-10 space-y-6">
            {dict.home.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold text-lg font-bold text-brand-navy">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">{step.title}</h3>
                  <p className="mt-1 text-gray-600">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {dict.faq.heading}
          </h2>
          <div className="mt-10">
            <FAQAccordion items={dict.faq.items.slice(0, 7)} />
          </div>
        </div>
      </section>

      <CTASection dict={dict} locale="es" variant="dark" />
    </PageShell>
  );
}
