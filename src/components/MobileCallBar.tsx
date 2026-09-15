import { Phone, Send } from "lucide-react";

// Persistent bottom bar on mobile only (hidden md+, where the phone number
// is already visible in the nav). "Get Quote" scrolls to the on-page quote
// form if one exists on the current route (home, service pages, suburb
// pages); otherwise it falls through to the homepage's quote section.
export function MobileCallBar() {
  const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const existing = document.getElementById("quote");
    if (existing) {
      e.preventDefault();
      existing.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur-sm shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href="tel:0466270949"
        className="flex flex-1 items-center justify-center gap-2 border-r border-border py-3.5 text-sm font-bold text-foreground active:bg-muted"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <a
        href="/#quote"
        onClick={handleQuoteClick}
        className="flex flex-1 items-center justify-center gap-2 bg-primary py-3.5 text-sm font-bold text-primary-foreground active:bg-brand-dark"
      >
        <Send className="h-4 w-4" />
        Get Quote
      </a>
    </div>
  );
}
