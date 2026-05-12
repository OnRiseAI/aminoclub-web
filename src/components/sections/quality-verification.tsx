"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  Clock,
  Shield,
  RefreshCw,
  ArrowRight,
  Check,
  ChevronRight,
  Star,
  Beaker,
  MapPin,
  CalendarCheck,
  Award,
} from "lucide-react";

type Pillar = {
  key: string;
  label: string;
  icon: typeof Zap;
  title: string;
  subtitle: string;
  body: string;
  why: string;
  lab: string;
  lastVerified: string;
  /** Normalized peak position (0–1) along the chromatogram x-axis */
  peakAt: number;
};

const pillars: Pillar[] = [
  {
    key: "potency",
    label: "Potency",
    icon: Zap,
    title: "Verified Potency",
    subtitle: "HPLC Analysis",
    body: "Every pen is tested to confirm it contains exactly what the label says—down to the microgram.",
    why: "No guessing games. You get the exact concentration you paid for, every single time.",
    lab: "Eurofins · Alabama, USA",
    lastVerified: "2 days ago",
    peakAt: 0.55,
  },
  {
    key: "purity",
    label: "Purity",
    icon: ShieldCheck,
    title: "99%+ Purity Guaranteed",
    subtitle: "Mass Spectrometry",
    body: "Comprehensive testing confirms our peptides are free from impurities, degradation products, and synthesis byproducts.",
    why: "Higher purity means better research outcomes. Every batch is verified to 99%+ purity.",
    lab: "PAML · California, USA",
    lastVerified: "5 days ago",
    peakAt: 0.4,
  },
  {
    key: "stability",
    label: "Stability",
    icon: Clock,
    title: "Long-Term Stability",
    subtitle: "pH & Stability Testing",
    body: "Optimal pH and formulation testing ensures every batch remains intact throughout its labeled shelf life.",
    why: "Stable lyophilized product from the day it ships through the labeled shelf life.",
    lab: "Eurofins · Alabama, USA",
    lastVerified: "1 week ago",
    peakAt: 0.65,
  },
  {
    key: "safety",
    label: "Safety",
    icon: Shield,
    title: "Contaminant-Free",
    subtitle: "Sterility & LAL Testing",
    body: "Rigorous third-party sterility and endotoxin testing confirms products are free from bacteria, fungi, and harmful toxins.",
    why: "Peace of mind knowing your research won't be compromised by contamination.",
    lab: "Charles River · Maryland, USA",
    lastVerified: "3 days ago",
    peakAt: 0.5,
  },
  {
    key: "consistency",
    label: "Consistency",
    icon: RefreshCw,
    title: "Batch-to-Batch Consistency",
    subtitle: "QC Verification",
    body: "Precision weighing and quality controls ensure every batch meets the same exacting standards.",
    why: "Same great quality whether it's your first order or your fiftieth.",
    lab: "In-house QC · ISO 17025",
    lastVerified: "Today",
    peakAt: 0.6,
  },
];

/** Mini HPLC chromatogram SVG — looks like a real test result */
function Chromatogram({ peakAt }: { peakAt: number }) {
  const peakX = 20 + peakAt * 240;
  const baseline = 80;
  const peak = 18;

  // Trace path: baseline drift + one dominant peak
  const trace = `
    M 16 ${baseline}
    L 60 ${baseline - 2}
    L 95 ${baseline - 4}
    L ${peakX - 20} ${baseline - 6}
    Q ${peakX - 12} ${baseline - 4} ${peakX - 6} ${peak + 6}
    L ${peakX} ${peak}
    L ${peakX + 6} ${peak + 6}
    Q ${peakX + 12} ${baseline - 4} ${peakX + 20} ${baseline - 6}
    L ${peakX + 60} ${baseline - 3}
    L 260 ${baseline - 2}
    L 284 ${baseline}
  `;

  return (
    <svg viewBox="0 0 300 100" className="w-full" aria-hidden="true">
      <defs>
        <linearGradient id="traceFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16a34a" stopOpacity="0.25" />
          <stop offset="1" stopColor="#16a34a" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* gridlines */}
      {[20, 40, 60, 80].map((y) => (
        <line key={y} x1="16" x2="284" y1={y} y2={y} stroke="#e2e8f0" strokeDasharray="2 4" />
      ))}
      {/* axis */}
      <line x1="16" x2="284" y1="90" y2="90" stroke="#cbd5e1" strokeWidth="1" />
      <line x1="16" x2="16" y1="10" y2="90" stroke="#cbd5e1" strokeWidth="1" />

      {/* fill under curve */}
      <path d={`${trace} L 284 90 L 16 90 Z`} fill="url(#traceFill)" />
      {/* trace */}
      <path d={trace} fill="none" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

      {/* peak marker */}
      <line x1={peakX} x2={peakX} y1={peak - 4} y2={baseline} stroke="#16a34a" strokeDasharray="2 2" strokeWidth="1" opacity="0.5" />
      <circle cx={peakX} cy={peak} r="2.4" fill="#16a34a" />

      {/* axis labels */}
      <text x="284" y="98" textAnchor="end" fontSize="7" fill="#94a3b8">retention time →</text>
      <text x="16" y="14" fontSize="7" fill="#94a3b8">intensity</text>
    </svg>
  );
}

