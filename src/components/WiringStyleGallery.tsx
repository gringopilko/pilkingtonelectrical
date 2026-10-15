import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { wiringProducts, type WiringProductGroup } from "@/lib/wiringProducts";

const photoLabels = {
  complete: "Complete fitting",
  assembly: "Functional assembly · decorative surround selected separately",
  cover: "Cover only · mechanism selected separately",
  mechanism: "Dimmer mechanism · plate selected separately",
  adaptor: "Control adaptor only · dimmer and plate selected separately",
};

function ProductCard({ group }: { group: WiringProductGroup }) {
  const [selected, setSelected] = useState(0);
  const row = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const active = group.variants[selected];
  const choose = (index: number) => setSelected(Math.max(0, Math.min(group.variants.length - 1, index)));
  useEffect(() => {
    const element = row.current;
    const button = element?.children[selected] as HTMLElement | undefined;
    if (element && button) element.scrollTo({ left: button.offsetLeft - (element.clientWidth - button.clientWidth) / 2, behavior: "instant" });
  }, [selected]);
  return (
    <article className="flex min-w-0 flex-col rounded-2xl border border-border bg-card p-5 md:p-6">
      <div role="region" aria-label={`${group.title} product photos`} tabIndex={0}
        className="relative aspect-[4/3] touch-pan-y overflow-hidden rounded-xl bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        onKeyDown={(event) => { if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) { event.preventDefault(); choose(event.key === "Home" ? 0 : event.key === "End" ? group.variants.length - 1 : selected + (event.key === "ArrowRight" ? 1 : -1)); } }}
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => { if (touchStart.current !== null) { const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) choose(selected + (distance < 0 ? 1 : -1)); } touchStart.current = null; }}>
        <img key={active.id} src={active.image} alt={`${group.title}, ${active.finish}${active.sku ? ` (${active.sku})` : ""}, ${photoLabels[active.photoType]}`}
          width={800} height={600} loading="lazy" decoding="async" draggable={false} style={active.id === "trader-senoa-simple-switch-white" || active.id === "trader-zimi-senoa-smart-dimmer-dimmer-white" ? { transform: "scale(1.3)" } : undefined} className="h-full w-full object-contain" />
      </div>
      <h3 className="mt-4 text-xl font-bold tracking-tight">{group.title}</h3>
      <div ref={row} className="relative mt-3 flex gap-2 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label={`${group.title} colours and models`}>
        {group.variants.map((variant, index) => <button key={variant.id} type="button" aria-pressed={selected === index} onClick={() => choose(index)}
          className={`shrink-0 rounded-full border px-3 py-2 text-xs font-semibold transition-colors ${selected === index ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>{variant.finish}</button>)}
      </div>
      <div className="mt-3 flex h-9 items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">{selected + 1} of {group.variants.length} {group.kind === "dimmer" ? "options" : "finishes"}</p>
        {group.variants.length > 1 && <div className="flex gap-2">
          <button type="button" aria-label={`Previous ${group.title} option`} disabled={selected === 0} onClick={() => choose(selected - 1)} className="rounded-full border border-border bg-white p-2 text-slate-900 hover:border-primary disabled:opacity-25"><ChevronLeft aria-hidden="true" size={16} /></button>
          <button type="button" aria-label={`Next ${group.title} option`} disabled={selected === group.variants.length - 1} onClick={() => choose(selected + 1)} className="rounded-full border border-border bg-white p-2 text-slate-900 hover:border-primary disabled:opacity-25"><ChevronRight aria-hidden="true" size={16} /></button>
        </div>}
      </div>
      <div aria-live="polite" aria-atomic="true" className="mt-3">
        <p className="text-xs font-bold text-primary">{photoLabels[active.photoType]}</p>
        {active.sku && <p className="mt-2 text-xs text-muted-foreground">Model: {active.sku}</p>}
        <p className="mt-2 text-xs text-muted-foreground">{active.availability}</p>
      </div>
      {group.note && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.note}</p>}
      <a href={active.source} target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 text-sm font-semibold text-primary underline underline-offset-4" aria-label={`View ${group.title} ${active.finish} product details (opens in a new tab)`}>View product details</a>
    </article>
  );
}

function ProductGrid({ kind }: { kind: WiringProductGroup["kind"] }) {
  const [brand, setBrand] = useState("All brands");
  const groups = wiringProducts.filter((group) => group.kind === kind);
  const brands = [...new Set(groups.map((group) => group.title.split(" ")[0]))];
  const shown = groups.filter((group) => brand === "All brands" || group.title.startsWith(brand));
  return <>
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <label htmlFor={`brand-${kind}`} className="text-sm font-semibold">Browse by brand</label>
      <select id={`brand-${kind}`} value={brand} onChange={(event) => setBrand(event.target.value)} className="max-w-full rounded-2xl border border-border bg-background px-4 py-2 text-sm">
        {["All brands", ...brands].map((name) => <option key={name}>{name}</option>)}
      </select>
      <p aria-live="polite" className="text-sm text-muted-foreground">{shown.length} ranges</p>
    </div>
    <div className="mt-6 grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">{shown.map((group) => <ProductCard key={group.id} group={group} />)}</div>
  </>;
}

export function WiringStyleGallery({ lightSwitches = false }: { lightSwitches?: boolean }) {
  return <section id="choose-your-style" className="scroll-mt-28">
    <p className="text-sm font-bold uppercase tracking-wide text-primary">Your home. Your style. Your budget.</p>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Choose Your Style</h2>
    <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">{lightSwitches ? "Compare actual light switches and switch covers in the ranges and colours below. Choose simple everyday fittings or a coordinated designer finish to match your power points." : "Compare power points and outlet covers in a range of finishes, from simple white fittings to statement designer options. I will help you balance appearance, features and budget."}</p>
    <p className="mt-4 text-sm text-muted-foreground">Swipe a photo, use the arrows or tap a colour to compare. Covers and components are labelled. Discontinued finishes are shown for matching existing fittings; availability will be confirmed before ordering.</p>
    <ProductGrid kind={lightSwitches ? "switch" : "outlet"} />
    <details className="mt-6 rounded-2xl border border-border p-6"><summary className="cursor-pointer font-bold">Matching an older colour or a different configuration?</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Colours vary between switches, power points and plate configurations. Some older HPM and Clipsal finishes are discontinued or only available as remaining stock. Send a photo and any model details so I can check an accurate match, including multi-gang plates, architrave switches, USB charging and outdoor fittings.</p></details>
    <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8"><h3 className="text-xl font-bold tracking-tight">Let's Find the Right Fit</h3><p className="mt-3 leading-relaxed text-muted-foreground">Explore Clipsal, Hager, HPM, Legrand / BTicino and Trader options with me. The photos show the stated product or component; the quote confirms the complete fitting, colour, functions and installation. For dimmers and smart controls, I will check your lights and wiring before recommending a compatible option.</p><a href="#quote" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark">Discuss Your Style & Budget <ArrowRight aria-hidden="true" className="h-4 w-4" /></a><a href="https://www.clipsal.com/products/power-points-switches" target="_blank" rel="noopener noreferrer" className="mt-4 block text-sm font-semibold text-primary underline underline-offset-4">Browse the full Clipsal catalogue (opens in a new tab)</a></div>
  </section>;
}

export function DimmerStyleGallery() {
  return <section id="dimmer-options" className="mt-16 scroll-mt-28">
    <p className="text-sm font-bold uppercase tracking-wide text-primary">Set the light level to suit the room</p>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Explore Dimmers & Smart Controls</h2>
    <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Choose rotary controls, push-on/off rotary dimmers, push-button dimmers or a compatible smart lighting system. Many dimmers are mechanisms fitted behind your chosen switch plate; those component photos are labelled below.</p>
    <p className="mt-4 text-sm text-muted-foreground">I will select the dimmer to suit your dimmable LEDs, drivers, circuit load and chosen switch range. Smart features can require a gateway, suitable wiring and configuration.</p>
    <ProductGrid kind="dimmer" />
    <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-6"><h3 className="text-xl font-bold">Current Australian Options</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Newer choices include the Clipsal Solis designer range and Trader's updated Dimpala push-on/off rotary dimmer. If you are planning connected lighting, we can also discuss Legrand INSPYRA with Netatmo alongside Wiser, Excel Life with Netatmo and Zimi systems. Availability and system compatibility are checked for your installation.</p><a href="https://explore.legrand.com.au/inspyra-collection/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-primary underline underline-offset-4">Explore Legrand INSPYRA (opens in a new tab)</a></div>
  </section>;
}
