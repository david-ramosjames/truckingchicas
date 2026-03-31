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
      "/fedex-ups-truck-accident-lawyer": "/es/abogado-accidentes-camion-reparto",
      "/oilfield-tanker-truck-accident-lawyer": "/es/abogado-accidentes-camion-cisterna",
      "/dump-truck-construction-accident-lawyer": "/es/abogado-accidentes-camion-volteo",
      "/box-truck-commercial-van-accident-lawyer": "/es/abogado-accidentes-camion-carga",
      "/areas-we-serve": "/es/areas-que-servimos",
      "/truck-accident-lawyer-houston": "/es/abogado-accidentes-camion-houston",
      "/truck-accident-lawyer-dallas": "/es/abogado-accidentes-camion-dallas",
      "/truck-accident-lawyer-austin": "/es/abogado-accidentes-camion-austin",
      "/truck-accident-lawyer-san-antonio": "/es/abogado-accidentes-camion-san-antonio",
      "/truck-accident-lawyer-fort-worth": "/es/abogado-accidentes-camion-fort-worth",
      "/truck-accident-lawyer-el-paso": "/es/abogado-accidentes-camion-el-paso",
      "/truck-accident-lawyer-arlington": "/es/abogado-accidentes-camion-arlington",
      "/truck-accident-lawyer-corpus-christi": "/es/abogado-accidentes-camion-corpus-christi",
      "/truck-accident-lawyer-plano": "/es/abogado-accidentes-camion-plano",
      "/truck-accident-lawyer-lubbock": "/es/abogado-accidentes-camion-lubbock",
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
      "/es/abogado-accidentes-camion-reparto": "/fedex-ups-truck-accident-lawyer",
      "/es/abogado-accidentes-camion-cisterna": "/oilfield-tanker-truck-accident-lawyer",
      "/es/abogado-accidentes-camion-volteo": "/dump-truck-construction-accident-lawyer",
      "/es/abogado-accidentes-camion-carga": "/box-truck-commercial-van-accident-lawyer",
      "/es/areas-que-servimos": "/areas-we-serve",
      "/es/abogado-accidentes-camion-houston": "/truck-accident-lawyer-houston",
      "/es/abogado-accidentes-camion-dallas": "/truck-accident-lawyer-dallas",
      "/es/abogado-accidentes-camion-austin": "/truck-accident-lawyer-austin",
      "/es/abogado-accidentes-camion-san-antonio": "/truck-accident-lawyer-san-antonio",
      "/es/abogado-accidentes-camion-fort-worth": "/truck-accident-lawyer-fort-worth",
      "/es/abogado-accidentes-camion-el-paso": "/truck-accident-lawyer-el-paso",
      "/es/abogado-accidentes-camion-arlington": "/truck-accident-lawyer-arlington",
      "/es/abogado-accidentes-camion-corpus-christi": "/truck-accident-lawyer-corpus-christi",
      "/es/abogado-accidentes-camion-plano": "/truck-accident-lawyer-plano",
      "/es/abogado-accidentes-camion-lubbock": "/truck-accident-lawyer-lubbock",
      "/es/preguntas-frecuentes": "/faq",
      "/es/sobre-nosotros": "/about",
      "/es/contacto": "/contact",
      "/es/estimacion-de-caso": "/case-estimate",
    };
    return pathMap[currentPath] || currentPath.replace(/^\/es/, "");
  }
}
