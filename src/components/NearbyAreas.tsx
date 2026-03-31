import Link from "next/link";
import { type Locale, ROUTES, CITY_ROUTE_KEYS, CITY_NAMES, type CityRouteKey } from "@/lib/constants";

export default function NearbyAreas({
  currentCity,
  locale,
}: {
  currentCity: CityRouteKey;
  locale: Locale;
}) {
  const routes = ROUTES[locale];
  const otherCities = CITY_ROUTE_KEYS.filter((key) => key !== currentCity);

  return (
    <section className="bg-brand-navy py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {locale === "en" ? "Nearby Areas We Serve" : "Áreas Cercanas que Servimos"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-300">
          {locale === "en"
            ? "Our truck accident attorneys represent clients across Texas. Select a city to learn more."
            : "Nuestros abogados de accidentes de camión representan clientes en todo Texas. Seleccione una ciudad para más información."}
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {otherCities.map((key) => (
            <Link
              key={key}
              href={routes[key]}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center font-medium transition-colors hover:border-brand-coral hover:bg-white/10"
            >
              {CITY_NAMES[key]}
            </Link>
          ))}
          <Link
            href={routes.areas}
            className="rounded-lg border border-brand-coral bg-brand-coral/10 px-4 py-3 text-center font-medium text-brand-coral transition-colors hover:bg-brand-coral/20"
          >
            {locale === "en" ? "All Areas →" : "Todas las Áreas →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
