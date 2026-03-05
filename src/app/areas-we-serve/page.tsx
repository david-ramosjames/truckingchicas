import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, TEXAS_CITIES } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import CitySection from "@/components/CitySection";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas We Serve — Texas Truck Accident Lawyer",
  description:
    "Trucking Chicas serves truck and 18-wheeler accident victims across Texas, including Houston, Dallas, Austin, San Antonio, and more.",
  alternates: {
    canonical: `${SITE_URL}/areas-we-serve`,
    languages: {
      en: `${SITE_URL}/areas-we-serve`,
      es: `${SITE_URL}/es/areas-que-servimos`,
    },
  },
};

export default function AreasPage() {
  const dict = getDictionary("en");

  return (
    <PageShell dict={dict} locale="en">
      <JsonLd data={localBusinessSchema("en")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: dict.areas.title, url: "/areas-we-serve" },
        ])}
      />

      <HeroSection
        dict={dict}
        locale="en"
        headline={dict.areas.heading}
        subhead={dict.areas.subhead}
      />

      <div className="mx-auto max-w-4xl px-4 py-12">
        {TEXAS_CITIES.map((city) => (
          <CitySection
            key={city}
            city={city}
            description={dict.areas.cities[city]}
            dict={dict}
            locale="en"
          />
        ))}
      </div>

      <CTASection dict={dict} locale="en" variant="dark" />
    </PageShell>
  );
}
