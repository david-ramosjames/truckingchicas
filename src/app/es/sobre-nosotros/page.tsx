import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/dictionaries";
import { SITE_URL } from "@/lib/constants";
import PageShell from "@/components/PageShell";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import TrustBadges from "@/components/TrustBadges";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sobre Trucking Chicas | Abogados de Accidentes de Camión en Texas",
  description:
    "Conoce a Trucking Chicas, un bufete de abogados en Texas enfocado exclusivamente en casos de accidentes de camión y tráiler.",
  alternates: {
    canonical: `${SITE_URL}/es/sobre-nosotros`,
    languages: {
      en: `${SITE_URL}/about`,
      es: `${SITE_URL}/es/sobre-nosotros`,
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
                  src="/Ramos-James-Badge2_11zon.webp"
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
                  Nombrada &ldquo;Changemaker&rdquo; por Austin Woman Magazine en 2025, ganadora del premio
                  &ldquo;Woman&rsquo;s Way&rdquo; de Austin Woman&rsquo;s Magazine 2023 y del premio
                  &ldquo;Advocacy and Activism&rdquo; de la Latina Foundation, Laura Ramos James es una de
                  las abogadas m&aacute;s reconocidas en Texas y una abogada que ha apoyado a comunidades
                  desfavorecidas en Austin y el sur de Texas durante varios a&ntilde;os.
                </p>
                <p>
                  Como v&iacute;ctima de lesi&oacute;n personal, Laura esper&oacute; que alg&uacute;n
                  d&iacute;a ser&iacute;a la voz fuerte y feroz de aquellos que no pod&iacute;an hablar por
                  s&iacute; mismos en los tribunales. Despu&eacute;s de graduarse de la Facultad de Derecho
                  de Baylor con honores, Laura comenz&oacute; el arduo camino profesional que culmin&oacute;
                  con la fundaci&oacute;n de Ramos James Law, PLLC en 2018.
                </p>
                <p>
                  Con m&aacute;s de una d&eacute;cada de experiencia legal, Laura ha manejado exitosamente
                  cientos de casos de lesi&oacute;n personal que involucran accidentes de auto y
                  cami&oacute;n, accidentes por conductor ebrio, accidentes por conductor distra&iacute;do,
                  accidentes de veh&iacute;culos comerciales, lesiones laborales, responsabilidad de
                  productos, reclamos de responsabilidad de atenci&oacute;n m&eacute;dica de Texas, casos de
                  agresi&oacute;n sexual, accidentes de construcci&oacute;n complejos, lesiones
                  catastr&oacute;ficas, casos de muerte injusta y m&aacute;s.
                </p>
                <p>
                  Para Laura, la influencia m&aacute;s significativa y transformadora en su vida ha sido
                  convertirse en madre de dos ni&ntilde;as con su esposo Jon: Victoria y Alexandra.
                </p>
                <p>
                  Laura ha recibido algunos de los reconocimientos m&aacute;s altos de su industria, siendo
                  nombrada &ldquo;Rising Star&rdquo; por Super Lawyers&trade; durante cinco a&ntilde;os
                  consecutivos, y con membres&iacute;a vitalicia en los codiciados Million and Multi-Million
                  Advocates Forums. Laura tambi&eacute;n es miembro del National Trial Lawyers Top 100 y
                  National Trial Lawyers Top 40 Under 40. Para 2020, Laura hab&iacute;a sido distinguida
                  como una de las Top 100 Attorneys&reg; High Stakes Litigator de Am&eacute;rica.
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
                  src="/lyliana-zamora.webp"
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
                  Lyliana Zamora naci&oacute; y creci&oacute; en Austin, Texas, pero ha vivido en el
                  &aacute;rea de San Antonio durante los &uacute;ltimos 7 a&ntilde;os. Tiene m&aacute;s de
                  10 a&ntilde;os de experiencia en lesiones personales, adem&aacute;s de experiencia en
                  derecho familiar y litigios comerciales. La pasi&oacute;n de Lyliana por trabajar en el
                  campo legal de lesiones personales proviene de la sensaci&oacute;n gratificante de poder
                  ayudar a las personas durante su caso. Disfruta ser la voz de las personas que sienten que
                  no tienen voz o derecho a ser escuchadas. Lyliana siempre se asegura de guiar a las
                  familias durante este proceso para que no tengan duda de que su caso est&aacute; siendo
                  manejado correctamente.
                </p>
                <p>
                  En su tiempo libre, disfruta pasar tiempo con su esposo, su hija y su hijo. Tambi&eacute;n
                  tiene dos Huskies que van a donde va la familia. Les encanta asistir a eventos deportivos
                  en vivo (&iexcl;Go Spurs Go!) y explorar el aire libre tanto como sea posible.
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
