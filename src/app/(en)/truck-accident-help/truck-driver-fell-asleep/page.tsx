import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Does It Matter If the Truck Driver Was Tired?",
  description: "Fatigued truck driver caused your accident? Learn how hours-of-service violations and driver fatigue affect your Texas truck accident claim.",
  alternates: {
    canonical: `${SITE_URL}/truck-accident-help/truck-driver-fell-asleep`,
    languages: {
      en: `${SITE_URL}/truck-accident-help/truck-driver-fell-asleep`,
      es: `${SITE_URL}/es/ayuda-accidente-camion/conductor-dormido`,
      "x-default": `${SITE_URL}/truck-accident-help/truck-driver-fell-asleep`,
    },
  },
};

export default function QAPage() {
  const dict = getDictionary("en");
  const d = dict.helpHub;
  const q = d.questions[5];
  const routes = ROUTES.en;

  return (
    <PageShell dict={dict} locale="en">
      <JsonLd data={localBusinessSchema("en")} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Truck Accident Help", url: "/truck-accident-help" }, { name: q.fullTitle, url: `/truck-accident-help/truck-driver-fell-asleep` }])} />

      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4">
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/truck-accident-help" className="hover:text-white">Truck Accident Help</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{q.fullTitle}</span>
          </nav>
          <h1 className="text-3xl font-bold md:text-4xl">{q.fullTitle}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-xl border border-brand-coral/20 bg-brand-cream p-6 mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-coral mb-2">Quick Answer</p>
            <p className="text-lg leading-relaxed text-gray-700">{q.summary}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            {q.fullContent.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-6 leading-relaxed text-gray-600">{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-brand-navy p-8 text-center text-white">
            <h2 className="text-2xl font-bold">Need Help With Your Case?</h2>
            <p className="mt-2 text-gray-300">Get a free, no-obligation consultation from our truck accident attorneys.</p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href={`tel:+1${PHONE_NUMBER}`} className="btn-lift inline-flex items-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-lg font-bold shadow-lg transition-colors hover:bg-brand-red-light">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="lg:hidden">Call Now — Free Consultation</span><span className="hidden lg:inline">Call Now: {PHONE_DISPLAY}</span>
              </a>
              <Link href={routes.contact} className="btn-lift rounded-xl bg-brand-coral px-8 py-4 text-lg font-bold shadow-lg transition-colors hover:bg-brand-coral-light">
                Free Case Review
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">{dict.cta.microcopy}</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-brand-navy">Related Questions</h3>
            <div className="mt-4 space-y-3">
              {d.questions.filter((_, i) => i !== 5).slice(0, 4).map((related) => (
                <Link key={related.slug} href={routes[related.slug as keyof typeof routes]} className="block rounded-lg border border-gray-200 px-5 py-3 text-brand-navy transition-colors hover:border-brand-coral hover:text-brand-coral">
                  {related.question}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/truck-accident-help" className="inline-flex items-center gap-1 font-medium text-brand-coral hover:text-brand-rose">
                <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                Back to all questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
