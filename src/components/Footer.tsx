import { Link } from "@tanstack/react-router";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import logoImg from "@/assets/pilkington-logo-icon.webp";
import { getServiceGroups } from "@/lib/serviceGroups";

const linkClass = "text-sm text-white/65 transition-colors hover:text-white";

export function Footer() {
  const groups = getServiceGroups();
  return (
    <footer className="bg-slate-950 pb-16 text-white md:pb-0">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logoImg} alt="" width={58} height={72} className="h-11 w-auto" loading="lazy" />
              <span className="text-lg font-extrabold tracking-tight">
                Pilkington <span className="text-primary">Electrical</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Licensed electrician based in Hampton East, serving homes, rentals, body corporates and businesses across Bayside and South East Melbourne.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:0466270949" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-white hover:text-slate-900">
                <Phone className="h-4 w-4" />
                0466 270 949
              </a>
              <a href="mailto:contact@pilkingtonelectrical.com.au" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://www.facebook.com/pilkingtonelectrical" target="_blank" rel="noopener noreferrer" aria-label="Pilkington Electrical on Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/pilkingtonelectrical" target="_blank" rel="noopener noreferrer" aria-label="Pilkington Electrical on Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8">
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">{g.title}</h3>
                <div className="mt-4 flex flex-col gap-2.5">
                  {g.items.map((s) => (
                    <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className={linkClass}>
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">Company</h3>
              <div className="mt-4 flex flex-col gap-2.5">
                <Link to="/about" className={linkClass}>About</Link>
                <Link to="/services" className={linkClass}>All services</Link>
                <Link to="/suburbs" className={linkClass}>Suburbs</Link>
                <Link to="/guides" className={linkClass}>Guides</Link>
                <Link to="/faqs" className={linkClass}>FAQs</Link>
                <Link to="/contact" className={linkClass}>Contact</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 text-center text-xs text-white/50 md:flex-row md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} Pilkington Electrical. All rights reserved.</p>
          <p>Licensed electrician REC 30450 &middot; ABN 16 937 824 485</p>
        </div>
      </div>
    </footer>
  );
}
