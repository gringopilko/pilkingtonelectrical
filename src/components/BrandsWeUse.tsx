import clipsalLogo from "@/assets/clipsal-logo.webp";
import hagerLogo from "@/assets/hager-logo.webp";
import hpmLogo from "@/assets/hpm-logo.webp";
import nhpLogo from "@/assets/nhp-logo.webp";
import voltexLogo from "@/assets/voltex-logo.webp";
import beaconLogo from "@/assets/beacon-logo.webp";
import evnexLogo from "@/assets/evnex-logo.webp";

const logos = [
  { src: clipsalLogo, alt: "Clipsal", desktop: "h-16", mobile: "h-12" },
  { src: hagerLogo, alt: "Hager", desktop: "h-12", mobile: "h-9" },
  { src: hpmLogo, alt: "HPM", desktop: "h-12", mobile: "h-9" },
  { src: nhpLogo, alt: "NHP", desktop: "h-12", mobile: "h-9" },
  { src: voltexLogo, alt: "Voltex", desktop: "h-12", mobile: "h-9" },
  { src: beaconLogo, alt: "Beacon", desktop: "h-12", mobile: "h-9" },
  { src: evnexLogo, alt: "Evnex", desktop: "h-7", mobile: "h-5" },
];

export function BrandsWeUse() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Brands We Use &amp; Trust
        </p>

        {/* Phones: one slow scrolling row */}
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] sm:hidden">
          <div className="flex w-max items-center animate-[brand-marquee_30s_linear_infinite] motion-reduce:animate-none">
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="flex shrink-0 items-center pr-10" aria-hidden={i >= logos.length ? true : undefined}>
                <img src={l.src} alt={i >= logos.length ? "" : l.alt} className={`${l.mobile} w-auto opacity-70 grayscale`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet and desktop: full row */}
        <div className="mt-8 hidden flex-wrap items-center justify-center gap-x-14 gap-y-8 sm:flex">
          {logos.map((l) => (
            <img key={l.alt} src={l.src} alt={l.alt} className={`${l.desktop} w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0`} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
