import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Bed, Bath, Car, Maximize, Compass } from "lucide-react";
import villa from "@/assets/villa.jpg";
import simplex from "@/assets/simplex.jpg";
import streetView from "@/assets/street-view.jpg";
import archGate from "@/assets/arch-gate.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Vishnu Kuteer Villas | Projects by JD Infra Developers" },
      { name: "description", content: "Explore Vishnu Kuteer premium duplex and simplex villas on Kalyandurg Road Anantapur." },
      { property: "og:title", content: "Vishnu Kuteer Villas | Projects" },
      { property: "og:description", content: "Premium duplex and simplex villas in Anantapur." },
      { property: "og:image", content: villa },
    ],
  }),
  component: Projects,
});

const configs = [
  {
    title: "East Facing Simplex",
    img: simplex,
    site: "32 x 45 (3.3 Cents)",
    spec: "2 BHK | 2 Bath | 1 Car",
    rows: [["Ground Floor", "960 Sq Ft"], ["Head Room", "80 Sq Ft"], ["Total Built Up", "1040 Sq Ft"]],
  },
  {
    title: "West Facing Simplex",
    img: simplex,
    site: "32 x 45 (3.3 Cents)",
    spec: "2 BHK | 2 Bath | 1 Car",
    rows: [["Ground Floor", "960 Sq Ft"], ["Head Room", "80 Sq Ft"], ["Total Built Up", "1040 Sq Ft"]],
  },
  {
    title: "East Facing Duplex",
    img: villa,
    site: "32 x 45 (3.3 Cents)",
    spec: "3 BHK | 3 Bath | 1 Car",
    rows: [["Ground Floor", "965 Sq Ft"], ["First Floor", "965 Sq Ft"], ["Head Room", "90 Sq Ft"], ["Total Built Up", "2020 Sq Ft"]],
  },
  {
    title: "West Facing Duplex",
    img: villa,
    site: "32 x 45 (3.3 Cents)",
    spec: "3 BHK | 3 Bath | 1 Car",
    rows: [["Ground Floor", "965 Sq Ft"], ["First Floor", "965 Sq Ft"], ["Head Room", "90 Sq Ft"], ["Total Built Up", "2020 Sq Ft"]],
  },
];

function Projects() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="absolute inset-0 -z-10 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url(${streetView})` }} />
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Our Projects</p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">KSK Vishnu Kuteer</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg opacity-90">
            A premium AHUDA approved gated villa community on Kalyandurgam Main Road Anantapur. Modern duplex and simplex homes designed for life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <SectionHeading eyebrow="Configurations" title="Villa Plans Available" sub="Choose from four thoughtfully designed Vastu compliant configurations." />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {configs.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-xl">
              <img src={c.img} alt={c.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-primary">{c.title}</h3>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Maximize className="h-4 w-4 text-gold" /> {c.site}</span>
                  <span className="flex items-center gap-1"><Compass className="h-4 w-4 text-gold" /> {c.spec.split(" | ")[0]}</span>
                </div>
                <div className="mt-4 flex gap-5 border-y border-border py-3 text-sm">
                  <span className="flex items-center gap-1"><Bed className="h-4 w-4 text-gold" /> {c.spec.split(" | ")[0]}</span>
                  <span className="flex items-center gap-1"><Bath className="h-4 w-4 text-gold" /> {c.spec.split(" | ")[1]}</span>
                  <span className="flex items-center gap-1"><Car className="h-4 w-4 text-gold" /> {c.spec.split(" | ")[2]}</span>
                </div>
                <dl className="mt-4 space-y-1.5">
                  {c.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="font-semibold text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <SectionHeading eyebrow="Specifications" title="Quality You Can Feel" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "RCC Framed Structure",
              "Quality Flooring and Finishes",
              "Premium Doors and Windows",
              "Modern Electrical and Plumbing Systems",
              "Secure Gated Layout",
              "Contemporary Elevation",
            ].map((s) => (
              <div key={s} className="rounded-lg border border-border bg-card p-5 font-medium">{s}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-2 md:px-8">
        <img src={archGate} alt="Grand Entrance Arch" className="rounded-2xl shadow-xl" />
        <img src={streetView} alt="Street View" className="rounded-2xl shadow-xl object-cover" />
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 text-center md:px-8">
        <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Ready to Walk Through Your Future Home</h2>
        <Link to="/contact" className="mt-6 inline-block rounded-full bg-gold px-8 py-3.5 font-semibold text-primary transition hover:scale-105">
          Schedule a Site Visit
        </Link>
      </section>
    </>
  );
}
