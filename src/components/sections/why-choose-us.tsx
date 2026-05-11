import { Boxes, Percent, PackageCheck, Users, ShieldCheck, Zap } from "lucide-react";

const cards = [
  {
    icon: Boxes,
    title: "Always in Stock",
    body: "Top research peptides like BPC-157, TB-500, and Ipamorelin ready to ship. No backorders, no waiting.",
  },
  {
    icon: Percent,
    title: "Volume Pricing",
    body: "Bulk pricing available for larger research orders. Lower per-vial cost at higher volumes.",
  },
  {
    icon: PackageCheck,
    title: "Safe & Protected Shipping",
    body: "Cold-pack shipping keeps peptides stable. Discreet packaging with full tracking on every USA order.",
  },
  {
    icon: Users,
    title: "Researcher Community",
    body: "Connect with fellow researchers. Share peer insights and discuss peptide research applications.",
  },
  {
    icon: ShieldCheck,
    title: "99%+ Purity Guaranteed",
    body: "Every batch tested by US labs via HPLC and Mass Spec. Full Certificate of Analysis included free.",
  },
  {
    icon: Zap,
    title: "Shipment Protection",
    body: "Every order includes free shipment protection. Lost, damaged, or stolen packages are reshipped at no cost.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-surface-cream/40">
      <div className="container-page py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[32px] md:text-[44px] font-bold leading-tight text-ink-900">
            Why choose Amino Club?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-ink-100 bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-lavender text-ink-900">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-ink-900">{title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
