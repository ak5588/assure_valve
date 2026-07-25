import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Clients } from "@/components/site/Clients";
import { Testimonials } from "@/components/site/Testimonials";
import { Industries } from "@/components/site/Industries";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Industries — Assure Valve" },
      { name: "description", content: "Supplying precision components to global OEMs and Indian majors across power, oil & gas, valve manufacturing and heavy engineering." },
      { property: "og:title", content: "Clients & Industries — Assure Valve" },
      { property: "og:description", content: "Supplying precision components to global OEMs and Indian majors across power, oil & gas and heavy engineering." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        crumb="Clients"
        eyebrow="Clients & Industries"
        title="Trusted by global OEMs and Indian industrial majors."
        description="Long-term vendor relationships built on documentation, repeatability and on-time delivery — not lowest-cost promises."
      />
      <Clients />
      <Industries />
      <Testimonials />
    </PageShell>
  ),
});