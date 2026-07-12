import type { Metadata } from "next";
import { Inter, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://praticadesk.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pratica Desk — The AI Operations Desk for Modern Law Firms",
    template: "%s · Pratica Desk",
  },
  description:
    "Pratica Desk is an intelligence layer that reads across the tools your firm already uses and hands each attorney one evidence-backed brief every morning. AI assists. Attorneys decide.",
  keywords: [
    "legal AI",
    "law firm software",
    "AI operations desk",
    "morning brief",
    "legal operations",
    "workflow automation for law firms",
  ],
  authors: [{ name: "Pratica Desk" }],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Pratica Desk — The AI Operations Desk for Modern Law Firms",
    description:
      "One intelligent workspace. Every morning. Every matter. An intelligence layer on top of the tools your firm already uses.",
    url: siteUrl,
    siteName: "Pratica Desk",
    type: "website",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Pratica Desk" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratica Desk",
    description: "The AI Operations Desk for Modern Law Firms.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body className="min-h-screen font-sans">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
