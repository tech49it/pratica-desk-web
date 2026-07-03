"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

type Status = "idle" | "submitting" | "success" | "error";

export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Please try again.");
    }
  }

  return (
    <section id="demo" className="scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Request a demo"
            title={
              <>
                We&apos;d rather{" "}
                <span className="font-serif font-normal italic">ask than pitch.</span>
              </>
            }
            lede="Atrium CMD is being designed with direct feedback from practicing attorneys. Tell us how your firm runs, and we'll show you what a morning could look like."
          />
          <ul className="mt-8 space-y-3 text-[14.5px] text-muted-foreground">
            {[
              "A 20-minute walkthrough, tailored to your practice area",
              "No commitment — your feedback shapes the roadmap",
              "See exactly how evidence and approvals work",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-foreground" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-8">
            {status === "success" ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary/60">
                  <CheckCircle2 className="size-6" />
                </div>
                <h3 className="mt-5 font-serif text-2xl">Thank you.</h3>
                <p className="mt-2 max-w-xs text-[14.5px] text-muted-foreground">
                  Your request is in. We&apos;ll be in touch shortly to find a time
                  that works.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setStatus("idle")}
                >
                  Submit another response
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" placeholder="Elena Marsh" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firm">Firm</Label>
                    <Input id="firm" name="firm" placeholder="Marsh & Cole LLP" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="elena@marshcole.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    What&apos;s your biggest daily workflow frustration?{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a little about how your mornings go…"
                  />
                </div>

                {status === "error" && error ? (
                  <p className="text-sm text-destructive">{error}</p>
                ) : null}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Request a demo <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
                <p className="text-center text-[12px] text-muted-foreground">
                  We&apos;ll only use your details to arrange the demo. No spam.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
