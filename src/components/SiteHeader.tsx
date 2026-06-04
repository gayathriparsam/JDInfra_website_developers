import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/investment", label: "Investment Advantage" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="JD Infra Developers" className="h-12 w-12 rounded-full object-cover ring-2 ring-gold" />
          <div className="leading-tight">
            <div className="font-display text-xl font-bold text-primary md:text-2xl">JD Infra Developers</div>
            <div className="text-xs text-muted-foreground">Anantapur</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-4 py-2 text-lg font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
              activeProps={{ className: "rounded-md px-4 py-2 text-lg font-semibold text-primary bg-accent" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+919642166456"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 lg:inline-flex"
        >
          Book a Call
        </a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-7 w-7 text-primary" /> : <Menu className="h-7 w-7 text-primary" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-lg font-medium text-foreground hover:bg-accent"
                activeProps={{ className: "rounded-md px-3 py-3 text-lg font-semibold text-primary bg-accent" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+919642166456" className="mt-2 rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground">
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
