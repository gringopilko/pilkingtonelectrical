import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const inputClass =
  "rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export function QuoteForm({ defaultMessage = "" }: { defaultMessage?: string }) {
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
          email: email.trim() || "Not provided",
          message: message.trim() || "No message provided",
          subject: "New Quote Request - Pilkington Electrical",
        }),
      });
      const data = await response.json();
      if (!data.success) throw new Error("Failed to send");
      setDone(true);
      toast.success("Quote request sent! Shane will be in touch shortly.");
      setName("");
      setPhone("");
      setEmail("");
      setMessage(defaultMessage);
    } catch (err) {
      console.error(err);
      toast.error(
        "Couldn't send your request. Please call 0466 270 949 or email contact@pilkingtonelectrical.com.au."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
        <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="h-6 w-6" />
        </div>
        <p className="text-lg font-bold">Request received</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks — I'll be in touch on {phone || "the number you provided"} as soon as possible.
        </p>
        <button onClick={() => setDone(false)} className="mt-6 text-sm font-semibold text-primary hover:underline">
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
      <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} required className={inputClass} />
      <input type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={30} required className={inputClass} />
      <input type="email" placeholder="Email address (optional)" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} className={`${inputClass} md:col-span-2`} />
      <textarea placeholder="Tell me about the job..." value={message} onChange={(e) => setMessage(e.target.value)} maxLength={2000} rows={4} className={`${inputClass} md:col-span-2`} />
      <div className="md:col-span-2">
        <button type="submit" disabled={submitting} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark disabled:opacity-60">
          {submitting ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>) : ("Send Request")}
        </button>
      </div>
    </form>
  );
}
