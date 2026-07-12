import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, lede, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
      </div>

      <div className="container flex flex-col items-center pb-16 text-center sm:pb-20">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-3">
            <span className="h-px w-8 bg-muted-foreground/40" />
            {eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.06} className="mt-5">
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[56px]">
            {title}
          </h1>
        </Reveal>

        {lede ? (
          <Reveal delay={0.12} className="mt-5 max-w-2xl">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {lede}
            </p>
          </Reveal>
        ) : null}

        {children ? (
          <Reveal delay={0.18} className="mt-8">
            {children}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
