import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import clipsalLogo from "@/assets/clipsal-logo.webp";
import hagerLogo from "@/assets/hager-logo.webp";
import hpmLogo from "@/assets/hpm-logo.webp";

import { powerPointStyles } from "@/lib/powerPointStyles";
import { powerPointPhotoLayout } from "@/lib/powerPointPhotoLayout";


const styleGroups = [
  { title: "Legrand / BTicino Living Now", images: ["bticino-living-now-outlet-white", "bticino-living-now-outlet-black"] },
  {"title":"Clipsal Solis","images":["clipsal-solis-brushed-brass","clipsal-solis-ebony-aluminium","clipsal-solis-platinum-aluminium","clipsal-solis-white-ceramic","clipsal-solis-zen-black","clipsal-solis-zen-white"]},
  { title: "Clipsal Saturn Zen", images: ["saturn-zen-black", "saturn-zen-white"] },
  { title: "Clipsal Iconic Styl", images: ["iconic-styl-crowne", "iconic-styl-shadow", "iconic-styl-silver"] },
  { title: "Hager silhouette", images: ["hager-silhouette-aluminium", "hager-silhouette-black", "hager-silhouette-gloss-white", "hager-silhouette-matt-white", "hager-silhouette-stainless-steel"] },
  { title: "HPM Linea", images: ["hpm-linea-black", "hpm-linea-white", "hpm-linea-matt-silver", "hpm-linea-asphalt", "hpm-linea-gun-metal", "hpm-linea-ghost-gum", "hpm-linea-ninja-khaki", "hpm-linea-wet-elephant", "hpm-linea-midnight-dash", "hpm-linea-cheeky-boy-blue"] },
  { title: "Clipsal Iconic USB-C", images: ["iconic-usb-c"] },
  { title: "Clipsal Iconic", images: ["iconic-white", "iconic-warm-grey", "iconic-extra-white", "iconic-anthracite", "iconic-cool-grey", "iconic-extra-black"] },
  { title: "HPM Excel", images: ["hpm-excel-white", "hpm-excel-black", "hpm-excel-matt-silver", "hpm-excel-stainless-steel", "hpm-excel-polished-brass", "hpm-excel-red", "hpm-excel-green", "hpm-excel-mist-grey", "hpm-excel-beige", "hpm-excel-gloss-cream", "hpm-excel-brown"] },
  { title: "Clipsal 2000", images: ["clipsal-2000-white", "clipsal-2000-cream", "clipsal-2000-black", "clipsal-2000-dark-blue", "clipsal-2000-green", "clipsal-2000-red"] },
  { title: "Clipsal Classic", images: ["clipsal-classic-white", "clipsal-classic-brushed-aluminium", "clipsal-classic-cream", "clipsal-classic-black", "clipsal-classic-dark-blue", "clipsal-classic-green", "clipsal-classic-red"] },
];

