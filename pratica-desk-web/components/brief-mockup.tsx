import { cn } from "@/lib/utils";

function Dot() {
  return <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />;
}

function Evidence({ items }: { items: string[] }) {
  return (
    <div className="evidence mt-2.5">
      <span className="mb-1.5 block font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
        Why this surfaced
      </span>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it} className="flex gap-1.5 font-mono text-[11px] leading-snug text-muted-foreground">
            <span className="text-zinc-300">—</span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Rec({
  title,
  sub,
  tag,
  evidence,
}: {
  title: string;
  sub: string;
  tag: string;
  evidence: string[];
}) {
  return (
    <div className="rounded-xl border border-border/70 bg-card p-3.5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[13px] font-semibold tracking-tight">{title}</p>
          <p className="mt-0.5 text-[11.5px] text-muted-foreground">{sub}</p>
        </div>
        <span className="shrink-0 rounded-md border border-border px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground">
          {tag}
        </span>
      </div>
      <Evidence items={evidence} />
    </div>
  );
}

export function BriefMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/[0.08]",
        className
      )}
    >
      {/* chrome */}
      <div className="flex items-center gap-2 border-b border-border/70 bg-secondary/60 px-4 py-3">
        <Dot />
        <Dot />
        <Dot />
        <span className="ml-3 font-mono text-[11px] text-muted-foreground">
          pratica.desk — Morning Brief
        </span>
      </div>

      <div className="grid grid-cols-[190px_1fr] max-sm:grid-cols-1">
        {/* sidebar */}
        <aside className="border-r border-border/70 bg-secondary/40 p-4 max-sm:hidden">
          <div className="flex items-center gap-2 border-b border-border/60 pb-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-[11px] font-semibold text-primary-foreground">
              EM
            </span>
            <div className="leading-tight">
              <p className="text-[12px] font-semibold">Elena Marsh</p>
              <p className="text-[10px] text-muted-foreground">Marsh &amp; Cole LLP</p>
            </div>
          </div>
          <nav className="mt-3 space-y-0.5 text-[12.5px]">
            <p className="rounded-md border border-border/60 bg-card px-2.5 py-1.5 font-medium shadow-sm">
              Morning Brief
            </p>
            {["Inbox", "Matters", "Calendar"].map((n) => (
              <p key={n} className="px-2.5 py-1.5 text-muted-foreground">
                {n}
              </p>
            ))}
          </nav>
        </aside>

        {/* main */}
        <div className="p-5">
          <div className="mb-1 flex items-baseline justify-between">
            <p className="font-serif text-xl">Good morning, Elena</p>
            <p className="font-mono text-[11px] text-muted-foreground">
              Thu · 18 Jun · 7:00 AM
            </p>
          </div>
          <p className="mb-4 text-[11.5px] text-muted-foreground">
            Nothing here is acted on automatically. Every item links to its source.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <Rec
              title="Client waiting · Nomad Robotics"
              sub="Daniel Osei · term-sheet question"
              tag="Waiting"
              evidence={["Inbound Tue, no reply detected", "Matter marked high priority"]}
            />
            <Rec
              title="Possible deadline · Vertex Labs"
              sub="Discovery responses · Fri 26 Jun"
              tag="Review"
              evidence={["Date parsed from scheduling order", "Unconfirmed — needs your review"]}
            />
            <Rec
              title="Priority email · Sterling Freight"
              sub="Opposing counsel · confirm dates"
              tag="Decision"
              evidence={["Direct question detected", "Reply expected before 9:00 prep"]}
            />
            <Rec
              title="Stale matter · Ramirez"
              sub="No activity in 21 days"
              tag="Nudge"
              evidence={["Last activity 28 May · still active", "Threshold is 14 days"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
