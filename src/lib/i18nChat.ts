export const chatStrings = {
  en: {
    greeting:
      "Hi! I'm here to help answer general questions about truck accident claims in Texas. How can I help you today?",
    consent:
      "Messages may be shared with our team to help you. Don't include sensitive info like SSN or financial details. This is not legal advice.",
    triageQuestions: {
      location: "Was the accident in Texas?",
      vehicleType: "Was a commercial truck or 18-wheeler involved?",
      injuries: "Were there any injuries requiring medical treatment?",
      when: "When did the accident happen? (approximate date)",
      role: "Were you the driver, passenger, or pedestrian?",
      policeReport: "Was a police report filed?",
      name: "What's your name?",
      phone: "What's a good phone number to reach you?",
    },
    quickReplies: {
      yes: "Yes",
      no: "No",
      notSure: "Not sure",
      callNow: "Call 24/7",
      freeReview: "Free Case Review",
      driver: "Driver",
      passenger: "Passenger",
      pedestrian: "Pedestrian",
    },
    likelyCase:
      "Based on what you've shared, it sounds like you may have a strong case. We strongly recommend speaking with one of our truck accident attorneys for a free, no-obligation case review. This is general information only, not legal advice.",
    needsReview:
      "Thank you for sharing that information. Your situation may have unique factors that an attorney should review. We recommend a free consultation to better understand your options. This is general information only, not legal advice.",
    generalInfo:
      "Thank you for your question. For specific legal guidance about your situation, we recommend speaking with one of our experienced truck accident attorneys. Consultations are free and confidential.",
    collectContact:
      "Would you like one of our attorneys to contact you? I just need your name and phone number.",
    thankYou:
      "Thank you! One of our team members will be in touch shortly. In the meantime, you can always call us directly.",
    disclaimer:
      "Disclaimer: This chatbot provides general educational information only. It does not provide legal advice and does not create an attorney-client relationship. Every case is unique. Please consult with an attorney for advice about your specific situation.",
    inputPlaceholder: "Type your message...",
    sendButton: "Send",
    chatTitle: "Chat with Us",
    poweredBy: "Trucking Chicas",
  },
  es: {
    greeting:
      "¡Hola! Estoy aquí para ayudarte a responder preguntas generales sobre reclamaciones por accidentes de camión en Texas. ¿Cómo puedo ayudarte?",
    consent:
      "Los mensajes pueden compartirse con nuestro equipo para ayudarte. No incluyas información confidencial como número de seguro social o datos financieros. Esto no es asesoría legal.",
    triageQuestions: {
      location: "¿El accidente fue en Texas?",
      vehicleType: "¿Estaba involucrado un camión comercial o tráiler de 18 ruedas?",
      injuries: "¿Hubo lesiones que requirieron atención médica?",
      when: "¿Cuándo ocurrió el accidente? (fecha aproximada)",
      role: "¿Eras el conductor, pasajero o peatón?",
      policeReport: "¿Se presentó un reporte policial?",
      name: "¿Cuál es tu nombre?",
      phone: "¿Cuál es un buen número de teléfono para contactarte?",
    },
    quickReplies: {
      yes: "Sí",
      no: "No",
      notSure: "No estoy seguro/a",
      callNow: "Llamar 24/7",
      freeReview: "Evaluación Gratis",
      driver: "Conductor",
      passenger: "Pasajero",
      pedestrian: "Peatón",
    },
    likelyCase:
      "Según lo que nos compartiste, parece que podrías tener un caso fuerte. Te recomendamos hablar con uno de nuestros abogados altamente experimentados en accidentes de camión para una evaluación gratuita y sin compromiso. Esta es información general solamente, no es asesoría legal.",
    needsReview:
      "Gracias por compartir esa información. Tu situación puede tener factores únicos que un abogado debería revisar. Recomendamos una consulta gratuita para entender mejor tus opciones. Esta es información general solamente, no es asesoría legal.",
    generalInfo:
      "Gracias por tu pregunta. Para orientación legal específica sobre tu situación, te recomendamos hablar con uno de nuestros abogados experimentados en accidentes de camión. Las consultas son gratuitas y confidenciales.",
    collectContact:
      "¿Te gustaría que uno de nuestros abogados se comunique contigo? Solo necesito tu nombre y número de teléfono.",
    thankYou:
      "¡Gracias! Un miembro de nuestro equipo se comunicará contigo pronto. Mientras tanto, siempre puedes llamarnos directamente.",
    disclaimer:
      "Aviso: Este chatbot proporciona información educativa general solamente. No proporciona asesoría legal y no crea una relación abogado-cliente. Cada caso es único. Por favor consulta con un abogado para asesoría sobre tu situación específica.",
    inputPlaceholder: "Escribe tu mensaje...",
    sendButton: "Enviar",
    chatTitle: "Chatea con Nosotros",
    poweredBy: "Trucking Chicas",
  },
} as const;

export type ChatLocale = keyof typeof chatStrings;

export function detectLanguage(text: string): ChatLocale {
  // Simple heuristic: check for common Spanish words/characters
  const spanishIndicators = [
    /[áéíóúñü¿¡]/i,
    /\b(hola|sí|no\s+s[eé]|accidente|camión|ayuda|pregunta|tengo|fue|estoy|quiero|necesito|por\s+favor)\b/i,
  ];
  const isSpanish = spanishIndicators.some((re) => re.test(text));
  return isSpanish ? "es" : "en";
}
