import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-surface-yellow">
      {/* Floating vial decorations at edges */}
      <div className="pointer-events-none absolute -left-8 top-1/2 hidden h-[280px] w-[140px] -translate-y-1/2 -rotate-[18deg] md:block">
        <Image
          src="/vial-glp3.png"
          alt=""
          fill
          sizes="140px"
          className="object-contain drop-shadow-xl"
        />
      </div>
      <div className="pointer-events-none absolute -right-8 top-1/2 hidden h-[280px] w-[140px] -translate-y-1/2 rotate-[18deg] md:block">
        <Image
          src="/vial-glp3.png"
          alt=""
          fill
          sizes="140px"
          className="object-contain drop-shadow-xl"
        />
      </div>

      <div className="container-page relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.2] text-ink-900">
            All the research peptides you need, with the{" "}
            <span className="underline decoration-success-500 decoration-[3px] underline-offset-4">
              peace of mind
            </span>{" "}
            and research community at your fingertips.
          </h2>
          <div className="mt-8 flex justify-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 pl-6 pr-2 py-2 text-[14px] font-semibold text-white hover:bg-ink-800"
            >
              Shop Now
              <span className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-900">
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
