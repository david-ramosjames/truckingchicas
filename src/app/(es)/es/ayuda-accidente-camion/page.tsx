import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ayuda con Accidentes de Camión — Abogado en Texas",
  description:
    "Respuestas sobre accidentes de camión para víctimas en Texas. Aprenda sobre sus derechos, cómo funcionan los casos y qué hacer después de un choque con un 18 ruedas.",
  alternates: {
    canonical: `${SITE_URL}/es/ayuda-accidente-camion`,
    languages: {
      en: `${SITE_URL}/truck-accident-help`,
      es: `${SITE_URL}/es/ayuda-accidente-camion`,
    },
  },
  openGraph: {
    title: "Ayuda con Accidentes de Camión — Abogado en Texas",
    description:
      "Respuestas sobre accidentes de camión para víctimas en Texas. Aprenda sobre sus derechos, cómo funcionan los casos y qué hacer después de un choque con un 18 ruedas.",
    url: `${SITE_URL}/es/ayuda-accidente-camion`,
  },
};

export default function HelpHubPageES() {
  const dict = getDictionary("es");
  const d = dict.helpHub;
  const routes = ROUTES.es;

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={localBusinessSchema("es")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: "/es" },
          { name: "Ayuda con Accidentes de Camión", url: "/es/ayuda-accidente-camion" },
        ])}
      />
      <JsonLd
        data={faqSchema(
          d.questions.map((q) => ({ q: q.question, a: q.summary }))
        )}
      />

      <HeroSection
        dict={dict}
        locale="es"
        headline={d.heroHeadline}
        subhead={d.heroSubhead}
      />

      <section className="bg-brand-cream py-14">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-xl border border-brand-coral/20 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-coral/10">
                <svg className="h-4 w-4 text-brand-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-coral">
                Respuesta Rápida
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              {d.directAnswer}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {d.whyDifferentTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {d.whyDifferentItems.map((item, i) => (
              <div
                key={item.title}
                className={`rounded-xl bg-white p-6 shadow-md ${
                  i === d.whyDifferentItems.length - 1 && d.whyDifferentItems.length % 3 === 2
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy">
                  <span className="text-lg font-bold">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{dict.cta.heading}</h2>
          <p className="mt-3 text-gray-300">{dict.cta.subtext}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="btn-lift inline-flex items-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-lg font-bold shadow-lg transition-colors hover:bg-brand-red-light"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {dict.cta.callNow}: {PHONE_DISPLAY}
            </a>
            <Link
              href={routes.contact}
              className="btn-lift rounded-xl bg-brand-coral px-8 py-4 text-lg font-bold shadow-lg transition-colors hover:bg-brand-coral-light"
            >
              {dict.cta.freeReview}
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-400">{dict.cta.microcopy}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {d.questionsTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
            {d.questionsSubtitle}
          </p>
          <div className="mt-12 space-y-6">
            {d.questions.map((q) => (
              <article
                key={q.slug}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-brand-navy">
                  {q.question}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {q.summary}
                </p>
                <Link
                  href={routes[q.slug as keyof typeof routes]}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-coral transition-colors hover:text-brand-rose"
                >
                  Leer respuesta completa
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.texasTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {d.texasItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.relatedTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href={routes.truckAccident} className="rounded-lg border border-gray-200 bg-white px-5 py-4 font-medium text-brand-navy transition-colors hover:border-brand-coral hover:text-brand-coral">
              {dict.nav.truckAccident}
            </Link>
            <Link href={routes.eighteenWheeler} className="rounded-lg border border-gray-200 bg-white px-5 py-4 font-medium text-brand-navy transition-colors hover:border-brand-coral hover:text-brand-coral">
              {dict.nav.eighteenWheeler}
            </Link>
            <Link href={routes.deliveryTruck} className="rounded-lg border border-gray-200 bg-white px-5 py-4 font-medium text-brand-navy transition-colors hover:border-brand-coral hover:text-brand-coral">
              Accidentes de FedEx y UPS
            </Link>
            <Link href={routes.oilfieldTanker} className="rounded-lg border border-gray-200 bg-white px-5 py-4 font-medium text-brand-navy transition-colors hover:border-brand-coral hover:text-brand-coral">
              Accidentes de Petroleros y Cisternas
            </Link>
            <Link href={routes.areas} className="rounded-lg border border-gray-200 bg-white px-5 py-4 font-medium text-brand-navy transition-colors hover:border-brand-coral hover:text-brand-coral">
              {dict.nav.areas}
            </Link>
            <Link href={routes.faq} className="rounded-lg border border-gray-200 bg-white px-5 py-4 font-medium text-brand-navy transition-colors hover:border-brand-coral hover:text-brand-coral">
              {dict.nav.faq}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{d.finalCtaHeading}</h2>
          <p className="mt-4 text-lg text-gray-300">{d.finalCtaSubhead}</p>
          <div className="mt-8">
            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="btn-lift btn-glow-coral inline-flex items-center gap-3 rounded-xl bg-brand-red px-10 py-5 text-xl font-bold shadow-lg transition-colors hover:bg-brand-red-light"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {dict.cta.callNow}: {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">{dict.cta.microcopy}</p>
        </div>
      </section>
    </PageShell>
  );
}
