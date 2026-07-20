import { Link } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";
import logoImg from "@/assets/pilkington-logo-icon.webp";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <img src={logoImg} alt="Pilkington Electrical" width={58} height={72} className="h-14 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground">
              Licensed electrician serving homes, body corporates and businesses across South East Melbourne.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">REC 30450 &middot; ABN 16 937 824 485</p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Company</h3>
            <div className="mt-4 flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
              <Link to="/suburbs" className="text-sm text-muted-foreground hover:text-foreground">Suburbs</Link>
              <Link to="/faqs" className="text-sm text-muted-foreground hover:text-foreground">FAQs</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Services</h3>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Pilkington Electrical. Licensed electrician. South East Melbourne.
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:0466270949" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
              <Phone className="h-4 w-4" />
              0466 270 949
            </a>
            <a href="mailto:contact@pilkingtonelectrical.com.au" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
