import { BadgeCheck, HardHat, HeartPulse, ShieldCheck, UserCheck, Users } from "lucide-react";
import acrsLogo from "@/assets/acrs-master-cabler.webp";
import esvLogo from "@/assets/energy-safe-victoria.webp";
import ewpaLogo from "@/assets/ewpa-logo.webp";
import lifetimeLogo from "@/assets/lifetime-labour-guarantee.webp";

const logos = [
  { src: esvLogo, alt: "Energy Safe Victoria Registered Electrical Contractor REC-30450", w: 345, h: 140, size: "h-12 sm:h-14", title: "Registered Electrical Contractor", sub: "REC 30450, Energy Safe Victoria" },
  { src: acrsLogo, alt: "ACRS Master Cabler", w: 487, h: 154, size: "h-9 sm:h-11", title: "ACRS Master Cabler", sub: "Registered for data, fibre and coax cabling" },
  { src: ewpaLogo, alt: "Elevating Work Platform Association", w: 174, h: 69, size: "h-10 sm:h-12", title: "EWP licensed", sub: "Scissor and boom lifts" },
  { src: lifetimeLogo, alt: "Lifetime Labour Guarantee", w: 196, h: 187, size: "h-14 sm:h-16", title: "Lifetime labour guarantee", sub: "On the work I do" },
];

const chips = [
  { icon: BadgeCheck, text: "A-grade electrical licence" },
  { icon: ShieldCheck, text: "$5M public liability" },
  { icon: HeartPulse, text: "Low voltage rescue and CPR trained" },
  { icon: HardHat, text: "Working at heights trained" },
  { icon: Users, text: "Working with Children Check" },
  { icon: UserCheck, text: "Police checked" },
];

export function TrustBadges() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
        <div className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Credentials</p>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight md:text-3xl">Licensed, qualified and insured</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {logos.map((l) => (
            <div key={l.title} className="flex flex-col items-center rounded-2xl bg-background p-4 text-center ring-1 ring-border sm:p-5">
              <div className="flex h-16 w-full items-center justify-center">
                <img src={l.src} alt={l.alt} width={l.w} height={l.h} className={`${l.size} w-auto max-w-full object-contain`} loading="lazy" />
              </div>
              <p className="mt-3 text-sm font-bold leading-snug">{l.title}</p>
              <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{l.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {chips.map((c) => (
            <span key={c.text} className="inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-xs font-semibold text-foreground ring-1 ring-border sm:text-sm">
              <c.icon className="h-4 w-4 text-primary" aria-hidden="true" />
              {c.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
