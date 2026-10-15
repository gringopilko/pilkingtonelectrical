import { useEffect, useState } from "react";

/**
 * Hero background. Phones get the still image only (saves a multi-megabyte download).
 * Larger screens swap in the video after the page has loaded, unless the visitor prefers reduced motion.
 */
export function HeroBackground({ poster, video }: { poster: string; video: string }) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (wide && !calm) setShowVideo(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" decoding="async" />
      {showVideo && (
        <video autoPlay muted loop playsInline poster={poster} className="absolute inset-0 h-full w-full object-cover">
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
