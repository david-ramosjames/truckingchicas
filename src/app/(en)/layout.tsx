import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Script from "next/script";
import AnalyticsPlaceholder from "@/components/AnalyticsPlaceholder";
import { GTMScript, GTMNoScript } from "@/components/GoogleTagManager";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trucking Chicas | Texas Truck Accident Lawyer",
    template: "%s | Trucking Chicas",
  },
  description:
    "Texas truck and 18-wheeler accident lawyer. Free case review. No fees unless we win.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Trucking Chicas",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: SITE_URL,
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

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        <GTMNoScript />
        <GTMScript />
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
