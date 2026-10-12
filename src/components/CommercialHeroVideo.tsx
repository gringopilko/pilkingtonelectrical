import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export function CommercialHeroVideo(){
  const ref=useRef<HTMLVideoElement>(null);
  const [enabled,setEnabled]=useState(false);
  const [playing,setPlaying]=useState(false);
  useEffect(()=>{const preference=window.matchMedia("(prefers-reduced-motion: reduce)");const connection=(navigator as Navigator & {connection?:{saveData?:boolean}}).connection;const update=()=>setEnabled(!preference.matches&&!connection?.saveData);update();preference.addEventListener("change",update);return ()=>preference.removeEventListener("change",update);},[]);
  return <div className="min-w-0"><div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-slate-900"><img src="/img/commercial-design-poster.webp" alt="Electrical project planning and design" width={960} height={540} decoding="async" className="absolute inset-0 h-full w-full object-cover"/>{enabled&&<video ref={ref} src="/commercial-design.mp4" poster="/img/commercial-design-poster.webp" muted autoPlay loop playsInline preload="none" aria-hidden="true" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onError={()=>setEnabled(false)} className="absolute inset-0 h-full w-full object-cover"/>}{enabled&&<button type="button" onClick={()=>{const video=ref.current;if(video?.paused)void video.play().catch(()=>setPlaying(false));else video?.pause();}} aria-label={playing?"Pause design video":"Play design video"} className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/30 bg-black/70 px-4 py-2 text-sm font-semibold text-white hover:bg-black/90">{playing?<Pause size={16}/>:<Play size={16}/>} {playing?"Pause":"Play"}</button>}</div><p className="mt-3 text-sm text-muted-foreground">Planning the layout, estimating the work and discussing practical options before installation.</p></div>;
}

