import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { TrendingUp, MapPin, Sparkles, ShieldCheck, Wallet } from "lucide-react";
import streetView from "@/assets/street-view.jpg";

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

const pillars = [
  { i: MapPin, t: "Location Driven Growth", d: "Kalyandurg Road is rapidly emerging as a residential expansion zone and a connectivity hub." },
  { i: TrendingUp, t: "High Appreciation Potential", d: "Early stage pricing advantage with rising demand for villas and strategic infrastructure growth." },
  { i: Sparkles, t: "Lifestyle Plus Investment", d: "A premium living environment inside a secure gated community with long term asset value." },
  { i: Wallet, t: "Budget Plus Premium", d: "Affordable entry price with a premium villa experience and better ROI compared to apartments." },
  { i: ShieldCheck, t: "Safe Investment", d: "AHUDA approved with clear documentation, planned development and a trusted developer." },
];

function Investment() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="absolute inset-0 -z-10 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url(${streetView})` }} />
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Investment Advantage</p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">A Premium Asset in a Growth Corridor</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg opacity-90">
            Investing in Vishnu Kuteer is more than buying a home. It is securing a premium asset in one of Anantapur fastest growing residential zones.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
        <SectionHeading eyebrow="Five Reasons" title="Why Invest in Vishnu Kuteer" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-7 transition hover:border-gold hover:shadow-lg">
              <Icon className="h-10 w-10 text-gold" />
              <h3 className="mt-4 font-display text-xl font-bold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <blockquote className="font-display text-3xl italic leading-relaxed text-primary md:text-4xl">
            Buy where growth is planned. Not where it has already happened.
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
        <SectionHeading eyebrow="Location Advantage" title="Kalyandurg Road Anantapur" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            "Prime residential zone on Kalyandurg Road",
            "Near Kurugunta Village",
            "Close to Whitefield Area",
            "Near Delhi Public School and leading institutions",
            "Easy access to Bangalore and Hyderabad Highway",
            "Rapidly developing connectivity corridor",
          ].map((l) => (
            <div key={l} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <span className="font-medium">{l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 text-center md:px-8">
        <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Invest in a Premium Lifestyle at the Right Price</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary/90">Talk to an Advisor</Link>
          <a href="https://wa.me/919642166456" target="_blank" rel="noreferrer" className="rounded-full bg-gold px-8 py-3.5 font-semibold text-primary transition hover:scale-105">WhatsApp Now</a>
        </div>
      </section>
    </>
  );
}
