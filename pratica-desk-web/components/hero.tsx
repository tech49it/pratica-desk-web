"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(48_20%_100%),transparent)]" />
      </div>

      <div className="container flex flex-col items-center text-center">
        <motion.a
          {...rise(0)}
          href="#roadmap"
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[12.5px] text-muted-foreground shadow-sm transition-colors hover:text-foreground"
        >
          Confidential inbox triage for small law firms.
          <ArrowRight className="size-3" />
        </motion.a>

        <motion.h1
          {...rise(0.06)}
          className="max-w-4xl text-balance text-6xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-[72px]"
        >
          PraticaDesk
        </motion.h1>

        <motion.p
          {...rise(0.1)}
          className="mt-5 max-w-2xl text-balance text-2xl leading-snug sm:text-3xl"
        >
          <span className="font-serif font-normal italic">
            The quiet inbox assistant for small law firms.
          </span>
        </motion.p>

        <motion.p
          {...rise(0.16)}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          PraticaDesk reviews your firm inbox, prepares a morning brief, flags
          unpaid-invoice follow-ups, and keeps a simple activity record — without
          storing client mail.
        </motion.p>

        <motion.div {...rise(0.22)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/contact">
              Request a demo <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#features">See how it works</a>
          </Button>
        </motion.div>

        <motion.p
          {...rise(0.28)}
          className="mt-5 flex items-center gap-2 text-[13px] text-muted-foreground"
        >
          <ShieldCheck className="size-4" />
          Read-only by design · No email bodies stored · No client data
          trains AI · Mutual NDA before any access · Revocable in one click
        </motion.p>
      </div>
    </section>
  );
}
