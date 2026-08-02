import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — PraticaDesk",
};

export default function TermsPage() {
  return (
    <main className="py-24 sm:py-28">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026</p>
        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            These terms are an agreement between you and Crastu LLC, a California limited
            liability company (&quot;PraticaDesk,&quot; &quot;we,&quot; &quot;us&quot;),
            governing your use of the PraticaDesk website and, where applicable, any
            evaluation or pilot of the PraticaDesk service.
          </p>
          <p>
            <strong className="text-foreground">Evaluations and pilots.</strong> Access to
            the PraticaDesk service is provided only under a signed agreement between your
            firm and Crastu LLC, which begins with a mutual non-disclosure agreement. Where
            those signed agreements conflict with these terms, the signed agreements govern.
          </p>
          <p>
            <strong className="text-foreground">Payments.</strong> All fees are invoiced by
            and payable to Crastu LLC, under the payment terms stated in your agreement or
            invoice.
          </p>
          <p>
            <strong className="text-foreground">No warranty.</strong> The website and any
            evaluation software are provided &quot;as is,&quot; without warranty of any
            kind. Nothing on this site is legal advice, and PraticaDesk does not make
            compliance or ethics determinations for your firm.
          </p>
          <p>
            <strong className="text-foreground">Limitation of liability.</strong> To the
            maximum extent permitted by law, Crastu LLC&apos;s aggregate liability arising
            from use of this website or any evaluation is limited to the amounts paid to
            Crastu LLC for the service in the twelve months preceding the claim.
          </p>
          <p>
            <strong className="text-foreground">Intellectual property.</strong> PraticaDesk,
            the PraticaDesk software, and this site are the property of Crastu LLC.
          </p>
          <p>
            <strong className="text-foreground">Governing law.</strong> These terms are
            governed by the laws of the State of California.
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
