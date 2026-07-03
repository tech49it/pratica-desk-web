"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BriefMockup } from "@/components/brief-mockup";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(48_20%_100%),transparent)]" />
      </div>

      <div className="container flex flex-col items-center text-center">
        <motion.a
          {...rise(0)}
          href="#vision"
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[12.5px] text-muted-foreground shadow-sm transition-colors hover:text-foreground"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
            Concept preview
          </span>
          <span className="h-3 w-px bg-border" />
          Now in design with practicing attorneys
          <ArrowRight className="size-3" />
        </motion.a>

        <motion.h1
          {...rise(0.06)}
          className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-[68px]"
        >
          The AI Operations Platform for{" "}
          <span className="font-serif font-normal italic tracking-normal">
            modern law firms.
          </span>
        </motion.h1>

        <motion.p
          {...rise(0.14)}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Atrium CMD is an intelligence layer that reads across the tools your
          firm already uses — and hands each attorney one evidence-backed brief
          before the day begins.
        </motion.p>

        <motion.div {...rise(0.22)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#demo">
              Request a demo <ArrowRight className="size-4" />
            </a>
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
          Read-only by design · No client data used to train AI
        </motion.p>
      </div>

      {/* product mockup */}
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="container mt-16 sm:mt-20"
      >
        <div className="relative mx-auto max-w-4xl">
          <div className="pointer-events-none absolute -inset-x-10 -top-8 bottom-0 -z-10 bg-grid mask-fade-b opacity-40" />
          <BriefMockup />
        </div>
      </motion.div>
    </section>
  );
}
