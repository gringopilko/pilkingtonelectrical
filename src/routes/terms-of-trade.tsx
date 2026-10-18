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
    heading: "1. About these terms",
    paragraphs: [
      "These terms apply to quotations, bookings, materials and services provided by Pilkington Electrical unless different written terms are agreed.",
      "Your quotation, accepted work order or written agreement sets out the specific work I have agreed to perform. If a specific term in your accepted quotation conflicts with these general terms, the specific written agreement takes precedence for that matter.",
      "You accept these terms when you approve a quotation, confirm a booking or otherwise authorise work to proceed.",
      "If you are engaging me on behalf of a property owner, body corporate, business or other organisation, you must have authority to approve the work and any associated expenditure.",
      "Where two or more people or organisations engage me jointly, the quotation will identify who is responsible for payment and who can approve work. For businesses and other organisations, the quotation and invoice will be issued to the correct legal entity.",
      "Nothing in these terms excludes or limits rights or obligations that cannot lawfully be excluded or limited.",
    ],
  },
  {
    heading: "2. Quotations and estimates",
    bullets: [
      "Quotations are valid for 30 days from the date of issue unless stated otherwise.",
      "Quotations are based on the agreed scope, information provided and conditions reasonably visible when the job is assessed.",
      "Your quotation will identify the included work, relevant exclusions and whether GST is included.",
      "Unless expressly stated otherwise, quoted prices do not include additional work, hidden defects, specialist inspections, permits, third-party services or other items not specified in the quotation.",
      "Estimates and verbal price indications are not fixed quotations unless confirmed in writing.",
      "If the scope changes, a specified product becomes unavailable or unforeseen conditions affect the work, the price or completion arrangements may need to be revised. Any additional chargeable work will be discussed and approved before proceeding where required.",
    ],
  },
  {
    heading: "3. Call-out fees, labour and fault finding",
    paragraphs: [
      "Unless included in a fixed quotation, attendance, diagnostic testing, fault finding and investigation are chargeable services.",
      "A fault may require testing and investigation before its cause can be identified. The time spent investigating a fault remains chargeable even if the cause cannot be conclusively identified during the initial attendance, a repair is not possible immediately, or additional parts or visits are required.",
      "The applicable call-out fee, minimum charge, hourly rate, after-hours rate and other relevant charges will be stated in the quotation, booking confirmation or other agreed pricing information.",
      "Where additional work is needed after diagnosis, I will explain the proposed work and its cost before proceeding where required.",
    ],
  },
  {
    heading: "4. Deposits and progress payments",
    paragraphs: [
      "For larger jobs requiring substantial material purchases, including switchboard upgrades, rewiring and EV charger installations, I may request a deposit.",
      "The deposit amount and payment requirements will be stated in your quotation. Any deposit paid will be credited against the contract price.",
      "For larger projects, staged or progress payments may be agreed in advance. These will be linked to the agreed stages of work or other clearly identified milestones.",
      "Where a contract provides for payment for materials purchased or delivered before installation, the arrangements will be stated in writing and will comply with applicable law.",
      "Special-order products may be non-refundable or non-returnable once ordered. Any relevant supplier restrictions and potential costs will be explained where reasonably practicable.",
    ],
  },
  {
    heading: "5. Payment and overdue accounts",
    paragraphs: ["Unless otherwise stated in your quotation or invoice, payment is due upon completion of the agreed work."],
    bullets: [
      "Payment methods and bank details will be provided on your invoice.",
      "Progress payments are payable according to the agreed schedule.",
      "If you dispute an invoice, please contact me promptly and explain the reason. Any undisputed amount remains payable in accordance with the agreed terms and applicable law.",
      "If an invoice becomes overdue, I may issue payment reminders and take lawful steps to recover the outstanding amount.",
      "Reasonable recovery costs may be sought where legally recoverable.",
      "Interest, if applicable, will only be charged where there is a lawful basis to do so and the applicable terms have been properly disclosed and agreed.",
    ],
    after: [
      "For larger projects, I may suspend further non-urgent work if an agreed payment remains overdue, subject to the contract and applicable law. I will communicate the issue and any impact on the schedule before taking that step where reasonably practicable.",
      "For builder, subcontract and larger commercial projects, a separate written contract may set out the payment schedule, progress claims, variations, any retentions and final payment. Those arrangements will comply with the Victorian security of payment laws in force when the contract is made.",
      "Nothing in this section authorises unlawful debt recovery or overrides any applicable payment legislation.",
    ],
  },
  {
    heading: "6. Materials supplied by Pilkington Electrical",
    paragraphs: [
      "Where I supply products or materials, their cost will be included in your quotation or otherwise agreed before purchase.",
      "Materials may include light fittings, switches, power points, cabling, circuit protection, fans, smoke alarms, appliances and other electrical equipment.",
    ],
    bullets: [
      "Products will be selected in accordance with the agreed specifications and intended application.",
      "If a specified product is unavailable, I will discuss a suitable alternative and any price difference before substituting it.",
      "Special-order products may be subject to supplier cancellation, return or restocking conditions.",
      "Delivery, storage or redelivery charges may apply where relevant, provided they are disclosed and agreed as required.",
      "Any arrangements for ownership of materials, payment for delivered goods and responsibility for materials stored on site will be set out in the relevant quotation or agreement where necessary.",
    ],
    after: [
      "Materials supplied by me remain subject to the applicable contract and law. Nothing in these terms authorises unlawful repossession or excludes statutory consumer rights.",
    ],
  },
  {
    heading: "7. Customer-supplied products and materials",
    paragraphs: [
      "You may supply your own light fittings, switches, power points, ceiling fans, appliances and other products, subject to their suitability for the proposed installation.",
      "Before installation, I may inspect the product to assess whether it is suitable and safe to install.",
    ],
    bullets: [
      "You are responsible for supplying the correct product, including compatible accessories, mounting hardware and any components needed for the intended installation.",
      "Products must be suitable for their intended location and use, including relevant electrical ratings, weather protection, mounting requirements and clearances.",
      "If a product is damaged, incomplete, incompatible, unsafe or unsuitable, I may decline or postpone installation and explain the issue.",
      "Additional labour or materials required because of an unsuitable or incomplete product may be charged as additional work, subject to prior approval where required.",
      "I do not provide a manufacturer's warranty for products purchased independently by you.",
      "If a customer-supplied product fails after installation, investigation, removal, replacement or reinstallation may incur additional charges where those services are outside the original scope and the charges are lawful.",
      "My responsibility for the workmanship I perform remains separate from responsibility for the product itself.",
    ],
    after: [
      "You should contact the product supplier or manufacturer regarding applicable product warranties. Nothing in these terms removes any statutory rights or remedies you may have concerning my installation services.",
    ],
  },
  {
    heading: "8. Removal and disposal of old items",
    paragraphs: [
      "To avoid misunderstandings, the following arrangements apply when replacing light fittings and other items.",
      <strong key="a" className="font-bold text-foreground">Where Pilkington Electrical supplies the replacement product</strong>,
      "Unless your quotation states otherwise, I will remove the old item as part of the agreed replacement work and take it away for appropriate disposal or recycling.",
      <strong key="b" className="font-bold text-foreground">Where you supply the replacement product</strong>,
      "You are responsible for arranging disposal or recycling of the old item once it has been removed, unless I have expressly agreed to take it away.",
      <strong key="c" className="font-bold text-foreground">Additional conditions</strong>,
    ],
    bullets: [
      "If you wish to keep an old fitting or appliance, please tell me before removal.",
      "Ordinary disposal does not include hazardous, regulated or specialist waste.",
      "Asbestos-containing materials, specialised batteries and other hazardous items may require specialist handling or disposal.",
      "Any additional labour, handling or disposal charges will be discussed and agreed before the additional work proceeds where required.",
    ],
  },
  {
    heading: "9. Changes and additional work",
    paragraphs: [
      "If you request extra work or unforeseen conditions mean the original scope needs to change, I will explain the issue and the proposed additional work.",
      "Examples include extra power points, additional fittings, damaged wiring, replacement of unsuitable components, switchboard rectification or additional work needed to complete an installation safely.",
      "Before carrying out additional chargeable work, I will explain the price or pricing method and obtain your approval where required. Approval may be given by text message, email or another recorded written method.",
      "If an immediate safety risk arises, I may need to stop work, isolate affected equipment or take other lawful and proportionate steps to address the risk. Any further chargeable rectification work will be discussed with you as soon as reasonably practicable.",
      "Work outside the agreed scope is not automatically included in the original price.",
    ],
  },
  {
    heading: "10. Existing faults and concealed conditions",
    paragraphs: [
      "Some conditions cannot reasonably be identified until work begins or an installation is opened up.",
      "These may include:",
    ],
    bullets: [
      "Damaged, deteriorated or incorrectly installed wiring.",
      "Inadequate earthing or circuit protection.",
      "Existing installations that do not comply with applicable requirements.",
      "Hidden junctions, inaccessible connections or concealed damage.",
      "Inadequate mounting support or structural obstructions.",
      "Defects caused by previous work or alterations by other contractors.",
    ],
    after: [
      "If these conditions affect safety, compliance or the proposed work, I will explain what has been found and the available options.",
      "Additional rectification work is not included unless specified in your quotation or otherwise agreed. I will obtain approval for additional chargeable work where required before proceeding.",
      "I am not responsible for unrelated pre-existing defects merely because I attend the property. This does not exclude responsibility for damage or loss caused by my own failure to exercise reasonable care or meet my legal obligations.",
    ],
  },
  {
    heading: "11. Access, site conditions and customer responsibilities",
    paragraphs: [
      "You must arrange safe and reasonable access to the property and work areas at the agreed time.",
      "Please ensure that:",
    ],
    bullets: [
      "The switchboard, work areas and relevant roof or ceiling spaces are accessible where required.",
      "Furniture, belongings and obstructions are cleared from the immediate work area.",
      "Children, pets and other occupants are kept clear of active work areas.",
      "Known hazards, restricted access and relevant site conditions are disclosed before work begins.",
      "Any required permission from the property owner, body corporate, tenant or managing agent has been obtained.",
      "Access is available for any material deliveries arranged for the job.",
      "You advise me in advance about equipment or circumstances requiring special consideration, including medical equipment that must remain powered.",
    ],
    after: [
      "If access is unavailable or the site is unsafe, work may need to be delayed or rescheduled. A reasonable additional attendance or wasted-visit charge may apply where lawful and disclosed or agreed as required.",
    ],
  },
  {
    heading: "12. Power interruptions and making good",
    paragraphs: [
      "Electrical work may require temporary interruption to the electricity supply. I will take reasonable steps to explain anticipated interruptions and minimise unnecessary disruption.",
      "You should advise me of equipment or circumstances that may be affected by a power interruption before work begins.",
      "Some electrical work may require drilling, chasing walls, cutting access openings or disturbing ceilings to reach wiring or mounting locations.",
      "Unless expressly included in your quotation, plaster repairs, patching, painting, tiling, carpentry, decorative finishing and restoration are excluded from the electrical work.",
      "I will take reasonable care when carrying out the agreed work. This exclusion does not remove responsibility for damage caused by my failure to exercise reasonable care or any other liability that cannot lawfully be excluded.",
    ],
  },
  {
    heading: "13. Asbestos and hazardous materials",
    paragraphs: [
      "I do not undertake asbestos removal or unauthorised disturbance of asbestos-containing materials.",
      "If asbestos or another potentially hazardous material is identified or reasonably suspected, affected work may be stopped until the material has been appropriately assessed or managed.",
      "You may need to arrange for an appropriately qualified or licensed specialist to address the issue before electrical work can continue.",
      "Additional attendance, delays or costs arising from hazardous materials will be discussed and dealt with in accordance with the agreed contract and applicable law.",
    ],
  },
  {
    heading: "14. Safety and electrical compliance",
    paragraphs: [
      "All electrical installation work will be carried out by appropriately licensed personnel in accordance with applicable Victorian legislation, relevant Australian Standards and other requirements that apply to the work.",
      "A Certificate of Electrical Safety will be issued for electrical installation work as required by Victorian law. Where work is prescribed, the required independent inspection and certification process will also be arranged.",
      "The applicable certificate and documentation will be provided within the required timeframes.",
      "If I identify an unsafe or unsuitable existing installation or product, I may decline to connect it or may need to isolate affected equipment. I will explain the issue and discuss available options.",
      "Where the law requires action to address a safety risk or report a matter, I will comply with those obligations.",
    ],
  },
  {
    heading: "15. Cancellations and rescheduling",
    paragraphs: [
      "If you need to cancel or reschedule a booking, please provide as much notice as reasonably possible.",
      "If you cancel after work has commenced or materials have been specially ordered, you may be responsible for reasonable costs properly incurred under the contract. These may include work already completed and eligible non-refundable material or supplier costs.",
      "Any cancellation charge must be lawful and proportionate to the circumstances. It will not operate as an unlawful penalty or remove any applicable consumer rights.",
      "If I need to reschedule due to illness, an emergency, unavailable materials, unsafe conditions or other circumstances outside my reasonable control, I will notify you as soon as reasonably practicable and arrange a revised time.",
    ],
  },
  {
    heading: "16. Completion, testing and defects",
    paragraphs: [
      "On completion, I will take reasonable steps to leave the work area in an orderly condition, having regard to the nature of the work.",
      "Electrical installation work will be tested and certified as required by law.",
      "If you identify a concern about the completed work, please contact me promptly with a description of the issue and any useful photographs or supporting information.",
      "Where the concern may relate to my workmanship, I will make reasonable arrangements to investigate and address the matter in accordance with my guarantee and applicable law.",
      "Nothing in this section prevents you from exercising your statutory rights or obtaining urgent assistance where reasonably necessary to address an immediate safety risk.",
    ],
  },
  {
    heading: "17. Lifetime labour guarantee and product warranties",
    paragraphs: [
      "My workmanship is covered by my separate Lifetime Labour Guarantee, available through the Pilkington Electrical website.",
      "That guarantee should be read together with these Terms of Trade. Its stated scope, conditions and exclusions apply to the additional guarantee I provide.",
      "Products supplied by Pilkington Electrical may also be covered by the manufacturer's warranty.",
      "Products supplied independently by you are not covered by a manufacturer's warranty provided by me. This does not remove my responsibility for the installation workmanship I perform.",
      "Nothing in these terms or the separate guarantee excludes, restricts or modifies any consumer guarantee or remedy where doing so would be unlawful.",
    ],
  },
  {
    heading: "18. Liability and responsibility",
    paragraphs: [
      "I will exercise reasonable care and skill when carrying out the agreed work.",
      "To the extent permitted by law, I am not responsible for unrelated pre-existing faults, defects or deterioration, defective products purchased independently by you, or work and alterations performed by other contractors.",
      "I am not responsible for delays or loss caused by circumstances outside my reasonable control, except to the extent that liability arises under applicable law.",
      "Nothing in these terms excludes liability for my own negligence, breach of contract or other conduct where such liability cannot lawfully be excluded or limited. Your statutory consumer rights remain unaffected.",
    ],
  },
  {
    heading: "19. Delays and circumstances outside my control",
    paragraphs: [
      "Completion dates and attendance times may be affected by supplier delays, unavailable materials, emergencies, severe weather, unsafe site conditions or access restrictions.",
      "I will make reasonable efforts to notify you of significant delays and arrange a revised schedule.",
      "If a delay materially affects the agreed work, we will discuss reasonable alternatives and any necessary changes to the scope or schedule.",
      "This section does not remove any rights or remedies available under applicable law.",
    ],
  },
  {
    heading: "20. Privacy and customer information",
    paragraphs: [
      "I collect and use personal information as reasonably necessary to provide quotations, arrange attendance, carry out work, issue invoices, maintain business records and meet legal obligations.",
      "Personal information will be handled in accordance with the Pilkington Electrical Privacy Policy and applicable privacy laws.",
    ],
  },
  {
    heading: "21. Complaints and dispute resolution",
    paragraphs: [
      "If you have a concern about a quotation, invoice, product, workmanship or completed job, please contact me first so I can investigate the matter.",
      "Phone: 0466 270 949",
      "Email: contact@pilkingtonelectrical.com.au",
      "Please provide the relevant quotation or invoice details, a description of the issue and any supporting photographs or documents.",
      "I will make reasonable efforts to investigate the concern and work towards a fair resolution.",
      "If the matter cannot be resolved directly, either party may seek assistance from the relevant consumer protection body, regulator, dispute resolution service or court.",
      "Nothing in this section prevents either party from exercising their legal rights.",
    ],
  },
  {
    heading: "22. Governing law and changes to these terms",
    paragraphs: [
      "These terms are governed by the laws of Victoria, Australia, and applicable Commonwealth laws.",
      "The version of these terms provided to or made available to you when the contract is accepted will generally apply to that contract, subject to any agreed written variations and applicable law.",
      "Changes to these terms will not retrospectively alter an existing contract without an appropriate legal basis or agreement.",
      "If any provision is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.",
    ],
  },
  {
    heading: "23. Australian Consumer Law",
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
      intro="These Terms of Trade explain how Pilkington Electrical quotes for work, supplies materials, carries out electrical services and handles payment, warranties and other matters. My aim is to make every job clear, fair and straightforward."
      updated="18 October 2026"
      sections={sections}
    />
  );
}
