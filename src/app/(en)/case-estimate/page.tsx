import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { SITE_URL } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import CaseEstimateForm from "@/components/CaseEstimateForm";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Free AI Case Estimate | Trucking Chicas",
  description:
    "Get a free, instant AI-powered estimate for your Texas truck accident case. Answer a few questions and receive a preliminary case evaluation.",
  alternates: {
    canonical: `${SITE_URL}/case-estimate`,
    languages: {
      en: `${SITE_URL}/case-estimate`,
      es: `${SITE_URL}/es/estimacion-de-caso`,
    },
  },
};

export default function CaseEstimatePage() {
  const dict = getDictionary("en");
  const d = dict.caseEstimate;

  return (
    <PageShell dict={dict} locale="en">
      <JsonLd data={localBusinessSchema("en")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: d.title, url: "/case-estimate" },
        ])}
      />

      {/* Hero */}
      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-coral/20">
            <svg className="h-8 w-8 text-brand-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.591.659H9.061a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V17a2 2 0 01-2 2H7a2 2 0 01-2-2v-2.5" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold md:text-5xl">{d.heading}</h1>
          <p className="mt-4 text-lg text-gray-300">{d.subhead}</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4">
          <CaseEstimateForm dict={dict} locale="en" />
        </div>
      </section>
    </PageShell>
  );
}
