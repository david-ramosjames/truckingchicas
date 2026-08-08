import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "¿Qué Pasa Si el Camionero Estaba Usando Su Teléfono?",
  description: "¿Estaba el camionero usando su teléfono cuando lo golpeó? Aprenda cómo la distracción fortalece su caso en Texas. Consulta gratis con Trucking Chicas.",
  alternates: {
    canonical: `${SITE_URL}/es/ayuda-accidente-camion/conductor-usando-telefono`,
    languages: {
      en: `${SITE_URL}/truck-accident-help/truck-driver-on-phone`,
      es: `${SITE_URL}/es/ayuda-accidente-camion/conductor-usando-telefono`,
      "x-default": `${SITE_URL}/truck-accident-help/truck-driver-on-phone`,
    },
  },
};

export default function ConductorUsandoTelefonoES() {
  const dict = getDictionary("es");
  const d = dict.helpHub;
  const q = d.questions[4];
  const routes = ROUTES.es;

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={localBusinessSchema("es")} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/es" }, { name: "Ayuda con Accidentes de Camión", url: "/es/ayuda-accidente-camion" }, { name: q.fullTitle, url: `/es/ayuda-accidente-camion/conductor-usando-telefono` }])} />

      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4">
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/es" className="hover:text-white">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/es/ayuda-accidente-camion" className="hover:text-white">Ayuda con Accidentes de Camión</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{q.fullTitle}</span>
          </nav>
          <h1 className="text-3xl font-bold md:text-4xl">{q.fullTitle}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-xl border border-brand-coral/20 bg-brand-cream p-6 mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-coral mb-2">Respuesta Rápida</p>
            <p className="text-lg leading-relaxed text-gray-700">{q.summary}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            {q.fullContent.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-6 leading-relaxed text-gray-600">{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-brand-navy p-8 text-center text-white">
            <h2 className="text-2xl font-bold">¿Necesita Ayuda con Su Caso?</h2>
            <p className="mt-2 text-gray-300">Obtenga una consulta gratuita y sin compromiso de nuestros abogados de accidentes de camión.</p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href={`tel:+1${PHONE_NUMBER}`} className="btn-lift inline-flex items-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-lg font-bold shadow-lg transition-colors hover:bg-brand-red-light">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Llame Ahora: {PHONE_DISPLAY}
              </a>
              <Link href={routes.contact} className="btn-lift rounded-xl bg-brand-coral px-8 py-4 text-lg font-bold shadow-lg transition-colors hover:bg-brand-coral-light">
                Evaluación Gratis
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">{dict.cta.microcopy}</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-brand-navy">Preguntas Relacionadas</h3>
            <div className="mt-4 space-y-3">
              {d.questions.filter((_, i) => i !== 4).slice(0, 4).map((related) => (
                <Link key={related.slug} href={routes[related.slug as keyof typeof routes]} className="block rounded-lg border border-gray-200 px-5 py-3 text-brand-navy transition-colors hover:border-brand-coral hover:text-brand-coral">
                  {related.question}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/es/ayuda-accidente-camion" className="inline-flex items-center gap-1 font-medium text-brand-coral hover:text-brand-rose">
                <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                Volver a todas las preguntas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
