import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { ProductOverview } from "@/components/product-overview";
import { MorningBrief } from "@/components/morning-brief";
import { Features } from "@/components/features";
import { Security } from "@/components/security";
import { Integrations } from "@/components/integrations";
import { Vision } from "@/components/vision";
import { CaseStudies } from "@/components/case-studies";
import { Technology } from "@/components/technology";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <ProductOverview />
      <MorningBrief />
      <Features />
      <Security />
      <Integrations />
      <Vision />
      <CaseStudies />
      <Technology />
      <CtaSection />
    </>
  );
}
