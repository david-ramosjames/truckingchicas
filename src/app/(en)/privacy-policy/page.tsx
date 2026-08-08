import type { Metadata } from "next";
import LegalPage, { type LegalBlock } from "@/components/LegalPage";
import { getDictionary } from "@/dictionaries";
import { PHONE_DISPLAY, FIRM_ADDRESS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Trucking Chicas.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

const content: LegalBlock[] = [
  {
    "type": "p",
    "text": "Trucking Chicas Law, PLLC (\"Trucking Chicas,\" \"Firm,\" \"we,\" \"us,\" or \"our\") respects your privacy and is committed to protecting the information you provide through our website, communications, and legal intake processes."
  },
  {
    "type": "p",
    "text": "This Privacy Policy explains what information we collect, how we use it, and the choices available to you regarding your information."
  },
  {
    "type": "h2",
    "text": "Information We Collect"
  },
  {
    "type": "p",
    "text": "We may collect information that you voluntarily provide, including:"
  },
  {
    "type": "ul",
    "items": [
      "Name",
      "Email address",
      "Telephone number",
      "Mailing address",
      "Information about accidents, injuries, insurance claims, or legal matters",
      "Documents, photographs, and other materials you choose to provide",
      "Communications sent through contact forms, intake forms, email, text messages, or telephone calls"
    ]
  },
  {
    "type": "p",
    "text": "We may also automatically collect certain information about your use of our website, including:"
  },
  {
    "type": "ul",
    "items": [
      "IP address",
      "Browser type",
      "Device information",
      "Pages viewed",
      "Date and time of visits",
      "Referring websites",
      "General location information"
    ]
  },
  {
    "type": "h2",
    "text": "No Attorney-Client Relationship"
  },
  {
    "type": "p",
    "text": "Submitting information through our website, contact forms, intake forms, email, text messages, telephone calls, or other communications does not create an attorney-client relationship."
  },
  {
    "type": "p",
    "text": "An attorney-client relationship is formed only through a written engagement agreement signed by both you and the Firm."
  },
  {
    "type": "p",
    "text": "Please do not send highly sensitive, confidential, or time-sensitive information unless specifically requested by the Firm."
  },
  {
    "type": "h2",
    "text": "How We Use Information"
  },
  {
    "type": "p",
    "text": "We may use information to:"
  },
  {
    "type": "ul",
    "items": [
      "Evaluate potential legal matters",
      "Contact prospective clients",
      "Provide legal services",
      "Respond to inquiries",
      "Improve our website and services",
      "Measure marketing effectiveness",
      "Conduct internal business operations",
      "Comply with legal obligations",
      "Send communications and updates to individuals who have requested information or services"
    ]
  },
  {
    "type": "h2",
    "text": "Call Recording, Transcription, and Analysis"
  },
  {
    "type": "p",
    "text": "Telephone calls with the Firm may be monitored, recorded, transcribed, and analyzed for quality assurance, training, operational efficiency, intake evaluation, client service, and other business purposes."
  },
  {
    "type": "p",
    "text": "By communicating with the Firm by telephone, you acknowledge and consent to such recording and processing where permitted by applicable law."
  },
  {
    "type": "h2",
    "text": "Technology and Artificial Intelligence Tools"
  },
  {
    "type": "p",
    "text": "The Firm may use technology tools, including automated systems and artificial intelligence tools, to assist with intake review, communications, call analysis, record review, quality assurance, operational processes, and client service."
  },
  {
    "type": "p",
    "text": "These tools assist Firm personnel and do not replace professional legal judgment."
  },
  {
    "type": "h2",
    "text": "Cookies and Tracking Technologies"
  },
  {
    "type": "p",
    "text": "Our website and service providers may use cookies, pixels, web beacons, and similar technologies to:"
  },
  {
    "type": "ul",
    "items": [
      "Analyze website traffic",
      "Understand visitor behavior",
      "Measure advertising effectiveness",
      "Improve website performance",
      "Support marketing and remarketing activities"
    ]
  },
  {
    "type": "p",
    "text": "You may adjust your browser settings to limit or disable cookies; however, some website functionality may be affected."
  },
  {
    "type": "h2",
    "text": "Third-Party Service Providers"
  },
  {
    "type": "p",
    "text": "We may use third-party service providers to support our operations, including providers of:"
  },
  {
    "type": "ul",
    "items": [
      "Website hosting",
      "Website analytics",
      "Call tracking",
      "Call recording and transcription",
      "Email communications",
      "Advertising and marketing services",
      "Technology and business operations tools"
    ]
  },
  {
    "type": "p",
    "text": "These providers may have access to information only as necessary to perform services on our behalf."
  },
  {
    "type": "h2",
    "text": "Google Signals and User Data Usage Disclosure"
  },
  {
    "type": "p",
    "text": "We use Google Analytics, a web analytics service provided by Google. Google Analytics uses cookies to help us analyze how visitors use our site. We have enabled Google Signals, which allows Google Analytics to collect additional information about users who are signed into their Google accounts and have consented to this data collection. This includes data such as end user location, search history, YouTube history, and data from sites that partner with Google. This information is used to provide aggregated and anonymized insights into user behavior across devices. Users can manage their Google ad personalization and opt out through Google's Ads Settings and the Google Analytics Opt-out Browser Add-on."
  },
  {
    "type": "h2",
    "text": "Email Communications"
  },
  {
    "type": "p",
    "text": "If you provide your contact information, we may send you communications regarding legal services, updates, educational content, or Firm news."
  },
  {
    "type": "p",
    "text": "You may unsubscribe from marketing emails at any time using the unsubscribe link included in those communications."
  },
  {
    "type": "h2",
    "text": "Disclosure of Information"
  },
  {
    "type": "p",
    "text": "We may disclose information:"
  },
  {
    "type": "ul",
    "items": [
      "To service providers assisting the Firm",
      "To comply with legal obligations",
      "To protect the rights, safety, or property of the Firm or others",
      "In connection with a merger, acquisition, or business transfer",
      "With your consent"
    ]
  },
  {
    "type": "h2",
    "text": "Data Retention"
  },
  {
    "type": "p",
    "text": "We retain information for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements."
  },
  {
    "type": "h2",
    "text": "Security"
  },
  {
    "type": "p",
    "text": "We use reasonable administrative, technical, and physical safeguards designed to protect information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security."
  },
  {
    "type": "h2",
    "text": "Children's Privacy"
  },
  {
    "type": "p",
    "text": "Our website is not directed toward children under the age of 13, and we do not knowingly collect personal information from children under 13."
  },
  {
    "type": "h2",
    "text": "External Links"
  },
  {
    "type": "p",
    "text": "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites."
  },
  {
    "type": "h2",
    "text": "Changes to This Policy"
  },
  {
    "type": "p",
    "text": "We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised effective date."
  }
];

const blocks: LegalBlock[] = [
  ...content,
  { type: "h2", text: "Contact Us" },
  {
    type: "lines",
    items: [
      "Trucking Chicas Law, PLLC",
      `${FIRM_ADDRESS.street}, ${FIRM_ADDRESS.street2}`,
      `${FIRM_ADDRESS.city}, ${FIRM_ADDRESS.state} ${FIRM_ADDRESS.zip}`,
      `Phone: ${PHONE_DISPLAY}`,
      "Email: info@truckingchicas.com",
      `Website: ${SITE_URL}`,
    ],
  },
];

export default function Page() {
  const dict = getDictionary("en");
  return (
    <LegalPage
      dict={dict}
      locale="en"
      title="Privacy Policy"
      updated="Last Updated: May 2026"
      blocks={blocks}
    />
  );
}
