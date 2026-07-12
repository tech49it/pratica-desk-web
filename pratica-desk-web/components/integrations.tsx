import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const integrations = [
  { name: "Google Workspace", status: "Live" },
  { name: "Notion", status: "Live" },
  { name: "Claude", status: "Live" },
];

export function Integrations() {
  return (
    <section
      id="integrations"
      className="scroll-mt-24 border-t border-border/60 py-24 sm:py-28"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Integrations"
          title={
            <>
              Works with what{" "}
              <span className="font-serif font-normal italic">you already use.</span>
            </>
          }
          lede="No rip-and-replace. No migration. Pratica Desk sits alongside your existing systems and reads from them — you keep working exactly as you do now."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {integrations.map((integration, i) => (
            <Reveal
              key={integration.name}
              delay={i * 0.04}
              className="flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card text-[15px] font-medium shadow-sm"
            >
              {integration.name}
              <Badge
                variant="secondary"
                className="font-mono text-[9.5px] uppercase tracking-wider"
              >
                {integration.status}
              </Badge>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 text-center text-[13px] text-muted-foreground">
          Outlook / Microsoft 365 support is on the roadmap.
        </p>

        <Reveal delay={0.1} className="mt-6">
          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-dashed border-border bg-card px-6 py-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Your stack
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-[13px] text-muted-foreground">read-only</span>
            <span className="h-px flex-1 bg-border" />
            <span className="rounded-md border border-foreground px-3 py-1.5 text-[13px] font-semibold">
              Pratica Desk
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.14} className="mt-4">
          <div className="rounded-xl border border-dashed border-border bg-card px-6 py-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              What your firm needs
            </span>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              Email on Google Workspace · a Notion workspace your firm owns ·
              one 10-minute grant from your Google admin, revocable anytime.
              Nothing installs on anyone&apos;s computer.
            </p>
          </div>
        </Reveal>

        <p className="mt-6 max-w-3xl text-[12.5px] leading-relaxed text-muted-foreground">
          Designed around the professional duties your firm already carries —
          confidentiality, supervision, and technological competence.
          Pratica Desk gives you the written record and revocation controls to
          make that determination; it does not make the compliance call for
          you.
        </p>
      </div>
    </section>
  );
}
