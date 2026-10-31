/**
 * Shows a pop-up message (success or error). The pop-up code only downloads
 * the first time a message is needed, so it isn't part of every page load.
 */
export type NotifyKind = "success" | "error";

export function notify(kind: NotifyKind, message: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("pe-notify", { detail: { kind, message } }));
}
