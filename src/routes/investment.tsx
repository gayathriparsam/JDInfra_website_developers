import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Home, DollarSign, Lock } from "lucide-react";
import streetView from "@/assets/street-view.jpg";
import locationGrowth from "@/assets/location-growth.svg.asset.json";
import appreciation from "@/assets/appreciation.svg.asset.json";

export const Route = createFileRoute("/investment")({
  head: () => ({
    meta: [
      { title: "Investment Advantage | Vishnu Kuteer Kalyandurg Road" },
      { name: "description", content: "Discover why Vishnu Kuteer villas on Kalyandurg Road offer strong appreciation and a smart long term investment in Anantapur." },
      { property: "og:title", content: "Investment Advantage | JD Infra Developers" },
      { property: "og:description", content: "Smart investment in Anantapur premium villas." },
    ],
  }),
  component: Investment,
});

const bigReasons = [
  {
    n: "01",
    img: locationGrowth.url,
    title: "Location Driven Growth",
    desc: "Kalyandurg Road is rapidly emerging as a key residential corridor in Anantapur district.",
    points: ["A residential expansion zone", "A connectivity hub", "A future growth corridor"],
  },
  {
    n: "02",
    img: appreciation.url,
    title: "High Appreciation Potential",
    desc: "Early movers consistently gain the highest returns as a zone transitions from emerging to established.",
    points: ["Early stage pricing advantage", "Increasing demand for villas", "Strategic infrastructure growth"],
  },
];

const smallReasons = [
  {
    n: "03",
    icon: Home,
    title: "Lifestyle Plus Investment",
    points: ["Premium living environment", "Secure gated community", "Long term asset value"],
  },
  {
    n: "04",
    icon: DollarSign,
    title: "Budget Plus Premium Advantage",
    points: ["Affordable entry price", "Premium villa experience", "Better ROI than apartments"],
  },
  {
    n: "05",
    icon: Lock,
    title: "Safe Investment",
    points: ["Clear documentation", "AHUDA approved layout", "Trusted developer"],
  },
];

function Investment() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary py-20 text-primary-foreground md:py-24">
        <div className="absolute inset-0 -z-10 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${streetView})` }} />
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Investment Advantage</p>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">A Premium Asset in a Growth Corridor</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base opacity-90 md:text-lg">
            Investing in Vishnu Kuteer is more than buying a home. It is securing a premium asset in one of Anantapur fastest growing residential zones.
          </p>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">5 Compelling Reasons</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              Why Invest in <span className="text-gold">Vishnu Kuteer</span>
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-16 bg-gold" />
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {bigReasons.map((r) => (
              <article key={r.n} className="overflow-hidden rounded-2xl border border-gold/20 bg-[#0f0c07]">
                <div className="relative">
                  <span className="absolute left-4 top-4 z-10 inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-gold/40 bg-black/40 px-3 font-display text-sm font-bold text-gold">
                    {r.n}
                  </span>
                  <img src={r.img} alt={r.title} className="block h-auto w-full" />
                </div>
                <div className="bg-[#1a1612] p-6 md:p-8">
                  <h3 className="font-display text-xl font-bold md:text-2xl">{r.title}</h3>
                  <div className="mt-2 h-[2px] w-12 bg-gold" />
                  <p className="mt-4 text-sm text-primary-foreground/75 md:text-base">{r.desc}</p>
                  <ul className="mt-5 space-y-2.5 text-sm md:text-base">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                        <span className="text-primary-foreground/85">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {smallReasons.map(({ icon: Icon, ...r }) => (
              <article key={r.n} className="rounded-2xl border border-gold/30 bg-[#1a1612] p-6 transition hover:border-gold md:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-black/30">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-gold">{r.n}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{r.title}</h3>
                <div className="mt-2 h-[2px] w-10 bg-gold" />
                <ul className="mt-4 space-y-2 text-sm">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                      <span className="text-primary-foreground/80">{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <blockquote className="font-display text-2xl italic leading-relaxed text-primary md:text-4xl">
            Buy where growth is planned. Not where it has already happened.
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8">
        <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Invest in a Premium Lifestyle at the Right Price</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary/90">Talk to an Advisor</Link>
          <a href="https://wa.me/919642166456" target="_blank" rel="noreferrer" className="rounded-full bg-gold px-8 py-3.5 font-semibold text-primary transition hover:scale-105">WhatsApp Now</a>
        </div>
      </section>
    </>
  );
}
