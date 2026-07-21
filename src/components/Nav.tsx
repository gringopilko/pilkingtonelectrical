import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@/assets/pilkington-logo-icon.webp";
import { services } from "@/lib/services";

const supportLinks = [
  { title: "FAQs", href: "/faqs" },
  { title: "Contact Us", href: "/contact" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [electricalOpen, setElectricalOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [mobileElectricalOpen, setMobileElectricalOpen] = useState(false);
  const [mobileSupportOpen, setMobileSupportOpen] = useState(false);

  const closeAll = () => {
    setMobileOpen(false);
    setElectricalOpen(false);
    setSupportOpen(false);
    setMobileElectricalOpen(false);
    setMobileSupportOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={closeAll}>
          <img
            src={logoImg}
            alt="Pilkington Electrical"
            width={49}
            height={60}
            className="h-10 w-auto object-contain md:h-12"
          />
          <span className="text-lg font-extrabold tracking-tight text-foreground md:text-xl">
            Pilkington <span className="text-primary">Electrical</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/about"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setElectricalOpen(true)}
            onMouseLeave={() => setElectricalOpen(false)}
          >
            <button
              onClick={() => setElectricalOpen((o) => !o)}
              className="flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Electrical
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {electricalOpen && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-background p-4 shadow-xl">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      onClick={closeAll}
                      className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {s.title}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    className="col-span-2 mt-1 border-t border-border px-3 pt-3 text-sm font-bold text-primary"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/suburbs"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            Suburbs
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setSupportOpen(true)}
            onMouseLeave={() => setSupportOpen(false)}
          >
            <button
              onClick={() => setSupportOpen((o) => !o)}
              className="flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Support
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {supportOpen && (
              <div className="absolute left-1/2 top-full w-48 -translate-x-1/2 pt-3">
                <div className="flex flex-col gap-1 rounded-xl border border-border bg-background p-2 shadow-xl">
                  {supportLinks.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      onClick={closeAll}
                      className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          
            <a href="tel:0466270949"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-brand-dark"
            >
              <Phone className="h-4 w-4" />
              0466 270 949
            </a>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            <Link to="/about" onClick={closeAll} className="py-2 text-sm font-semibold text-muted-foreground">
              About
            </Link>

            <button
              onClick={() => setMobileElectricalOpen((o) => !o)}
              className="flex items-center justify-between py-2 text-left text-sm font-semibold text-muted-foreground"
            >
              Electrical
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileElectricalOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileElectricalOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    onClick={closeAll}
                    className="py-1.5 text-sm text-muted-foreground"
                  >
                    {s.title}
                  </Link>
                ))}
                <Link to="/services" onClick={closeAll} className="py-1.5 text-sm font-bold text-primary">
                  View all services
                </Link>
              </div>
            )}

            <Link to="/suburbs" onClick={closeAll} className="py-2 text-sm font-semibold text-muted-foreground">
              Suburbs
            </Link>

            <button
              onClick={() => setMobileSupportOpen((o) => !o)}
              className="flex items-center justify-between py-2 text-left text-sm font-semibold text-muted-foreground"
            >
              Support
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSupportOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileSupportOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                {supportLinks.map((s) => (
                  <Link key={s.href} to={s.href} onClick={closeAll} className="py-1.5 text-sm text-muted-foreground">
                    {s.title}
                  </Link>
                ))}
              </div>
            )}

            
              <a href="tel:0466270949"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              0466 270 949
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
