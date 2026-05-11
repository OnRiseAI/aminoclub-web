import { BadgeCheck, Truck, TestTube, HelpCircle } from "lucide-react";

const rows = [
  {
    icon: BadgeCheck,
    title: "99% Purity Guaranteed",
    body: "Every batch verified",
    tint: "bg-success-500/10 text-success-600",
    rowBg: "bg-success-500/5",
    border: "border-l-success-500",
    tooltip: false,
  },
  {
    icon: Truck,
    title: "Shipment Protection",
    body: "Every order fully covered",
    tint: "bg-sky-500/10 text-sky-600",
    rowBg: "bg-sky-500/5",
    border: "border-l-sky-500",
    tooltip: true,
  },
  {
    icon: TestTube,
    title: "CoA with Every Batch",
    body: "Third Party tested in America",
    tint: "bg-yellow-400/15 text-yellow-700",
    rowBg: "bg-yellow-400/5",
    border: "border-l-yellow-500",
    tooltip: true,
  },
];

export function Guarantee() {
  return (
    <section className="bg-gradient-to-b from-surface-lavender/40 via-white to-surface-pink/30">
      <div className="container-page grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:py-24">
        <div className="relative aspect-square w-full max-w-[520px]">
          {/* Placeholder for product photography (pink amino-branded vial like live site) */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-surface-pink via-surface-lavender to-surface-cream" />
          <div className="relative flex h-full items-center justify-center">
            <span className="text-[12px] uppercase tracking-[0.18em] text-ink-500">
              product photography placeholder
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-[36px] md:text-[44px] font-bold leading-tight text-ink-900">
            The Amino Club Guarantee
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-600">
            Documented quality for research and laboratory use. Every batch meets our internal purity standards.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {rows.map(({ icon: Icon, title, body, tint, rowBg, border, tooltip }) => (
              <div
                key={title}
                className={`flex items-center gap-4 rounded-r-2xl border-l-4 ${border} ${rowBg} px-5 py-4`}
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${tint}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[15px] font-semibold text-ink-900 underline decoration-ink-200 underline-offset-4">
                      {title}
                    </h3>
                    {tooltip && (
                      <HelpCircle className="h-3.5 w-3.5 text-ink-400" strokeWidth={2} />
                    )}
                  </div>
                  <p className="text-[13px] text-ink-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
