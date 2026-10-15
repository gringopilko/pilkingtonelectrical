import clipsalLogo from "@/assets/clipsal-logo.webp";
import hagerLogo from "@/assets/hager-logo.webp";
import hpmLogo from "@/assets/hpm-logo.webp";
import nhpLogo from "@/assets/nhp-logo.webp";
import voltexLogo from "@/assets/voltex-logo.webp";
import beaconLogo from "@/assets/beacon-logo.webp";
import evnexLogo from "@/assets/evnex-logo.webp";

const logos = [
  { src: clipsalLogo, alt: "Clipsal", size: "h-12 sm:h-16" },
  { src: hagerLogo, alt: "Hager", size: "h-9 sm:h-12" },
  { src: hpmLogo, alt: "HPM", size: "h-9 sm:h-12" },
  { src: nhpLogo, alt: "NHP", size: "h-9 sm:h-12" },
  { src: voltexLogo, alt: "Voltex", size: "h-9 sm:h-12" },
  { src: beaconLogo, alt: "Beacon", size: "h-9 sm:h-12" },
  { src: evnexLogo, alt: "Evnex", size: "h-5 sm:h-7" },
];

// Four copies, moving by half the track, so the loop is seamless even on very wide screens.
const track = [...logos, ...logos, ...logos, ...logos];

export function BrandsWeUse() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Brands We Use &amp; Trust
        </p>

        <div className="relative mt-6 overflow-hidden sm:mt-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max items-center animate-[brand-marquee_45s_linear_infinite] hover:[animation-play-state:paused] active:[animation-play-state:paused] motion-reduce:animate-none">
            {track.map((l, i) => (
              <div key={i} className="flex shrink-0 items-center pr-10 sm:pr-16" aria-hidden={i >= logos.length ? true : undefined}>
                <img
                  src={l.src}
                  alt={i >= logos.length ? "" : l.alt}
                  className={`${l.size} w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 active:opacity-100 active:grayscale-0`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
