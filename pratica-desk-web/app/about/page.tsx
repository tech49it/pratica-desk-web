import type { Metadata } from "next";
import { MapPin, Lock, Wrench } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "PraticaDesk is a Los Angeles-based inbox assistant for small law firms, built around confidentiality and one real workflow at a time.",
};

const principles = [
  {
    icon: MapPin,
    title: "Built in Los Angeles",
    body: "PraticaDesk is built by a Los Angeles-based team focused on a quiet, confidential inbox assistant for small law firms.",
  },
  {
    icon: Lock,
    title: "Confidentiality first",
    body: "Everything about the product — access, storage, and AI design — starts from the assumption that the data involved is privileged.",
  },
  {
    icon: Wrench,
    title: "Practical, not theoretical",
    body: "We build for the way firms actually run today: existing tools, existing habits, one real workflow at a time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Built in Los Angeles,{" "}
            <span className="font-serif font-normal italic">for how law firms actually work.</span>
          </>
        }
        lede="PraticaDesk is a product in active development — built with direct feedback from practicing attorneys and legal operations professionals, not around it."
      />

      <section className="border-t border-border/60 py-24 sm:py-28">
        <div className="container grid gap-4 sm:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.06}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50">
                <p.icon className="size-[18px]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-24 sm:py-28">
        <div className="container max-w-3xl">
          <SectionHeading
            eyebrow="Where we are today"
            title="Early, deliberately."
            lede="PraticaDesk is currently being developed and refined with feedback from a small group of practicing attorneys and legal operations leaders. We're not claiming a customer base or results we haven't earned yet — the Morning Brief module is real and in development today, and everything after it is being built the same way: one workflow, validated with the people who'll actually rely on it."
          />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
