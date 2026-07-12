import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { SolutionsOverview } from "@/components/solutions-overview";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "How Pratica Desk supports boutique, personal injury, immigration, corporate, litigation, and legal operations teams.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title={
          <>
            Built for how your practice{" "}
            <span className="font-serif font-normal italic">actually runs.</span>
          </>
        }
        lede="Every practice area accumulates its own version of the same problem — too much to track, not enough time to track it. Pratica Desk adapts to how your firm already works."
      />
      <SolutionsOverview />
      <CtaSection />
    </>
  );
}
