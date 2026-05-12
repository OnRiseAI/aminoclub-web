import Link from "next/link";
import {
  IllusTestRack,
  IllusPipetteDish,
  IllusMagnifierChat,
  IllusMolecule,
  IllusStopwatchMotion,
  IllusTruckShield,
} from "@/components/illustrations";

const benefits = [
  {
    Illus: IllusTestRack,
    title: "Join a community of researchers",
    body: "Every purchase unlocks access to our research community. Connect with fellow researchers, share lab notes, and reference up-to-date documentation on each compound.",
    cta: "Shop & Join Community",
    href: "#",
  },
  {
    Illus: IllusPipetteDish,
    title: "Research-grade quality meets researcher-friendly pricing",
    body: "U.S.-based provider with in-house manufacturing. Every batch undergoes rigorous third-party identity and content testing with full documentation. Documented quality procedures combined with research-grade pricing—keeping high identity purity research supply accessible.",
    cta: "Shop USA tested Peptides",
    href: "#",
  },
  {
    Illus: IllusMagnifierChat,
    title: "Expert support whenever you need it",
    body: "",
    cta: "",
    href: "",
  },
  {
    Illus: IllusMolecule,
    title: "Extensive research library at your fingertips",
    body: "Access our comprehensive collection of research articles, studies, and educational resources. Stay informed with our regularly updated blog covering the latest peptide research and discoveries.",
    cta: "Explore Research Library",
    href: "/research",
  },
  {
    Illus: IllusStopwatchMotion,
    title: "Anywhere in the US, as fast as next day",
    body: "",
    cta: "",
    href: "",
  },
  {
    Illus: IllusTruckShield,
    title: "Free shipment protection on every order",
    body: "Every order is protected against damage, loss, or theft in transit. If your product arrives damaged, we'll replace it at no cost.",
    cta: "Shop With Confidence",
    href: "#",
  },
];

export function Benefits() {
  return (
    <section className="bg-surface-mint">
      <div className="container-page py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[34px] md:text-[44px] font-bold leading-tight text-ink-900">
            Everything you need to succeed
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map(({ Illus, title, body, cta, href }) => (
            <div
              key={title}
              className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-2xl bg-white p-7 pr-36 transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)]"
            >
              <h3 className="text-[18px] font-bold leading-snug text-ink-900">
                {title}
              </h3>
              {body && (
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-600">{body}</p>
              )}
              {cta && (
                <Link
                  href={href}
                  className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-ink-200 px-4 py-2 text-[12.5px] font-semibold text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-white"
                >
                  {cta}
                </Link>
              )}
              <Illus className="absolute bottom-4 right-4 h-28 w-28 text-ink-700 transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
