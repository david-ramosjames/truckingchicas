import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an AI case estimate assistant for Trucking Chicas, a Texas truck accident law firm.

Given details about a truck accident, provide a PRELIMINARY estimate that includes:

1. **Potential Case Value Range**: Provide a realistic low-to-high dollar range based on the information provided. Be honest, use realistic ranges based on the severity described.
2. **Key Factors**: List 3-4 factors that most influence the value of this case.
3. **Strengths**: Identify 2-3 strengths of the case based on the details given.
4. **Next Steps**: Recommend 2-3 immediate actions.
5. **Time Sensitivity**: Note any urgency (statute of limitations, evidence preservation).

IMPORTANT RULES:
- Be empathetic and professional.
- Provide dollar ranges (e.g., "$150,000 – $500,000") but emphasize these are rough estimates.
- Never guarantee outcomes.
- Always recommend speaking with an attorney for a proper evaluation.
- Keep the response clear and organized with short paragraphs.
- Respond in the SAME LANGUAGE the case details are provided in.
- End by encouraging them to contact Trucking Chicas for a free consultation.
- Use markdown formatting (bold headings, bullet lists) for readability.`;

async function callLLM(caseDetails: string, locale: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return generateFallbackEstimate(locale);
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: caseDetails },
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`LLM API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || generateFallbackEstimate(locale);
  } catch {
    return generateFallbackEstimate(locale);
  }
}

function generateFallbackEstimate(locale: string): string {
  const isSpanish = locale === "es";

  if (isSpanish) {
    return `**Estimación Preliminar de tu Caso**

Basándonos en los detalles proporcionados, tu caso de accidente de camión en Texas podría tener un valor en el rango de **$100,000 – $1,000,000+**, dependiendo de la gravedad de tus lesiones, costos médicos y otros factores.

**Factores Clave que Afectan el Valor:**
- Gravedad y duración de tus lesiones
- Costos médicos totales (pasados y futuros)
- Impacto en tu capacidad de trabajar
- Evidencia de negligencia del camionero o la compañía

**Próximos Pasos Recomendados:**
- Documenta todos tus gastos médicos y salarios perdidos
- No hables con la aseguradora de la compañía de camiones
- Habla con un abogado de accidentes de camión lo antes posible

**Importante:** Esta es solo una estimación preliminar generada por IA. Cada caso es único. Para una evaluación completa y gratuita, contacta a Trucking Chicas hoy.`;
  }

  return `**Preliminary Case Estimate**

Based on the details you've provided, your Texas truck accident case could potentially be valued in the range of **$100,000 – $1,000,000+**, depending on the severity of your injuries, medical costs, and other factors.

**Key Factors Affecting Value:**
- Severity and duration of your injuries
- Total medical costs (past and future)
- Impact on your ability to work
- Evidence of trucker or company negligence

**Recommended Next Steps:**
- Document all medical expenses and lost wages
- Do not speak with the trucking company's insurer
- Speak with a truck accident attorney as soon as possible

**Important:** This is only a preliminary AI-generated estimate. Every case is unique. For a complete, free case evaluation, contact Trucking Chicas today.`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      accidentDate,
      location,
      truckType,
      role,
      injuries,
      treatment,
      workImpact,
      policeReport,
      additional,
      locale,
    } = body as Record<string, string>;

    // Log lead contact info (in production, send to CRM / Slack)
    console.log("[Case Estimate Lead]", { name, phone, email, locale });

    if (!accidentDate || !truckType || !injuries) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    const lang = locale === "es" ? "Spanish" : "English";
    const caseDetails = `Please respond in ${lang}.

CASE DETAILS:
- Accident Timing: ${accidentDate}
- Location: ${location || "Texas (unspecified)"}
- Truck Type: ${truckType}
- Client Role: ${role}
- Injuries: ${injuries}
- Medical Treatment: ${treatment}
- Work Impact: ${workImpact}
- Police Report: ${policeReport}
- Additional Details: ${additional || "None provided"}`;

    const estimate = await callLLM(caseDetails, locale === "es" ? "es" : "en");

    return NextResponse.json({ estimate });
  } catch (error) {
    console.error("Estimate API error:", error);
    return NextResponse.json(
      { error: "Failed to generate estimate" },
      { status: 500 }
    );
  }
}
