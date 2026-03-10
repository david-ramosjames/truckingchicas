import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { SITE_URL } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sobre Trucking Chicas | Abogados de Accidentes de Camión en Texas",
  description:
    "Conoce a Trucking Chicas, un bufete de abogados en Texas enfocado exclusivamente en casos de accidentes de camión y tráiler.",
  alternates: {
    canonical: `${SITE_URL}/es/sobre-nosotros`,
    languages: {
      en: `${SITE_URL}/about`,
      es: `${SITE_URL}/es/sobre-nosotros`,
    },
  },
};

export default function AboutPageES() {
  const dict = getDictionary("es");
  const d = dict.about;

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={localBusinessSchema("es")} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/es" }, { name: d.title, url: "/es/sobre-nosotros" }])} />

      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">{d.heading}</h1>
          <p className="mt-6 text-lg text-gray-300">{d.intro}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.missionTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{d.missionDesc}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">{d.valuesTitle}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {d.values.map((v) => (
              <div key={v.title} className="rounded-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-brand-navy">{v.title}</h3>
                <p className="mt-2 text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">{d.teamTitle}</h2>
          <p className="mt-4 text-gray-600">{d.teamPlaceholder}</p>
        </div>
      </section>

      <CTASection dict={dict} locale="es" variant="dark" />
    </PageShell>
  );
}
