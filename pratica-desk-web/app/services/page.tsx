import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Operations engineering for small law firms from Crastu LLC: audits, intake automation, integrations, and fixed-price builds — quoted in writing, no dollar amounts advertised.",
};

const offerings = [
  {
    name: "Operations audit",
    tag: "One week",
    price: "Fixed fee — quoted on the call",
    body: "A week inside your workflows — intake, email, calendars, billing, and your practice-management setup. You get a written findings document: what's costing you time, what's risking mistakes, and a priced plan to fix it. The audit fee is credited against any build started within 30 days.",
  },
  {
    name: "AI intake & client screening",
    tag: "Working prototype",
    price: "Fixed fee — scoped after the consult",
    body: "Structured intake for your practice: a lead answers your firm's screening questions, uploads supporting documents, and arrives pre-qualified with deadlines mapped and an attorney-ready summary. Rules are owned and edited by your attorneys, and every output is reviewed by a person before it counts.",
  },
  {
    name: "Inbox triage & morning brief",
    tag: "30-day pilot",
    price: "Flat monthly — cancel anytime",
    body: "The PraticaDesk system, set up for your firm: incoming mail sorted by rules you set, every decision logged, one short brief each morning. Reads and labels only — never sends, never deletes, stores no mail. Access is revocable by you in one click.",
  },
  {
    name: "Fixed-price builds",
    tag: "Typically 1–3 weeks",
    price: "Fixed fee — quoted after the audit",
    body: "A defined system, delivered at a fixed price: Clio and MyCase reporting, automation between the tools you already pay for, data migrations, document workflows. Scope, price, and timeline are agreed in writing before a line of code. You own everything delivered.",
  },
  {
    name: "Ongoing retainer",
    tag: "Month to month",
    price: "Flat monthly — quoted on the call",
    body: "For firms that want their systems maintained and improved continuously: monitoring, fixes, small builds, and a standing line to someone who knows your setup. Cancel any month.",
  },
];

const howWeWork = [
  {
    title: "NDA before anything",
    body: "A mutual confidentiality agreement is signed before any access, any data, any trial. No exceptions.",
  },
  {
    title: "You control access",
    body: "Every credential is granted by you and revocable by you, in one click. The revoke procedure comes in writing on day one.",
  },
  {
    title: "Fixed fees",
    body: "Every engagement is a flat fee, quoted in writing before work starts. If scope changes, the price changes in writing first.",
  },
  {
    title: "You own the work",
    body: "Code, documentation, and credentials are handed over at delivery. Leaving is a decision, not a migration project.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services · Crastu LLC"
        title={
          <>
            Your firm&apos;s systems,{" "}
            <span className="font-serif font-normal italic">made to work together.</span>
          </>
        }
        lede="Beyond the product: audits, intake automation, integrations, and fixed-price builds for firms on Clio, MyCase, and Google Workspace — from the engineering behind PraticaDesk."
      >
        <Button asChild size="lg">
          <a href="mailto:hello@crastu.com?subject=15-minute%20consult">
            Free 15-minute consult
          </a>
        </Button>
      </PageHeader>

      <section className="border-t border-border/60 py-24 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Five ways to start."
            lede="Every engagement is a fixed fee, quoted in writing after the consult — no hourly meters, no scope surprises."
          />
          <div className="mt-12 grid gap-4">
            {offerings.map((o, i) => (
              <Reveal
                key={o.name}
                delay={i * 0.05}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{o.name}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {o.tag}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm font-semibold">{o.price}</p>
                </div>
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  {o.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 sm:py-28">
        <div className="container">
          <SectionHeading eyebrow="How we work" title="Terms that protect both sides." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {howWeWork.map((x, i) => (
              <Reveal
                key={x.title}
                delay={i * 0.05}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="font-semibold">{x.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {x.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 sm:py-28">
        <div className="container">
          <Reveal className="flex flex-col items-center rounded-2xl border border-border bg-card px-8 py-14 text-center shadow-sm sm:py-16">
            <p className="eyebrow">Start with the free consult.</p>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Tell us the workflow that eats{" "}
              <span className="font-serif font-normal italic">the most time.</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              If we can&apos;t help, we&apos;ll say so on the call — that&apos;s cheaper for
              both of us than finding out later.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <a href="mailto:hello@crastu.com?subject=15-minute%20consult">
                  Email hello@crastu.com
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact form</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
