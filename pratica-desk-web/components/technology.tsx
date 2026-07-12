import { SectionHeading } from "@/components/section-heading";

export function Technology() {
  return (
    <section id="technology" className="scroll-mt-24 border-t border-border/60 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Technology"
          title={
            <>
              Built on infrastructure{" "}
              <span className="font-serif font-normal italic">firms can trust.</span>
            </>
          }
          lede="Runs on Google Cloud with Anthropic Claude. No client mail is stored. Full subprocessor list on request."
        />
      </div>
    </section>
  );
}
