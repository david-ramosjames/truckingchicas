import { SITE_URL, PHONE_NUMBER, FIRM_ADDRESS, type Locale } from "./constants";

export function localBusinessSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Trucking Chicas",
    description:
      locale === "en"
        ? "Texas truck accident lawyers with a special focus on 18-wheeler accident cases."
        : "Abogados de accidentes de camión en Texas con un enfoque especial en casos de accidentes de 18 ruedas.",
    url: locale === "en" ? SITE_URL : `${SITE_URL}/es`,
    telephone: `+1${PHONE_NUMBER}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${FIRM_ADDRESS.street}, ${FIRM_ADDRESS.street2}`,
      addressLocality: FIRM_ADDRESS.city,
      addressRegion: FIRM_ADDRESS.state,
      postalCode: FIRM_ADDRESS.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      // TODO: Replace with actual coordinates
      latitude: 30.2672,
      longitude: -97.7431,
    },
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    priceRange: "Free Consultation",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    // TODO: Replace with actual attorney names
    employee: [
      {
        "@type": "Attorney",
        name: "[Attorney Name]",
        jobTitle: locale === "en" ? "Truck Accident Attorney" : "Abogado de Accidentes de Camión",
      },
    ],
inLanguage: locale === "en" ? "en-US" : "es",
  };
}

export function cityLegalServiceSchema(city: string, state: string, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `Trucking Chicas, ${city} Truck Accident Lawyer`,
    description:
      locale === "en"
        ? `Truck accident lawyers serving ${city}, ${state}. Free consultation for 18-wheeler and commercial truck accident victims.`
        : `Abogados de accidentes de camión en ${city}, ${state}. Consulta gratis para víctimas de accidentes de 18 ruedas y camiones comerciales.`,
    url: locale === "en" ? SITE_URL : `${SITE_URL}/es`,
    telephone: `+1${PHONE_NUMBER}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: state,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    priceRange: "Free Consultation",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    inLanguage: locale === "en" ? "en-US" : "es",
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
