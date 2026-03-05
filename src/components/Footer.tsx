import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { type Locale, ROUTES, PHONE_NUMBER, PHONE_DISPLAY, FIRM_ADDRESS } from "@/lib/constants";

export default function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const routes = ROUTES[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold">
              <span className="text-brand-coral">TRUCKING</span> CHICAS
            </p>
            <p className="mt-2 text-sm text-gray-400">
              {locale === "en"
                ? "A division of Ramos James Law"
                : "Una división de Ramos James Law"}
            </p>
            <address className="mt-4 text-sm not-italic text-gray-400">
              {FIRM_ADDRESS.street}
              <br />
              {FIRM_ADDRESS.city}, {FIRM_ADDRESS.state} {FIRM_ADDRESS.zip}
            </address>
            <a
              href={`tel:+1${PHONE_NUMBER}`}
              className="mt-2 inline-block text-lg font-bold text-brand-coral hover:text-brand-coral-light"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-400">
              {locale === "en" ? "Quick Links" : "Enlaces Rápidos"}
            </h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              {[
                { href: routes.truckAccident, label: dict.nav.truckAccident },
                { href: routes.eighteenWheeler, label: dict.nav.eighteenWheeler },
                { href: routes.areas, label: dict.nav.areas },
                { href: routes.faq, label: dict.nav.faq },
                { href: routes.about, label: dict.nav.about },
                { href: routes.contact, label: dict.nav.contact },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-sm text-gray-300 transition-colors hover:text-brand-coral"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-400">
              {dict.cta.heading}
            </h3>
            <p className="mb-4 text-sm text-gray-300">{dict.cta.subtext}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:+1${PHONE_NUMBER}`}
                className="rounded-lg bg-brand-rose px-6 py-3 text-center font-bold transition-colors hover:bg-brand-rose-dark"
              >
                {dict.cta.callNow}
              </a>
              <Link
                href={routes.contact}
                className="rounded-lg bg-brand-coral px-6 py-3 text-center font-bold text-white transition-colors hover:bg-brand-coral-light"
              >
                {dict.cta.freeReview}
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-gray-500">
            {dict.footer.disclaimer}
          </p>
          <p className="mt-4 text-xs text-gray-500">
            &copy; {year} {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
