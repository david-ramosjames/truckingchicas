import Image from "next/image";
import type { Locale } from "@/lib/constants";

export default function TexasMap({ locale }: { locale: Locale }) {
  return (
    <div className="relative mx-auto aspect-[16/9] max-w-2xl overflow-hidden rounded-2xl shadow-lg">
      <Image
        src="/texas-highway.png"
        alt={
          locale === "en"
            ? "Texas highway — we serve clients across the state"
            : "Carretera de Texas — servimos clientes en todo el estado"
        }
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 700px"
      />
    </div>
  );
}
