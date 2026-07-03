import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const integrations = [
  "Google Workspace",
  "Microsoft 365",
  "Clio",
  "CASEpeer",
  "Filevine",
  "MyCase",
  "NetDocuments",
  "Google Drive",
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
          lede="No rip-and-replace. No migration. Atrium sits alongside your existing systems and reads from them — you keep working exactly as you do now."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((name, i) => (
            <Reveal
              key={name}
              delay={i * 0.04}
              className="flex h-24 items-center justify-center rounded-xl border border-border bg-card text-[15px] font-medium shadow-sm"
            >
              {name}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-6">
          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-dashed border-border bg-card px-6 py-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Your stack
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-[13px] text-muted-foreground">read-only</span>
            <span className="h-px flex-1 bg-border" />
            <span className="rounded-md border border-foreground px-3 py-1.5 text-[13px] font-semibold">
              Atrium CMD
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
