import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const modules = [
  { name: "Morning Brief", body: "One evidence-backed brief every morning.", status: "First" },
  { name: "Inbox Intelligence", body: "Decisions separated from noise.", status: "Planned" },
  { name: "Document Intelligence", body: "Find the right draft, and what changed.", status: "Planned" },
  { name: "Workflow Automation", body: "Routine steps, proposed for approval.", status: "Planned" },
  { name: "Matter Intelligence", body: "Risk and momentum across the docket.", status: "Planned" },
  { name: "AI Intake", body: "Structured, conflict-checked intake.", status: "Planned" },
  { name: "Knowledge Search", body: "Ask across matters, with sources.", status: "Planned" },
  { name: "Timesheet Assistant", body: "Billable time, reconstructed for review.", status: "Planned" },
  { name: "Billing Assistant", body: "Draft invoices from real activity.", status: "Planned" },
];

export function Vision() {
  return (
    <section id="roadmap" className="dark-section scroll-mt-24 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          dark
          eyebrow="Roadmap"
          title={
            <>
              One module today.{" "}
              <span className="font-serif font-normal italic">A platform tomorrow.</span>
            </>
          }
          lede="The Morning Brief is module one. Every module ahead reuses the same read-only, evidence-backed, attorney-approved foundation — the beginning of an AI operations platform for the whole firm."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 0.04}
              className={cn(
                "rounded-xl border p-5",
                m.status === "First"
                  ? "border-zinc-600 bg-zinc-900"
                  : "border-zinc-800 bg-zinc-900/50"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[15px] font-semibold text-white">{m.name}</h3>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 font-mono text-[9.5px] uppercase tracking-wider",
                    m.status === "First"
                      ? "border-zinc-500 bg-white text-zinc-950"
                      : "border-zinc-700 text-zinc-500"
                  )}
                >
                  {m.status}
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">{m.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
