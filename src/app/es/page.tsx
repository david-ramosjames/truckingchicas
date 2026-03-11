import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, ROUTES, PHONE_NUMBER, PHONE_DISPLAY, TEXAS_CITIES } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";
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

const valueIcons: Record<string, React.ReactNode> = {
  shield: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  heart: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  handshake: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11l4-4 4 4m-4 8V7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  megaphone: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  trophy: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3h14M9 3v2a3 3 0 006 0V3M5 3a2 2 0 00-2 2v2a5 5 0 004 4.9V15a1 1 0 001 1h8a1 1 0 001-1v-3.1A5 5 0 0021 7V5a2 2 0 00-2-2M8 21h8m-4-4v4" />
    </svg>
  ),
};

export default function HomePageES() {
  const dict = getDictionary("es");
  const routes = ROUTES["es"];

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
              <div key={item.title} className="card-lift card-border-left rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {dict.home.coreValuesTitle}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.home.coreValues.map((v) => (
              <div key={v.title} className="card-lift rounded-xl bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral">
                  {valueIcons[v.icon] || valueIcons.shield}
                </div>
                <h3 className="text-lg font-bold text-brand-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dict={dict} locale="es" variant="dark" />

      {/* Results */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {dict.home.resultsTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            {dict.home.resultsSubtitle}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.home.results.map((r) => (
              <div key={r.desc} className="card-lift card-border-top rounded-xl bg-white p-6 text-center shadow-md">
                <p className="text-4xl font-extrabold text-brand-coral">{r.amount}</p>
                <p className="mt-2 font-medium text-brand-navy">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-400">{dict.home.resultsDisclaimer}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {dict.home.testimonialsTitle}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {dict.home.testimonials.map((t) => (
              <div key={t.name} className="card-lift rounded-xl border-l-4 border-brand-coral bg-white p-6 shadow-md">
                <svg className="mb-3 h-8 w-8 text-brand-coral/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-gray-700">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="font-bold text-brand-navy">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {dict.home.recoverTitle}
          </h2>
          <ul className="mt-8 space-y-3">
            {dict.home.recoverItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 shrink-0 text-brand-coral" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            {dict.home.areasHomeTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-300">
            {dict.home.areasHomeSubtitle}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {TEXAS_CITIES.map((city) => (
              <Link
                key={city}
                href={routes.areas}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center font-medium transition-colors hover:border-brand-coral hover:bg-white/10"
              >
                {city}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={routes.areas}
              className="btn-lift inline-flex items-center gap-2 rounded-xl bg-brand-coral px-6 py-3 font-bold text-white transition-colors hover:bg-brand-coral-light"
            >
              {dict.home.areasHomeCta}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Texas highway image banner */}
      <section className="relative h-64 md:h-80">
        <Image
          src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80"
          alt="Carretera de Texas"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-navy/50" />
        <div className="relative flex h-full items-center justify-center text-center">
          <p className="text-3xl font-extrabold text-white md:text-4xl">
            {dict.home.whyUsTitle}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {dict.home.whyUsItems.map((item) => (
              <div key={item.title} className="card-lift card-border-top rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">
                {dict.home.consultFormTitle}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {dict.home.consultFormSubtitle}
              </p>
              <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-coral/10">
                    <svg className="h-7 w-7 text-brand-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-brand-navy">{dict.home.consultFormNoFee}</p>
                    <p className="text-sm text-gray-600">{dict.home.consultFormNoFeeDesc}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={`tel:+1${PHONE_NUMBER}`}
                  className="btn-lift btn-glow-rose inline-flex items-center gap-2 rounded-xl bg-brand-rose px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-rose-dark"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {dict.cta.callNow}: {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-lg md:p-8">
              <h3 className="mb-6 text-xl font-bold text-brand-navy">{dict.cta.formHeading}</h3>
              <ContactForm dict={dict} />
            </div>
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
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-coral text-lg font-bold text-white">
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
