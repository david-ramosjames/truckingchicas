import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/dictionaries";
import { SITE_URL } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import TrustBadges from "@/components/TrustBadges";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sobre Nuestros Abogados de Camión en Texas",
  description:
    "Conoce a Trucking Chicas, un bufete de abogados en Texas enfocado exclusivamente en casos de accidentes de camión y tráiler.",
  alternates: {
    canonical: `${SITE_URL}/es/sobre-nosotros`,
    languages: {
      en: `${SITE_URL}/about`,
      es: `${SITE_URL}/es/sobre-nosotros`,
      "x-default": `${SITE_URL}/about`,
    },
  },
};

export default function AboutPageES() {
  const dict = getDictionary("es");
  const d = dict.about;

  return (
    <PageShell dict={dict} locale="es">
      <JsonLd data={localBusinessSchema("es")} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", url: "/es" }, { name: d.title, url: "/es/sobre-nosotros" }])} />

      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">{d.heading}</h1>
          <p className="mt-6 text-lg text-gray-300">{d.intro}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy">{d.missionTitle}</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">{d.missionDesc}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="Consulta legal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">{d.valuesTitle}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {d.values.map((v) => (
              <div key={v.title} className="card-lift card-border-left rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-navy">{v.title}</h3>
                <p className="mt-2 text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-navy">{d.teamTitle}</h2>

          {/* Laura Ramos James */}
          <div className="mt-12 grid items-start gap-10 md:grid-cols-[280px_1fr]">
            <div className="mx-auto w-[280px] shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={IMAGES.team.lauraRamosJames}
                  alt="Abogada Laura Ramos James"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-navy">Laura Ramos James</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-red">
                Fundadora y Propietaria
              </p>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cuando se trata de un <strong className="font-semibold text-brand-navy">tr&aacute;iler de 18 ruedas o cami&oacute;n comercial</strong>, lo que est&aacute; en juego cambia, y tambi&eacute;n la complejidad. Laura Ramos James ha construido su pr&aacute;ctica en torno precisamente a estos casos, ganando reconocimiento como <strong className="font-semibold text-brand-navy">Top 10 Trucking Trial Lawyer por la National Trial Lawyers</strong> y asegurando <strong className="font-semibold text-brand-navy">muchas recuperaciones que superan los $250,000</strong> para clientes lesionados por <strong className="font-semibold text-brand-navy">tr&aacute;ileres y transportistas comerciales en todo Texas</strong>.
                </p>
                <p>
                  Laura fund&oacute; Ramos James Law, PLLC en 2018, despu&eacute;s de que su propia experiencia como v&iacute;ctima de lesi&oacute;n personal moldeara una carrera dedicada a luchar por personas que enfrentan a algunos de los oponentes m&aacute;s poderosos en litigios civiles. <strong className="font-semibold text-brand-navy">Los casos de cami&oacute;n enfrentan a los clientes lesionados con grandes transportistas, aseguradoras corporativas y equipos de defensa experimentados.</strong> Esa es exactamente la pelea para la que se ha preparado durante m&aacute;s de una d&eacute;cada.
                </p>
                <p>
                  Su experiencia abarca toda la gama de casos de veh&iacute;culos comerciales, desde <strong className="font-semibold text-brand-navy">colisiones con tr&aacute;ileres de 18 ruedas y accidentes con responsabilidad disputada hasta reclamos por lesiones catastr&oacute;ficas contra grandes transportistas</strong>, con <strong className="font-semibold text-brand-navy">m&uacute;ltiples recuperaciones de seis cifras para clientes de cami&oacute;n en todo Texas</strong>.
                </p>

                <h4 className="mt-6 text-lg font-bold text-brand-navy">Reconocimientos</h4>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Nombrada <strong className="font-semibold text-brand-navy">Top 10 Trucking Trial Lawyer</strong> por la National Trial Lawyers</li>
                  <li>Miembro vitalicia de los Million Dollar y Multi-Million Dollar Advocates Forums</li>
                  <li>Super Lawyers&trade; Up-and-Coming 100: Texas Rising Stars (2023 y 2024) y Up-and-Coming 50: Women Texas Rising Stars (2023 y 2024)</li>
                  <li>National Trial Lawyers Top 100 y Top 40 Under 40</li>
                  <li>America&rsquo;s Top 100 Attorneys&reg; High Stakes Litigator (2020)</li>
                </ul>

                <h4 className="mt-6 text-lg font-bold text-brand-navy">Asociaciones</h4>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Capital Area Trial Lawyers Association, Comit&eacute; Ejecutivo</li>
                  <li>Texas Trial Lawyers Association, Comit&eacute; de Diversidad, Equidad e Inclusi&oacute;n</li>
                  <li>Travis County Women Lawyers Association</li>
                  <li>Hispanic Bar Association</li>
                  <li>Mexican-American Association of Texas</li>
                </ul>

                <p>
                  Fuera del tribunal, el cap&iacute;tulo m&aacute;s grande de la vida de Laura ha sido criar a sus dos hijas, Victoria y Alexandra, junto a su esposo Jon.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-14 border-gray-200" />

          {/* Lyliana Zamora */}
          <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
            <div className="mx-auto w-[280px] shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={IMAGES.team.lylianaZamora}
                  alt="Paralegal Senior Lyliana Zamora"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-navy">Lyliana Zamora</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-red">
                Paralegal Senior
              </p>
              <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lyliana Zamora es <strong className="font-semibold text-brand-navy">texana de nacimiento, nacida y criada en Austin</strong>, con la pasi&oacute;n de defender a personas y familias que enfrentan lesiones que cambian la vida. Con <strong className="font-semibold text-brand-navy">m&aacute;s de 10 a&ntilde;os de experiencia legal</strong>, ha dedicado su carrera a ayudar a clientes a navegar momentos dif&iacute;ciles con <strong className="font-semibold text-brand-navy">confianza, compasi&oacute;n y gu&iacute;a legal s&oacute;lida</strong>.
                </p>
                <p>
                  En Trucking Chicas, Lyliana est&aacute; comprometida a <strong className="font-semibold text-brand-navy">defender a quienes han sido afectados por accidentes graves con camiones comerciales</strong> y a asegurar que nunca se sientan solos en el proceso. Ella entiende que despu&eacute;s de un choque devastador, las familias necesitan m&aacute;s que representaci&oacute;n legal; necesitan a alguien en quien puedan confiar para <strong className="font-semibold text-brand-navy">guiarlos, comunicarse con claridad y luchar incansablemente por el resultado que merecen</strong>.
                </p>
                <p>
                  Fuera de la oficina, a Lyliana le encanta pasar tiempo con su esposo, su hija y su hijo, adem&aacute;s de los dos en&eacute;rgicos Huskies de la familia. Ya sea apoyando a los Spurs, asistiendo a eventos deportivos en vivo o explorando el aire libre, el tiempo en familia es donde recarga energ&iacute;as.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      <CTASection dict={dict} locale="es" variant="dark" />
    </PageShell>
  );
}
