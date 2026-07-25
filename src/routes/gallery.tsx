import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Gallery } from "@/components/site/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside the Shop Floor | Assure Valve" },
      { name: "description", content: "A closer look at our CNC turning bays, welding stations and finished valve & turbine components." },
      { property: "og:title", content: "Gallery — Assure Valve" },
      { property: "og:description", content: "A closer look at our CNC turning bays, welding stations and finished components." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        crumb="Gallery"
        eyebrow="Inside The Facility"
        title="A closer look at the shop floor."
        description="Modern CNC infrastructure, disciplined workflow and skilled engineers — engineered for repeatable quality."
      />
      <Gallery />
    </PageShell>
  ),
});