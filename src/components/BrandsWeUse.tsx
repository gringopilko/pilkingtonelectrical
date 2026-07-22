import clipsalLogo from "@/assets/clipsal-logo.png";
import hagerLogo from "@/assets/hager-logo.png";
import hpmLogo from "@/assets/hpm-logo.png";
import nhpLogo from "@/assets/nhp-logo.png";
import voltexLogo from "@/assets/voltex-logo.png";
import beaconLogo from "@/assets/beacon-logo.png";

export function BrandsWeUse() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Brands We Use &amp; Trust
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <img src={clipsalLogo} alt="Clipsal" className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0" />
          <img src={hagerLogo} alt="Hager" className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0" />
          <img src={hpmLogo} alt="HPM" className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0" />
          <img src={nhpLogo} alt="NHP" className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0" />
          <img src={voltexLogo} alt="Voltex" className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0" />
          <img src={beaconLogo} alt="Beacon" className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0" />
        </div>
      </div>
    </section>
  );
}
