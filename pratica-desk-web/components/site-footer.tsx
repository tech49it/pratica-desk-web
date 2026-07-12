import Link from "next/link";

import { PraticaDeskMark } from "@/components/logo";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Legal AI", href: "/legal-ai" },
      { label: "Roadmap", href: "/#roadmap" },
      { label: "Security", href: "/#security" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case studies", href: "/#case-studies" },
      { label: "Contact", href: "/contact" },
      { label: "Request a demo", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="dark-section border-t border-zinc-800">
      <div className="container py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2.5 text-white">
              <PraticaDeskMark />
              <span className="text-[17px] font-semibold tracking-tight">PraticaDesk</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              The quiet inbox assistant for small law firms. AI assists.
              Attorneys decide.
            </p>
            <a
              href="mailto:hello@crastu.com"
              className="mt-4 inline-block text-sm text-zinc-400 transition-colors hover:text-white"
            >
              hello@crastu.com
            </a>
            <div className="mt-5 inline-flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element -- static footer credit, intentionally plain <img> */}
              <img src="/logo/crastu.png" alt="Crastu LLC" height={20} className="rounded-sm" />
              <span className="text-[12px] text-zinc-500">PraticaDesk is a product of Crastu LLC.</span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-zinc-500">
            © {new Date().getFullYear()} PraticaDesk
          </p>
          <p className="text-[11px] text-zinc-600">
            Sample firm and matter data shown is fictional.
          </p>
        </div>
      </div>
    </footer>
  );
}
