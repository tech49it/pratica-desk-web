# PraticaDesk — Landing Page

A production-ready marketing site for **PraticaDesk**, the quiet inbox assistant for small law firms
for modern law firms. Built with Next.js 15 (App Router), TypeScript, Tailwind
CSS, shadcn/ui, and Framer Motion. Design language: monochrome-premium,
inspired by Linear, Vercel, and Stripe.

## Stack

- **Next.js 15** · App Router, React 19, route handlers
- **TypeScript** · strict mode
- **Tailwind CSS** · design tokens via CSS variables
- **shadcn/ui** · Button, Card, Input, Textarea, Label, Badge (new-york style)
- **Framer Motion** · scroll reveals + hero entrance (respects `prefers-reduced-motion`)
- **next/font** · Inter (UI), Instrument Serif (display), IBM Plex Mono (labels/evidence)
- **lucide-react** · icons

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Build & run production locally:

```bash
npm run build
npm start
```

> `next/font` downloads the Google fonts at build time, so the build needs
> network access (Vercel provides this automatically).

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects
   Next.js. No configuration needed.
3. Deploy. That's it.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## The demo form

`components/demo-form.tsx` POSTs to `app/api/demo/route.ts`, which validates the
payload and returns `{ ok: true }`. To actually deliver leads, wire the handler
to your CRM / email provider and read the destination from an env var:

```ts
// app/api/demo/route.ts
const hook = process.env.DEMO_WEBHOOK_URL;
if (hook) await fetch(hook, { method: "POST", body: JSON.stringify(data) });
```

Set `DEMO_WEBHOOK_URL` (e.g. a Slack incoming webhook, or a Resend/HubSpot
endpoint) in Vercel → Project → Settings → Environment Variables.

## Structure

```
app/
  layout.tsx          # fonts + SEO metadata
  page.tsx            # composes the sections
  globals.css         # design tokens + utilities
  api/demo/route.ts   # demo request handler
components/
  site-header.tsx     # sticky, scroll-aware nav
  hero.tsx            # animated hero + product mockup
  brief-mockup.tsx    # the Morning Brief product visual
  features.tsx        # bento feature grid
  security.tsx        # security principles + no-training callout
  integrations.tsx    # integration wordmarks + read-only diagram
  vision.tsx          # dark roadmap section
  demo-form.tsx       # request-a-demo form (client)
  site-footer.tsx     # dark footer
  reveal.tsx          # Framer Motion scroll-reveal wrapper
  section-heading.tsx # eyebrow + title + lede
  logo.tsx            # PraticaDesk monogram + wordmark
  ui/                 # shadcn primitives
lib/
  utils.ts            # cn()
```

## Design notes

- **Monochrome by choice.** Black, white, and warm neutrals only — the palette
  Linear/Vercel/Stripe reach for. Personality comes from the Instrument Serif
  italic accents and the mono "evidence" labels, not from color.
- **The evidence motif.** Every product surface shows *why* something appeared —
  the same trust idea that defines the product, carried into the marketing.
- **Accessible floor.** Semantic landmarks, keyboard-focus rings, reduced-motion
  support, responsive down to mobile.

## Sample data

All firm, attorney, and matter names shown (Marsh & Cole LLP, Nomad Robotics,
etc.) are fictional, for demonstration.
