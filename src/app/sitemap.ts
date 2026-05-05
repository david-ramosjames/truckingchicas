import type { MetadataRoute } from "next";
import { SITE_URL, ROUTES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const all: MetadataRoute.Sitemap = [];

  (["en", "es"] as const).forEach((locale) => {
    const routes = ROUTES[locale];
    Object.values(routes).forEach((path) => {
      const isHome = path === "/" || path === "/es";
      all.push({
        url: `${SITE_URL}${path}`,
        lastModified,
        changeFrequency: isHome ? "weekly" : "monthly",
        priority: isHome ? 1.0 : 0.7,
      });
    });
  });

  return all;
}
