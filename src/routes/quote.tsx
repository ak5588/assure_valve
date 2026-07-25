import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { RFQ } from "@/components/site/RFQ";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request A Quote — 24-Hour Response | Assure Valve" },
      { name: "description", content: "Share your drawing, sample or specification — our engineering team responds with feasibility, materials and pricing within one working day." },
      { property: "og:title", content: "Request A Quote — Assure Valve" },
      { property: "og:description", content: "Share your drawing, sample or specification — response within one working day." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        crumb="Request Quote"
        eyebrow="Request For Quotation"
        title="Send us your drawing. Get a response in 24 hours."
        description="Upload a drawing, sample specification or component enquiry. Our engineering team reviews feasibility, materials and pricing — and responds the next working day."
      />
      <RFQ />
    </PageShell>
  ),
});