import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Security } from "@/components/security";
import { Integrations } from "@/components/integrations";
import { Vision } from "@/components/vision";
import { DemoForm } from "@/components/demo-form";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Security />
        <Integrations />
        <Vision />
        <DemoForm />
      </main>
      <SiteFooter />
    </>
  );
}
