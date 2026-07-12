import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a conversation with the PraticaDesk team, or book time directly on Calendly.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about{" "}
            <span className="font-serif font-normal italic">your mornings.</span>
          </>
        }
        lede="We'd rather ask than pitch. Tell us how your firm runs, and we'll show you what a morning with PraticaDesk could look like."
      />
      <ContactForm />
    </>
  );
}
