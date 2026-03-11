import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy">{d.missionTitle}</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">{d.missionDesc}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="Legal consultation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">{d.valuesTitle}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {d.values.map((v) => (
              <div key={v.title} className="card-lift card-border-left rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-navy">{v.title}</h3>
                <p className="mt-2 text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">{d.teamTitle}</h2>
          <p className="mt-4 text-gray-600">{d.teamPlaceholder}</p>
          <div className="relative mx-auto mt-10 aspect-[16/9] max-w-3xl overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80"
              alt="Our legal team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
          </div>
        </div>
      </section>

      <CTASection dict={dict} locale="en" variant="dark" />
    </PageShell>
  );
}
