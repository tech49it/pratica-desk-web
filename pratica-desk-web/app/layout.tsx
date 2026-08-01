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
    default: "PraticaDesk — the quiet inbox assistant for small law firms",
    template: "%s · PraticaDesk",
  },
  description:
    "PraticaDesk reviews your firm inbox, prepares a morning brief, flags unpaid-invoice follow-ups, and keeps a simple activity record — without storing client mail.",
  keywords: [
    "legal AI",
    "law firm inbox assistant",
    "morning brief",
    "legal operations",
    "small law firms",
  ],
  authors: [{ name: "PraticaDesk" }],
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
    title: "PraticaDesk — the quiet inbox assistant for small law firms",
    description:
      "Reviews your firm inbox, prepares a morning brief, flags unpaid-invoice follow-ups, and keeps a simple activity record — without storing client mail.",
    url: siteUrl,
    siteName: "PraticaDesk",
    type: "website",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PraticaDesk" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PraticaDesk",
    description: "The quiet inbox assistant for small law firms.",
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
