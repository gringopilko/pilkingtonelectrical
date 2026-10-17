import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

const url = "https://pilkingtonelectrical.com.au/terms-of-trade";
const title = "Terms of Trade | Pilkington Electrical";
const description = "The terms that apply to Pilkington Electrical quotes and work: quotes, deposits, payment, variations, hidden conditions, safety, guarantees and more.";

export const Route = createFileRoute("/terms-of-trade")({
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
  component: TermsOfTradePage,
});

const sections: LegalSection[] = [
  {
    heading: "1. About these terms",
    paragraphs: [
      "These terms apply to every quote I give and all work I carry out as Pilkington Electrical (ABN 16 937 824 485, REC 30450). Your quote sets out the details of your job. If anything in your quote differs from these terms, the quote applies.",
      "You accept a quote, and these terms, when you approve it in writing (a reply by email or text is fine) or when you book the work.",
    ],
  },
  {
    heading: "2. Quotes",
    bullets: [
      "Quotes are valid for 30 days from the date on the quote.",
      "A quote is based on the information you gave me and what could reasonably be seen when I assessed the job.",
      "Each quote states what is included and whether GST is included.",
    ],
  },
  {
    heading: "3. Deposits",
    paragraphs: [
      "For bigger jobs with a large amount of materials, such as switchboard upgrades, rewires and EV charger installations, I may ask for a deposit to cover the materials. The amount is shown on your quote, and the job is booked once the deposit is received. The deposit comes off your final invoice.",
    ],
  },
  {
    heading: "4. Payment",
    bullets: [
      "Payment is due on completion of the work, unless your quote says otherwise.",
      "For larger jobs done in stages, your quote may set out progress payments.",
      "You can pay by card or bank transfer. Details are on your invoice.",
      "If an invoice is overdue, I may charge the reasonable costs of recovering it.",
    ],
  },
  {
    heading: "5. Materials",
    paragraphs: [
      "Materials I supply remain my property until the invoice is paid in full. Materials ordered specially for your job, such as a switchboard or a particular fitting, may not be returnable once ordered.",
    ],
  },
  {
    heading: "6. Changes to the work",
    paragraphs: [
      "If you ask for extra work, or the job needs to change, I will explain what is involved and agree the price with you before doing it. Agreement by email or text is fine. Agreed changes are added to your invoice.",
    ],
  },
  {
    heading: "7. Hidden conditions",
    paragraphs: [
      "Some problems cannot be seen until work starts, such as damaged or unsafe wiring inside walls, missing timber in a ceiling, or work that does not meet the standards. If I find something like this, I will stop, explain what I found and quote any extra work before continuing.",
    ],
  },
  {
    heading: "8. Asbestos and hazardous materials",
    paragraphs: [
      "I do not disturb or remove asbestos. Many older switchboards and buildings contain it. If asbestos is found or suspected, work in that area stops until a licensed asbestos removalist has dealt with it. The same applies to other hazardous materials.",
    ],
  },
  {
    heading: "9. Access, site and safety",
    bullets: [
      "Please give safe, clear access to the work area, the switchboard and the roof space where needed, at the agreed time.",
      "Keep children and pets clear of the work area.",
      "Expect the power to be off for parts of the job, and let me know in advance about any medical equipment or anything that must stay powered.",
      "If I cannot get access at the booked time, I will rebook with you, and a return visit may be charged.",
    ],
  },
  {
    heading: "10. Materials you supply",
    paragraphs: [
      "If you supply your own fittings, appliances or materials, I will install them with care, but I cannot guarantee the products themselves. If a customer supplied product fails, the cost of removing and replacing it is not covered by my guarantee.",
    ],
  },
  {
    heading: "11. Safety and compliance",
    paragraphs: [
      "All work is carried out to the Wiring Rules (AS/NZS 3000) and the other standards and laws that apply. Where required, I issue a certificate of electrical safety. If I find something dangerous, I am required by law to make it safe, which can mean disconnecting it, and I may need to report it to the relevant authority.",
    ],
  },
  {
    heading: "12. Cancelling or rescheduling",
    paragraphs: [
      "If you need to cancel or move a booking, please give me as much notice as you can. Materials already ordered specially for your job may be charged if you cancel.",
    ],
  },
  {
    heading: "13. Guarantees and your rights",
    paragraphs: [
      <>
        My workmanship is covered by my <Link to="/guarantee" className="font-semibold text-primary hover:underline">lifetime labour guarantee</Link>, and products are covered by the manufacturer&apos;s warranty. Our goods and services come with guarantees that cannot be excluded under the Australian Consumer Law, and nothing in these terms limits those rights.
      </>,
    ],
  },
  {
    heading: "14. Liability",
    paragraphs: [
      "To the extent permitted by law, I am not responsible for existing faults or damage outside the work I was engaged to do, or for indirect losses. This does not limit your rights under the Australian Consumer Law.",
    ],
  },
  {
    heading: "15. Your information",
    paragraphs: [
      <>
        I handle your personal information as set out in my <Link to="/privacy" className="font-semibold text-primary hover:underline">privacy policy</Link>.
      </>,
    ],
  },
  {
    heading: "16. Disputes and changes to these terms",
    paragraphs: [
      "If you are unhappy with anything, please contact me first on 0466 270 949 and I will work with you to fix it. If we cannot resolve it, Consumer Affairs Victoria can help. These terms are governed by the laws of Victoria. The version of these terms on this website when you accept a quote is the version that applies to your job.",
    ],
  },
];

function TermsOfTradePage() {
  return (
    <LegalPage
      title="Terms of Trade"
      intro="Plain-English terms for my quotes and work, so you know exactly how a job runs from quote to payment."
      updated="16 October 2026"
      sections={sections}
    />
  );
}
