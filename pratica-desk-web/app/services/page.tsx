import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — PraticaDesk",
  description:
    "Operations engineering for small law firms: audits, integrations, and custom automation — alongside the PraticaDesk product.",
};

const tiers = [
  {
    name: "Operations audit",
    tag: "One week",
    price: "$950 flat",
    body: "A week inside your workflows — intake, email, calendars, billing, and your practice-management setup. You get written findings: what costs you time, what risks mistakes, and a priced plan to fix it. Fee credited against any build within 30 days.",
  },
  {
    name: "Fixed-price builds",
    tag: "Typically 1–3 weeks",
    price: "Fixed quote after the audit",
    body: "A defined system, delivered at a fixed price: Clio and MyCase reporting, intake automation, integrations between the tools you already pay for, data migrations, document workflows. Scope, price, and timeline agreed before a line of code. You own everything delivered.",
  },
  {
    name: "Ongoing retainer",
    tag: "Month to month",
    price: "Flat monthly, quoted on the call",
    body: "For firms that want their systems maintained and improved continuously: monitoring, fixes, small builds, and a standing line to someone who knows your setup. Cancel any month.",
  },
];

const terms = [
  {
    h: "NDA before anything",
    p: "A mutual confidentiality agreement is signed before any access, any data, any trial. No exceptions.",
  },
  {
    h: "You control access",
    p: "Every credential is granted by you and revocable by you, in one click. The revoke procedure comes in writing on day one.",
  },
  {
    h: "Fixed prices",
    p: "Every engagement is a flat fee, quoted in writing before work starts. If scope changes, the price changes in writing first.",
  },
  {
    h: "You own the work",
    p: "Code, documentation, and credentials are handed over at delivery. Leaving is a decision, not a migration project.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="border-b border-border/60 py-24 sm:py-28">
        <div className="container">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Services · Beyond the product
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Your firm&apos;s systems,{" "}
            <span className="font-serif font-normal italic">made to work together.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            PraticaDesk the product watches the inbox. The services side builds the rest:
            audits, integrations, and custom automation for firms on Clio, MyCase, and
            Google Workspace — by the engineer who builds PraticaDesk, not a generalist
            agency learning your practice on your dime.
          </p>
        </div>
      </section>

      <section className="border-b border-border/60 py-24 sm:py-28">
        <div className="container">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Fee schedule</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Three ways to engage. Every price is fixed and quoted in writing before work
            starts — no hourly meters, no scope surprises.
          </p>
          <div className="mt-12 grid gap-4">
            {tiers.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{t.name}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {t.tag}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm font-semibold">{t.price}</p>
                </div>
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Most engagements start with the audit — the cheapest way for both of us to find
            out exactly what&apos;s worth building.
          </p>
        </div>
      </section>

      <section className="border-b border-border/60 py-24 sm:py-28">
        <div className="container">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How I work with firms
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {terms.map((x) => (
              <div key={x.h} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-semibold">{x.h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{x.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Start with a 15-minute call.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Tell me the workflow that eats the most time at your firm. If I can&apos;t
            help, I&apos;ll say so on the call — that&apos;s cheaper for both of us than
            finding out later.
          </p>
          
            href="mailto:hello@crastu.com?subject=Services%20inquiry"
            className="mt-8 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
          >
            Email hello@crastu.com
          </a>
        </div>
      </section>
    </main>
  );
}
