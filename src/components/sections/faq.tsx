import { Accordion, AccordionItem } from "@/components/ui/accordion";

const items = [
  {
    q: "What purity level are your peptides and how is it verified?",
    a: "All Amino Club peptides are guaranteed 99%+ pure. Each batch is independently tested by accredited U.S. laboratories using HPLC (High-Performance Liquid Chromatography) and Mass Spectrometry. We provide a Certificate of Analysis (CoA) with every order showing exact purity percentages, molecular weight verification, and amino acid sequence confirmation.",
  },
  {
    q: "What is a Certificate of Analysis (CoA) and how do I read it?",
    a: "A Certificate of Analysis is an official lab document that verifies your peptide's quality. Key sections include: Purity (should be 99%+), Identity (confirms correct peptide via mass spec), Appearance (should match product description), and Endotoxin levels (should be below 1 EU/mg). Each CoA is batch-specific and available on product pages.",
  },
  {
    q: "What is Amino H2O?",
    a: "Amino H2O is sterile water containing 0.9% benzyl alcohol, which inhibits bacterial growth. It is a standard laboratory supply used in research settings. We offer Amino H2O in our accessories section as research supply.",
  },
  {
    q: "How should I store the lyophilized product?",
    a: "Lyophilized (freeze-dried) peptides are very stable. For short-term storage (under 3 months), room temperature in a cool, dark place is fine. For long-term storage, refrigerate at 2-8°C or freeze at -20°C. Avoid repeated freeze-thaw cycles. Properly stored lyophilized peptides can remain stable for 2+ years.",
  },
  {
    q: "How long is the lyophilized product stable?",
    a: "Lyophilized (freeze-dried) peptides are highly stable and can last 2+ years when stored properly at -20°C or 2-8°C. Always store away from light and avoid repeated temperature fluctuations.",
  },
  {
    q: "How fast do you ship and is cold shipping required?",
    a: "Orders are processed within 0-2 business days. Standard shipping takes 3-5 business days from fulfillment. Every order includes free shipment protection. Lyophilized peptides don't require cold shipping—they're stable at room temperature. All orders ship in discreet, unlabeled packaging.",
  },
  {
    q: "Do you ship internationally?",
    a: "Currently, we ship to all 50 U.S. states. International shipping varies by country due to customs regulations on research materials. Contact our support team for specific country availability. All international orders may be subject to local customs fees and import duties.",
  },
  {
    q: "What is Amino Club and why should I trust you?",
    a: "Amino Club is a U.S.-based research peptide supplier committed to quality and transparency. Our peptides are manufactured in-house and independently tested for identity and content on every batch at accredited American third-party laboratories. Unlike other suppliers, we provide full Certificates of Analysis, maintain documented quality procedures, and back everything with our 99%+ identity purity guarantee. Our community of researchers provides real peer feedback and support.",
  },
  {
    q: "Are these peptides for human use?",
    a: "All Amino Club peptides are sold strictly for research, laboratory, and educational purposes only. They are not approved for human consumption, veterinary use, or any therapeutic application. By purchasing, you confirm you are a qualified researcher and will use products in accordance with all applicable laws and regulations.",
  },
  {
    q: "What is your return and refund policy?",
    a: "We offer damage protection on every order. If your product arrives damaged in transit, contact us with photos of the damage and we'll send a one-time replacement. All claims require photo evidence and are subject to review. One replacement per customer per order. Reconstituted products are not eligible. We are not responsible for misuse or improper storage after delivery.",
  },
  {
    q: "How can I contact Amino Club support?",
    a: "You can reach our support team via email at support@aminoclub.com. We typically respond within 24 hours on business days. For order issues, have your order number ready. Our team can help with product questions, order tracking, and any concerns about your purchase.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[32px] md:text-[44px] font-bold leading-tight text-ink-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[15px] text-ink-600">
            Everything you need to know about peptide research
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion>
            {items.map((item, i) => (
              <AccordionItem key={i} question={item.q} defaultOpen={i === 0}>
                {item.a}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
