import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Average 18-Wheeler Accident Settlement in Texas",
  description: "How Texas 18-wheeler settlement amounts are calculated, using a publicly reported jury verdict. There is no single average. Free case review.",
  alternates: {
    canonical: `${SITE_URL}/truck-accident-help/average-18-wheeler-settlement`,
    languages: {
      en: `${SITE_URL}/truck-accident-help/average-18-wheeler-settlement`,
      es: `${SITE_URL}/es/ayuda-accidente-camion/acuerdo-promedio-18-ruedas`,
      "x-default": `${SITE_URL}/truck-accident-help/average-18-wheeler-settlement`,
    },
  },
};

export default function QAPage() {
  const dict = getDictionary("en");
  const d = dict.helpHub;
  const q = d.questions[8];
  const routes = ROUTES.en;

  return (
    <PageShell dict={dict} locale="en">
      <JsonLd data={localBusinessSchema("en")} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Truck Accident Help", url: "/truck-accident-help" }, { name: q.fullTitle, url: `/truck-accident-help/average-18-wheeler-settlement` }])} />

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
            <h2 className="mb-4 mt-10 text-2xl font-bold text-brand-navy">How Texas 18-Wheeler Settlement Amounts Are Calculated</h2>
            <p className="mb-6 leading-relaxed text-gray-600">There is no official average. A settlement, or a jury verdict, is built from the same pieces, and then cut by fault and by what insurance can pay.</p>
            <p className="mb-6 leading-relaxed text-gray-600">Economic damages are the bills and the paycheck: past and future medical care, lost wages, reduced earning capacity, and property damage. Non-economic damages cover pain, mental anguish, disfigurement, and physical impairment. Texas does not use a fixed multiplier for those. If the conduct was especially reckless, a jury can also consider punitive damages, which are not available in an ordinary negligence case.</p>
            <p className="mb-6 leading-relaxed text-gray-600">Fault comes next. Texas uses modified comparative responsibility. If you are 51% or more at fault, you recover nothing. If you are 50% or less, the amount is reduced by your percentage. The number a jury writes down is not the check. It is then limited by the insurance policy. Federal rules require at least $750,000 for many freight trucks, $1 million for oil, and $5 million for certain hazardous loads. A verdict above the policy is not the same as money collected.</p>
            <p className="mb-6 leading-relaxed text-gray-600">A publicly reported Texas case shows that math, and also why a verdict is not a promise. In Werner Enterprises, Inc. v. Blake, a Harris County jury considered a December 30, 2014 crash on I-20 near Odessa. A pickup lost control, crossed the median, and hit a Werner 18-wheeler. Seven-year-old Zackery Blake was killed. His 12-year-old sister, Brianna, was left quadriplegic. The jury awarded Jennifer Blake $16,500,000, Nathan Blake $5,000,000, and Brianna Blake $68,187,994. It assigned 70% of the responsibility to Werner employees other than the driver, 14% to the driver, and 16% to the pickup driver. Werner told the SEC the gross verdict was about $89.7 million. The trial court later signed a judgment of more than $100 million with interest.</p>
            <p className="mb-6 leading-relaxed text-gray-600">On June 27, 2025, the Texas Supreme Court reversed that judgment and rendered judgment for Werner and the driver. The Court held the pickup driver&apos;s loss of control was the sole proximate cause. See Werner Enterprises, Inc. v. Blake, No. 23-0493 (Tex. June 27, 2025), and Werner&apos;s May 17, 2018 Form 8-K. The published awards show how a jury separates each person&apos;s harms and then splits fault. They are not an average, and the family did not keep that judgment. Another firm&apos;s verdict does not predict your case.</p>
            <p className="mb-6 text-sm leading-relaxed text-gray-500">
              Sources:{" "}
              <a href="https://www.txcourts.gov/media/1460821/230493.pdf" className="underline" target="_blank" rel="noopener noreferrer">Texas Supreme Court opinion</a>
              {" · "}
              <a href="https://www.sec.gov/Archives/edgar/data/793074/000079307418000024/wern-20180517x8k.htm" className="underline" target="_blank" rel="noopener noreferrer">Werner Form 8-K, May 17, 2018</a>
            </p>
          </div>

          <div className="mt-12 rounded-xl bg-brand-navy p-8 text-center text-white">
            <h2 className="text-2xl font-bold">Need Help With Your Case?</h2>
            <p className="mt-2 text-gray-300">Get a free, no-obligation consultation from our truck accident law firm.</p>
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
              {d.questions.filter((_, i) => i !== 8).slice(0, 4).map((related) => (
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
