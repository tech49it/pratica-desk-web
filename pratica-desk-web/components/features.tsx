import {
  Sparkles,
  Inbox,
  ShieldCheck,
  CalendarClock,
  FileSearch,
  Moon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  className?: string;
  children?: React.ReactNode;
}

const features: Feature[] = [
  {
    icon: Sparkles,
    title: "Daily prioritization",
    body: "One prioritized view each morning — today's calendar, the emails that need a decision, the clients waiting, the deadlines hiding in attachments.",
    className: "sm:col-span-2",
    children: (
      <div className="evidence mt-5">
        <span className="mb-1.5 block font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
          Every item shows its evidence
        </span>
        <div className="space-y-1 font-mono text-[12px] text-muted-foreground">
          <p>— Inbound Tuesday, no reply detected</p>
          <p>— Matter marked high priority</p>
        </div>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: "You approve everything",
    body: "PraticaDesk recommends; it never acts. Nothing is sent, filed, or changed without an attorney's explicit approval.",
  },
  {
    icon: Inbox,
    title: "Inbox intelligence",
    body: "Decisions separated from noise. It ranks by matter, relationship, and how long something has waited — and explains the ranking.",
  },
  {
    icon: CalendarClock,
    title: "Calendar & deadlines",
    body: "Events tied back to their matters, prep-worthy hearings flagged, and possible deadlines surfaced for your review before they slip.",
  },
  {
    icon: FileSearch,
    title: "Grounded in sources",
    body: "Every recommendation carries a source trail and a one-tap link back to the exact thread or document. Never a black box.",
  },
  {
    icon: Moon,
    title: "Runs while you sleep",
    body: "The brief is assembled overnight and ready before you arrive. You read; you never wait on the machine.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Core capabilities"
          title={
            <>
              Everything an attorney needs to see first —{" "}
              <span className="font-serif font-normal italic">and nothing they don&apos;t.</span>
            </>
          }
          lede="PraticaDesk works across your existing stack and surfaces only what actually needs attention today, with the reasoning attached."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.05}
              className={cn(
                "group rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-foreground/20",
                f.className
              )}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50">
                <f.icon className="size-[18px]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                {f.body}
              </p>
              {f.children}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
