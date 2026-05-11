import Link from "next/link";
import { User, ShoppingBag } from "lucide-react";

const navItems = [
  { label: "Products", href: "#" },
  { label: "Research", href: "/research" },
  { label: "Partner Program", href: "#" },
  { label: "Contact us", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="w-full border-b border-ink-100 bg-white">
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Amino Club home" className="flex flex-col leading-none">
          {/* TODO: replace with actual logo SVG when client provides asset */}
          <span className="text-[28px] font-bold tracking-tight text-ink-900 lowercase">
            amino
          </span>
          <span className="-mt-1 self-end text-[10px] font-semibold tracking-[0.2em] text-ink-600 uppercase">
            club
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-[14px] font-medium text-ink-900">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-ink-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-ink-900">
          <button aria-label="Account" className="hover:text-ink-600">
            <User className="h-[22px] w-[22px]" strokeWidth={1.6} />
          </button>
          <button aria-label="Cart" className="relative hover:text-ink-600">
            <ShoppingBag className="h-[22px] w-[22px]" strokeWidth={1.6} />
            <span className="absolute -top-1.5 -right-2 h-[18px] min-w-[18px] rounded-full bg-ink-900 px-1 text-[10px] font-bold leading-[18px] text-white">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
