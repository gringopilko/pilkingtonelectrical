import acrsLogo from "@/assets/acrs-master-cabler.png";
import esvLogo from "@/assets/energy-safe-victoria.png";
import ewpaLogo from "@/assets/ewpa-logo.png";
import lifetimeLogo from "@/assets/lifetime-labour-guarantee.png";

export function TrustBadges() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <img src={esvLogo} alt="Energy Safe Victoria — Registered Electrical Contractor REC-30450" className="h-14 w-auto" />
          <img src={acrsLogo} alt="ACRS Master Cabler" className="h-10 w-auto" />
          <img src={ewpaLogo} alt="Elevating Work Platform Association" className="h-10 w-auto" />
          <img src={lifetimeLogo} alt="Lifetime Labour Guarantee" className="h-16 w-auto" />
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          WorkSafe Victoria compliant &middot; Working with Children Check holder
        </p>
      </div>
    </section>
  );
}
