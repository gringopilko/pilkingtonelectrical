import { useEffect, useState, type ComponentType } from "react";
import type { NotifyKind } from "@/lib/notify";

type ToasterComponent = ComponentType<{ richColors?: boolean; position?: "top-center" }>;

export function LazyToaster() {
  const [Toaster, setToaster] = useState<ToasterComponent | null>(null);

  useEffect(() => {
    const onNotify = async (e: Event) => {
      const { kind, message } = (e as CustomEvent<{ kind: NotifyKind; message: string }>).detail;
      const [{ Toaster: T }, { toast }] = await Promise.all([import("@/components/ui/sonner"), import("sonner")]);
      setToaster(() => T as ToasterComponent);
      // Give the pop-up area a moment to appear before the first message is shown.
      window.setTimeout(() => toast[kind](message), 50);
    };
    window.addEventListener("pe-notify", onNotify);
    return () => window.removeEventListener("pe-notify", onNotify);
  }, []);

  return Toaster ? <Toaster richColors position="top-center" /> : null;
}
