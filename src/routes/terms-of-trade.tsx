import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

const url = "https://pilkingtonelectrical.com.au/terms-of-trade";
const title = "Terms of Trade | Pilkington Electrical";
const description = "How Pilkington Electrical quotes, supplies materials, carries out electrical work and handles payment, warranties, variations, safety and disputes.";

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
    heading: "1. Acceptance of these terms",
    paragraphs: [
      "These terms apply to quotations, bookings, electrical work, materials and services provided by Pilkington Electrical, unless different written terms are expressly agreed.",
      "By accepting a quotation, confirming a booking or authorising work to proceed, you agree to these terms. Where the customer is a property manager, body corporate, builder or other representative, they must have authority to engage Pilkington Electrical on behalf of the relevant property owner or entity.",
      "Your quotation, work order or written approval describes the specific work agreed upon. If it conflicts with these terms, the specific written agreement takes precedence for that matter.",
      "Nothing in these terms excludes or limits rights or obligations that cannot legally be excluded or limited.",
    ],
  },
  {
    heading: "2. Quotations and estimates",
    bullets: [
      "Unless otherwise stated, quotations are valid for 30 days from the date of issue.",
      "Quotations are based on the information available, the agreed scope of work and conditions reasonably visible at the time of assessment.",
      "The quotation will identify the included work, relevant exclusions and whether GST is included.",
      "A quotation is not an assurance that concealed wiring, structural conditions or other hidden circumstances have been inspected.",
      "Estimates and verbal price indications are not fixed quotations unless expressly confirmed in writing.",
      "If the requested work changes or additional work becomes necessary, the price and scope may change in accordance with the variations section below.",
      "Where a quotation depends on information, measurements, access or specifications supplied by the customer or another party, material inaccuracies may require the quotation to be revised before the affected work proceeds.",
    ],
  },
  {
    heading: "3. Deposits and progress payments",
    paragraphs: [
      "For larger projects or jobs requiring substantial material purchases, Pilkington Electrical may request a deposit or staged payments.",
      "Any deposit, progress payment, due date and payment milestone will be stated in the quotation or agreed in writing before the relevant payment becomes due.",
      "Deposits will be credited against the contract price. Where materials are specially ordered for a project, the customer may be responsible for reasonable, unrecoverable costs if the project is cancelled, subject to applicable law and the agreed contract.",
    ],
  },
  {
    heading: "4. Payment terms",
    paragraphs: ["Unless the quotation or invoice states otherwise, payment is due upon completion of the agreed work."],
    bullets: [
      "Invoices must be paid by the due date shown on the invoice.",
      "Payment may be made using the payment methods specified on the invoice.",
      "For staged projects, progress payments are payable in accordance with the agreed schedule.",
      "Any genuine dispute about an invoice should be raised promptly, with details of the disputed amount and reasons. Undisputed amounts remain payable in accordance with the agreed terms and applicable law.",
      "Where an invoice remains overdue, Pilkington Electrical may take lawful steps to recover the outstanding amount and seek reasonable, legally recoverable recovery costs.",
      "Any applicable statutory rights, restrictions or requirements relating to debt recovery, payment claims or interest take precedence over these terms.",
    ],
    after: ["Pilkington Electrical will not charge an undisclosed fee or impose a penalty that is unlawful."],
  },
  {
    heading: "5. Materials supplied by Pilkington Electrical",
    paragraphs: [
      "Where Pilkington Electrical supplies products or materials, the price will be included in the quotation or otherwise agreed with the customer.",
      "Materials may include light fittings, switches, power points, cabling, circuit protection devices, fans, smoke alarms and other electrical equipment.",
    ],
    bullets: [
      "Products will be selected according to the agreed specification and intended application.",
      "If a specified product becomes unavailable, Pilkington Electrical will discuss a suitable alternative and any price difference before substituting it.",
      "Special-order products may be subject to supplier cancellation, return or restocking conditions. Any applicable costs will be disclosed where reasonably practicable.",
      "Ownership of supplied materials will transfer in accordance with the applicable contract and law. Nothing in these terms authorises unlawful repossession or overrides a customer's statutory rights.",
      "Manufacturer warranties and Australian Consumer Law guarantees apply as relevant to the products supplied.",
    ],
  },
  {
    heading: "6. Customer-supplied products and materials",
    paragraphs: [
      "Customers may supply their own light fittings, ceiling fans, switches, power points, appliances and other products, subject to suitability for the proposed installation.",
      "Before installation, Pilkington Electrical may inspect the supplied product to assess whether it is suitable and safe to install.",
    ],
    bullets: [
      "The customer is responsible for providing the correct product, including the required model, dimensions, accessories and compatible components.",
      "Products must be suitable for the intended location and installation, including any applicable weatherproofing, insulation-clearance, mounting and electrical requirements.",
      "Installation may be declined or postponed if the product is damaged, incomplete, incompatible, unsafe, non-compliant or unsuitable for the intended use.",
      "Additional time or materials required because of an unsuitable or incomplete product may be charged as additional work, subject to prior approval where required.",
      "Pilkington Electrical does not provide a manufacturer's warranty for a product purchased independently by the customer.",
      "Where a customer-supplied product is defective or fails after installation, any investigation, removal, replacement, reinstallation or additional attendance may incur a charge if the work is outside the original scope and the charge is lawful.",
      "These terms do not remove Pilkington Electrical's responsibility for its own workmanship or any consumer guarantees that apply to the installation service.",
    ],
    after: [
      "The customer remains responsible for pursuing any applicable product warranty with the supplier or manufacturer, without affecting any rights they may have against Pilkington Electrical under applicable law.",
    ],
  },
  {
    heading: "7. Removal and disposal of replaced items",
    paragraphs: [
      "To avoid misunderstandings, the following rules apply to replaced light fittings and other items.",
      <strong key="a" className="font-bold text-foreground">Where Pilkington Electrical supplies the replacement product:</strong>,
      "Unless the quotation states otherwise, Pilkington Electrical will remove the old item as part of the agreed replacement work and take it away for appropriate disposal or recycling. This applies to ordinary removed items that can be safely handled and transported as part of the job.",
      <strong key="b" className="font-bold text-foreground">Where the customer supplies the replacement product:</strong>,
      "The customer is responsible for the old item once it has been removed, including arranging its disposal or recycling. Pilkington Electrical will not ordinarily take the old item away unless this has been agreed beforehand.",
      <strong key="c" className="font-bold text-foreground">Exceptions and additional requirements:</strong>,
    ],
    bullets: [
      "If the customer wishes to keep an old fitting, appliance or other item, they must advise Pilkington Electrical before removal.",
      "Hazardous materials, including asbestos-containing items, specialised batteries, refrigerants and other regulated waste, are not included in ordinary disposal.",
      "Additional labour, specialist handling, hazardous-waste disposal or recycling fees will be discussed and agreed before the additional work proceeds, where required.",
      "Removed items may be disposed of once the agreed removal work is complete, unless the customer has requested that they be retained.",
    ],
  },
  {
    heading: "8. Changes and variations to the agreed work",
    paragraphs: [
      "Additional work may be necessary if the customer changes their requirements or unforeseen conditions are discovered.",
      "Examples include additional power points, replacement of damaged cable, changes to switchboard protection, extra fittings, inaccessible wiring or rectification of unsafe existing work.",
      "Before proceeding with additional chargeable work, Pilkington Electrical will explain the change, the reason for it and the additional price, and obtain the customer's approval where required.",
      "Approval may be given by email, text message or another recorded written method.",
      "Where immediate action is reasonably necessary to address a safety risk, Pilkington Electrical may take lawful and proportionate steps to make the affected installation safe. Any further chargeable work will be discussed with the customer as soon as reasonably practicable.",
    ],
  },
  {
    heading: "9. Existing installations and concealed conditions",
    paragraphs: [
      "Electrical work can reveal conditions that were not reasonably visible before the work commenced.",
      "These may include:",
    ],
    bullets: [
      "Deteriorated, damaged or incorrectly installed wiring.",
      "Existing installations that do not comply with applicable requirements.",
      "Inadequate earthing, circuit protection or cable capacity.",
      "Concealed junctions, inaccessible connections or damaged accessories.",
      "Structural obstructions, inadequate mounting support or restricted roof-space access.",
      "Damage, defects or alterations caused by previous work or other trades.",
    ],
    after: [
      "Where these conditions affect safety, compliance, the proposed installation or the ability to complete the agreed work, Pilkington Electrical will explain the issue and any available options.",
      "Additional rectification work is not included in the original quotation unless expressly stated. Any additional chargeable work will be quoted or agreed before proceeding, except for lawful and necessary immediate safety measures.",
      "Pilkington Electrical is not responsible for unrelated pre-existing faults or defects merely because it has attended the property. This does not exclude responsibility for damage or loss caused by Pilkington Electrical's own failure to exercise reasonable care or meet its legal obligations.",
    ],
  },
  {
    heading: "10. Asbestos and hazardous materials",
    paragraphs: [
      "Pilkington Electrical does not undertake asbestos removal or unauthorised disturbance of asbestos-containing materials.",
      "If asbestos or another potentially hazardous material is identified or reasonably suspected in the work area, affected work may be stopped until the material has been appropriately assessed or managed.",
      "The customer may be required to arrange an appropriately licensed specialist before work can continue.",
      "Any additional attendance, delay or costs arising from hazardous materials will be discussed with the customer and dealt with in accordance with the agreed contract and applicable law.",
    ],
  },
  {
    heading: "11. Access and customer responsibilities",
    paragraphs: [
      "The customer must arrange suitable access to the property and work areas at the agreed time.",
      "This includes, where applicable:",
    ],
    bullets: [
      "Clear access to the switchboard, electrical accessories and work locations.",
      "Safe access to roof spaces, ceiling cavities, meter boxes and other relevant areas.",
      "Appropriate permission from the property owner, body corporate, tenant or managing agent.",
      "Clearance of furniture, belongings and obstructions from the work area.",
      "Keeping children, pets and other occupants away from active work areas.",
      "Advising Pilkington Electrical of known hazards, restricted access, fragile surfaces, concealed services and relevant site conditions.",
      "Advising in advance if essential equipment must remain powered, including medical equipment.",
    ],
    after: [
      "If access is unavailable or the work area is unsafe, work may need to be delayed or rescheduled. Reasonable additional attendance or wasted-visit costs may apply where lawful and disclosed or agreed as required.",
    ],
  },
  {
    heading: "12. Power interruptions and service disruption",
    paragraphs: [
      "Electrical work may require temporary interruption to the electricity supply.",
      "Pilkington Electrical will take reasonable steps to explain anticipated interruptions and minimise unnecessary disruption.",
      "The customer should identify any equipment or circumstances requiring special consideration before work begins.",
      "Where a power interruption is necessary for safety or compliance, Pilkington Electrical may be unable to proceed until the affected equipment or installation can be safely isolated.",
      "Pilkington Electrical is not responsible for ordinary, unavoidable interruptions inherent in properly carrying out the agreed work, but this does not exclude liability for negligence or other liability that cannot lawfully be excluded.",
    ],
  },
  {
    heading: "13. Safety, testing and electrical compliance",
    paragraphs: [
      "All electrical installation work will be carried out by appropriately licensed personnel and in accordance with applicable Victorian legislation, relevant Australian Standards and other requirements applying to the work.",
      "Where applicable, this includes testing and issuing a Certificate of Electrical Safety (COES) and arranging independent inspection of prescribed electrical installation work.",
      "The customer will receive the relevant documentation required by law.",
      "If an existing installation or supplied product is unsafe or unsuitable, Pilkington Electrical may decline to connect it, may need to isolate the affected equipment and will explain the available options.",
      "Where the law requires action to address a safety risk or report a matter, Pilkington Electrical will comply with those obligations.",
    ],
  },
  {
    heading: "14. Cancellations and rescheduling",
    paragraphs: [
      "Customers should provide as much notice as reasonably possible if they need to cancel or reschedule a booking.",
      "Where a customer cancels after materials have been ordered or work has commenced, they may be responsible for reasonable costs properly incurred under the contract, including eligible non-refundable special-order materials, work already performed and reasonable cancellation costs.",
      "Any cancellation or rescheduling charge must be lawful and proportionate to the actual circumstances. It will not operate as an unlawful penalty or remove any applicable consumer rights.",
      "Pilkington Electrical will also advise the customer as soon as reasonably practicable if it needs to reschedule due to illness, an emergency, material unavailability, unsafe site conditions or other circumstances outside its reasonable control.",
    ],
  },
  {
    heading: "15. Completion of work and defects",
    paragraphs: [
      "On completion, Pilkington Electrical will take reasonable steps to leave the work area in an orderly condition, having regard to the nature of the work.",
      "The customer should inspect the completed work and notify Pilkington Electrical promptly if they identify an issue.",
      "Where a problem may relate to Pilkington Electrical's workmanship, the customer should contact Pilkington Electrical and provide a description, photographs where useful, and a reasonable opportunity to inspect and address the issue.",
      "Nothing in this section prevents the customer from exercising statutory rights or obtaining urgent assistance where reasonably necessary to address an immediate safety risk.",
    ],
  },
  {
    heading: "16. Workmanship guarantee and product warranties",
    paragraphs: [
      "Pilkington Electrical's workmanship guarantee is described in its separate Lifetime Labour Guarantee.",
      "That guarantee should be read together with these Terms of Trade. Any conditions, exclusions and claim procedures expressly set out in the separate guarantee apply to that additional promise.",
      "Products supplied by Pilkington Electrical may also be covered by manufacturer warranties.",
      "A manufacturer's warranty is separate from any applicable Australian Consumer Law rights. A customer-supplied product does not become a product supplied by Pilkington Electrical merely because Pilkington Electrical installs it.",
      "Nothing in these terms or any separate guarantee excludes, restricts or modifies a consumer guarantee or remedy where doing so would be unlawful.",
    ],
  },
  {
    heading: "17. Liability and responsibility for damage",
    paragraphs: [
      "Pilkington Electrical will exercise reasonable care and skill when carrying out the agreed work.",
      "To the extent permitted by law, Pilkington Electrical is not responsible for:",
    ],
    bullets: [
      "Unrelated pre-existing faults, defects or deterioration.",
      "The failure of an independently purchased product due to a product defect.",
      "Loss or damage caused by circumstances outside Pilkington Electrical's reasonable control.",
      "Work performed by other contractors or subsequent alterations by third parties.",
    ],
    after: [
      "These exclusions apply only to the extent the relevant loss or damage was not caused by Pilkington Electrical's own breach of contract, negligence or other actionable conduct.",
      "Nothing in these terms excludes liability where exclusion is prohibited by law, or limits any consumer rights that cannot lawfully be limited.",
    ],
  },
  {
    heading: "18. Delays and circumstances outside our control",
    paragraphs: [
      "Completion dates and attendance times may be affected by circumstances such as supplier delays, unavailable materials, severe weather, emergencies, unsafe site conditions or access restrictions.",
      "Pilkington Electrical will make reasonable efforts to notify the customer of significant delays and arrange a revised time.",
      "Where a delay materially affects the agreed work, the parties will discuss reasonable alternatives and any necessary changes to the scope or schedule.",
      "This section does not remove any rights or remedies available under applicable law.",
    ],
  },
  {
    heading: "19. Privacy and customer information",
    paragraphs: [
      "Pilkington Electrical collects and uses personal information as reasonably necessary to provide quotations, arrange attendance, carry out work, issue invoices, maintain records and meet legal obligations.",
      "Personal information will be handled in accordance with the Pilkington Electrical Privacy Policy and applicable privacy laws.",
      "Customer information will not be used or disclosed for unrelated purposes except where authorised or required by law.",
    ],
  },
  {
    heading: "20. Complaints and dispute resolution",
    paragraphs: [
      "If a customer has a concern about a quotation, invoice, product, workmanship or completed job, they should contact Pilkington Electrical in the first instance.",
      "Contact: 0466 270 949",
      "Email: contact@pilkingtonelectrical.com.au",
      "Please provide the relevant quotation or invoice number, a description of the issue and any supporting photographs or documents.",
      "Pilkington Electrical will make reasonable efforts to investigate the concern and work towards a fair resolution.",
      "If the matter cannot be resolved directly, either party may seek assistance from the relevant consumer protection body, regulator, dispute resolution service or court.",
      "Nothing in this section prevents either party from exercising their legal rights.",
    ],
  },
  {
    heading: "21. Governing law and changes to these terms",
    paragraphs: [
      "These terms are governed by the laws of Victoria, Australia, and the applicable Commonwealth laws.",
      "The version of these terms provided to or made available to the customer when the contract is accepted will generally apply to that contract, subject to any agreed written variations and applicable law.",
      "Changes to the terms will not retrospectively alter an existing contract without an appropriate legal basis or agreement.",
      "If any provision is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.",
    ],
  },
  {
    heading: "22. Australian Consumer Law",
    paragraphs: [
      "Pilkington Electrical acknowledges that customers may have rights under the Australian Consumer Law that cannot be excluded.",
      "For services supplied to consumers, the following statutory wording applies:",
      "Our services come with guarantees that cannot be excluded under the Australian Consumer Law. For major failures with the service, you are entitled:",
    ],
    bullets: [
      "to cancel your service contract with us; and",
      "to a refund for the unused portion, or to compensation for its reduced value.",
    ],
    after: [
      "You are also entitled to be compensated for any other reasonably foreseeable loss or damage.",
      "If the failure does not amount to a major failure, you are entitled to have problems with the service rectified in a reasonable time and, if this is not done, to cancel your service contract and obtain a refund for the unused portion.",
      "Where Pilkington Electrical supplies goods to consumers, the following statutory wording applies:",
      "Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage. You are also entitled to have the goods repaired or replaced if the goods fail to be of acceptable quality and the failure does not amount to a major failure.",
    ],
  },
];

function TermsOfTradePage() {
  return (
    <LegalPage
      title="Terms of Trade"
      meta="Pilkington Electrical · ABN 16 937 824 485 · Registered Electrical Contractor REC 30450"
      intro="These Terms of Trade explain how Pilkington Electrical quotes, supplies materials, carries out electrical work and handles payment, warranties and other matters. They are intended to make the process clear and fair for both parties."
      updated="18 October 2026"
      sections={sections}
    />
  );
}
