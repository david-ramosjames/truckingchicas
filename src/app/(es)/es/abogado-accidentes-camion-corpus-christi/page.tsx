import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/dictionaries";
import { SITE_URL, ROUTES, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import NearbyAreas from "@/components/NearbyAreas";
import JsonLd from "@/components/JsonLd";
import { cityLegalServiceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

const CORPUS_DESCRIPTION =
  "¿Choque con un tráiler, camión cisterna o de volteo en Corpus Christi? Consulta gratis y hablamos español. No cobramos si no ganamos.";

export const metadata: Metadata = {
  title: { absolute: "Abogado de Accidentes de Tráiler en Corpus Christi, TX" },
  description: CORPUS_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/es/abogado-accidentes-camion-corpus-christi`,
    languages: {
      en: `${SITE_URL}/truck-accident-lawyer-corpus-christi`,
      es: `${SITE_URL}/es/abogado-accidentes-camion-corpus-christi`,
      "x-default": `${SITE_URL}/truck-accident-lawyer-corpus-christi`,
    },
  },
  openGraph: {
    title: "Abogado de Accidentes de Tráiler en Corpus Christi, TX",
    description: CORPUS_DESCRIPTION,
    url: `${SITE_URL}/es/abogado-accidentes-camion-corpus-christi`,
  },
};

const truckTypes = [
  {
    title: "Choques con Camiones Cisterna en Corpus Christi",
    paragraphs: [
      "El camión cisterna es el que más peso tiene en esta página, porque Corpus Christi vive del puerto y de las refinerías. El Puerto de Corpus Christi mueve petróleo, gas y productos químicos, y Refinery Row, entre la ciudad y Portland, llena la I-37, el Harbor Bridge y la US-181 de cisternas. Una cisterna cargada pesa mucho más que un tráiler de caja, el líquido se mueve dentro del tanque en cada frenada, y una volcadura puede derramar combustible o un químico sobre la carretera.",
      "Esas cargas llevan placas de materiales peligrosos. Después de un choque conviene fotografiar la placa, el nombre de la compañía y el número del tanque, sin acercarse al derrame. La compañía, la planta que cargó el producto y a veces quien contrató el viaje pueden compartir la responsabilidad. El viento del Golfo en el Harbor Bridge y en la calzada hacia Flour Bluff empeora el control de un tanque alto.",
      "Un choque con cisterna en Corpus Christi se investiga como caso de vehículo comercial: horas de servicio, mantenimiento del tanque, si la carga iba bien sujeta y si el conductor tenía la licencia para ese material. No es un reclamo de auto con un vehículo más grande.",
    ],
  },
  {
    title: "Choques con Camiones de Volteo en Corpus Christi",
    paragraphs: [
      "Los camiones de volteo trabajan las obras del puerto, la ampliación de vías y las construcciones a lo largo de la SH-358 y la I-37. Una caja cargada puede pasar de 50,000 libras. Los riesgos de siempre son la caja sobrecargada, los frenos gastados, la grava sin cubrir y el giro amplio a la derecha contra un auto. La compañía de camiones y el contratista de la obra pueden estar involucrados.",
    ],
  },
  {
    title: "Choques con Camiones de Plataforma en Corpus Christi",
    paragraphs: [
      "Los camiones de plataforma llevan tubo, acero y equipo hacia las refinerías y el puerto. La carga va a la vista, amarrada a la cama, no dentro de una caja. Si una banda falla o una pieza se sale, golpea al vehículo de atrás o al carril de junto. En un choque de plataforma hay que ver cómo iba sujeta la carga, no solo cómo manejaba el conductor.",
    ],
  },
  {
    title: "Choques con Camiones Cementeros en Corpus Christi",
    paragraphs: [
      "El camión cementero es una mezcladora de concreto, no un volteo. El tambor va alto, sigue girando en el tráfico y la carga tiene poco tiempo antes de fraguar, así que el conductor va contra el reloj entre la planta y la obra. Esas obras están en el crecimiento del sur de la ciudad, en la SPID y en los proyectos del puerto. Una mezcladora que no alcanza a frenar o que vuelca en una curva es un reclamo de vehículo comercial.",
    ],
  },
  {
    title: "Choques con Camiones de Basura en Corpus Christi",
    paragraphs: [
      "Los camiones de basura recorren los vecindarios de Corpus Christi temprano: Flour Bluff, Calallen, el lado sur y las calles que salen de la SH-358. Se detienen cada casa, dan vuelta en calles angostas y salen de la banqueta contra el tráfico. No son tráileres del puerto, pero siguen siendo vehículos comerciales, a veces de la ciudad y a veces de una compañía privada. Si el camión es del gobierno, el plazo para dar aviso puede ser más corto que los dos años usuales para demandar.",
    ],
  },
];

export default function CorpusChristiPageES() {
  const dict = getDictionary("es");
  const d = dict.cityPages.corpusChristi;
  const cp = dict.cityPages;
  const routes = ROUTES.es;

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={cityLegalServiceSchema("Corpus Christi", "TX", "es")} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/es" }, { name: "Áreas que Servimos", url: "/es/areas-que-servimos" }, { name: "Corpus Christi", url: "/es/abogado-accidentes-camion-corpus-christi" }])} />
      <JsonLd data={faqSchema(d.faq)} />
      <HeroSection dict={dict} locale="es" headline={d.heroHeadline} subhead={d.heroSubhead} />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 flex justify-center">
          <Image src={IMAGES.cities.corpusChristi} alt="Corpus Christi, Texas" width={800} height={450} className="rounded-xl" />
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-brand-navy">{d.localTitle}</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">{d.localContent}</p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl space-y-12 px-4">
          {truckTypes.map((item) => (
            <div key={item.title}>
              <h2 className="text-3xl font-bold text-brand-navy">{item.title}</h2>
              {item.paragraphs.map((para) => (
                <p key={para} className="mt-4 text-lg leading-relaxed text-gray-600">{para}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-4 flex justify-center">
          <Image src={IMAGES.maps.corpusChristi} alt="Mapa del área de Corpus Christi" width={800} height={450} className="rounded-xl" />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">
            Carreteras Peligrosas y Puntos Críticos de Accidentes
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {d.highways.map((h) => (
              <div key={h.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-brand-navy">{h.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{h.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold text-brand-navy">Ubicaciones de Alto Riesgo en Corpus Christi</h3>
            <ul className="mt-4 space-y-3">
              {d.dangerZones.map((zone) => (
                <li key={zone} className="flex items-start gap-3 text-gray-600">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm leading-relaxed">{zone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16"><div className="mx-auto max-w-6xl px-4"><h2 className="text-center text-3xl font-bold text-brand-navy">{cp.servicesTitle}</h2><div className="mt-10 grid gap-6 sm:grid-cols-2">{cp.services.map((s) => (<div key={s.title} className="card-lift card-border-left rounded-lg bg-white p-6 shadow-md"><h3 className="text-lg font-bold text-brand-navy">{s.title}</h3><p className="mt-2 text-gray-600">{s.desc}</p></div>))}</div></div></section>
      <CTASection dict={dict} locale="es" variant="dark" />
      <section className="py-16"><div className="mx-auto max-w-6xl px-4"><h2 className="text-center text-3xl font-bold text-brand-navy">{cp.whyUsTitle}</h2><div className="mt-10 grid gap-6 sm:grid-cols-2">{cp.whyUsItems.map((item) => (<div key={item.title} className="card-lift rounded-xl bg-white p-6 shadow-md"><h3 className="text-lg font-bold text-brand-navy">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p></div>))}</div></div></section>
      <section className="bg-gray-50 py-16"><div className="mx-auto max-w-3xl px-4"><h2 className="text-center text-3xl font-bold text-brand-navy">Preguntas Frecuentes: Corpus Christi</h2><div className="mt-10"><FAQAccordion items={d.faq} /></div></div></section>
      <NearbyAreas currentCity="corpusChristi" locale="es" />
      <section className="bg-brand-cream py-16"><div className="mx-auto max-w-3xl px-4 text-center"><h2 className="text-3xl font-bold text-brand-navy">{cp.finalCtaHeading}</h2><p className="mt-4 text-lg text-gray-600">{cp.finalCtaSubhead}</p><div className="mt-8"><a href={`tel:+1${PHONE_NUMBER}`} className="btn-lift btn-glow-coral inline-flex items-center gap-3 rounded-xl bg-brand-red px-10 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-brand-red-light"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>Llame Ahora: {PHONE_DISPLAY}</a></div><p className="mt-4 text-sm text-gray-500">{dict.cta.microcopy}</p></div></section>
    </PageShell>
  );
}
