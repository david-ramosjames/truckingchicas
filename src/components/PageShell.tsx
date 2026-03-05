import Header from "./Header";
import Footer from "./Footer";
import StickyMobileCTA from "./StickyMobileCTA";
import ChatWidget from "./ChatWidget";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/constants";

export default function PageShell({
  dict,
  locale,
  children,
}: {
  dict: Dictionary;
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header dict={dict} locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict} locale={locale} />
      <StickyMobileCTA dict={dict} locale={locale} />
      <ChatWidget initialLocale={locale} />
      {/* Spacer for sticky mobile CTA bar */}
      <div className="h-16 md:hidden" />
    </>
  );
}
