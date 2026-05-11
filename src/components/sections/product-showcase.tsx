import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "GLP-3 (RT)", price: "$69.99", tagline: "Triple-Action Metabolic Compound", slug: "glp-3" },
  { name: "GHK-Cu", price: "$29.99", tagline: "Dermal Compound", slug: "ghk-cu" },
  { name: "BPC-157", price: "$39.99", tagline: "Cellular Peptide", slug: "bpc-157" },
  { name: "CJC-1295 / Ipamorelin (No DAC)", price: "$59.99", tagline: "Secretagogue Peptide", slug: "cjc-ipa-no-dac" },
  { name: "TB-500", price: "$39.99", tagline: "Cellular Peptide", slug: "tb-500" },
  { name: "Tesamorlin", price: "$69.99", tagline: "Secretagogue Peptide", slug: "tesamorlin" },
  { name: "AOD-9604", price: "$49.99", tagline: "Cellular Peptide", slug: "aod-9604" },
  { name: "BPC-157/TB-500 (Wolverine)", price: "$109.99", tagline: "Cellular Peptide Blend", slug: "wolverine-stack" },
  { name: "NAD+", price: "$69.99", tagline: "Cellular Peptide", slug: "nad-plus" },
  { name: "KLOW", price: "$129.99", tagline: "Cellular Peptide Blend", slug: "klow" },
  { name: "GLOW", price: "$114.99", tagline: "Cellular Peptide Blend", slug: "glow" },
  { name: "KPV", price: "$39.99", tagline: "Cellular Peptide", slug: "kpv" },
  { name: "Glutathione", price: "$59.99", tagline: "Antioxidant & Detoxification Peptide", slug: "glutathione" },
  { name: "Cagrilintide", price: "$69.99", tagline: "Metabolic Research Peptide", slug: "cagrilintide" },
];

const gradients = [
  "from-surface-pink to-surface-lavender",
  "from-surface-lavender to-surface-mint",
  "from-surface-mint to-surface-cream",
  "from-surface-cream to-surface-pink",
];

export function ProductShowcase() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 md:py-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-[32px] md:text-[44px] font-bold leading-tight text-ink-900">
              Featured Products
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
              Research peptides, third-party identity tested
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink-900 hover:text-ink-700"
          >
            View all
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p, i) => (
            <Link
              key={p.slug}
              href="#"
              className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className={`aspect-square rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]}`}
              />
              <h3 className="mt-4 text-[15px] font-semibold leading-snug text-ink-900">
                {p.name}
              </h3>
              <p className="mt-1 text-[12px] text-ink-500">{p.tagline}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[13px] text-ink-500">From</span>
                <span className="text-[16px] font-bold text-ink-900">{p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
