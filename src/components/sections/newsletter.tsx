import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <section className="bg-gradient-to-b from-white via-surface-pink/30 to-surface-lavender/40">
      <div className="container-page py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[32px] md:text-[44px] font-bold leading-tight text-ink-900">
            All the research peptides you need, with the peace of mind and research community at your fingertips.
          </h2>
          <div className="mt-8 flex justify-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3 text-[14px] font-semibold text-white hover:bg-ink-800"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-ink-100 bg-white p-8 md:p-10">
          <div className="text-center">
            <h3 className="text-[22px] md:text-[26px] font-bold text-ink-900">
              Research updates from Amino Club
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-600">
              Subscribe for catalog updates, new research compounds, and quality documentation news
            </p>
          </div>

          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@lab.com"
              aria-label="Email address"
              className="flex-1 rounded-full border border-ink-200 bg-white px-5 py-3 text-[14px] text-ink-900 placeholder:text-ink-400 focus:border-ink-900 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-[14px] font-semibold text-white hover:bg-ink-800"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-center text-[12px] text-ink-500">
            For researchers and labs. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
