import PageShell from "@/components/PageShell";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/constants";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "lines"; items: string[] };

export default function LegalPage({
  dict,
  locale,
  title,
  updated,
  blocks,
}: {
  dict: Dictionary;
  locale: Locale;
  title: string;
  updated: string;
  blocks: LegalBlock[];
}) {
  return (
    <PageShell dict={dict} locale={locale}>
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-extrabold text-brand-navy md:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm font-medium text-gray-500">{updated}</p>

          <div className="mt-8">
            {blocks.map((b, i) => {
              if (b.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="mt-8 text-xl font-bold text-brand-navy"
                  >
                    {b.text}
                  </h2>
                );
              }
              if (b.type === "ul") {
                return (
                  <ul
                    key={i}
                    className="mt-3 list-disc space-y-1.5 pl-6 leading-relaxed text-gray-700"
                  >
                    {b.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              }
              if (b.type === "lines") {
                return (
                  <div
                    key={i}
                    className="mt-3 leading-relaxed text-gray-700"
                  >
                    {b.items.map((it, j) => (
                      <div key={j}>{it}</div>
                    ))}
                  </div>
                );
              }
              return (
                <p key={i} className="mt-3 leading-relaxed text-gray-700">
                  {b.text}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
