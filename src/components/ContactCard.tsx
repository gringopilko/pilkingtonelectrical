import type { ReactNode } from "react";

export function ContactCard({ icon, label, value, href, description, highlight = false }: { icon: ReactNode; label: string; value: ReactNode; href: string; description: string; highlight?: boolean }) {
  return (
    <a
      href={href}
      className={`group flex items-center gap-4 rounded-2xl p-5 text-left transition-all hover:-translate-y-0.5 ${highlight ? "bg-gradient-to-br from-primary to-brand-dark text-white shadow-lg shadow-primary/25" : "border border-border bg-background hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"}`}
    >
      <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${highlight ? "bg-white/15 text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"}`}>{icon}</div>
      <div className="min-w-0">
        <span className={`block text-xs font-semibold uppercase tracking-wider ${highlight ? "text-white/75" : "text-muted-foreground"}`}>{label}</span>
        <span className="mt-0.5 block text-[15px] font-bold tracking-tight [overflow-wrap:anywhere] sm:text-lg">{value}</span>
        <span className={`mt-0.5 block text-xs ${highlight ? "text-white/80" : "text-muted-foreground"}`}>{description}</span>
      </div>
    </a>
  );
}
