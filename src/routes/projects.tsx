import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Bed, Bath, Car, Maximize, Check } from "lucide-react";
import villa from "@/assets/villa.jpg";
import simplex from "@/assets/simplex.jpg";
import streetView from "@/assets/street-view.jpg";
import archGate from "@/assets/arch-gate.jpg";
import layoutTop from "@/assets/layout-top.jpg.asset.json";
import archModel from "@/assets/arch-model.jpg.asset.json";

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
    title: "Duplex Villa",
    img: villa,
    site: "32 x 45 (3.3 Cents)",
    bhk: "3 BHK",
    bath: "3 Bath",
    car: "1 Car",
    rows: [
      ["Ground Floor", "965 Sq Ft"],
      ["First Floor", "965 Sq Ft"],
      ["Head Room", "90 Sq Ft"],
      ["Total Built Up", "2020 Sq Ft"],
    ],
    facing: "East and West Facing Available",
  },
  {
    title: "Simplex Villa",
    img: simplex,
    site: "32 x 45 (3.3 Cents)",
    bhk: "2 BHK",
    bath: "2 Bath",
    car: "1 Car",
    rows: [
      ["Ground Floor", "960 Sq Ft"],
      ["Head Room", "80 Sq Ft"],
      ["Total Built Up", "1040 Sq Ft"],
    ],
    facing: "East and West Facing Available",
  },
];

const specs = [
  { t: "RCC Framed Structure", d: "Earthquake resistant reinforced framework" },
  { t: "Quality Flooring and Finishes", d: "Premium tiles and polished interior surfaces" },
  { t: "Premium Doors and Windows", d: "Hardwood frames with sound insulation" },
  { t: "Modern Electrical and Plumbing Systems", d: "ISI certified fittings with concealed wiring" },
  { t: "Secure Gated Layout", d: "24 by 7 security with CCTV and boundary walls" },
  { t: "Contemporary Elevation", d: "Modern architectural design with premium finish" },
];

function Projects() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary py-20 text-primary-foreground md:py-24">
        <div className="absolute inset-0 -z-10 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url(${streetView})` }} />
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Our Projects</p>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">KSK Vishnu Kuteer</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base opacity-90 md:text-lg">
            A premium AHUDA approved gated villa community on Kalyandurgam Main Road Anantapur. Modern duplex and simplex homes designed for life.
          </p>
        </div>
      </section>

      {/* Project visuals */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-2 md:px-8">
        <img src={archModel.url} alt="Grand Entrance Arch" className="h-72 w-full rounded-2xl object-cover shadow-xl md:h-96" />
        <img src={layoutTop.url} alt="Project Layout Top View" className="h-72 w-full rounded-2xl object-cover shadow-xl md:h-96" />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <SectionHeading eyebrow="Configurations" title="Villa Plans Available" sub="Choose from two thoughtfully designed Vastu compliant villa formats." />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {configs.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-xl">
              <img src={c.img} alt={c.title} className="h-64 w-full object-cover md:h-72" />
              <div className="p-6 md:p-7">
                <h3 className="font-display text-2xl font-bold text-primary">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.facing}</p>
                <div className="mt-4 flex flex-wrap gap-4 border-y border-border py-3 text-sm">
                  <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-gold" /> {c.site}</span>
                  <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-gold" /> {c.bhk}</span>
                  <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold" /> {c.bath}</span>
                  <span className="flex items-center gap-1.5"><Car className="h-4 w-4 text-gold" /> {c.car}</span>
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

      {/* Premium Specifications */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <img src={archGate} alt="Vishnu Kuteer Villa" className="w-full rounded-2xl object-cover shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">What You Get</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
                Premium <span className="text-gold">Specifications</span>
              </h2>
              <div className="mt-3 h-[2px] w-16 bg-gold" />

              <div className="mt-8 space-y-4">
                {specs.map((s) => (
                  <div key={s.t} className="flex items-start gap-4 rounded-xl border border-gold/20 bg-[#1a1612] p-4 md:p-5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-black/30">
                      <Check className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold md:text-lg">{s.t}</h4>
                      <p className="mt-0.5 text-sm text-primary-foreground/70">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8">
        <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Ready to Walk Through Your Future Home</h2>
        <Link to="/contact" className="mt-6 inline-block rounded-full bg-gold px-8 py-3.5 font-semibold text-primary transition hover:scale-105">
          Schedule a Site Visit
        </Link>
      </section>
    </>
  );
}
