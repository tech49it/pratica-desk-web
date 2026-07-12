import { Lock, Eye, KeyRound, ScrollText, UserCheck, Minimize2 } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const principles = [
  {
    icon: Eye,
    title: "Read-only where possible",
    body: "It can look; it cannot alter. Least-privilege access to every connected system.",
  },
  {
    icon: Lock,
    title: "Encrypted storage",
    body: "Data encrypted in transit and at rest. Tokens isolated in a secrets manager.",
  },
  {
    icon: ScrollText,
    title: "Append-only audit log",
    body: "Every read and action recorded with actor, scope, and timestamp.",
  },
  {
    icon: UserCheck,
    title: "Human approval",
    body: "The attorney authorizes every action. The AI advises; it never decides.",
  },
  {
    icon: KeyRound,
    title: "Least privilege",
    body: "The narrowest access that works — and nothing beyond it.",
  },
  {
    icon: Minimize2,
    title: "Data minimization",
    body: "Metadata is stored; message bodies are processed transiently, never retained.",
  },
];

export function Security() {
  return (
    <section id="security" className="scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="container grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Security"
            title={
              <>
                Built for <span className="font-serif font-normal italic">privilege.</span>
              </>
            }
            lede="A tool that touches privileged communication has to earn its access. Confidentiality is a design constraint in Pratica Desk, not a setting."
          />

          <Reveal delay={0.1} className="mt-8">
            <div className="rounded-2xl bg-zinc-950 p-8 text-zinc-100">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                The line we won&apos;t cross
              </p>
              <p className="mt-3 font-serif text-[26px] leading-snug">
                No client data is ever used to train AI models.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Your matters never become someone else&apos;s training set. Full
                stop.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
