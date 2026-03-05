import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, ROUTES } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Accidentes de Camión",
  description:
    "Obtén respuestas a preguntas comunes sobre reclamaciones por accidentes de camión en Texas, incluyendo responsabilidad, compensación y el plazo de prescripción.",
  alternates: {
    canonical: `${SITE_URL}/es/preguntas-frecuentes`,
    languages: {
      en: `${SITE_URL}/faq`,
      es: `${SITE_URL}/es/preguntas-frecuentes`,
    },
  },
};

export default function FAQPageES() {
  const dict = getDictionary("es");
  const d = dict.faq;
  const routes = ROUTES.es;

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={faqSchema(d.items)} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/es" }, { name: d.title, url: "/es/preguntas-frecuentes" }])} />

      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">{d.heading}</h1>
          <p className="mt-4 text-lg text-gray-300">{d.subhead}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <FAQAccordion items={d.items} />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.chooseTitle}</h2>
          <ul className="mt-6 space-y-3">
            {d.chooseItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 shrink-0 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-bold text-brand-navy">Más Información</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={routes.truckAccident} className="text-brand-red underline hover:text-brand-red-dark">{dict.nav.truckAccident}</Link>
            <Link href={routes.eighteenWheeler} className="text-brand-red underline hover:text-brand-red-dark">{dict.nav.eighteenWheeler}</Link>
            <Link href={routes.areas} className="text-brand-red underline hover:text-brand-red-dark">{dict.nav.areas}</Link>
          </div>
        </div>
      </section>

      <CTASection dict={dict} locale="es" variant="dark" />
    </PageShell>
  );
}
