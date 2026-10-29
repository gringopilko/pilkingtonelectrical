import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

const url = "https://pilkingtonelectrical.com.au/privacy";
const title = "Privacy Policy | Pilkington Electrical";
const description = "How Pilkington Electrical collects, uses, stores and protects your personal information, and how to access or correct it.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: PrivacyPage,
});

const sections: LegalSection[] = [
  {
    heading: "Who I am",
    paragraphs: [
      "Pilkington Electrical (ABN 16 937 824 485) is a licensed electrical contractor based in Hampton East, Victoria. This policy explains how I handle your personal information. I handle it in line with the Australian Privacy Principles.",
    ],
  },
  {
    heading: "What I collect",
    bullets: [
      "Your name, phone number and email address.",
      "The address of the property where work is needed, and access details.",
      "Details and photos you send me about the job.",
      "Records of the work, quotes, invoices and payments.",
      "Basic website usage data, such as pages visited and device type, collected through Google Analytics.",
    ],
  },
  {
    heading: "Why I collect it",
    bullets: [
      "To respond to your enquiry and prepare a quote.",
      "To carry out the work and contact you about it.",
      "To issue invoices, receive payments and keep business records.",
      "To meet legal requirements, such as certificates of electrical safety and record keeping.",
      "To improve the website and understand which pages are useful.",
    ],
  },
  {
    heading: "Who I share it with",
    paragraphs: ["I never sell your information. I only share it where it is needed to do the job or required by law, for example with:"],
    bullets: [
      "Energy Safe Victoria and electricity distributors, where electrical safety certificates or connection requests require it.",
      "Service providers that help me run the business, such as my website form service, email, accounting and payment providers.",
      "Agents, owners corporations or property managers who arranged the work, where the job is for a rental or shared property.",
    ],
    after: [
      "Photos you add to a quote request are stored privately with Cloudflare, the service that hosts this website, and are deleted automatically after 90 days. They can only be viewed through the private link sent to me with your request.",
      "Some of these providers, such as Google, may store information on servers outside Australia.",
    ],
  },
  {
    heading: "How I keep it secure",
    paragraphs: [
      "Your information is stored in password-protected business systems and is only used for the purposes above. Records are kept for as long as needed for the work, warranties and legal requirements, and then deleted or de-identified.",
    ],
  },
  {
    heading: "Website and analytics",
    paragraphs: [
      "The website uses Google Analytics to understand how visitors use it. This uses cookies and does not tell me who you are. You can block cookies in your browser settings or use Google's opt-out browser add-on.",
      "When you send the quote form, your details are delivered to me by email through a form service. They are only used to respond to your enquiry.",
    ],
  },
  {
    heading: "Accessing or correcting your information",
    paragraphs: [
      "You can ask to see the personal information I hold about you, or ask me to correct or delete it, by emailing contact@pilkingtonelectrical.com.au. I will respond within a reasonable time.",
    ],
  },
  {
    heading: "Questions or complaints",
    paragraphs: [
      "If you have a question or complaint about privacy, contact me first on 0466 270 949 or contact@pilkingtonelectrical.com.au and I will work with you to resolve it. If you are not satisfied, you can contact the Office of the Australian Information Commissioner at oaic.gov.au.",
    ],
  },
];

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your information is used to quote and do your job, and nothing else. Here is exactly what I collect and how I look after it."
      updated="16 October 2026"
      sections={sections}
    />
  );
}
