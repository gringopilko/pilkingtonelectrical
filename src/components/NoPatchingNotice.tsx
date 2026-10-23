import { PaintRoller } from "lucide-react";

/** Clear notice that patching and painting are not included, shown on services that cut into walls or ceilings. */
export function NoPatchingNotice() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-14">
      <div className="flex flex-col gap-4 rounded-2xl border-2 border-amber-400 bg-amber-50 p-5 text-slate-900 sm:flex-row sm:items-start sm:p-6">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-900">
          <PaintRoller className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <p className="text-lg font-extrabold tracking-tight">Please note: I don&apos;t do patching or painting</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">
            Some jobs need small holes cut in plaster, or walls chased, to run new cables. I keep them as small and neat as possible and show you where they will be before I start, but patching is not included. You will need to hire a plasterer to make good afterwards, and a painter if the area needs repainting.
          </p>
        </div>
      </div>
    </section>
  );
}
