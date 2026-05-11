import Link from "next/link";
import { ArrowRight, Users, BadgeDollarSign, Headphones, BookOpenText, Truck, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Join a community of researchers",
    body: "Every purchase unlocks access to our research community. Connect with fellow researchers, share lab notes, and reference up-to-date documentation on each compound.",
    cta: "Shop & Join Community",
    href: "#",
  },
  {
    icon: BadgeDollarSign,
    title: "Research-grade quality meets researcher-friendly pricing",
    body: "U.S.-based provider with in-house manufacturing. Every batch undergoes rigorous third-party identity and content testing with full documentation. Documented quality procedures combined with research-grade pricing—keeping high identity purity research supply accessible.",
    cta: "Shop USA tested Peptides",
    href: "#",
  },
  {
    icon: Headphones,
    title: "Expert support whenever you need it",
    body: "",
    cta: "",
    href: "",
  },
  {
    icon: BookOpenText,
    title: "Extensive research library at your fingertips",
    body: "Access our comprehensive collection of research articles, studies, and educational resources. Stay informed with our regularly updated blog covering the latest peptide research and discoveries.",
    cta: "Explore Research Library",
    href: "/research",
  },
  {
    icon: Truck,
    title: "Anywhere in the US, as fast as next day",
    body: "",
    cta: "",
    href: "",
  },
  {
    icon: ShieldCheck,
    title: "Free shipment protection on every order",
    body: "Every order is protected against damage, loss, or theft in transit. If your product arrives damaged, we'll replace it at no cost.",
    cta: "Shop With Confidence",
    href: "#",
  },
];

export function Benefits() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[32px] md:text-[44px] font-bold leading-tight text-ink-900">
            Everything you need to succeed
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, body, cta, href }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-ink-100 bg-surface-cream/40 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink-900">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold leading-snug text-ink-900">
                {title}
              </h3>
              {body && (
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-600">{body}</p>
              )}
              {cta && (
                <Link
                  href={href}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-semibold text-ink-900 hover:text-ink-700"
                >
                  {cta}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
