import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { AiPhilosophy } from "@/components/ai-philosophy";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Legal AI",
  description:
    "Pratica Desk's AI philosophy: evidence-backed recommendations, human-in-the-loop review, attorney approval, and no autonomous legal advice.",
};

export default function LegalAiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal AI"
        title={
          <>
            AI assists.{" "}
            <span className="font-serif font-normal italic">Attorneys decide.</span>
          </>
        }
        lede="Pratica Desk is built around a simple constraint: the model organizes evidence and drafts options, and a licensed attorney makes every judgment call."
      />
      <AiPhilosophy />
      <CtaSection />
    </>
  );
}
