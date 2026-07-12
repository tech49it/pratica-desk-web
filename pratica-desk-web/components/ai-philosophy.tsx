import { FileSearch, Users, UserCheck, Ban, Lock, ScrollText, PenLine } from "lucide-react";

import { Reveal } from "@/components/reveal";

const principles = [
  {
    icon: FileSearch,
    title: "Evidence-backed recommendations",
    body: "Every suggestion carries a source trail back to the email, document, or calendar entry it came from.",
  },
  {
    icon: Users,
    title: "Human-in-the-loop review",
    body: "AI output is a draft for a person to review, not a finished decision.",
  },
  {
    icon: UserCheck,
    title: "Attorney approval",
    body: "Nothing is sent, filed, or scheduled without an attorney explicitly approving it first.",
  },
  {
    icon: Ban,
    title: "No autonomous legal advice",
    body: "Pratica Desk never interprets the law or advises a course of action. It organizes facts; attorneys make the judgment calls.",
  },
  {
    icon: Lock,
    title: "No client data used for training",
    body: "Your matters are never used to train AI models — for you, or for anyone else.",
  },
  {
    icon: ScrollText,
    title: "Audit trails",
    body: "Every read and every recommendation is logged with actor, scope, and timestamp.",
  },
  {
    icon: PenLine,
    title: "Safe drafting & summarization",
    body: "Drafts and summaries are grounded in the source material provided — never invented, always reviewable.",
  },
];

export function AiPhilosophy() {
  return (
    <section className="border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.05}
              className="rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <p.icon className="size-[18px] text-foreground" />
              <h3 className="mt-4 text-[15px] font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <div className="rounded-2xl bg-zinc-950 px-8 py-12 text-center text-zinc-100 sm:px-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              The line we won&apos;t cross
            </p>
            <p className="mx-auto mt-3 max-w-2xl font-serif text-[26px] leading-snug">
              Pratica Desk never gives legal advice. It surfaces evidence and options —
              the attorney decides and acts.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
