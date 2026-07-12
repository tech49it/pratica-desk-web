"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, CalendarDays, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/reveal";

type Status = "idle" | "submitting" | "success" | "error";

const CALENDLY_URL = "https://calendly.com/atriumcmd/demo";
const CONTACT_EMAIL = "hello@crastu.com";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // No server-side mailer is wired yet, so hand the submission off to the
    // visitor's mail client addressed to CONTACT_EMAIL. This guarantees a lead
    // is never silently dropped (posting to /api/contact only console.logs it).
    const subject = `Pratica Desk inquiry — ${data.name || "New lead"}${
      data.company ? ` (${data.company})` : ""
    }`;
    const body = [
      `Name: ${data.name || ""}`,
      `Firm / Company: ${data.company || ""}`,
      `Email: ${data.email || ""}`,
      `Role: ${data.role || ""}`,
      "",
      data.message || "",
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus("success");
    form.reset();
  }

  return (
    <section className="border-t border-border/60 py-24 sm:py-28">
      <div className="container grid gap-14 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="eyebrow">Request a conversation</p>
          <h2 className="mt-4 max-w-md text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
            Tell us about your firm — we&apos;ll show you a morning.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Pratica Desk is being designed with direct feedback from practicing
            attorneys. There&apos;s no pitch deck — just a conversation about how
            your firm runs today.
          </p>

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

          <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              <CalendarDays className="size-4" />
              Book a time on Calendly
            </a>
            <span className="hidden h-4 w-px bg-border sm:inline-block" />
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              <Mail className="size-4" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-8">
            {status === "success" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
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
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Elena Marsh" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Firm / Company</Label>
                    <Input id="company" name="company" placeholder="Marsh & Cole LLP" required />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="elena@marshcole.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" name="role" placeholder="Managing Partner" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-muted-foreground">(optional)</span>
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
                      Request a conversation <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
                <p className="text-center text-[12px] text-muted-foreground">
                  We&apos;ll only use your details to arrange a conversation. No spam.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
