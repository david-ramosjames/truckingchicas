import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, ROUTES } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Abogado de Accidentes de Camiones de Volteo en Texas",
  description:
    "¿Lesionado por un camión de volteo o vehículo de construcción en Texas? Nuestros abogados luchan por las víctimas. Evaluación gratis.",
  alternates: {
    canonical: `${SITE_URL}/es/abogado-accidentes-camion-volteo`,
    languages: {
      en: `${SITE_URL}/dump-truck-construction-accident-lawyer`,
      es: `${SITE_URL}/es/abogado-accidentes-camion-volteo`,
      "x-default": `${SITE_URL}/dump-truck-construction-accident-lawyer`,
    },
  },
};

export default function DumpTruckPageES() {
  const dict = getDictionary("es");
  const d = dict.dumpTruck;
  const routes = ROUTES.es;

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={localBusinessSchema("es")} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/es" }, { name: d.title, url: "/es/abogado-accidentes-camion-volteo" }])} />

      <HeroSection dict={dict} locale="es" headline={d.heroHeadline} subhead={d.heroSubhead} />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.introTitle}</h2>
          <div className="mt-6 overflow-hidden rounded-xl">
            <Image
              src={IMAGES.trucks.dumpTruck}
              alt="Camión de volteo"
              width={800}
              height={450}
              className="h-auto w-full rounded-xl"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{d.introDesc}</p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.causesTitle}</h2>
          <ul className="mt-6 space-y-3">
            {d.causes.map((cause) => (
              <li key={cause} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 shrink-0 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{cause}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection dict={dict} locale="es" variant="dark" />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.liabilityTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {d.liabilityItems.map((item) => (
              <div key={item.title} className="card-lift card-border-top rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
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

      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-bold text-brand-navy">Páginas Relacionadas</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={routes.truckAccident} className="text-brand-red underline hover:text-brand-red-dark">Abogado de Accidentes de Camión</Link>
            <Link href={routes.oilfieldTanker} className="text-brand-red underline hover:text-brand-red-dark">Camiones Cisterna y Petroleros</Link>
            <Link href={routes.faq} className="text-brand-red underline hover:text-brand-red-dark">Preguntas Frecuentes</Link>
          </div>
        </div>
      </section>

      <CTASection dict={dict} locale="es" />
    </PageShell>
  );
}
