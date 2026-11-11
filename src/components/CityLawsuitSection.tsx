type Locale = "en" | "es";

type CityKey =
  | "houston"
  | "dallas"
  | "austin"
  | "sanAntonio"
  | "fortWorth"
  | "elPaso"
  | "arlington"
  | "corpusChristi"
  | "plano"
  | "lubbock"
  | "laredo"
  | "waco"
  | "mcallen"
  | "beaumont"
  | "odessa"
  | "killeen";

const PLACES: Record<CityKey, { city: string; county: string; court: string }> = {
  houston: { city: "Houston", county: "Harris", court: "Houston" },
  dallas: { city: "Dallas", county: "Dallas", court: "Dallas" },
  austin: { city: "Austin", county: "Travis", court: "Austin" },
  sanAntonio: { city: "San Antonio", county: "Bexar", court: "San Antonio" },
  fortWorth: { city: "Fort Worth", county: "Tarrant", court: "Fort Worth" },
  elPaso: { city: "El Paso", county: "El Paso", court: "El Paso" },
  arlington: { city: "Arlington", county: "Tarrant", court: "Fort Worth" },
  corpusChristi: { city: "Corpus Christi", county: "Nueces", court: "Corpus Christi" },
  plano: { city: "Plano", county: "Collin", court: "McKinney" },
  lubbock: { city: "Lubbock", county: "Lubbock", court: "Lubbock" },
  laredo: { city: "Laredo", county: "Webb", court: "Laredo" },
  waco: { city: "Waco", county: "McLennan", court: "Waco" },
  mcallen: { city: "McAllen", county: "Hidalgo", court: "Edinburg" },
  beaumont: { city: "Beaumont", county: "Jefferson", court: "Beaumont" },
  odessa: { city: "Odessa", county: "Ector", court: "Odessa" },
  killeen: { city: "Killeen", county: "Bell", court: "Belton" },
};

export default function CityLawsuitSection({
  cityKey,
  locale,
}: {
  cityKey: CityKey;
  locale: Locale;
}) {
  const { city, county, court } = PLACES[cityKey];
  const title =
    locale === "es"
      ? `Demanda por accidente de camión en el Condado de ${county}`
      : `Filing a Truck Accident Lawsuit in ${county} County`;

  const paragraphs =
    locale === "es"
      ? [
          `Una demanda contra una compañía de camiones privada en Texas, en general, debe presentarse dentro de los dos años del choque. Un choque con un vehículo de la ciudad, del condado o del estado puede exigir un aviso por escrito mucho antes. Los registros de la compañía, incluido el registro electrónico de horas, pueden desaparecer en semanas. Esto es información general, no asesoría legal sobre su plazo.`,
          `El conductor no es el único posible demandado. La compañía de camiones, un intermediario de carga, la empresa que cargó el remolque y un taller que dio mantenimiento a los frenos pueden compartir la responsabilidad. Cuáles aplican depende de quién empleaba al conductor y quién controlaba el camión.`,
          `Un caso de lesiones graves por un choque en ${city} se presenta en los tribunales de distrito del Condado de ${county}, en ${court}. El caso empieza con una demanda. Después la compañía tiene que entregar el expediente del conductor, el registro electrónico y los registros de mantenimiento. La mayoría de los casos se negocia cuando esos documentos ya están. Si no se resuelven, el caso se juzga en ese tribunal.`,
        ]
      : [
          `A lawsuit against a private trucking company in Texas generally has to be filed within two years of the crash. A crash with a city, county, or state vehicle can require written notice much sooner. Carrier records, including the electronic log, can be gone in weeks. This is general information, not legal advice about your deadline.`,
          `The driver is not the only possible defendant. The motor carrier, a freight broker, the company that loaded the trailer, and a shop that maintained the brakes can share responsibility. Which ones apply depends on who employed the driver and who controlled the truck.`,
          `A serious injury case from a crash in ${city} is filed in the ${county} County district courts in ${court}. The case starts with a petition. The carrier then has to produce the driver file, the electronic log, and the maintenance records. Most cases are negotiated after those records are in. If they do not settle, the case is tried in that court.`,
        ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold text-brand-navy">{title}</h2>
        {paragraphs.map((para) => (
          <p key={para} className="mt-4 text-lg leading-relaxed text-gray-600">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
