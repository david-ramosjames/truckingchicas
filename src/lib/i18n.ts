import { ROUTES, type Locale } from "./constants";

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  const path = currentPath.replace(/\/+$/, "") || "/";
  const sourceLocale = getLocaleFromPath(path);
  const key = (Object.keys(ROUTES[sourceLocale]) as Array<keyof typeof ROUTES.en>)
    .find((key) => ROUTES[sourceLocale][key] === path);
  // Untranslated legal pages and unknown URLs must not invent a translated slug.
  return key ? ROUTES[targetLocale][key] : ROUTES[targetLocale].home;
}
