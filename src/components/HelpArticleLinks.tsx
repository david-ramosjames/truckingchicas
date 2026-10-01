import Link from "next/link";
import { type Locale, ROUTES } from "@/lib/constants";

export default function HelpArticleLinks({
  locale,
  className,
}: {
  locale: Locale;
  className: string;
}) {
  const routes = ROUTES[locale];
  const items =
    locale === "en"
      ? [
          { href: routes.helpCanISue, label: "Can I sue a truck driver" },
          { href: routes.helpAverageSettlement, label: "Average 18-wheeler accident settlement in Texas" },
        ]
      : [
          { href: routes.helpCanISue, label: "¿Puedo demandar a un camionero?" },
          { href: routes.helpAverageSettlement, label: "Acuerdo promedio de un accidente de 18 ruedas en Texas" },
        ];

  return (
    <>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className={className}>
          {item.label}
        </Link>
      ))}
    </>
  );
}
