const BRAND = "Pilkington Electrical";

/** Adds the brand to a page title only when the result stays within 60 characters, so Google does not cut it off. */
export function pageTitle(base: string): string {
  const full = `${base} | ${BRAND}`;
  return full.length <= 60 ? full : base;
}
