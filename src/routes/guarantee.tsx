import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

const url = "https://pilkingtonelectrical.com.au/guarantee";
const title = "Lifetime Labour Guarantee | Pilkington Electrical";
const description = "What the Pilkington Electrical lifetime labour guarantee covers, what it does not, how to make a claim and your rights under the Australian Consumer Law.";

export const Route = createFileRoute("/guarantee")({
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
  component: GuaranteePage,
});

const sections: LegalSection[] = [
  {
    heading: "What is covered",
    paragraphs: [
      "If electrical work I carried out fails because of my workmanship, I will come back and fix it at no charge for my labour. Workmanship means how the work was done, for example a loose connection, a poorly terminated cable or a fitting that was not installed correctly.",
      "A defect is work that did not meet the Wiring Rules (AS/NZS 3000) and the other standards that applied when the work was done, or that fails because of how it was installed.",
    ],
  },
  {
    heading: "How long it lasts",
    paragraphs: [
      "The guarantee lasts for as long as you own the property where the work was done. It applies to the customer named on the invoice and does not transfer to a new owner.",
    ],
  },
  {
    heading: "What is not covered",
    bullets: [
      "The products and materials themselves. These are covered by the manufacturer's warranty, and I can help you make a claim.",
      "Fittings, appliances or materials supplied by the customer.",
      "Damage from misuse, accidents, water, pests, power surges, lightning or storms.",
      "Work that has been altered, repaired or interfered with by anyone else.",
      "Faults in existing wiring or equipment that I did not install.",
      "Hidden conditions that could not reasonably be seen at the time, such as damage inside walls, and asbestos, which must be handled by a licensed removalist.",
      "Normal wear and tear, globes and batteries.",
      "Work where the invoice has not been paid in full.",
    ],
  },
  {
    heading: "How to make a claim",
    paragraphs: [
      "Call 0466 270 949, then confirm in writing by email to contact@pilkingtonelectrical.com.au with your name, the address of the job, your invoice number if you have it, and what is happening. I will arrange a time to inspect the work.",
      "Please give me reasonable access to inspect, and do not have anyone else alter or repair the work before I have seen it, as that can make it impossible to tell what went wrong. If there is a safety risk, turn the circuit off at the switchboard and call me.",
      "If the fault is caused by my workmanship, I fix it at no charge for my labour or my visit. If it is not covered, I will explain what I found and give you a quote before doing any further work, so you are never charged without agreeing first.",
    ],
  },
  {
    heading: "Your rights under the Australian Consumer Law",
    paragraphs: [
      "This guarantee is in addition to your rights under the Australian Consumer Law and does not replace them.",
      "Our goods and services come with guarantees that cannot be excluded under the Australian Consumer Law. For major failures with the service, you are entitled:",
    ],
    bullets: ["to cancel your service contract with us; and", "to a refund for the unused portion, or to compensation for its reduced value."],
    after: [
      "You are also entitled to choose a refund or replacement for major failures with goods. If a failure with the goods or a service does not amount to a major failure, you are entitled to have the failure rectified in a reasonable time. If this is not done you are entitled to a refund for the goods and to cancel the contract for the service and obtain a refund of any unused portion. You are also entitled to be compensated for any other reasonably foreseeable loss or damage from a failure in the goods or service.",
    ],
  },
  {
    heading: "Guarantee provided by",
    bullets: [
      "Pilkington Electrical, ABN 16 937 824 485, Registered Electrical Contractor REC 30450",
      "Hampton East VIC 3188",
      "Phone 0466 270 949",
      "Email contact@pilkingtonelectrical.com.au",
    ],
  },
];

function GuaranteePage() {
  return (
    <LegalPage
      title="Lifetime Labour Guarantee"
      intro="I stand behind my work. If something I installed fails because of how I did the job, I come back and fix it."
      updated="16 October 2026"
      sections={sections}
    />
  );
}
