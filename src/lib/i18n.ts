import { type Locale } from "./constants";

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/es") ? "es" : "en";
}

export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  if (targetLocale === "es") {
    if (currentPath === "/") return "/es";
    // Map EN paths to ES paths
    const pathMap: Record<string, string> = {
      "/truck-accident-lawyer": "/es/abogado-accidentes-de-camion",
      "/18-wheeler-accident-lawyer": "/es/abogado-accidentes-18-ruedas",
      "/areas-we-serve": "/es/areas-que-servimos",
      "/faq": "/es/preguntas-frecuentes",
      "/about": "/es/sobre-nosotros",
      "/contact": "/es/contacto",
      "/case-estimate": "/es/estimacion-de-caso",
    };
    return pathMap[currentPath] || `/es${currentPath}`;
  } else {
    if (currentPath === "/es") return "/";
    // Map ES paths to EN paths
    const pathMap: Record<string, string> = {
      "/es/abogado-accidentes-de-camion": "/truck-accident-lawyer",
      "/es/abogado-accidentes-18-ruedas": "/18-wheeler-accident-lawyer",
      "/es/areas-que-servimos": "/areas-we-serve",
      "/es/preguntas-frecuentes": "/faq",
      "/es/sobre-nosotros": "/about",
      "/es/contacto": "/contact",
      "/es/estimacion-de-caso": "/case-estimate",
    };
    return pathMap[currentPath] || currentPath.replace(/^\/es/, "");
  }
}
