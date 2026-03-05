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
  title: "Áreas que Servimos — Abogado de Accidentes de Camión en Texas",
  description:
    "Trucking Chicas sirve a víctimas de accidentes de camión y tráiler en todo Texas, incluyendo Houston, Dallas, Austin, San Antonio y más.",
  alternates: {
    canonical: `${SITE_URL}/es/areas-que-servimos`,
    languages: {
      en: `${SITE_URL}/areas-we-serve`,
      es: `${SITE_URL}/es/areas-que-servimos`,
    },
  },
};

export default function AreasPageES() {
  const dict = getDictionary("es");

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={localBusinessSchema("es")} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/es" }, { name: dict.areas.title, url: "/es/areas-que-servimos" }])} />

      <HeroSection dict={dict} locale="es" headline={dict.areas.heading} subhead={dict.areas.subhead} />

      <div className="mx-auto max-w-4xl px-4 py-12">
        {TEXAS_CITIES.map((city) => (
          <CitySection key={city} city={city} description={dict.areas.cities[city]} dict={dict} locale="es" />
        ))}
      </div>

      <CTASection dict={dict} locale="es" variant="dark" />
    </PageShell>
  );
}
