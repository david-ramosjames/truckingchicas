import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, PHONE_NUMBER, PHONE_DISPLAY, FIRM_ADDRESS } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us: Free Truck Accident Case Review",
  description:
    "Contact Trucking Chicas for a free, no-obligation truck accident case review. Call 24/7 or fill out our form. We fight for Texas truck accident victims.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
    languages: {
      en: `${SITE_URL}/contact`,
      es: `${SITE_URL}/es/contacto`,
    },
  },
};

export default function ContactPage() {
  const dict = getDictionary("en");
  const d = dict.contact;

  return (
    <PageShell dict={dict} locale="en">
      <JsonLd data={localBusinessSchema("en")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />

      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">{d.heading}</h1>
          <p className="mt-4 text-lg text-gray-300">{d.subhead}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-brand-navy">{d.formTitle}</h2>
            <div className="mt-6">
              <ContactForm dict={dict} />
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy">{d.callTitle}</h2>
              <p className="mt-2 text-gray-600">{d.callDesc}</p>
              <a
                href={`tel:+1${PHONE_NUMBER}`}
                className="mt-4 inline-block rounded-lg bg-brand-rose px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-rose-dark"
              >
                {dict.cta.callNow}: {PHONE_DISPLAY}
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-navy">{d.addressTitle}</h2>
              <address className="mt-2 text-lg not-italic text-gray-600">
                {FIRM_ADDRESS.street}
                <br />
                {FIRM_ADDRESS.city}, {FIRM_ADDRESS.state} {FIRM_ADDRESS.zip}
              </address>
            </div>

            {/* Trust signals */}
            <div className="rounded-lg bg-brand-cream p-6">
              <ul className="space-y-3">
                {[dict.hero.trust1, dict.hero.trust2, dict.hero.trust3].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-brand-coral" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium text-brand-navy">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
