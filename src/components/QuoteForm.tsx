import { useId, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { trackQuoteRequest } from "@/lib/analytics";

const inputClass =
  "rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export function QuoteForm({ defaultMessage = "" }: { defaultMessage?: string }) {
  const formId = useId();
  const [suburb, setSuburb] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(defaultMessage);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!name.trim() || !phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "e16f3311-c329-4de2-a6f4-a49b368d309d",
          name: name.trim(),
          phone: phone.trim(),
          ...(email.trim() ? { email: email.trim() } : {}),
          message:
            [
              service && `Service: ${service}`,
              suburb.trim() && `Suburb: ${suburb.trim()}`,
              message.trim(),
            ]
              .filter(Boolean)
              .join("\n\n") || "No message provided",
          subject: "New Quote Request - Pilkington Electrical",
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error("Failed to send");
      setDone(true);
      trackQuoteRequest(typeof window !== "undefined" ? window.location.pathname : "unknown");
      toast.success("Quote request sent! Shane will be in touch shortly.");
      setName("");
      setPhone("");
      setEmail("");
      setMessage(defaultMessage);
    } catch (err) {
      console.error(err);
      toast.error(
        "Couldn't send your request. Please call 0466 270 949 or email contact@pilkingtonelectrical.com.au.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div
        role="status"
        className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-8 text-center"
      >
        <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="h-6 w-6" />
        </div>
        <p className="text-lg font-bold">Request received</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks — I'll be in touch on {phone || "the number you provided"} as soon as possible.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
      <label htmlFor={`${formId}-name`} className="grid gap-2 text-sm font-semibold">
        Your name
        <input
          id={`${formId}-name`}
          name="name"
          autoComplete="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          required
          className={inputClass}
        />
      </label>
      <label htmlFor={`${formId}-phone`} className="grid gap-2 text-sm font-semibold">
        Phone number
        <input
          id={`${formId}-phone`}
          name="phone"
          autoComplete="tel"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={30}
          required
          className={inputClass}
        />
      </label>
      <label htmlFor={`${formId}-suburb`} className="grid gap-2 text-sm font-semibold">
        Job suburb (optional)
        <input
          id={`${formId}-suburb`}
          name="suburb"
          type="text"
          value={suburb}
          onChange={(e) => setSuburb(e.target.value)}
          maxLength={100}
          className={inputClass}
        />
      </label>
      <label htmlFor={`${formId}-service`} className="grid gap-2 text-sm font-semibold">
        What do you need?
        <select
          id={`${formId}-service`}
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={inputClass}
        >
          <option value="">Choose a service (optional)</option>
          {[
            "Fault finding & repairs",
            "Switchboard upgrade",
            "Lighting & power points",
            "Renovations & rewiring",
            "Body corporate / real estate",
            "Other electrical work",
          ].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label htmlFor={`${formId}-email`} className="grid gap-2 text-sm font-semibold md:col-span-2">
        Email (optional)
        <input
          id={`${formId}-email`}
          name="email"
          autoComplete="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={255}
          className={inputClass}
        />
      </label>
      <label
        htmlFor={`${formId}-message`}
        className="grid gap-2 text-sm font-semibold md:col-span-2"
      >
        A little about the job
        <textarea
          id={`${formId}-message`}
          name="message"
          placeholder="What needs doing, and when would suit you?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={2000}
          rows={4}
          className={inputClass}
        />
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            "Send my request to Shane"
          )}
        </button>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Your details are sent through Web3Forms so Shane can respond to your enquiry. Please don't
          include sensitive personal information.
        </p>
      </div>
    </form>
  );
}
