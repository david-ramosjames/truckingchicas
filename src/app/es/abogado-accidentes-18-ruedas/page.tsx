import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, ROUTES } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Abogado de Accidentes de 18 Ruedas en Texas",
  description:
    "¿Herido en un choque con un tráiler de 18 ruedas en Texas? Nuestros abogados se especializan en accidentes de vehículos comerciales. Llama para una consulta gratis.",
  alternates: {
    canonical: `${SITE_URL}/es/abogado-accidentes-18-ruedas`,
    languages: {
      en: `${SITE_URL}/18-wheeler-accident-lawyer`,
      es: `${SITE_URL}/es/abogado-accidentes-18-ruedas`,
    },
  },
};

export default function EighteenWheelerPageES() {
  const dict = getDictionary("es");
  const d = dict.eighteenWheeler;
  const routes = ROUTES.es;

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={localBusinessSchema("es")} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/es" }, { name: d.title, url: "/es/abogado-accidentes-18-ruedas" }])} />

      <HeroSection dict={dict} locale="es" headline={d.heroHeadline} subhead={d.heroSubhead} />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.commercialTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{d.commercialDesc}</p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.injuriesTitle}</h2>
          <ul className="mt-6 space-y-3">
            {d.injuries.map((injury) => (
              <li key={injury} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 shrink-0 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{injury}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection dict={dict} locale="es" variant="dark" />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.regulationsTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{d.regulationsDesc}</p>
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-bold text-brand-navy">Páginas Relacionadas</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={routes.truckAccident} className="text-brand-red underline hover:text-brand-red-dark">{dict.nav.truckAccident}</Link>
            <Link href={routes.faq} className="text-brand-red underline hover:text-brand-red-dark">{dict.nav.faq}</Link>
            <Link href={routes.areas} className="text-brand-red underline hover:text-brand-red-dark">{dict.nav.areas}</Link>
          </div>
        </div>
      </section>

      <CTASection dict={dict} locale="es" />
    </PageShell>
  );
}
