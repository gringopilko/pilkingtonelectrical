const photos = [
  { src: "/img/about/canada-trail-crew.webp", alt: "Shane carrying skis up the mountain while working on the trail crew in Canada", pos: "68% 40%" },
  { src: "/img/about/canada-snow-break.webp", alt: "Shane taking a break in deep snow below the cliffs", pos: "58% 55%" },
  { src: "/img/about/canada-hut-nap.webp", alt: "Shane catching a nap in the trail crew hut between shifts", pos: "30% 50%" },
];

/** Photo collage from the Canadian Rockies years. */
export function CanadaCollage() {
  return (
    <div className="my-8 grid grid-cols-3 gap-2 sm:gap-3">
      <img
        src="/img/about/canada-sunrise.webp"
        alt="Sunrise lighting up the peaks of the Canadian Rockies above the ski runs"
        width={1600}
        height={1195}
        loading="lazy"
        decoding="async"
        className="col-span-3 aspect-[16/9] w-full rounded-2xl object-cover"
        style={{ objectPosition: "50% 38%" }}
      />
      {photos.map((p) => (
        <img
          key={p.src}
          src={p.src}
          alt={p.alt}
          width={1000}
          height={746}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full rounded-xl object-cover sm:rounded-2xl"
          style={{ objectPosition: p.pos }}
        />
      ))}
    </div>
  );
}
