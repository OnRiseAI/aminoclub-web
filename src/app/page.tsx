import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Guarantee } from "@/components/sections/guarantee";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Benefits } from "@/components/sections/benefits";
import { QualityVerification } from "@/components/sections/quality-verification";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FAQ } from "@/components/sections/faq";
import { Newsletter } from "@/components/sections/newsletter";

export default function HomePage() {
  return (
    <>
      <section className="bg-hero-wash">
        <div className="container-page grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-[44px] md:text-[64px] font-bold leading-[1.05] text-ink-900">
              Research Peptides
              <br />
              You Can Trust
            </h1>
            <p className="mt-6 max-w-md text-[16px] leading-[1.6] text-ink-700">
              Research-grade peptides with Certificate of Analysis on every batch.
              99%+ identity purity, third-party tested.
            </p>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 pl-6 pr-2 py-2 text-[14px] font-semibold text-white hover:bg-ink-800"
              >
                Browse Catalog
                <span className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-900">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </Link>
            </div>
          </div>

          <div className="relative aspect-square w-full max-w-[560px] justify-self-end">
            <Image
              src="/hero-pens.png"
              alt="Research-grade peptide vials"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <Guarantee />
      <ProductShowcase />
      <Benefits />
      <QualityVerification />
      <WhyChooseUs />
      <FAQ />
      <Newsletter />
    </>
  );
}
