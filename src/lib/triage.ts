export interface LeadFields {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  incidentDate?: string;
  injuries?: string;
  treatment?: string;
  role?: string;
  policeReport?: string;
  truckingCompany?: string;
}

export type TriageStatus = "likely_case" | "needs_review" | "general_info";

export interface ChatSession {
  sessionId: string;
  locale: "en" | "es";
  leadFields: LeadFields;
  triageStatus: TriageStatus;
  transcript: { role: "user" | "assistant"; content: string; ts: number }[];
  channel?: "leads" | "log";
}

/**
 * Simple, transparent "case fit" heuristic.
 */
export function triageCase(fields: LeadFields): TriageStatus {
  const hasInjury =
    fields.injuries?.toLowerCase() !== "no" && fields.injuries !== undefined;
  const hasTreatment =
    fields.treatment?.toLowerCase() !== "no" && fields.treatment !== undefined;

  let withinWindow = true;
  if (fields.incidentDate) {
    try {
      const incidentDate = new Date(fields.incidentDate);
      const now = new Date();
      const diffYears =
        (now.getTime() - incidentDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
      if (diffYears > 2) withinWindow = false;
    } catch {
      // Can't parse date — don't penalize
    }
  }

  if ((hasInjury || hasTreatment) && withinWindow) return "likely_case";
  if (fields.phone || fields.name) return "needs_review";
  return "general_info";
}

const STATUS_EMOJI: Record<TriageStatus, string> = {
  likely_case: "🟢",
  needs_review: "🟡",
  general_info: "🔵",
};

const STATUS_LABEL: Record<TriageStatus, string> = {
  likely_case: "Likely Case",
  needs_review: "Needs Review",
  general_info: "General Question",
};

function formatContactLines(fields: LeadFields): string {
  return [
    fields.name && `*Name:* ${fields.name}`,
    fields.phone && `*Phone:* ${fields.phone}`,
    fields.email && `*Email:* ${fields.email}`,
    fields.city && `*City:* ${fields.city}`,
    fields.incidentDate && `*Incident Date:* ${fields.incidentDate}`,
    fields.injuries && `*Injuries:* ${fields.injuries}`,
    fields.treatment && `*Treatment:* ${fields.treatment}`,
    fields.role && `*Role:* ${fields.role}`,
    fields.policeReport && `*Police Report:* ${fields.policeReport}`,
    fields.truckingCompany && `*Trucking Co:* ${fields.truckingCompany}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function formatTranscript(transcript: ChatSession["transcript"], limit = 10): string {
  return transcript
    .slice(-limit)
    .map((m) => `${m.role === "user" ? "👤" : "🤖"} ${m.content.slice(0, 200)}`)
    .join("\n");
}

/**
 * #tc-leads — posted immediately when:
 * - Phone captured
 * - User requests a call
 * - "likely_case" triage triggers
 */
export function generateLeadPayload(session: ChatSession) {
  const contactLines = formatContactLines(session.leadFields);
  const transcript = formatTranscript(session.transcript, 8);

  return {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `${STATUS_EMOJI[session.triageStatus]} NEW LEAD — ${STATUS_LABEL[session.triageStatus]}`,
        },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Status:* ${STATUS_LABEL[session.triageStatus]}` },
          { type: "mrkdwn", text: `*Language:* ${session.locale.toUpperCase()}` },
          { type: "mrkdwn", text: `*Session:* \`${session.sessionId.slice(0, 8)}\`` },
        ],
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: contactLines
            ? `*📋 Contact Info:*\n${contactLines}`
            : "_No contact info captured yet_",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*💬 Recent Messages:*\n${transcript || "_No messages_"}`,
        },
      },
      { type: "divider" },
    ],
  };
}

/**
 * #tc-chat-log — 1 session summary posted when:
 * - Chat is idle for 7 minutes
 * - 10+ user turns
 * - Chat session ends
 */
export function generateChatLogPayload(session: ChatSession) {
  const contactLines = formatContactLines(session.leadFields);
  const userMsgCount = session.transcript.filter((m) => m.role === "user").length;
  const fullTranscript = formatTranscript(session.transcript, 20);

  return {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `💬 Chat Session — ${STATUS_LABEL[session.triageStatus]}`,
        },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Status:* ${STATUS_EMOJI[session.triageStatus]} ${STATUS_LABEL[session.triageStatus]}` },
          { type: "mrkdwn", text: `*Language:* ${session.locale.toUpperCase()}` },
          { type: "mrkdwn", text: `*Messages:* ${userMsgCount} user turns` },
          { type: "mrkdwn", text: `*Session:* \`${session.sessionId.slice(0, 8)}\`` },
        ],
      },
      ...(contactLines
        ? [
            {
              type: "section" as const,
              text: {
                type: "mrkdwn" as const,
                text: `*📋 Contact Info:*\n${contactLines}`,
              },
            },
          ]
        : []),
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*📝 Transcript:*\n${fullTranscript || "_Empty session_"}`,
        },
      },
      { type: "divider" },
    ],
  };
}

// Keep legacy export for backward compat
export const generateSlackPayload = generateLeadPayload;
