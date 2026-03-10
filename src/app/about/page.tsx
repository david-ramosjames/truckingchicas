import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { SITE_URL } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Trucking Chicas | Texas Truck Accident Lawyers",
  description:
    "Learn about Trucking Chicas, a Texas law firm focused exclusively on truck and 18-wheeler accident cases.",
  alternates: {
    canonical: `${SITE_URL}/about`,
    languages: {
      en: `${SITE_URL}/about`,
      es: `${SITE_URL}/es/sobre-nosotros`,
    },
  },
};

export default function AboutPage() {
  const dict = getDictionary("en");
  const d = dict.about;

  return (
    <PageShell dict={dict} locale="en">
      <JsonLd data={localBusinessSchema("en")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: d.title, url: "/about" },
        ])}
      />

      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">{d.heading}</h1>
          <p className="mt-6 text-lg text-gray-300">{d.intro}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.missionTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{d.missionDesc}</p>
        </div>
      </section>

      {/* Values */}
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

      {/* Team placeholder */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">{d.teamTitle}</h2>
          <p className="mt-4 text-gray-600">{d.teamPlaceholder}</p>
          {/* TODO: Add attorney bios/photos here */}
        </div>
      </section>

      <CTASection dict={dict} locale="en" variant="dark" />
    </PageShell>
  );
}
