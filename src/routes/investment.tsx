import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Home, ClipboardList, Check, X } from "lucide-react";
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

const reasons = [
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

const comparison = [
  {
    title: "Apartment",
    icon: Building2,
    best: false,
    points: [
      { ok: false, t: "Shared walls and spaces" },
      { ok: false, t: "Maintenance charges" },
      { ok: false, t: "Limited privacy" },
      { ok: false, t: "Slower appreciation" },
    ],
  },
  {
    title: "Vishnu Kuteer Villa",
    icon: Home,
    best: true,
    points: [
      { ok: true, t: "Private gated villa" },
      { ok: true, t: "No extra maintenance" },
      { ok: true, t: "100 percent privacy" },
      { ok: true, t: "High appreciation zone" },
    ],
  },
  {
    title: "Plot",
    icon: ClipboardList,
    best: false,
    points: [
      { ok: false, t: "Construction burden on you" },
      { ok: false, t: "No ready amenities" },
      { ok: false, t: "Long wait period" },
      { ok: false, t: "No gated security" },
    ],
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

      {/* 5 Compelling Reasons - now WHITE bg, dark text */}
      <section className="bg-background py-16 text-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Compelling Reasons</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">
              Why Invest in <span className="text-gold">Vishnu Kuteer</span>
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-16 bg-gold" />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {reasons.map((r) => (
              <article key={r.n} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-xl">
                <div className="relative bg-[#0f0c07]">
                  <span className="absolute left-4 top-4 z-10 inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-gold/40 bg-black/40 px-3 font-display text-sm font-bold text-gold">
                    {r.n}
                  </span>
                  <img src={r.img} alt={r.title} className="block h-auto w-full" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-xl font-bold text-primary md:text-2xl">{r.title}</h3>
                  <div className="mt-2 h-[2px] w-12 bg-gold" />
                  <p className="mt-4 text-sm text-muted-foreground md:text-base">{r.desc}</p>
                  <ul className="mt-5 space-y-2.5 text-sm md:text-base">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                        <span className="text-foreground/85">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Villa vs Other Options */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Villa vs Other Options</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              Why a Villa <span className="text-gold">Beats the Rest</span>
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-16 bg-gold" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
            {comparison.map(({ icon: Icon, ...c }) => (
              <article
                key={c.title}
                className={`relative flex flex-col rounded-2xl p-6 md:p-8 ${
                  c.best
                    ? "border-2 border-gold bg-[#1a1612] shadow-2xl md:-translate-y-2"
                    : "border border-gold/15 bg-[#15110d]"
                }`}
              >
                {c.best && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold bg-primary px-4 py-1 text-[10px] font-semibold tracking-[0.25em] text-gold">
                    BEST CHOICE
                  </span>
                )}
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${c.best ? "bg-gold/15" : "bg-white/5"}`}>
                  <Icon className={`h-6 w-6 ${c.best ? "text-gold" : "text-primary-foreground/60"}`} />
                </div>
                <h3 className={`mt-5 text-center font-display text-xl font-bold md:text-2xl ${c.best ? "text-primary-foreground" : "text-primary-foreground/80"}`}>
                  {c.title}
                </h3>
                <ul className="mt-6 space-y-3 text-center text-sm md:text-base">
                  {c.points.map((p) => (
                    <li
                      key={p.t}
                      className={`flex items-center justify-center gap-2 ${
                        p.ok ? "font-semibold text-gold" : "text-primary-foreground/65"
                      }`}
                    >
                      {p.ok ? <Check className="h-4 w-4 flex-shrink-0" /> : <X className="h-4 w-4 flex-shrink-0 opacity-50" />}
                      <span>{p.t}</span>
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
