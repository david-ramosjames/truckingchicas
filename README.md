# Trucking Chicas — Texas Truck Accident Lawyers

A modern, mobile-first, bilingual (EN/ES) lead-generation website for **Trucking Chicas**, a division of Ramos James Law focused on truck and 18-wheeler accidents in Texas.

Built with **Next.js 16** (App Router), **TypeScript**, and **Tailwind CSS v4**.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for English or [http://localhost:3000/es](http://localhost:3000/es) for Spanish.

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_PHONE_NUMBER` | Firm phone number (digits only, e.g. `5125551234`) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Formatted display number (e.g. `(512) 555-1234`) |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta (Facebook) Pixel ID |
| `OPENAI_API_KEY` | OpenAI API key for the chatbot LLM |
| `SLACK_WEBHOOK_URL` | Slack incoming webhook URL for lead notifications |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://truckingchicas.com`) |

## Site Map

### English (`/`)
- `/` — Home
- `/truck-accident-lawyer` — Truck Accident Lawyer
- `/18-wheeler-accident-lawyer` — 18-Wheeler Accident Lawyer
- `/areas-we-serve` — Areas We Serve (10 Texas cities)
- `/faq` — Frequently Asked Questions
- `/about` — About Trucking Chicas
- `/contact` — Contact / Free Case Review

### Spanish (`/es`)
- `/es` — Inicio
- `/es/abogado-accidentes-de-camion`
- `/es/abogado-accidentes-18-ruedas`
- `/es/areas-que-servimos`
- `/es/preguntas-frecuentes`
- `/es/sobre-nosotros`
- `/es/contacto`

## Chatbot + Slack Lead Intake

The site includes a bilingual chatbot that:
1. Answers general questions about truck accident claims (educational, not legal advice)
2. Collects lead info through conversational triage
3. Performs light "case fit" assessment
4. Sends qualified leads to Slack via webhook

### Chatbot Files
- `src/components/ChatWidget.tsx` — Client-side chat UI
- `src/app/api/chat/route.ts` — LLM API route (OpenAI-compatible)
- `src/app/api/slack/route.ts` — Slack webhook notification route
- `src/lib/triage.ts` — Triage logic and Slack payload generator
- `src/lib/i18nChat.ts` — Bilingual chat strings and language detection

### Slack Webhook Setup
1. Go to [Slack API](https://api.slack.com/apps) → Create New App
2. Enable **Incoming Webhooks**
3. Add a webhook to your desired channel (e.g., `#trucking-chicas-leads`)
4. Copy the webhook URL to `SLACK_WEBHOOK_URL` in `.env.local`

### Testing Locally
- The chatbot works without an API key — it returns a fallback response
- Slack notifications are skipped if `SLACK_WEBHOOK_URL` is not set
- To test with a real LLM, set `OPENAI_API_KEY`

## Customization Notes

### Phone Number & Address
Update these in `src/lib/constants.ts`:
- `PHONE_NUMBER` / `PHONE_DISPLAY`
- `FIRM_ADDRESS`

### Attorney Bios
Add attorney information in:
- `src/dictionaries/en.ts` → `about.teamPlaceholder`
- `src/dictionaries/es.ts` → `about.teamPlaceholder`
- `src/lib/schema.ts` → `localBusinessSchema` → `employee` array

### Adding City-Specific Pages
The architecture supports future city pages like `/houston-truck-accident-lawyer`. Use the existing `CitySection` component and dictionary pattern to create them.

## Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/                # API routes (chat, slack)
│   ├── es/                 # Spanish locale pages
│   └── [page]/             # English pages
├── components/             # Reusable React components
├── dictionaries/           # EN/ES content dictionaries
└── lib/                    # Utilities (i18n, schema, triage, constants)
```

### Key Components
- `PageShell` — Wraps every page with Header, Footer, StickyMobileCTA, ChatWidget
- `HeroSection` — Reusable hero with CTAs and trust row
- `CTASection` — Reusable CTA band (light/dark variants)
- `FAQAccordion` — Expandable FAQ with semantic markup
- `ContactForm` — Lead capture form with validation
- `CitySection` — Per-city content block for Areas page
- `ChatWidget` — Floating bilingual chatbot

### SEO Features
- Unique title/meta per page and locale
- `hreflang` alternate links
- JSON-LD: LocalBusiness, FAQPage, BreadcrumbList schemas
- OpenGraph and Twitter Card meta
- Semantic HTML headings (H1 → H2 → H3)
- Clean, keyword-informed URL slugs

### Performance
- Static generation for all content pages
- Server-side API routes only (chat, slack)
- Tailwind CSS v4 (minimal CSS output)
- No heavy JS libraries
- Code-split by route automatically
