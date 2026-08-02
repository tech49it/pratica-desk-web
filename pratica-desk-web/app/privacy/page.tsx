import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PraticaDesk",
};

export default function PrivacyPage() {
  return (
    <main className="py-24 sm:py-28">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>
        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Crastu LLC, a California limited liability company, is the data controller for
            information collected through this website and the PraticaDesk service.
          </p>
          <p>
            <strong className="text-foreground">What we collect on this site.</strong> If
            you contact us or request a demo, we collect the details you provide — name,
            firm, email, role, and your message. We use them to respond and to arrange the
            conversation you requested. We do not sell personal information, and we do not
            use it for advertising.
          </p>
          <p>
            <strong className="text-foreground">Client email content.</strong> During an
            evaluation or pilot, PraticaDesk reads firm email solely to classify and route
            it. Email message bodies are not stored: what persists is a filing record —
            sender, subject, time, and which rule fired — in a workspace your firm owns.
            Access runs on authorization your firm grants and can revoke at any time.
          </p>
          <p>
            <strong className="text-foreground">Service providers.</strong> The written
            list of services involved in delivering PraticaDesk is disclosed to each firm
            before any evaluation, and restated in the pilot agreement and mutual NDA,
            which govern.
          </p>
          <p>
            <strong className="text-foreground">Retention and deletion.</strong> Upon
            revocation or termination of an evaluation, Crastu LLC ceases access and
            deletes firm data in its possession, as set out in the governing agreements.
          </p>
          <p>
            <strong className="text-foreground">Contact.</strong> Crastu LLC &middot;
            hello@crastu.com
          </p>
        </div>
      </div>
    </main>
  );
}
