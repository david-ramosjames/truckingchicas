import type { Locale } from "@/lib/constants";

const cityPositions: Record<string, { x: number; y: number }> = {
  Houston: { x: 280, y: 310 },
  Dallas: { x: 240, y: 160 },
  Austin: { x: 210, y: 280 },
  "San Antonio": { x: 190, y: 310 },
  "Fort Worth": { x: 225, y: 155 },
  "El Paso": { x: 28, y: 175 },
  Arlington: { x: 235, y: 165 },
  "Corpus Christi": { x: 225, y: 370 },
  Plano: { x: 245, y: 148 },
  Lubbock: { x: 130, y: 140 },
};

export default function TexasMap({ locale }: { locale: Locale }) {
  return (
    <div className="mx-auto max-w-lg">
      <svg viewBox="0 0 380 420" className="w-full" aria-label={locale === "en" ? "Map of Texas showing service areas" : "Mapa de Texas mostrando áreas de servicio"}>
        {/* Texas state outline (simplified) */}
        <path
          d="M28 175 L95 45 L155 40 L170 55 L180 45 L200 50 L215 42 L235 50 L265 40 L285 45 L310 55 L320 70 L335 85 L340 110 L345 135 L342 160 L340 185 L335 210 L330 235 L325 260 L318 285 L310 305 L300 320 L285 335 L270 345 L255 355 L240 365 L230 375 L225 385 L215 395 L200 395 L190 385 L175 375 L160 370 L140 365 L120 355 L100 340 L85 325 L72 310 L60 290 L48 265 L38 240 L30 210 L28 175Z"
          fill="#F3E8D9"
          stroke="#1E2A44"
          strokeWidth="2"
        />

        {/* Major highway lines */}
        <line x1="28" y1="175" x2="280" y2="310" stroke="#5C6B73" strokeWidth="1" opacity="0.3" strokeDasharray="4 3" />
        <text x="150" y="250" fontSize="8" fill="#5C6B73" opacity="0.6">I-10</text>

        <line x1="190" y1="385" x2="240" y2="160" stroke="#5C6B73" strokeWidth="1" opacity="0.3" strokeDasharray="4 3" />
        <text x="225" y="270" fontSize="8" fill="#5C6B73" opacity="0.6">I-35</text>

        <line x1="280" y1="310" x2="240" y2="160" stroke="#5C6B73" strokeWidth="1" opacity="0.3" strokeDasharray="4 3" />
        <text x="270" y="230" fontSize="8" fill="#5C6B73" opacity="0.6">I-45</text>

        {/* City dots and labels */}
        {Object.entries(cityPositions).map(([city, pos]) => (
          <g key={city}>
            {/* Pulse ring */}
            <circle cx={pos.x} cy={pos.y} r="6" fill="none" stroke="#FF6B4A" strokeWidth="1" opacity="0.4">
              <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
            </circle>
            {/* City dot */}
            <circle cx={pos.x} cy={pos.y} r="4" fill="#FF6B4A" stroke="#fff" strokeWidth="1.5" />
            {/* Label */}
            <text
              x={pos.x}
              y={pos.y - 8}
              textAnchor="middle"
              fontSize="9"
              fontWeight="600"
              fill="#1E2A44"
            >
              {city}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