/** Small COA document thumbnail for the See the Proof tile */
function CoaThumbnail() {
  return (
    <svg viewBox="0 0 36 44" className="h-9 w-9" aria-hidden="true">
      <rect x="2" y="2" width="32" height="40" rx="2.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
      <rect x="6" y="6" width="14" height="2" rx="1" fill="#0f172a" />
      <rect x="6" y="11" width="20" height="1.4" rx="0.7" fill="#cbd5e1" />
      <rect x="6" y="14" width="16" height="1.4" rx="0.7" fill="#cbd5e1" />
      <rect x="6" y="19" width="24" height="1.2" rx="0.6" fill="#e2e8f0" />
      <rect x="6" y="22" width="18" height="1.2" rx="0.6" fill="#e2e8f0" />
      <rect x="6" y="25" width="22" height="1.2" rx="0.6" fill="#e2e8f0" />
      <rect x="6" y="28" width="14" height="1.2" rx="0.6" fill="#e2e8f0" />
      <circle cx="28" cy="35" r="4" fill="#16a34a" />
      <path d="M26 35 l1.5 1.5 L30.5 33" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QualityVerification() {
  const [activeKey, setActiveKey] = useState<string>(pillars[0].key);
  const active = pillars.find((p) => p.key === activeKey) ?? pillars[0];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Faint dotted grid backdrop */}
      <div aria-hidden="true" className="absolute inset-0 bg-dot-grid opacity-60" />

      <div className="container-page relative py-20 md:py-24">
        {/* Eyebrow trust chip */}
        <div className="mb-5 flex">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-700 backdrop-blur">
            <span className="flex items-center gap-0.5 text-yellow-500">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3 w-3" fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-ink-900">Trusted by 12,847+ researchers</span>
            <span className="hidden h-3 w-px bg-ink-200 md:inline-block" />
            <span className="hidden md:inline-flex items-center gap-1 text-success-600">
              <span className="h-1.5 w-1.5 rounded-full bg-success-500 animate-live-dot" />
              ISO 17025 labs
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_1fr]">
          {/* LEFT */}
          <div>
            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.05] text-ink-900">
              Quality you can verify,
              <br />
              <span className="text-ink-900 underline decoration-success-500 decoration-[4px] underline-offset-[6px]">
                not just trust.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-600">
              Every batch is independently tested by accredited U.S. laboratories. We don&apos;t ask you to take our word for it—we give you the proof.
            </p>

            {/* Stats row */}
            <div className="mt-7 grid grid-cols-3 gap-6">
              <div>
                <div className="text-[34px] font-bold leading-none text-ink-900">99%+</div>
                <div className="mt-1.5 text-[12px] leading-tight text-ink-600">Purity Guaranteed</div>
              </div>
              <div className="border-l border-ink-100 pl-6">
                <div className="text-[34px] font-bold leading-none text-ink-900">5</div>
                <div className="mt-1.5 text-[12px] leading-tight text-ink-600">Quality Checks</div>
              </div>
              <div className="border-l border-ink-100 pl-6">
                <div className="text-[34px] font-bold leading-none text-ink-900">100%</div>
                <div className="mt-1.5 text-[12px] leading-tight text-ink-600">U.S. Verified</div>
              </div>
            </div>

            <hr className="my-7 border-ink-100" />

            {/* Pill tabs */}
            <div className="flex flex-wrap gap-2">
              {pillars.map(({ key, label, icon: Icon }) => {
                const isActive = key === activeKey;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveKey(key)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold transition-all ${
                      isActive
                        ? "bg-ink-900 text-white shadow-[0_4px_14px_-4px_rgba(15,23,42,0.5)]"
                        : "bg-ink-50 text-ink-700 hover:bg-ink-100"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Active pillar card */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_4px_24px_-12px_rgba(15,23,42,0.12)]">
              <div className="p-6 md:p-7">
                <p className="text-[14.5px] leading-relaxed text-ink-700">{active.body}</p>

                {/* HPLC chromatogram */}
                <div className="mt-5 rounded-lg border border-ink-100 bg-ink-50/40 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                      Sample chromatogram — Batch #A-2841
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-success-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-success-500 animate-live-dot" />
                      Passed
                    </span>
                  </div>
                  <Chromatogram peakAt={active.peakAt} />
                </div>

                <div className="mt-5 rounded-lg border-l-[3px] border-success-500 bg-ink-50/50 p-4">
                  <p className="text-[13.5px] leading-relaxed text-ink-700">
                    <span className="font-semibold">Why it matters:</span> {active.why}
                  </p>
                </div>
              </div>

              {/* Metadata chip row */}
              <div className="grid grid-cols-1 divide-ink-100 border-t border-ink-100 bg-ink-50/40 text-[12px] md:grid-cols-3 md:divide-x">
                <div className="flex items-center gap-2 px-5 py-3">
                  <Beaker className="h-3.5 w-3.5 text-ink-500" strokeWidth={1.8} />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-ink-500">Method</div>
                    <div className="font-semibold text-ink-900">{active.subtitle}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-5 py-3">
                  <MapPin className="h-3.5 w-3.5 text-ink-500" strokeWidth={1.8} />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-ink-500">Lab</div>
                    <div className="font-semibold text-ink-900">{active.lab}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-5 py-3">
                  <CalendarCheck className="h-3.5 w-3.5 text-ink-500" strokeWidth={1.8} />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-ink-500">Last verified</div>
                    <div className="font-semibold text-ink-900">{active.lastVerified}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 pl-6 pr-2 py-2 text-[13.5px] font-semibold text-white hover:bg-ink-800"
              >
                Shop Now
                <span className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink-900">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </Link>
              <div className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-600">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-success-500/15 text-success-600">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                Free COA included with every order
              </div>
            </div>
          </div>

          {/* RIGHT — product hero */}
          <div className="relative">
            <div className="relative aspect-[5/6] w-full overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-ink-50 via-white to-surface-haze">
              {/* Radial glow behind vial */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="h-3/4 w-3/4 rounded-full bg-gradient-radial from-brand-200/40 to-transparent animate-radial-pulse"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(125,211,252,0.55), rgba(125,211,252,0) 70%)",
                  }}
                />
              </div>

              <Image
                src="/vial-glp3.png"
                alt="Research peptide pen"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="relative object-contain p-6"
              />

              {/* Sweeping shimmer line (scan effect) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-white/60 to-transparent animate-shimmer-sweep"
              />

              {/* Floating badges stack — top-right */}
              <div className="absolute right-4 top-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 rounded-xl border border-ink-100 bg-white/95 px-3 py-2 shadow-sm backdrop-blur">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-success-500/15 text-success-600">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <div className="leading-tight">
                    <div className="text-[12px] font-bold text-ink-900">99%+ Purity</div>
                    <div className="text-[10px] text-ink-500">Verified by HPLC</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-ink-100 bg-white/95 px-3 py-2 shadow-sm backdrop-blur">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-200/40 text-brand-700">
                    <Award className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div className="leading-tight">
                    <div className="text-[12px] font-bold text-ink-900">ISO 17025</div>
                    <div className="text-[10px] text-ink-500">Accredited Lab</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-ink-100 bg-white/95 px-3 py-2 shadow-sm backdrop-blur">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-700">
                    <MapPin className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div className="leading-tight">
                    <div className="text-[12px] font-bold text-ink-900">Made in USA</div>
                    <div className="text-[10px] text-ink-500">In-house manufacturing</div>
                  </div>
                </div>
              </div>

              {/* Batch ID overlay bottom-left */}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg border border-ink-100 bg-white/95 px-3 py-1.5 text-[11px] font-mono shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-success-500 animate-live-dot" />
                <span className="text-ink-500">BATCH</span>
                <span className="font-semibold text-ink-900">#A-2841</span>
              </div>
            </div>

            {/* See the Proof tile */}
            <Link
              href="#"
              className="group mt-4 flex items-center gap-4 rounded-2xl border border-ink-100 bg-white px-5 py-4 transition-all hover:border-ink-300 hover:bg-ink-50"
            >
              <CoaThumbnail />
              <div className="flex-1">
                <div className="text-[14px] font-semibold text-ink-900">See the Proof</div>
                <div className="text-[12px] text-ink-500">View Certificate of Analysis · 27 KB · PDF</div>
              </div>
              <ChevronRight className="h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
