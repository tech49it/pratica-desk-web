import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Workflow } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const pillars = [
  {
    icon: Sparkles,
    title: "Morning Brief",
    body: "Every attorney starts the day with one evidence-backed brief instead of a dozen open tabs.",
    href: "#morning-brief",
  },
  {
    icon: ShieldCheck,
    title: "Legal AI, built for privilege",
    body: "Evidence-backed, human-reviewed, and never trained on your client data.",
    href: "/legal-ai",
  },
  {
    icon: Workflow,
    title: "Invoice follow-ups",
    body: "Flags client emails tied to unpaid invoices so a partner can follow up — surfaced for you, never sent automatically.",
    href: "#features",
  },
];

export function ProductOverview() {
  return (
    <section id="product" className="scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Product overview"
          title={
            <>
              One system, three ways{" "}
              <span className="font-serif font-normal italic">it earns trust.</span>
            </>
          }
          lede="PraticaDesk sits on top of the tools your firm already runs — reading, never acting — until an attorney says otherwise."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-foreground/20"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50">
                  <p.icon className="size-[18px]" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground">
                  Learn more{" "}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
