import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: {
      en: SITE_URL,
      es: `${SITE_URL}/es`,
    },
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <div lang="es">{children}</div>;
}
