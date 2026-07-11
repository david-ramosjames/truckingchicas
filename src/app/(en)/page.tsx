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
import CaseEstimateModal from "@/components/CaseEstimateModal";
import TrustBadges from "@/components/TrustBadges";
import { localBusinessSchema, faqSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Texas Truck & 18-Wheeler Accident Lawyers",
  description:
    "Hit by a truck in Texas? Trucking Chicas fights for truck and 18-wheeler accident victims. Free case review. No fees unless we win.",
  alternates: {
    canonical: SITE_URL,
    languages: { en: SITE_URL, es: `${SITE_URL}/es` },
  },
  openGraph: {
    title: "Texas Truck & 18-Wheeler Accident Lawyers",
    description:
      "Hit by a truck in Texas? Trucking Chicas fights for truck and 18-wheeler accident victims. Free case review. No fees unless we win.",
    url: SITE_URL,
  },
};

/* SVG icon map for core values */
const valueIcons: Record<string, React.ReactNode> = {
  scale: (
    <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  truck: (
    <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 17h1m16 0h1m-1 0a2 2 0 11-4 0 2 2 0 014 0zM7 17a2 2 0 11-4 0 2 2 0 014 0zm-4 0V7a1 1 0 011-1h10a1 1 0 011 1v10m0-7h4l3 3v4" />
    </svg>
  ),
  grit: (
    <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

export default function HomePage() {
  const dict = getDictionary("en");
  const routes = ROUTES["en"];

  return (
    <PageShell dict={dict} locale="en">
      <JsonLd data={localBusinessSchema("en")} />
      <JsonLd data={faqSchema(dict.faq.items.slice(0, 7))} />

      {/* Hero */}
      <HeroSection dict={dict} locale="en" />

      {/* Why Clients Trust Trucking Chicas */}
      <section className="bg-brand-cream py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">
              Why Clients Trust Trucking Chicas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
              Truck accident cases are complex. We make them clearer, faster, and less overwhelming.
            </p>
          </div>

          {/* Trust cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Truck Accident Focused",
                desc: "We help victims after 18-wheeler, semi-truck, and commercial vehicle crashes, not your everyday fender-bender.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17h1m16 0h1m-1 0a2 2 0 11-4 0 2 2 0 014 0zM7 17a2 2 0 11-4 0 2 2 0 014 0zm-4 0V7a1 1 0 011-1h10a1 1 0 011 1v10m0-7h4l3 3v4" />
                  </svg>
                ),
              },
              {
                title: "Real Support From Start to Finish",
                desc: "We help you understand your case, your next steps, and what compensation may be available.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                ),
              },
              {
                title: "Maximum Compensation Mindset",
                desc: "We look at medical bills, lost income, pain, property damage, and long-term impact, not just the obvious costs.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-brand-coral/15 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-rose/10 text-brand-rose">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-navy">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust chips */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              "No Fee Unless We Win",
              "Free Case Review",
              "Available 24/7",
              "Hablamos Español",
            ].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 rounded-full border border-brand-coral/30 bg-white px-4 py-1.5 text-sm font-medium text-brand-navy shadow-sm"
              >
                <svg className="h-4 w-4 text-brand-rose" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {chip}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="pulse-halo btn-lift inline-flex items-center gap-3 rounded-xl bg-brand-rose px-10 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-brand-rose-dark"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="lg:hidden">Call Now — Free Consultation</span><span className="hidden lg:inline">{dict.cta.callNow}: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Truck Accidents Are Different */}
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

      {/* Types of Truck Accidents */}
      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            {dict.accidentTypes.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-300">
            {dict.accidentTypes.subtitle}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dict.accidentTypes.items.map((item) => {
              const images: Record<string, string> = {
                eighteenWheeler: "/trucks/18-wheelers.jpg",
                deliveryTruck: "/trucks/fedex.webp",
                oilfieldTanker: "/trucks/oil-tanker.jpg",
                dumpTruck: "/trucks/dump-truck.webp",
                boxTruck: "/trucks/box-truck.webp",
                truckAccident: "/trucks/all-trucks.webp",
              };
              return (
                <Link
                  key={item.title}
                  href={routes[item.href as keyof typeof routes]}
                  className="card-lift group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-brand-red hover:bg-white/10"
                >
                  <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={images[item.href] || images.truckAccident}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                      sizes="112px"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold group-hover:text-brand-red">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values — brand pillars */}
      <section className="relative overflow-hidden bg-brand-cream py-14 md:py-16">
        {/* Subtle tire-tread texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:repeating-linear-gradient(45deg,#121212_0px,#121212_1px,transparent_1px,transparent_18px)]"
        />
        {/* Warm red glow behind the header */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(229,57,53,0.07),transparent_70%)]"
        />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="reveal-up mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl">
              {dict.home.coreValuesTitle}
            </h2>
            {/* Dashed highway-lane divider */}
            <div
              aria-hidden
              className="mx-auto mt-5 h-[3px] w-40 opacity-80 [background-image:repeating-linear-gradient(90deg,#E53935_0px,#E53935_20px,transparent_20px,transparent_32px)]"
            />
            <p className="mt-4 text-xl font-bold text-brand-red sm:text-2xl">
              {dict.home.coreValuesSubtitle}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              {dict.home.coreValuesLede}
            </p>
          </div>

          {/* Pillars */}
          <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
            {dict.home.coreValues.map((v) => (
              <div
                key={v.title}
                className="reveal-up group relative flex flex-col rounded-3xl bg-white p-6 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.04] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_28px_60px_-15px_rgba(0,0,0,0.28)] hover:ring-2 hover:ring-brand-red/40 md:p-7"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white">
                  {valueIcons[v.icon] || valueIcons.scale}
                </div>
                <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-brand-navy">
                  {v.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection dict={dict} locale="en" variant="dark" />

      {/* Featured Results: Premium Editorial */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C62828]">
              Featured Results
            </p>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy md:text-4xl">
              Fighting for Maximum Compensation: Case by Case
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
              Every case is different. But when serious injuries and commercial vehicles are involved, we fight to recover the full value our clients deserve.
            </p>
          </div>

          {/* Featured case cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { amount: "$475,000", label: "Recovery", title: "Company Vehicle Crash", detail: "Client required spine surgery" },
              { amount: "$375,000", label: "Recovery", title: "18-Wheeler Side-Swipe Collision", detail: "Commercial vehicle negligence" },
              { amount: "High Six-Figure", label: "Settlement", title: "18-Wheeler Crash (Confidential)", detail: "Severe damages" },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-gray-200 bg-gray-50/50 px-6 py-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-5 h-px w-10 bg-[#C62828]/50" />
                <p className="text-2xl font-bold text-[#C62828] md:text-3xl">{c.amount}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#C62828]/60">{c.label}</p>
                <p className="mt-4 text-base font-semibold text-brand-navy">{c.title}</p>
                <p className="mt-1 text-sm italic text-gray-500">{c.detail}</p>
              </div>
            ))}
          </div>

          {/* Support line */}
          <p className="mt-10 text-center text-sm font-medium text-gray-600">
            + Additional six-figure recoveries across 18-wheeler, Mack truck, and company vehicle cases
          </p>

          {/* Disclaimer */}
          <p className="mt-3 text-center text-xs text-gray-400">
            Results depend on the facts of each case. Not all cases result in the same outcome.
          </p>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-lg font-medium text-brand-navy">
              Find out what your case could be worth
            </p>
            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="btn-lift inline-flex items-center gap-3 rounded-xl bg-brand-rose px-10 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-brand-rose-dark"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="lg:hidden">Call Now — Free Consultation</span><span className="hidden lg:inline">Call Now: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {dict.home.testimonialsTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {dict.home.testimonials.map((t) => (
              <div key={t.name} className="card-lift rounded-xl border-l-4 border-brand-coral bg-white p-6 shadow-md">
                <svg className="mb-3 h-8 w-8 text-brand-coral/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-gray-700">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="font-bold text-brand-navy">{t.name}</p>
                  <div className="mt-1 flex gap-0.5" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} className="h-4 w-4 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You May Recover */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy md:text-4xl">
            {dict.home.recoverTitle}
          </h2>
          <ul className="mt-8 space-y-3">
            {dict.home.recoverItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 shrink-0 text-brand-coral" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
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

      {/* Why Choose Trucking Chicas */}
      {/* Mobile: image visible at top, cards flow below with negative margin overlap */}
      <section className="relative md:hidden">
        <div className="relative h-64 sm:h-80">
          <Image
            src={IMAGES.chooseUs}
            alt="Why choose Trucking Chicas"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/20 via-brand-navy/40 to-brand-navy/80" />
          <h2 className="absolute inset-x-0 bottom-4 text-center text-2xl font-extrabold text-white sm:text-3xl">
            {dict.home.whyUsTitle}
          </h2>
        </div>
        <div className="bg-brand-navy px-4 pb-8 pt-4">
          <div className="grid gap-4">
            {dict.home.whyUsItems.map((item) => (
              <div key={item.title} className="card-lift card-border-top rounded-lg bg-white/95 p-4 shadow-lg">
                <h3 className="text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Desktop: full image with overlaid cards */}
      <section className="relative hidden md:block">
        <div className="relative min-h-[850px]">
          <Image
            src={IMAGES.chooseUs}
            alt="Why choose Trucking Chicas"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-brand-navy/50 to-brand-navy/85" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-16">
            <h2 className="text-center text-4xl font-extrabold text-white">
              {dict.home.whyUsTitle}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {dict.home.whyUsItems.map((item) => (
                <div key={item.title} className="card-lift card-border-top rounded-lg bg-white/95 p-6 shadow-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-start gap-12 md:grid-cols-2">
            {/* Left: messaging */}
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
                  <span className="lg:hidden">Call Now — Free Consultation</span><span className="hidden lg:inline">{dict.cta.callNow}: {PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
            {/* Right: form */}
            <div className="rounded-xl bg-white p-6 shadow-lg md:p-8">
              <h3 className="mb-6 text-xl font-bold text-brand-navy">{dict.cta.formHeading}</h3>
              <ContactForm dict={dict} locale="en" />
            </div>
          </div>
        </div>
      </section>

      {/* What To Do After a Truck Accident */}
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

      {/* Short FAQ */}
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

      {/* Trust Badges */}
      <TrustBadges />

      {/* Final CTA */}
      <CTASection dict={dict} locale="en" variant="dark" />

      {/* Case Estimate Modal */}
      <CaseEstimateModal dict={dict} locale="en" />
    </PageShell>
  );
}
