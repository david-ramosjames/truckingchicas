import { NextRequest, NextResponse } from "next/server";
import { sendLead } from "@/lib/leads";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, string>;
    const { name, phone, email, message, locale } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    await sendLead(
      "New Contact Form Lead",
      [
        { label: "Name", value: name },
        { label: "Phone", value: phone },
        { label: "Email", value: email },
        { label: "Message", value: message },
        { label: "Language", value: locale === "es" ? "Spanish" : "English" },
      ],
      email || undefined
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to submit" },
      { status: 500 }
    );
  }
}
