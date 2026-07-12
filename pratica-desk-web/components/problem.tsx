import { Inbox, Clock, Hourglass, FileStack } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const problems = [
  {
    icon: Inbox,
    title: "The inbox never empties",
    body: "Matter updates, client questions, and opposing counsel all land in the same queue — with no signal for what actually needs a decision today.",
  },
  {
    icon: Clock,
    title: "Deadlines hide in attachments",
    body: "Scheduling orders and engagement letters bury dates that never make it onto a calendar until someone goes looking for them.",
  },
  {
    icon: Hourglass,
    title: "Clients are left waiting",
    body: "A day of silence reads as neglect, even when the matter is moving. No one has time to check in on everything that's gone quiet.",
  },
  {
    icon: FileStack,
    title: "Admin crowds out billable work",
    body: "Status chasing, re-reading threads, and rebuilding context cost hours that never show up on an invoice.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="The problem"
          title={
            <>
              Running a firm generates more{" "}
              <span className="font-serif font-normal italic">admin than anyone can track.</span>
            </>
          }
          lede="None of this is a single big problem. It's dozens of small ones, scattered across every tool a firm already uses — and they all land on the attorney."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.05}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50">
                <p.icon className="size-[18px]" />
              </div>
              <h3 className="mt-5 text-[15px] font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
