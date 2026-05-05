import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import AnalyticsPlaceholder from "@/components/AnalyticsPlaceholder";
import ChatWidget from "@/components/ChatWidget";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trucking Chicas | Abogados de Accidentes de Camión en Texas",
    template: "%s | Trucking Chicas",
  },
  description:
    "Abogados de accidentes de camión y 18 ruedas en Texas. Evaluación gratuita. No cobramos si no ganamos.",
  openGraph: {
    type: "website",
    locale: "es_US",
    siteName: "Trucking Chicas",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: {
      en: SITE_URL,
      es: `${SITE_URL}/es`,
    },
  },
};

export default function EsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        {children}
        <ChatWidget />
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
