import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle2 } from "lucide-react";
import villa from "@/assets/villa.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JD Infra Developers | Premium Real Estate Anantapur" },
      { name: "description", content: "JD Infra Developers is a forward thinking real estate company in Anantapur building premium villa communities." },
      { property: "og:title", content: "About JD Infra Developers" },
      { property: "og:description", content: "Premium real estate developers in Anantapur." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="absolute inset-0 -z-10 opacity-30 bg-cover bg-center" style={{ backgroundImage: `url(${villa})` }} />
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">About Us</p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">Building Trust. Crafting Homes.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg opacity-90">
            JD Infra Developers is a forward thinking real estate and infrastructure company based in Anantapur dedicated to delivering high quality residential developments.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <SectionHeading eyebrow="Company Overview" title="Who We Are" />
        <p className="mt-8 text-center text-lg leading-relaxed text-muted-foreground">
          With a focus on strategic locations and modern design, we create properties that offer both lifestyle value and long term investment growth. Every Vishnu Kuteer villa reflects our commitment to quality, transparency and customer satisfaction.
        </p>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-8">
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Vision</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-primary">Our Vision</h3>
            <p className="mt-4 text-muted-foreground">
              To establish JD Infra Developers as a leading premium real estate brand in Anantapur and beyond.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Mission</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-primary">Our Mission</h3>
            <ul className="mt-4 space-y-2">
              {[
                "Deliver quality driven developments",
                "Maintain transparency in every transaction",
                "Provide value based investment opportunities",
                "Ensure complete customer satisfaction",
              ].map((m) => (
                <li key={m} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" /> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="rounded-3xl border border-gold/30 bg-accent/40 p-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Management Message</p>
          <blockquote className="mt-4 font-display text-2xl italic leading-relaxed text-primary md:text-3xl">
            At JD Infra Developers we believe every home we build is a commitment to quality trust and future growth. Vishnu Kuteer reflects our vision of delivering premium living at accessible pricing.
          </blockquote>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <SectionHeading title="Why JD Infra Developers" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Strategically Located Projects",
              "Premium Yet Affordable Developments",
              "Transparent Documentation",
              "Customer Centric Approach",
              "End to End Support",
              "AHUDA Approved Project",
            ].map((w) => (
              <div key={w} className="rounded-lg border border-border bg-card p-6">
                <CheckCircle2 className="h-6 w-6 text-gold" />
                <h4 className="mt-3 font-display text-lg font-bold text-primary">{w}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