function StyleGallery({ title, images }: { title: string; images: string[] }) {
  const variants = images.map((image) => powerPointStyles.find((style) => style.image === image)!);
  const [selected, setSelected] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const active = variants[selected];
  const colourRow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const row = colourRow.current;
    const button = row?.children[selected] as HTMLElement | undefined;
    if (row && button) row.scrollTo({ left: button.offsetLeft - (row.clientWidth - button.clientWidth) / 2, behavior: "instant" });
  }, [selected]);
  const goTo = (index: number) => {
    const element = track.current;
    if (element) element.scrollTo({ left: index * element.clientWidth, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  const colour = (name: string) => name.split(/ — | - /).pop()!;
  return (
    <article className="flex min-w-0 flex-col rounded-2xl border border-border bg-card p-5 md:p-6">
      <div className="relative mb-4 overflow-hidden rounded-xl bg-white">
        <div ref={track} role="region" aria-label={title + " colour photos"} tabIndex={0}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onScroll={(event) => {
            const element = event.currentTarget;
            setSelected(Math.min(variants.length - 1, Math.max(0, Math.round(element.scrollLeft / element.clientWidth))));
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              goTo(Math.max(0, Math.min(variants.length - 1, selected + (event.key === "ArrowRight" ? 1 : -1))));
            }
          }}>
          {variants.map((variant) => (
            <div key={variant.image} className="relative aspect-[4/3] w-full shrink-0 snap-start overflow-hidden">
              {variant.photoUnavailable ? (
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-lg bg-slate-50 p-4 text-center text-slate-600">
                  <p className="font-semibold">{colour(variant.title)}</p>
                  <p className="text-xs">Listed finish · product photo unavailable</p>
                </div>
              ) : <img src={"/img/power-points/" + variant.image + ".webp"}
                alt={variant.title + (variant.image.includes("-switch-") ? " light switch product photograph" : variant.photoType === "cover" || /iconic-(white|styl)/.test(variant.image) ? " double power point cover photograph" : " double power point product photograph")}
                loading="lazy" decoding="async" width={360} height={270}
                draggable={false} style={powerPointPhotoLayout[variant.image] ?? { width: "90%", height: "90%", transform: "translate(-50%, -50%)", objectFit: "contain" }}
                className="absolute left-1/2 top-1/2 h-full w-full object-fill" />}
            </div>
          ))}
        </div>
      </div>
      <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      <div ref={colourRow} className="relative mt-3 flex gap-2 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label={title + " finishes"}>
        {variants.map((variant, index) => (
          <button key={variant.image} type="button" aria-pressed={selected === index}
            onClick={() => goTo(index)} className={"shrink-0 rounded-full border px-3 py-2 text-xs font-semibold transition-colors " + (selected === index ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary")}>{variant.image === "iconic-usb-c" ? "Vivid White" : colour(variant.title)}</button>
        ))}
      </div>
      <div className="mt-3 flex h-9 items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">{variants.length === 1 ? "1 finish" : `${selected + 1} of ${variants.length} finishes`}</p>
        {variants.length > 1 && <div className="flex gap-2">
          <button type="button" aria-label={"Previous " + title + " colour"} disabled={selected === 0}
            onClick={() => goTo(selected - 1)} className="rounded-full border border-border bg-white p-2 text-slate-900 transition-colors hover:border-primary disabled:opacity-25"><ChevronLeft size={16} /></button>
          <button type="button" aria-label={"Next " + title + " colour"} disabled={selected === variants.length - 1}
            onClick={() => goTo(selected + 1)} className="rounded-full border border-border bg-white p-2 text-slate-900 transition-colors hover:border-primary disabled:opacity-25"><ChevronRight size={16} /></button>
        </div>}
      </div>
      <div aria-live="polite" aria-atomic="true">
        {active.availability && <p className="mt-3 text-xs font-semibold text-muted-foreground">{active.availability}</p>}
        <p className="mt-3 text-xs font-bold uppercase tracking-wide text-primary">{active.label}</p>
        {title === "HPM Linea" && active.photoType === "cover" && <p className="mt-2 text-xs font-medium text-muted-foreground">Cover only shown · complete outlet photo unavailable</p>}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.text}</p>
      </div>
      <div className="mt-auto pt-5">
      <p className="border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">{active.detail}</p>
      <a href={active.source} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-primary underline underline-offset-4"
        aria-label={"View " + active.title + " on the product website (opens in a new tab)"}>View product details</a>
      </div>
    </article>
  );
}


export function WiringStyleGallery({ lightSwitches = false }: { lightSwitches?: boolean }) { return (
      <section id="choose-your-style" className="scroll-mt-28">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">
          Your home. Your style. Your budget.
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
          Choose Your Style
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Switches and power points don't have to be an afterthought. From a simple white outlet to a finish that
          ties the whole room together, I'll help you find the right balance of appearance,
          functionality and price. Browse the examples below, arranged from statement designer
          finishes through to simple everyday white fittings.
        </p>
        {lightSwitches && <p className="mt-4 text-sm text-muted-foreground">The existing power point and cover photos below illustrate matching ranges and finishes. They are style references; switch layouts, mechanisms and available finishes will be confirmed in your quote. BTicino photos show the actual switch options.</p>}
        <p className="mt-4 text-sm text-muted-foreground">Swipe sideways over a photo, or scroll the colour row and tap a finish to compare. Cover-only photos and discontinued finishes are labelled.</p>
        <div className="mt-8 grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {styleGroups.map((original) => { const group = lightSwitches && original.title === "Legrand / BTicino Living Now" ? { ...original, images: ["bticino-living-now-switch-white", "bticino-living-now-switch-black"] } : original; return ( <StyleGallery key={group.title} {...group} />); })}
        </div>
        <details className="mt-6 rounded-2xl border border-border p-6">
          <summary className="cursor-pointer font-bold">Matching an older HPM colour?</summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Older Linea catalogues also list Cream, Runaway Bride, 5 O’Clock Olive, Sunshine, Orange Crush, Bubblegum, Saucy Red and Abracadabra. Older Excel catalogues include Blue, Polished Silver, Stone Metal and Brushed Brass. These older colours vary by product, and current supply and matching product photos must be checked. Send a photo of your existing fitting and I’ll help find a match.</p>
        </details>
        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
          <h3 className="text-xl font-bold tracking-tight">Let's find the perfect fit</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            I'm happy to explore ranges from Clipsal Iconic, Hager, HPM, Legrand / BTicino Living Now and other suitable
            brands with you. Bring a photo, a finish you love or simply a budget, and we'll work
            through the options. HPM Excel and Linea and Legrand decorative ranges are also worth
            exploring. Available colours, features and pricing vary by range. These photos are style
            examples; I'll confirm current availability and quote the complete fitting and
            installation.
          </p>
          <div
            className="mt-6 flex flex-wrap items-center gap-8"
            aria-label="Brands we can explore"
          >
            {[
              ["Clipsal", clipsalLogo],
              ["Hager", hagerLogo],
              ["HPM", hpmLogo],
            ].map(([name, src]) => (
              <img
                key={name}
                src={src}
                alt={name}
                loading="lazy"
                className="h-8 w-24 object-contain"
              />
            ))}
            <span className="font-bold text-foreground">Legrand / BTicino</span>
          </div>
          <a
            href="#quote"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark"
          >
            Discuss Your Style & Budget <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </section>

); }
