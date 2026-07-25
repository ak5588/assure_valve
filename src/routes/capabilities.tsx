import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Capabilities } from "@/components/site/Capabilities";
import { Process } from "@/components/site/Process";
import { Industries } from "@/components/site/Industries";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — CNC Turning, VMC, Welding & Fabrication | Assure Valve" },
      { name: "description", content: "End-to-end precision manufacturing: CNC turning, VMC machining, stellite & TIG welding, fabrication and valve/turbine component production." },
      { property: "og:title", content: "Manufacturing Capabilities — Assure Valve" },
      { property: "og:description", content: "CNC turning, VMC machining, stellite & TIG welding, fabrication and valve/turbine component production." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        crumb="Capabilities"
        eyebrow="What We Do"
        title="End-to-end precision manufacturing under one roof."
        description="From bar stock to finished, inspected components — CNC turning, VMC machining, specialist welding and fabrication engineered for critical valve and turbine applications."
      />
      <Capabilities />
      <Process />
      <Industries />
    </PageShell>
  ),
});