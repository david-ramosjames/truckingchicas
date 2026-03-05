import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a helpful, empathetic assistant for Trucking Chicas, a Texas truck accident law firm (a division of Ramos James Law).

RULES:
- Provide ONLY general educational information about truck accident claims in Texas.
- NEVER provide legal advice. Always recommend speaking with an attorney for specific guidance.
- NEVER guarantee outcomes, case values, or results.
- NEVER ask for sensitive information (SSN, financial details, insurance policy numbers).
- Respond in the same language the user is writing in (English or Spanish).
- Keep responses short (2-4 sentences max) and conversational.
- If the user describes an accident or injuries, be empathetic and suggest they speak with an attorney.
- If the user asks about fees, explain contingency fee basis: no fees unless we win.
- If the user seems to have a viable case (Texas + commercial truck + injuries), encourage them to call or request a free case review.
- Always end triage conversations by encouraging them to call or submit a free case review.
- Include a brief disclaimer when providing any information that could be construed as legal guidance: "This is general information only, not legal advice."

TRIAGE QUESTIONS (ask naturally, one at a time):
1. Was the accident in Texas?
2. Was a commercial truck / 18-wheeler involved?
3. Were there injuries requiring medical treatment?
4. When did the accident happen?
5. Were you the driver, passenger, or pedestrian?
6. Was a police report filed?

After gathering info, if case seems viable, collect name and phone number and encourage calling.`;

// LLM provider abstraction - swap provider by changing this function
async function callLLM(
  messages: { role: string; content: string }[]
): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    // Fallback: return a helpful static response if no API key configured
    return "I appreciate your message. For the best assistance with your truck accident case, please call us directly or fill out our Free Case Review form. Our team is available 24/7. / Agradezco tu mensaje. Para la mejor asistencia con tu caso de accidente de camión, por favor llámanos directamente o completa nuestro formulario de Evaluación Gratis. Nuestro equipo está disponible las 24 horas.";
  }

  // OpenAI-compatible API call
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 300,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`LLM API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that. Please try again.";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body as {
      messages: { role: string; content: string }[];
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    // Limit context window to last 20 messages to control costs
    const trimmedMessages = messages.slice(-20);

    const reply = await callLLM(trimmedMessages);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
