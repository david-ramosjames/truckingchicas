import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import AnalyticsPlaceholder from "@/components/AnalyticsPlaceholder";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trucking Chicas | Texas Truck Accident Lawyers",
    template: "%s | Trucking Chicas",
  },
  description:
    "Texas truck and 18-wheeler accident lawyers. Free case review. No fees unless we win. A division of Ramos James Law.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        {children}
        <ChatWidget />
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
