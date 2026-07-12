import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaSection() {
  return (
    <section className="scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <Reveal className="flex flex-col items-center rounded-2xl border border-border bg-card px-8 py-14 text-center shadow-sm sm:py-16">
          <p className="eyebrow">AI assists. Attorneys decide.</p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
            Let&apos;s see what a morning could look like{" "}
            <span className="font-serif font-normal italic">at your firm.</span>
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            A short conversation, on your terms — no commitment, no pitch deck.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Request a demo <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:hello@crastu.com">Email us</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
