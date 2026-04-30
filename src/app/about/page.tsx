import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/dictionaries";
import { SITE_URL } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import TrustBadges from "@/components/TrustBadges";
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
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">{d.teamTitle}</h2>

          {/* Laura Ramos James */}
          <div className="mt-12 grid items-start gap-10 md:grid-cols-[280px_1fr]">
            <div className="mx-auto w-[280px] shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/Laura-Ramos-James-2026-1851.jpg"
                  alt="Attorney Laura Ramos James"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-navy">Laura Ramos James</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-red">
                Founder &amp; Sole Owner
              </p>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Named &ldquo;Changemaker&rdquo; by Austin Woman Magazine for 2025, Winner of the 2023
                  Austin Woman&rsquo;s Magazine &ldquo;Woman&rsquo;s Way&rdquo; Award and the &ldquo;Advocacy and
                  Activism&rdquo; Award by the Latina Foundation, Laura Ramos James is one of the most
                  recognized Lawyers in Texas and a women attorney who has supported disadvantaged
                  communities in Austin and South Texas for several years.
                </p>
                <p>
                  A personal injury victim herself, Laura hoped that one day she&rsquo;d be the loud and
                  fierce voice of those who could not speak on their own behalf in court and amplify the
                  voice of those who could. After graduating law school at Baylor Law with honors, Laura
                  began the arduous professional path that culminated in the founding of Ramos James Law,
                  PLLC in 2018.
                </p>
                <p>
                  With well over a decade of legal experience, Laura has successfully handled hundreds of
                  personal injury cases involving auto and trucking accidents, drunk driving accidents,
                  distracted driver accidents, commercial vehicle accidents, work injury, product liability,
                  Texas Health Care Liability claims, sexual assault cases, complex construction accident and
                  construction defects, catastrophic injury, wrongful death cases and more.
                </p>
                <p>
                  For Laura, the most significant and transforming influence in her life has been becoming
                  the mother of two little girls with her husband Jon: Victoria &amp; Alexandra.
                </p>
                <p>
                  Laura has received some of the highest recognitions in her industry, being named a
                  &ldquo;Rising Star&rdquo; by the Super Lawyers&trade; organization for five consecutive years,
                  being honored as part of even more exclusive recognition within Super Lawyers&trade; for
                  the years 2023 &amp; 2024 (Up-and-Coming 100: Texas Rising Stars: 2023 &amp; 2024;
                  Up-and-Coming 50: Women Texas Rising Stars: 2023 &amp; 2024) and with lifetime membership
                  in the coveted Million and Multi-Million Advocates Forums. Laura is also a member of the
                  National Trial Lawyers Top 100 and National Trial Lawyers Top 40 Under 40. By 2020, Laura
                  had been distinguished as one of America&rsquo;s Top 100 Attorneys&reg; High Stakes Litigator.
                </p>
                <p>
                  Laura is a member of several trial lawyer associations such as Capital Area Trial Lawyers
                  Association where she serves as part of the Executive Committee; Texas Trial Lawyers
                  Association, where she serves as part of the Diversity, Equity and Inclusivity committee;
                  the Travis County Women Lawyers Association, Hispanic Bar Association, and
                  Mexican-American Association of Texas, to name a few.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-14 border-gray-200" />

          {/* Lyliana Zamora */}
          <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
            <div className="mx-auto w-[280px] shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/lyliana-zamora.webp"
                  alt="Senior Paralegal Lyliana Zamora"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-navy">Lyliana Zamora</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-red">
                Senior Paralegal
              </p>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lyliana Zamora was born and raised in Austin, Texas, but has lived in the San Antonio area
                  for the past 7 years. She has over 10 years of experience in personal injury in addition
                  to experience with family law and business litigation. Lyliana&rsquo;s passion to work in
                  the personal injury legal field derives from the rewarding feeling of being able to help
                  people throughout their case. She enjoys being able to be the voice of people that feel
                  they have no voice or a right to be heard. Lyliana always makes it a priority to ensure
                  she&rsquo;s guiding families through this process to make sure they have no doubt their case
                  is being properly handled.
                </p>
                <p>
                  During her free time, she enjoys spending time with her husband, daughter, and son. She
                  also has two Huskies that go wherever the family goes. They love to attend live sporting
                  events (Go Spurs Go!) and explore the outdoors as much as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      <CTASection dict={dict} locale="en" variant="dark" />
    </PageShell>
  );
}
