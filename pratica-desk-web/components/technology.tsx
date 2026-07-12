import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const stack: { name: string; tag?: string }[] = [
  { name: "Next.js" },
  { name: "FastAPI" },
  { name: "Supabase / PostgreSQL" },
  { name: "Google Cloud Run" },
  { name: "Vercel" },
  { name: "Cloudflare" },
  { name: "Google Workspace APIs" },
  { name: "Microsoft 365", tag: "Roadmap" },
  { name: "Anthropic Claude" },
  { name: "OpenAI" },
  { name: "Docker" },
  { name: "GitHub Actions" },
];

export function Technology() {
  return (
    <section id="technology" className="scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Technology"
          title={
            <>
              Built on infrastructure{" "}
              <span className="font-serif font-normal italic">firms can trust.</span>
            </>
          }
          lede="No exotic stack for its own sake — established, auditable infrastructure, chosen for reliability and security."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {stack.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.03}
              className="flex h-24 flex-col items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-3 text-center shadow-sm"
            >
              <span className="text-[14px] font-medium">{t.name}</span>
              {t.tag ? (
                <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  {t.tag}
                </span>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
