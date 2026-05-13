import type { Metadata } from "next";
import Image from "next/image";
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
  title: "Abogado de Accidentes de Camión en San Antonio, TX",
  description: "¿Lesionado en un accidente de camión en San Antonio? Trucking Chicas ayuda a las víctimas a recuperar compensación. Llame ahora para una consulta gratuita.",
  alternates: {
    canonical: `${SITE_URL}/es/abogado-accidentes-camion-san-antonio`,
    languages: {
      en: `${SITE_URL}/truck-accident-lawyer-san-antonio`,
      es: `${SITE_URL}/es/abogado-accidentes-camion-san-antonio`,
    },
  },
  openGraph: {
    title: "Abogado de Accidentes de Camión en San Antonio, TX",
    description: "¿Lesionado en un accidente de camión en San Antonio? Trucking Chicas ayuda a las víctimas a recuperar compensación. Llame ahora para una consulta gratuita.",
    url: `${SITE_URL}/es/abogado-accidentes-camion-san-antonio`,
  },
};

export default function SanAntonioPageES() {
  const dict = getDictionary("es");
  const d = dict.cityPages.sanAntonio;
  const cp = dict.cityPages;
  const routes = ROUTES.es;

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={cityLegalServiceSchema("San Antonio", "TX", "es")} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/es" }, { name: "Áreas que Servimos", url: "/es/areas-que-servimos" }, { name: "San Antonio", url: "/es/abogado-accidentes-camion-san-antonio" }])} />
      <JsonLd data={faqSchema(d.faq)} />
      <HeroSection dict={dict} locale="es" headline={d.heroHeadline} subhead={d.heroSubhead} />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 flex justify-center">
          <Image src={IMAGES.cities.sanAntonio} alt="San Antonio, Texas" width={800} height={450} className="rounded-xl" />
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.localTitle}</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">{d.localContent}</p>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-4 flex justify-center">
          <Image src={IMAGES.maps.sanAntonio} alt="Mapa del área de San Antonio" width={800} height={450} className="rounded-xl" />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">
            Carreteras Peligrosas y Puntos Críticos de Accidentes
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
            <h3 className="text-xl font-bold text-brand-navy">Ubicaciones de Alto Riesgo en San Antonio</h3>
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

      <section className="bg-gray-50 py-16"><div className="mx-auto max-w-6xl px-4"><h2 className="text-center text-3xl font-bold text-brand-navy">{cp.servicesTitle}</h2><div className="mt-10 grid gap-6 sm:grid-cols-2">{cp.services.map((s) => (<div key={s.title} className="card-lift card-border-left rounded-lg bg-white p-6 shadow-md"><h3 className="text-lg font-bold text-brand-navy">{s.title}</h3><p className="mt-2 text-gray-600">{s.desc}</p></div>))}</div></div></section>
      <CTASection dict={dict} locale="es" variant="dark" />
      <section className="py-16"><div className="mx-auto max-w-6xl px-4"><h2 className="text-center text-3xl font-bold text-brand-navy">{cp.whyUsTitle}</h2><div className="mt-10 grid gap-6 sm:grid-cols-2">{cp.whyUsItems.map((item) => (<div key={item.title} className="card-lift rounded-xl bg-white p-6 shadow-md"><h3 className="text-lg font-bold text-brand-navy">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p></div>))}</div></div></section>
      <section className="bg-gray-50 py-16"><div className="mx-auto max-w-3xl px-4"><h2 className="text-center text-3xl font-bold text-brand-navy">Preguntas Frecuentes — San Antonio</h2><div className="mt-10"><FAQAccordion items={d.faq} /></div></div></section>
      <NearbyAreas currentCity="sanAntonio" locale="es" />
      <section className="bg-brand-cream py-16"><div className="mx-auto max-w-3xl px-4 text-center"><h2 className="text-3xl font-bold text-brand-navy">{cp.finalCtaHeading}</h2><p className="mt-4 text-lg text-gray-600">{cp.finalCtaSubhead}</p><div className="mt-8"><a href={`tel:+1${PHONE_NUMBER}`} className="btn-lift btn-glow-coral inline-flex items-center gap-3 rounded-xl bg-brand-red px-10 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-brand-red-light"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>Llame Ahora: {PHONE_DISPLAY}</a></div><p className="mt-4 text-sm text-gray-500">{dict.cta.microcopy}</p></div></section>
    </PageShell>
  );
}
