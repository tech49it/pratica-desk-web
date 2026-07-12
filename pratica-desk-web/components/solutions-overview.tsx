import {
  Building2,
  HeartPulse,
  Globe2,
  Briefcase,
  ClipboardList,
  Settings2,
} from "lucide-react";

import { Reveal } from "@/components/reveal";

const solutions = [
  {
    icon: Building2,
    title: "Boutique law firms",
    pain: "Every attorney wears multiple hats, and nothing falls through the cracks — until it does.",
    help: "One daily brief keeps a small team's full docket visible without adding headcount or process.",
  },
  {
    icon: HeartPulse,
    title: "Personal injury firms",
    pain: "High case volume means client updates and demand deadlines compete for attention every day.",
    help: "Pratica Desk surfaces stale matters and approaching deadlines automatically, so no client goes quiet by accident.",
  },
  {
    icon: Globe2,
    title: "Immigration firms",
    pain: "Filing windows and government deadlines are unforgiving, and they're often buried in correspondence.",
    help: "Calendar and deadline awareness flags dates the moment they appear in a thread — for review, never auto-filed.",
  },
  {
    icon: Briefcase,
    title: "Corporate & transactional firms",
    pain: "Deal timelines depend on dozens of moving documents and counterparties.",
    help: "Document workflows keep drafts, redlines, and open items visible without another status meeting.",
  },
  {
    icon: ClipboardList,
    title: "Litigation practices",
    pain: "Discovery responses, scheduling orders, and motion deadlines pile up across every active matter.",
    help: "Every possible deadline is surfaced with its source — never assumed, always attorney-reviewed.",
  },
  {
    icon: Settings2,
    title: "Legal operations teams",
    pain: "Ops leaders are accountable for visibility across a firm's matters without owning any one of them.",
    help: "A firm-wide view of what's moving, what's stalled, and what needs escalation — grounded in evidence, not guesswork.",
  },
];

export function SolutionsOverview() {
  return (
    <section className="border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.05}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50">
                <s.icon className="size-[18px]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                {s.pain}
              </p>
              <div className="evidence mt-4">
                <p className="text-[13.5px] leading-relaxed text-foreground">
                  {s.help}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
