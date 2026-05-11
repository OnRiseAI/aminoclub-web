import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { AnnouncementBar } from "@/components/announcement-bar";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Amino Club — Research Peptides You Can Trust",
    template: "%s · Amino Club",
  },
  description:
    "Research-grade peptides with Certificate of Analysis on every batch. 99%+ identity purity, third-party tested.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink-900">
        <AnnouncementBar message="Sorry for the downtime — payments are back and live." />
        <SiteHeader />
        <main className="flex-1 flex flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
