import type { Metadata } from "next";
import LegalPage, { type LegalBlock } from "@/components/LegalPage";
import { getDictionary } from "@/dictionaries";
import { PHONE_DISPLAY, FIRM_ADDRESS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Trucking Chicas website.",
  alternates: { canonical: `${SITE_URL}/terms-of-use` },
};

const content: LegalBlock[] = [
  {
    "type": "p",
    "text": "These Terms of Use (\"Terms\") govern your access to and use of the website, forms, communication tools, content, and related online services provided by Trucking Chicas Law, PLLC (\"Trucking Chicas,\" \"Firm,\" \"we,\" \"us,\" or \"our\") (collectively, the \"Website\")."
  },
  {
    "type": "p",
    "text": "By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, please discontinue use of the Website."
  },
  {
    "type": "h2",
    "text": "1. No Legal Advice"
  },
  {
    "type": "p",
    "text": "The information provided on this Website is for general informational and educational purposes only."
  },
  {
    "type": "p",
    "text": "Nothing on this Website constitutes legal advice, legal opinions, or legal recommendations. Information provided on this Website should not be relied upon as a substitute for legal advice from a qualified attorney regarding your specific situation."
  },
  {
    "type": "p",
    "text": "You should consult an attorney regarding any legal matter before taking action based on information contained on this Website."
  },
  {
    "type": "h2",
    "text": "2. No Attorney-Client Relationship"
  },
  {
    "type": "p",
    "text": "Your use of this Website does not create an attorney-client relationship with Trucking Chicas Law, PLLC."
  },
  {
    "type": "p",
    "text": "Submitting information through contact forms, intake forms, email, text messages, telephone calls, chat tools, social media, or any other communication channel does not establish an attorney-client relationship."
  },
  {
    "type": "p",
    "text": "An attorney-client relationship is formed only through a written engagement agreement signed by both the prospective client and the Firm."
  },
  {
    "type": "p",
    "text": "Until such an agreement is executed, information submitted to the Firm may not be protected by the attorney-client privilege."
  },
  {
    "type": "h2",
    "text": "3. No Guarantee of Results"
  },
  {
    "type": "p",
    "text": "Legal outcomes depend upon many factors, including the unique facts, evidence, applicable law, and circumstances of each matter."
  },
  {
    "type": "p",
    "text": "Nothing on this Website should be interpreted as a guarantee, warranty, or prediction regarding the outcome of any legal matter."
  },
  {
    "type": "p",
    "text": "Past results do not guarantee future outcomes."
  },
  {
    "type": "h2",
    "text": "4. Case Results and Testimonials"
  },
  {
    "type": "p",
    "text": "The Website may contain information regarding prior case results, settlements, verdicts, client testimonials, endorsements, reviews, or descriptions of previous legal matters."
  },
  {
    "type": "p",
    "text": "These results and testimonials are provided for informational purposes only and do not constitute a guarantee, warranty, or prediction regarding future results."
  },
  {
    "type": "p",
    "text": "Every case is unique and must be evaluated based upon its own facts and circumstances."
  },
  {
    "type": "p",
    "text": "Client testimonials reflect the experiences of individual clients and may not be representative of the experiences of all clients."
  },
  {
    "type": "p",
    "text": "Similar results are not guaranteed."
  },
  {
    "type": "h2",
    "text": "5. User Communications and Submissions"
  },
  {
    "type": "p",
    "text": "You may choose to provide information to the Firm through forms, emails, telephone calls, text messages, document submissions, or other communications."
  },
  {
    "type": "p",
    "text": "By submitting information, you represent that:"
  },
  {
    "type": "ul",
    "items": [
      "The information is accurate to the best of your knowledge.",
      "You have the right to provide the information.",
      "The information does not violate any law or third-party rights."
    ]
  },
  {
    "type": "p",
    "text": "The Firm reserves the right, but not the obligation, to review, respond to, retain, or decline any submission."
  },
  {
    "type": "p",
    "text": "Users should avoid sending highly sensitive, confidential, or time-sensitive information unless specifically requested by the Firm."
  },
  {
    "type": "h2",
    "text": "6. Intellectual Property Rights"
  },
  {
    "type": "p",
    "text": "All content available through the Website, including text, graphics, logos, photographs, videos, designs, software, code, documents, and other materials, is owned by or licensed to Trucking Chicas Law, PLLC and is protected by applicable intellectual property laws."
  },
  {
    "type": "p",
    "text": "You may access and use Website content solely for personal, informational, and non-commercial purposes."
  },
  {
    "type": "p",
    "text": "You may not:"
  },
  {
    "type": "ul",
    "items": [
      "Copy",
      "Reproduce",
      "Republish",
      "Distribute",
      "Modify",
      "Sell",
      "License",
      "Commercially exploit"
    ]
  },
  {
    "type": "p",
    "text": "any Website content without prior written permission from the Firm."
  },
  {
    "type": "p",
    "text": "Requests for permission may be sent to:"
  },
  {
    "type": "p",
    "text": "info@truckingchicas.com"
  },
  {
    "type": "h2",
    "text": "7. Acceptable Use"
  },
  {
    "type": "p",
    "text": "You agree not to:"
  },
  {
    "type": "ul",
    "items": [
      "Violate any applicable law or regulation.",
      "Submit false or misleading information.",
      "Attempt to gain unauthorized access to the Website or related systems.",
      "Interfere with Website security or functionality.",
      "Upload malicious code, malware, viruses, or harmful software.",
      "Use automated scraping, crawling, harvesting, or extraction tools without authorization.",
      "Misrepresent your identity.",
      "Use the Website in any manner that could damage, disable, overburden, or impair Website operations."
    ]
  },
  {
    "type": "p",
    "text": "We reserve the right to restrict or terminate access for violations of these Terms."
  },
  {
    "type": "h2",
    "text": "8. Third-Party Links and Services"
  },
  {
    "type": "p",
    "text": "The Website may contain links to third-party websites, services, or resources."
  },
  {
    "type": "p",
    "text": "These links are provided solely as a convenience."
  },
  {
    "type": "p",
    "text": "The Firm does not control, endorse, or assume responsibility for third-party websites, content, privacy practices, products, or services."
  },
  {
    "type": "p",
    "text": "Your use of third-party websites is at your own risk."
  },
  {
    "type": "h2",
    "text": "9. Website Availability"
  },
  {
    "type": "p",
    "text": "We may modify, suspend, discontinue, or update any portion of the Website at any time without notice."
  },
  {
    "type": "p",
    "text": "We do not guarantee that the Website will always be available, secure, error-free, or uninterrupted."
  },
  {
    "type": "p",
    "text": "The Firm is not responsible for any interruption, delay, technical issue, or loss arising from Website availability or functionality."
  },
  {
    "type": "h2",
    "text": "10. Disclaimer of Warranties"
  },
  {
    "type": "p",
    "text": "THE WEBSITE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS."
  },
  {
    "type": "p",
    "text": "TO THE FULLEST EXTENT PERMITTED BY LAW, TRUCKING CHICAS LAW, PLLC DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF:"
  },
  {
    "type": "ul",
    "items": [
      "MERCHANTABILITY",
      "FITNESS FOR A PARTICULAR PURPOSE",
      "NON-INFRINGEMENT",
      "ACCURACY",
      "COMPLETENESS",
      "RELIABILITY"
    ]
  },
  {
    "type": "p",
    "text": "THE FIRM DOES NOT WARRANT THAT THE WEBSITE WILL BE ERROR-FREE, SECURE, OR AVAILABLE AT ALL TIMES."
  },
  {
    "type": "p",
    "text": "USE OF THE WEBSITE IS AT YOUR OWN RISK."
  },
  {
    "type": "h2",
    "text": "11. Limitation of Liability"
  },
  {
    "type": "p",
    "text": "TO THE FULLEST EXTENT PERMITTED BY LAW, TRUCKING CHICAS LAW, PLLC AND ITS ATTORNEYS, EMPLOYEES, CONTRACTORS, AGENTS, AND REPRESENTATIVES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE WEBSITE."
  },
  {
    "type": "p",
    "text": "IF LIABILITY IS FOUND TO EXIST, THE FIRM'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO ACCESS THE WEBSITE, IF ANY."
  },
  {
    "type": "h2",
    "text": "12. Indemnification"
  },
  {
    "type": "p",
    "text": "You agree to defend, indemnify, and hold harmless Trucking Chicas Law, PLLC and its attorneys, employees, agents, contractors, and representatives from and against any claims, damages, liabilities, costs, expenses, or attorney fees arising from:"
  },
  {
    "type": "ul",
    "items": [
      "Your use of the Website.",
      "Your violation of these Terms.",
      "Your violation of any applicable law.",
      "Your violation of any third-party rights."
    ]
  },
  {
    "type": "h2",
    "text": "13. Electronic Communications"
  },
  {
    "type": "p",
    "text": "By communicating with the Firm through the Website, email, online forms, text messages, or other electronic means, you consent to receive electronic communications from the Firm."
  },
  {
    "type": "p",
    "text": "You agree that electronic communications satisfy any legal requirement that communications be in writing."
  },
  {
    "type": "h2",
    "text": "14. Governing Law"
  },
  {
    "type": "p",
    "text": "These Terms shall be governed by and interpreted under the laws of the State of Texas, without regard to conflict-of-law principles."
  },
  {
    "type": "h2",
    "text": "15. Venue and Jurisdiction"
  },
  {
    "type": "p",
    "text": "Any dispute arising from or relating to these Terms or the use of the Website shall be brought exclusively in the state or federal courts located in Travis County, Texas."
  },
  {
    "type": "p",
    "text": "You consent to the personal jurisdiction of those courts."
  },
  {
    "type": "h2",
    "text": "16. Changes to These Terms"
  },
  {
    "type": "p",
    "text": "The Firm may update these Terms from time to time."
  },
  {
    "type": "p",
    "text": "Updated Terms will be posted on this page and become effective upon posting unless otherwise stated."
  },
  {
    "type": "p",
    "text": "Your continued use of the Website after any changes are posted constitutes acceptance of the revised Terms."
  },
  {
    "type": "h2",
    "text": "17. Severability"
  },
  {
    "type": "p",
    "text": "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect."
  },
  {
    "type": "h2",
    "text": "18. Entire Agreement"
  },
  {
    "type": "p",
    "text": "These Terms, together with the Firm's Privacy Policy, constitute the entire agreement regarding your use of the Website."
  }
];

const blocks: LegalBlock[] = [
  ...content,
  { type: "h2", text: "19. Contact Information" },
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
      title="Terms of Use"
      updated="Effective Date: May 2026"
      blocks={blocks}
    />
  );
}
