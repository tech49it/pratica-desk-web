import { UserPlus, Inbox, FileStack, Route, Repeat, CalendarClock, UserCheck } from "lucide-react";

import { Reveal } from "@/components/reveal";

const capabilities = [
  {
    icon: UserPlus,
    title: "Intake automation",
    body: "New matter intake is captured, conflict-checked, and structured before it reaches an attorney's desk — proposed for review, never filed automatically.",
  },
  {
    icon: Inbox,
    title: "Inbox intelligence",
    body: "Every inbox is ranked by matter, relationship, and how long something has waited, with the reasoning shown alongside it.",
  },
  {
    icon: FileStack,
    title: "Document workflows",
    body: "Drafts, redlines, and signature requests are tracked across a matter, so nothing sits forgotten in a downloads folder.",
  },
  {
    icon: Route,
    title: "Task routing",
    body: "Routine follow-ups get routed to the right paralegal or associate — proposed, never force-assigned.",
  },
  {
    icon: Repeat,
    title: "Follow-up workflows",
    body: "Clients who've gone quiet get a drafted check-in, ready for an attorney to send as-is or edit.",
  },
  {
    icon: CalendarClock,
    title: "Calendar & deadline awareness",
    body: "Dates parsed from scheduling orders and engagement letters are flagged for confirmation before they ever reach a calendar.",
  },
  {
    icon: UserCheck,
    title: "Human approval gates",
    body: "Every workflow — intake, routing, follow-up — ends at the same place: an attorney's explicit approval.",
  },
];

export function AutomationCapabilities() {
  return (
    <section className="border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.05}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50">
                <c.icon className="size-[18px]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
