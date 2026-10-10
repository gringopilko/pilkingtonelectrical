import acrsLogo from "@/assets/acrs-master-cabler.webp";
import esvLogo from "@/assets/energy-safe-victoria.webp";
import ewpaLogo from "@/assets/ewpa-logo.webp";
import lifetimeLogo from "@/assets/lifetime-labour-guarantee.webp";

export function TrustBadges() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 place-items-center gap-x-8 gap-y-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-6">
          <img src={esvLogo} alt="Energy Safe Victoria: Registered Electrical Contractor REC-30450" width={345} height={140} className="h-12 w-auto sm:h-16" loading="lazy" />
          <img src={acrsLogo} alt="ACRS Master Cabler" width={487} height={154} className="h-9 w-auto sm:h-12" loading="lazy" />
          <img src={ewpaLogo} alt="Elevating Work Platform Association" width={174} height={69} className="h-10 w-auto sm:h-[52px]" loading="lazy" />
          <img src={lifetimeLogo} alt="Lifetime Labour Guarantee" width={196} height={187} className="h-14 w-auto sm:h-20" loading="lazy" />
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          WorkSafe Victoria compliant &middot; Working with Children Check holder
        </p>
      </div>
    </section>
  );
}
