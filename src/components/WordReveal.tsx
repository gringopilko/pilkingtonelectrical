import type { CSSProperties } from "react";

/** Heading text that slides up word by word when it scrolls into view. Fully visible without JavaScript. */
export function WordReveal({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <span data-word-reveal>
      {words.map((w, i) => (
        <span key={`${w}-${i}`}>
          <span className="wr-w">
            <span className="wr-i" style={{ "--wr": i } as CSSProperties}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
