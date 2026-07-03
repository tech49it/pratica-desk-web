import { AtriumMark } from "@/components/logo";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Security", href: "#security" },
      { label: "Integrations", href: "#integrations" },
      { label: "Vision", href: "#vision" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Request a demo", href: "#demo" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: "#demo" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="dark-section border-t border-zinc-800">
      <div className="container py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2.5 text-white">
              <AtriumMark />
              <span className="text-[17px] font-semibold tracking-tight">Atrium CMD</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              The AI Operations Platform for modern law firms. One intelligent
              workspace — every morning, every matter.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-zinc-500">
            © {new Date().getFullYear()} Atrium CMD · Concept preview for firm feedback
          </p>
          <p className="text-[11px] text-zinc-600">
            Sample firm and matter data shown is fictional.
          </p>
        </div>
      </div>
    </footer>
  );
}
