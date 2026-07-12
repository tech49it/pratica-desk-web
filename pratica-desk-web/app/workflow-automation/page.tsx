import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { AutomationCapabilities } from "@/components/automation-capabilities";
import { Integrations } from "@/components/integrations";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Workflow Automation",
  description:
    "Intake automation, inbox intelligence, document workflows, task routing, and follow-up workflows — every step ending in an attorney approval gate.",
};

export default function WorkflowAutomationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Workflow Automation"
        title={
          <>
            Routine work, proposed —{" "}
            <span className="font-serif font-normal italic">never executed alone.</span>
          </>
        }
        lede="Pratica Desk automates the repetitive steps around a matter, not the judgment calls. Every workflow ends at the same gate: an attorney's approval."
      />
      <AutomationCapabilities />
      <Integrations />
      <CtaSection />
    </>
  );
}
