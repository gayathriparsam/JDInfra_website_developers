import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MapPin, Home, TrendingUp, Shield, Sparkles } from "lucide-react";
import villa from "@/assets/villa.jpg";
import simplex from "@/assets/simplex.jpg";
import streetView from "@/assets/street-view.jpg";
import archGate from "@/assets/arch-gate.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishnu Kuteer Villas in Kalyandurg Road | JD Infra Developers" },
      { name: "description", content: "Discover premium AHUDA approved villas on Kalyandurg Road Anantapur. Elegant modern living at a budget friendly price." },
      { property: "og:title", content: "Vishnu Kuteer Villas | JD Infra Developers" },
      { property: "og:description", content: "Premium AHUDA approved villas on Kalyandurg Road Anantapur." },
      { property: "og:image", content: villa },
    ],
  }),
  component: Home,
});

const highlights = [
  "Premium Duplex and Simplex Villas",
  "East West and North Facing Options",
  "2 BHK and 3 BHK Configurations",
  "Approx 2000 Sqft Duplex Villas",
  "Vastu Compliant Planning",
  "Contemporary Elevation Design",
];

const features = [
  "Grand Entrance Arch",
  "CC Internal Roads",
  "Underground Drainage System",
  "Avenue Plantation",
  "Underground Electrification",
  "Panchayat Water Supply",
  "Overhead Water Tank",
  "Children Play Area",
  "Solar Fencing and Street Lights",
  "Rainwater Harvesting",
  "24x7 CCTV Surveillance",
  "Tiles for Pavement",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: `url(${villa})` }}
        />
        <div className="absolute inset-0 -z-10 gradient-hero" />
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 text-primary-foreground md:px-8">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            JD Infra Developers • Anantapur
          </p>
          <h1 className="mt-4 max-w-4xl animate-fade-up font-display text-5xl font-bold leading-tight md:text-7xl">
            Vishnu Kuteer
            <span className="block text-gold">Premium Villas in Kalyandurg Road</span>
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-up text-lg text-white/85 md:text-xl">
            Elegant living at a budget friendly price. Modern design. Prime location. Future ready investment.
          </p>
          <blockquote className="mt-6 max-w-2xl animate-fade-up border-l-2 border-gold pl-4 font-display text-lg italic text-white/90">
            True luxury is not about price. It is about the lifestyle you create.
          </blockquote>
          <div className="mt-10 flex animate-fade-up flex-wrap gap-4">
            <a href="tel:+919642166456" className="rounded-full bg-gold px-7 py-3.5 font-semibold text-primary shadow-lg transition hover:scale-105">
              Book a Call
            </a>
            <a href="https://wa.me/919642166456" target="_blank" rel="noreferrer" className="rounded-full border-2 border-white/70 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-primary">
              WhatsApp Now
            </a>
            <Link to="/contact" className="rounded-full border-2 border-gold px-7 py-3.5 font-semibold text-gold transition hover:bg-gold hover:text-primary">
              Schedule Site Visit
            </Link>
          </div>
        </div>

        {/* AHUDA Badge */}
        <div className="absolute right-4 top-24 hidden animate-float-slow rounded-full border-2 border-gold bg-primary/80 px-5 py-3 text-center text-primary-foreground backdrop-blur md:block">
          <div className="text-xs uppercase tracking-widest text-gold">Exclusive</div>
          <div className="font-display text-base font-bold">AHUDA Approved</div>
          <div className="text-[10px] opacity-80">Site and House</div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:px-8">
          {[
            { t: "Premium Villa", s: "Development" },
            { t: "Prime Location", s: "Kalyandurg Road" },
            { t: "Budget Friendly", s: "Pricing" },
            { t: "Modern Living", s: "Designed for You" },
          ].map((b) => (
            <div key={b.t} className="text-center">
              <div className="font-display text-lg font-bold text-gold md:text-xl">{b.t}</div>
              <div className="text-sm opacity-80">{b.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AHUDA HIGHLIGHT */}
      <section className="bg-accent">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center md:flex-row md:px-8 md:text-left">
          <Shield className="h-14 w-14 flex-shrink-0 text-gold" />
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold text-primary md:text-3xl">
              The one and only AHUDA approved project on Kalyandurgam Road
            </h3>
            <p className="mt-2 text-muted-foreground">
              Both the site and houses carry full AHUDA approvals. A rare assurance of legal clarity and long term value.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">About the Project</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">Vishnu Kuteer</h2>
            <div className="mt-4 h-[2px] w-16 bg-gold" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A thoughtfully crafted premium villa community by JD Infra Developers, located on the fast developing Kalyandurg Road in Anantapur.
            </p>
            <p className="mt-4 text-muted-foreground">
              Designed for families and investors alike, this project blends elegant architecture, smart layouts and modern infrastructure to deliver a refined lifestyle at an accessible price.
            </p>
            <blockquote className="mt-6 border-l-2 border-gold pl-4 font-display italic text-primary">
              Luxury becomes meaningful when it is within reach.
            </blockquote>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[["2 and 3", "BHK"], ["2000", "Sqft"], ["100%", "Vastu"], ["3", "Facings"]].map(([n, l]) => (
                <div key={l} className="rounded-lg border border-border bg-card p-4 text-center">
                  <div className="font-display text-2xl font-bold text-primary">{n}</div>
                  <div className="text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={villa} alt="Vishnu Kuteer East Facing Villa" className="rounded-2xl shadow-2xl" />
            <div className="absolute bottom-4 right-4 rounded-lg bg-primary px-4 py-3 text-primary-foreground shadow-xl">
              <div className="text-xs uppercase tracking-wider text-gold">AHUDA</div>
              <div className="font-display font-bold">Approved Project</div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Villa Highlights" title="Designed for Modern Living" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 transition hover:border-gold hover:shadow-md">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                <span className="font-medium text-foreground">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img src={archGate} alt="Grand Entrance Arch" className="rounded-2xl shadow-xl" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Project Features</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">Premium Infrastructure</h2>
            <div className="mt-4 h-[2px] w-16 bg-gold" />
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <Sparkles className="h-4 w-4 flex-shrink-0 text-gold" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STREET VIEW */}
      <section className="relative isolate overflow-hidden">
        <img src={streetView} alt="Vishnu Kuteer Street View" className="h-[55vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-12 text-primary-foreground md:px-8">
          <h3 className="font-display text-3xl font-bold md:text-5xl">A Community Built on Trust</h3>
          <p className="mt-3 max-w-2xl text-lg opacity-90">
            Gated layout. Solar street lights. CCTV surveillance. Peace of mind by design.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="Why Vishnu Kuteer" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { i: Home, t: "Premium Lifestyle", d: "At a genuinely budget friendly price." },
              { i: TrendingUp, t: "Rapid Growth Corridor", d: "Kalyandurg Road is rapidly developing." },
              { i: Shield, t: "Secure Gated Community", d: "24x7 CCTV and solar fencing for safety." },
              { i: MapPin, t: "Ideal for Investors", d: "High appreciation in an emerging zone." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6 transition hover:border-gold hover:shadow-lg">
                <Icon className="h-10 w-10 text-gold" />
                <h3 className="mt-4 font-display text-xl font-bold text-primary">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center md:px-8">
        <h2 className="font-display text-4xl font-bold text-primary md:text-5xl">
          Own Your Premium Villa in Kalyandurg Road Today
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Book a personal site visit and explore the only AHUDA approved villa community on Kalyandurgam Road.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="tel:+919642166456" className="rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary/90">Call Now</a>
          <a href="https://wa.me/919642166456" target="_blank" rel="noreferrer" className="rounded-full bg-gold px-8 py-3.5 font-semibold text-primary transition hover:scale-105">WhatsApp</a>
          <Link to="/contact" className="rounded-full border-2 border-primary px-8 py-3.5 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">Book Visit</Link>
        </div>
      </section>
    </>
  );
}
