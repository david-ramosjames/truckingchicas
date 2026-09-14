import type { MetadataRoute } from "next";
import { SITE_URL, ROUTES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const all: MetadataRoute.Sitemap = [];

  (["en", "es"] as const).forEach((locale) => {
    const routes = ROUTES[locale];
    Object.entries(routes).forEach(([key, path]) => {
      const isHome = path === "/" || path === "/es";
      const city = key in IMAGES.cities ? key as keyof typeof IMAGES.cities : undefined;
      const routeKey = key as keyof typeof ROUTES.en;
      all.push({
        url: `${SITE_URL}${path}`,
        ...(city ? { images: [IMAGES.cities[city], IMAGES.maps[city]] } : {}),
        alternates: {
          languages: {
            en: `${SITE_URL}${ROUTES.en[routeKey]}`,
            es: `${SITE_URL}${ROUTES.es[routeKey]}`,
          },
        },
        lastModified,
        changeFrequency: isHome ? "weekly" : "monthly",
        priority: isHome ? 1.0 : 0.7,
      });
    });
  });

  // Standalone legal pages (not part of ROUTES)
  ["/privacy-policy", "/terms-of-use"].forEach((path) => {
    all.push({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    });
  });

  return all;
}
