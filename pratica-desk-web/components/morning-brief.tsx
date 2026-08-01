import { Moon, FileSearch, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { BriefMockup } from "@/components/brief-mockup";

const points = [
  {
    icon: Moon,
    title: "Assembled overnight",
    body: "The brief is compiled while the firm sleeps and is ready before the first coffee.",
  },
  {
    icon: FileSearch,
    title: "Always sourced",
    body: "Every item links back to the exact email, matter, or scheduling order it came from.",
  },
  {
    icon: ShieldCheck,
    title: "Never sent without you",
    body: "The brief is a recommendation, not an action. Nothing goes out until an attorney approves it.",
  },
];

export function MorningBrief() {
  return (
    <section id="morning-brief" className="scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Morning Brief"
          title={
            <>
              The Daily Brief{" "}
              <span className="font-serif font-normal italic">for every attorney.</span>
            </>
          }
          lede="One prioritized view of the day — calendar, inbox, and matters — reduced to what actually needs a decision, with the evidence attached."
        />

        <Reveal delay={0.1} className="relative mx-auto mt-14 max-w-4xl">
          <div className="pointer-events-none absolute -inset-x-10 -top-8 bottom-0 -z-10 bg-grid mask-fade-b opacity-40" />
          <BriefMockup />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <p.icon className="size-[18px] text-foreground" />
              <h3 className="mt-4 text-[15px] font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
