import { ArrowRight, FlaskConical, Microscope, Droplets, Shield, Repeat } from "lucide-react";
import Link from "next/link";

const checks = [
  {
    icon: Microscope,
    title: "Verified Potency",
    subtitle: "HPLC Analysis",
    body: "Every vial is tested to confirm it contains exactly what the label says—down to the microgram.",
    why: "No guessing games. You get the exact concentration you paid for, every single time.",
  },
  {
    icon: FlaskConical,
    title: "99%+ Purity Guaranteed",
    subtitle: "Mass Spectrometry",
    body: "Comprehensive testing confirms our peptides are free from impurities, degradation products, and synthesis byproducts.",
    why: "Higher purity means better research outcomes. Every batch is verified to 99%+ purity.",
  },
  {
    icon: Droplets,
    title: "Long-Term Stability",
    subtitle: "pH & Stability Testing",
    body: "Optimal pH and formulation testing ensures every batch remains intact throughout its labeled shelf life.",
    why: "Stable lyophilized product from the day it ships through the labeled shelf life.",
  },
  {
    icon: Shield,
    title: "Contaminant-Free",
    subtitle: "Sterility & LAL Testing",
    body: "Rigorous third-party sterility and endotoxin testing confirms products are free from bacteria, fungi, and harmful toxins.",
    why: "Peace of mind knowing your research won't be compromised by contamination.",
  },
  {
    icon: Repeat,
    title: "Batch-to-Batch Consistency",
    subtitle: "QC Verification",
    body: "Precision weighing and quality controls ensure every batch meets the same exacting standards.",
    why: "Same great quality whether it's your first order or your fiftieth.",
  },
];

const stats = [
  { value: "99%+", label: "Purity Guaranteed" },
  { value: "5", label: "Quality Checks" },
  { value: "100%", label: "U.S. Verified" },
];

const pillars = ["Potency", "Purity", "Stability", "Safety", "Consistency"];

export function QualityVerification() {
  return (
    <section className="bg-gradient-to-b from-surface-lavender/30 via-white to-surface-pink/20">
      <div className="container-page py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[32px] md:text-[44px] font-bold leading-tight text-ink-900">
            Quality you can verify, not just trust
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-600">
            Every batch is independently tested by accredited U.S. laboratories. We don&apos;t ask you to take our word for it—we give you the proof.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 md:mx-auto md:max-w-2xl">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-ink-100 bg-white px-4 py-5 text-center">
              <div className="text-[28px] font-bold text-ink-900">{s.value}</div>
              <div className="mt-1 text-[12px] font-medium text-ink-600">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {pillars.map((p) => (
            <span
              key={p}
              className="rounded-full border border-ink-200 bg-white px-3 py-1 text-[12px] font-semibold text-ink-700"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {checks.map(({ icon: Icon, title, subtitle, body, why }) => (
            <div key={title} className="rounded-2xl border border-ink-100 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-success-500/10 text-success-600">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-ink-900">{title}</h3>
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-wider text-success-600">
                {subtitle}
              </p>
              <p className="mt-3 text-[13.5px] leading-relaxed text-ink-600">{body}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-700">
                <span className="font-semibold">Why it matters:</span> {why}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3 text-[14px] font-semibold text-white hover:bg-ink-800"
          >
            Shop Now
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </Link>
          <p className="text-[12px] text-ink-500">Free COA included with every order</p>
        </div>
      </div>
    </section>
  );
}
