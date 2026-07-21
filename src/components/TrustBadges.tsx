import arcsLogo from "@/assets/arcs-master-cabler.png";
import esvLogo from "@/assets/energy-safe-victoria.png";

export function TrustBadges() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          <img src={arcsLogo} alt="ARCS Master Cabler" className="h-14 w-auto opacity-90" />
          <img src={esvLogo} alt="Energy Safe Victoria" className="h-14 w-auto opacity-90" />
          <div className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5">
            <span className="text-sm font-bold text-foreground">REC 30450</span>
            <span className="text-sm text-muted-foreground">Licensed Electrician</span>
          </div>
        </div>
      </div>
    </section>
  );
}
