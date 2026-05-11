import Link from "next/link";

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.55 12 3.55 12 3.55s-7.505 0-9.377.5a3.017 3.017 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.5 9.377.5 9.377.5s7.505 0 9.377-.5a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const columns = [
  {
    title: "Shop",
    links: [{ label: "All Products", href: "#" }],
  },
  {
    title: "Resources",
    links: [
      { label: "Research Library", href: "/research" },
      { label: "Certificates of Analysis", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "#" },
      { label: "Shipping Info", href: "#" },
      { label: "Returns & Refunds", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Disclaimer", href: "#" },
      { label: "Research Use Only", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex flex-col leading-none">
              <span className="text-[26px] font-bold tracking-tight text-white lowercase">amino</span>
              <span className="-mt-1 self-end text-[10px] font-semibold tracking-[0.2em] text-ink-300 uppercase">club</span>
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-ink-400">
              Premium research-grade peptides for optimal controlled studies and performance. Third-party tested with Certificate of Analysis.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Link href="#" aria-label="Instagram" className="text-ink-300 hover:text-white">
                <IconInstagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="X" className="text-ink-300 hover:text-white">
                <IconX className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="YouTube" className="text-ink-300 hover:text-white">
                <IconYouTube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-semibold text-white">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[13px] text-ink-300 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-800 pt-6 text-[12px] text-ink-400 md:flex-row md:items-center">
          <p>&copy; 2026 Amino Club. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>SSL Secured</span>
            <span>99%+ Purity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
