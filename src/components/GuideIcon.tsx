import { AlarmSmoke, BookOpen, ClipboardCheck, LayoutGrid, PlugZap, ShieldCheck, Tag, Zap, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "electrical-safety-checks-victorian-rentals": ClipboardCheck,
  "smoke-alarms-victorian-rentals": AlarmSmoke,
  "safety-switches-victorian-homes-rentals": ShieldCheck,
  "test-and-tag-victoria-how-often": Tag,
  "safety-switch-keeps-tripping": Zap,
  "signs-switchboard-needs-upgrading": LayoutGrid,
  "ev-charging-apartment-buildings-victoria": PlugZap,
};

/** A topic icon for each guide, falling back to an open book. */
export function GuideIcon({ slug, className = "h-5 w-5" }: { slug: string; className?: string }) {
  const Icon = icons[slug] ?? BookOpen;
  return <Icon className={className} aria-hidden="true" />;
}
