import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export function EmergencyHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowVideo, setAllowVideo] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const update = () => setAllowVideo(!preference.matches && !connection?.saveData);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => setPlaying(false));
    else video.pause();
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-6 pt-12">
      <div className="relative mx-auto w-full overflow-hidden rounded-xl border border-border bg-black" style={{ aspectRatio: "16 / 9" }}>
        <img src="/img/emergency-video-poster.webp" alt="Electrician examining a switchboard by torchlight" width={960} height={540} decoding="async" className="absolute inset-0 block h-full w-full object-contain object-center" />
        {allowVideo && (
          <video width={960} height={540} ref={videoRef} src="/emergency-hero.mp4" poster="/img/emergency-video-poster.webp" autoPlay muted loop playsInline preload="none" aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setAllowVideo(false)} className="absolute inset-0 block h-full w-full object-contain object-center">
            Your browser does not support video.
          </video>
        )}
        {allowVideo && (
          <button type="button" onClick={togglePlayback} aria-label={playing ? "Pause background video" : "Play background video"} className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/65 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {playing ? "Pause" : "Play"}
          </button>
        )}
      </div>
    </div>
  );
}
