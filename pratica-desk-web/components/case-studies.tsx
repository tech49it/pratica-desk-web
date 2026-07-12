import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const caseStudies = [
  {
    title: "Morning Brief",
    subtitle: "One evidence-backed brief every morning.",
    status: "In development",
    body: "The first Pratica Desk module: an overnight job that reads across a firm's calendar, inbox, and matters, then assembles a single prioritized, sourced brief — refined with practicing attorneys before wider release.",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Case studies"
          title={
            <>
              How we build{" "}
              <span className="font-serif font-normal italic">each module.</span>
            </>
          }
          lede="Product engineering notes on what we're actually shipping — not customer testimonials. Pratica Desk is early; here's what's real today."
        />

        <div className="mt-14 grid gap-4">
          {caseStudies.map((cs) => (
            <Reveal
              key={cs.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{cs.title}</h3>
                  <p className="mt-1 text-muted-foreground">{cs.subtitle}</p>
                </div>
                <Badge
                  variant="secondary"
                  className="shrink-0 font-mono text-[10px] uppercase tracking-wider"
                >
                  {cs.status}
                </Badge>
              </div>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                {cs.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
