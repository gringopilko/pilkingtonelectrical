import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

const url = "https://pilkingtonelectrical.com.au/terms";
const title = "Website Terms of Use | Pilkington Electrical";
const description = "The terms that apply when you use the Pilkington Electrical website, including general information, quotes, links and liability.";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

const sections: LegalSection[] = [
  {
    heading: "Using this website",
    paragraphs: [
      "This website is run by Pilkington Electrical (ABN 16 937 824 485, REC 30450). By using it, you agree to these terms. If you do not agree, please do not use the website.",
    ],
  },
  {
    heading: "General information only",
    paragraphs: [
      "The guides, articles and service pages are general information to help you understand electrical work. They are not advice for your specific property. Electrical work must only be carried out by a licensed electrician, and rules and products change over time, so please check with me or the relevant authority before relying on anything here.",
    ],
  },
  {
    heading: "Quotes",
    paragraphs: [
      "Nothing on this website is a quote or an offer. Every job is quoted after I have assessed it, and the written quote sets out the scope, price and terms that apply to that job.",
    ],
  },
  {
    heading: "When I work for you",
    paragraphs: ["Your written quote and my terms of trade set out the terms for your job. As a general guide:"],
    bullets: [
      "Quotes are valid for 30 days, payment is due on completion, and bigger jobs may need a deposit for materials.",
      "Any extra work is explained and agreed with you before it is done, and added to the job as a variation.",
      "If I find something that could not reasonably be seen when quoting, such as damaged wiring inside a wall, I will stop, explain what I found and quote before continuing.",
      "I do not disturb or remove asbestos. If it is found, a licensed asbestos removalist is needed before work in that area continues.",
      "Please keep children and pets clear of the work area, give safe access to the switchboard and roof space, and expect the power to be off for parts of the job.",
      "Products are covered by the manufacturer's warranty, and my workmanship is covered by my lifetime labour guarantee.",
    ],
  },
  {
    heading: "Products and brands",
    paragraphs: [
      "Product names, brands, logos and product photos shown on this website belong to their owners and are used to describe products I install. Product ranges and specifications change, so please check the manufacturer's current information.",
    ],
  },
  {
    heading: "Links to other websites",
    paragraphs: [
      "This website links to other websites, such as government and manufacturer sites, for your convenience. I am not responsible for their content or availability.",
    ],
  },
  {
    heading: "Copyright",
    paragraphs: [
      "Copyright in this website belongs to Pilkington Electrical. That includes the text, guides, infographics, interactive tools, page designs, layouts, logo, graphics and my own photos. Under the Copyright Act 1968 (Cth) this material is protected automatically.",
      "You must not copy, reproduce, adapt, republish or distribute any of it, in whole or in part, for commercial use without my written permission. You are welcome to share a link to any page.",
      "Product photos, brand names and logos of manufacturers belong to their owners.",
      "If you believe your copyright has been used on this website, please contact me and I will look into it promptly.",
    ],
  },
  {
    heading: "Liability",
    paragraphs: [
      "To the extent permitted by law, I am not liable for any loss arising from your use of the information on this website. Nothing in these terms limits your rights under the Australian Consumer Law.",
    ],
  },
  {
    heading: "Changes and governing law",
    paragraphs: [
      "These terms may be updated from time to time, and the current version will always be on this page. These terms are governed by the laws of Victoria, Australia.",
    ],
  },
];

function TermsPage() {
  return (
    <LegalPage
      title="Website Terms of Use"
      intro="The plain-English terms that apply when you use this website."
      updated="16 October 2026"
      sections={sections}
    />
  );
}
