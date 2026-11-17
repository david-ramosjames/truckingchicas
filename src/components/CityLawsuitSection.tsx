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

function contentFor(cityKey: CityKey, locale: Locale) {
  const { city, county, court } = PLACES[cityKey];

  if (cityKey === "dallas" && locale === "en") {
    return {
      title: "Filing a Truck Crash Lawsuit in Dallas County",
      paragraphs: [
        "A Dallas truck crash lawsuit against a private carrier generally has to be filed within two years of the wreck. A crash with a city, county, or state vehicle can require written notice much sooner. The electronic log, the driver qualification file, and the maintenance records can be overwritten in weeks. This is general information, not legal advice about your deadline.",
        "The petition names more than the driver when the facts support it. The motor carrier that employed the driver, a freight broker that arranged the load, a shipper that overloaded the trailer, and a shop that skipped brake work can all share responsibility. Inland Port crashes often involve more than one company because the warehouse, the carrier, and the broker are usually separate businesses.",
        "A serious injury case from a crash in Dallas is filed in the Dallas County district courts downtown. The case starts with a petition. The carrier then has to produce the driver file, the electronic log, and the maintenance records. Most cases are negotiated after those records are in. If they do not settle, the case is tried in that court, not in a justice court or a city municipal court.",
      ],
    };
  }

  if (cityKey === "dallas" && locale === "es") {
    return {
      title: "Demanda por choque de camión en el Condado de Dallas",
      paragraphs: [
        "Una demanda por un choque de camión en Dallas contra una compañía privada, en general, debe presentarse dentro de los dos años del accidente. Un choque con un vehículo de la ciudad, del condado o del estado puede exigir un aviso por escrito mucho antes. El registro electrónico, el expediente del conductor y los registros de mantenimiento pueden borrarse en semanas. Esto es información general, no asesoría legal sobre su plazo.",
        "La demanda nombra a más personas que el conductor cuando los hechos lo permiten. La compañía que empleaba al conductor, un intermediario de carga, quien sobrecargó el remolque y un taller que omitió el mantenimiento de los frenos pueden compartir la responsabilidad. En los choques del Inland Port suele haber más de una empresa porque el almacén, la compañía de camiones y el intermediario casi siempre son negocios distintos.",
        "Un caso grave por un choque en Dallas se presenta en los tribunales de distrito del Condado de Dallas, en el centro. El caso empieza con una demanda. Después la compañía tiene que entregar el expediente del conductor, el registro electrónico y los registros de mantenimiento. La mayoría de los casos se negocia cuando esos documentos ya están. Si no se resuelven, el caso se juzga en ese tribunal, no en un tribunal de justicia ni en uno municipal.",
      ],
    };
  }

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

  return { title, paragraphs };
}

export default function CityLawsuitSection({
  cityKey,
  locale,
}: {
  cityKey: CityKey;
  locale: Locale;
}) {
  const { title, paragraphs } = contentFor(cityKey, locale);

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
