import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Script from "next/script";
import AnalyticsPlaceholder from "@/components/AnalyticsPlaceholder";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trucking Chicas | Abogados de Accidentes de Camión en Texas",
    template: "%s | Trucking Chicas",
  },
  description:
    "Abogados de accidentes de camión y 18 ruedas en Texas. Evaluación gratuita. No cobramos si no ganamos.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
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
  verification: {
    other: {
      "ahrefs-site-verification":
        "59e744354fefb8e5a68605c7444d638c6e461feec79674299bb8c773edbcf6c1",
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
        <Script
          src="https://site-chat-production.up.railway.app/widget.js"
          data-client-id="trucking-chicas"
          strategy="afterInteractive"
        />
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
