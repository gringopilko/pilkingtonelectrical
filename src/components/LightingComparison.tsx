import { Lightbulb } from "lucide-react";

interface Photo {
  /** WebP file in /public/img, e.g. "/img/pancake-light.webp". Leave undefined to show the placeholder. */
  src?: string;
  width: number;
  height: number;
  alt: string;
}

const fittings: { title: string; caption: string; photo: Photo }[] = [
  {
    title: "Pancake (flat panel)",
    caption: "Cheap and quick to fit, but the whole face is a bright white disc.",
    photo: { src: undefined, width: 800, height: 600, alt: "Flat white ultra-slim LED panel light on a ceiling" },
  },
  {
    title: "Low-glare (black baffle)",
    caption: "The LED sits deep in the fitting, so you see a small dark hole.",
    photo: { src: undefined, width: 800, height: 600, alt: "Deep-recessed LED downlight with black baffle trim" },
  },
];

const approaches = [
  {
    title: "Traditional",
    text: "An even grid of downlights across the ceiling for general, all-round light. It's simple, predictable, and a good fit for kitchens, hallways and laundries.",
  },
  {
    title: "Lighting-designer style",
    text: "Fewer fittings, placed deliberately. Light goes over benches, down feature walls, along artwork and into reading corners, with the rest of the room left softer. It looks more refined and often uses fewer lights, so it can use less energy as well.",
  },
];

/** Shows the photo once one is supplied; until then a neutral placeholder with the same alt text and aspect ratio. */
function PhotoSlot({ photo }: { photo: Photo }) {
  if (photo.src) {
    return (
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
        className="aspect-[4/3] w-full rounded-xl object-cover"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={photo.alt}
      className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200"
    >
      <Lightbulb className="h-10 w-10 text-slate-400" strokeWidth={1.5} aria-hidden="true" />
    </div>
  );
}

export function LightingComparison() {
  return (
    <section id="pancake-vs-low-glare" className="mt-14 scroll-mt-28">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Pancake lights vs low-glare downlights</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Slim &ldquo;pancake&rdquo; panels are cheap and quick to fit, but the whole face is a bright white disc. You see the light source straight on, so it glares, especially in bedrooms and living areas where you&rsquo;re looking up from a couch or bed.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        A low-glare downlight with a black baffle sets the LED deep in the fitting. From across the room you see a small dark hole, not a bright disc. It looks cleaner and more intentional on the ceiling. The trade-off is that the light on the floor and walls is a bit spottier, with distinct pools of light instead of one even wash. Most people prefer that look, but it&rsquo;s worth knowing before you choose.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fittings.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-card p-4">
            <figure>
              <PhotoSlot photo={f.photo} />
              <figcaption className="mt-3">
                <span className="block font-bold tracking-tight">{f.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{f.caption}</span>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      <h3 className="mt-12 text-xl font-extrabold tracking-tight md:text-2xl">Two ways to light a room</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {approaches.map((a) => (
          <div key={a.title} className="rounded-2xl border border-border bg-card p-5">
            <p className="font-bold tracking-tight">{a.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-[#eef6fe] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="font-medium leading-relaxed">
          Not sure which suits your place? We can talk it through on site and plan the layout before any work starts.
        </p>
        <a
          href="#quote"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark"
        >
          Plan my lighting
        </a>
      </div>
    </section>
  );
}
