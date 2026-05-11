"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      {children}
    </div>
  );
}

export function AccordionItem({
  question,
  children,
  defaultOpen = false,
  className,
}: {
  question: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  return (
    <details
      className={cn(
        "group rounded-md border border-ink-200 bg-white open:shadow-sm",
        className
      )}
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-[14px] font-semibold text-ink-900 transition-colors hover:bg-ink-50 [&::-webkit-details-marker]:hidden">
        <span className="flex-1">{question}</span>
        <Plus className="h-4 w-4 shrink-0 text-ink-500 transition-transform duration-200 group-open:rotate-45" />
      </summary>
      <div className="px-5 pb-4 text-[14px] text-ink-600 leading-relaxed">
        {children}
      </div>
    </details>
  );
}
