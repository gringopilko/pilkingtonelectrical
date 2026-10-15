import { useEffect, useRef, useState } from "react";

/**
 * Hero background: the still image paints straight away, then the video fades in over it once it can play.
 * Skipped only for visitors who have reduce motion turned on.
 */
export function HeroBackground({ poster, video }: { poster: string; video: string }) {
  const [showVideo, setShowVideo] = useState(false);
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!calm) setShowVideo(true);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!showVideo || !v) return;
    // iPhones only autoplay when the muted attribute is really on the element.
    v.muted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => undefined);
    };
    tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    return () => v.removeEventListener("canplay", tryPlay);
  }, [showVideo]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" decoding="async" />
      {showVideo && (
        <video
          ref={ref}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          onPlaying={() => setPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${playing ? "opacity-100" : "opacity-0"}`}
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
