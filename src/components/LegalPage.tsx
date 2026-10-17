import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export interface LegalSection {
  heading: string;
  paragraphs?: ReactNode[];
  bullets?: ReactNode[];
  after?: ReactNode[];
}

export function LegalPage({ title, intro, updated, sections, children }: { title: string; intro: string; updated: string; sections: LegalSection[]; children?: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>
          <p className="mt-4 text-sm font-medium text-muted-foreground">Last updated {updated}</p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-2xl font-extrabold tracking-tight">{s.heading}</h2>
              {s.paragraphs?.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-muted-foreground">{p}</p>
              ))}
              {s.bullets && (
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.after?.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-muted-foreground">{p}</p>
              ))}
            </div>
          ))}
        </div>
        {children}
      </section>
      <Footer />
    </div>
  );
}
