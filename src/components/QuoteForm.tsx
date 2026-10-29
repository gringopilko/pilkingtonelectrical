import { useEffect, useRef, useState } from "react";
import { Camera, Check, Loader2, X } from "lucide-react";
import { MAX_PHOTO_BYTES, MAX_PHOTOS, PHOTO_TYPES } from "@/lib/quote-photos";
import { toast } from "sonner";
import { trackQuoteRequest } from "@/lib/analytics";
import { services } from "@/lib/services";
import { getServiceGroups } from "@/lib/serviceGroups";

const inputClass =
  "rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";


interface PickedPhoto {
  file: File;
  preview: string;
}

/** Shrinks a photo on the customer's device before upload: longest side 2000 px, JPEG. Falls back to the original. */
async function shrinkPhoto(file: File): Promise<Blob> {
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, 2000 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.82));
    if (blob && blob.size > 0) return blob;
  } catch {
    /* the browser could not read it (for example HEIC on some browsers): send the original */
  }
  return file;
}

async function uploadPhoto(file: File): Promise<string> {
  const blob = await shrinkPhoto(file);
  const type = blob.type || file.type;
  if (!PHOTO_TYPES[type]) throw new Error("unsupported");
  if (blob.size > MAX_PHOTO_BYTES) throw new Error("too-large");
  const res = await fetch("/api/quote-photo", { method: "POST", headers: { "content-type": type }, body: blob });
  const data = (await res.json().catch(() => null)) as { url?: string } | null;
  if (!res.ok || !data?.url) throw new Error("upload-failed");
  return data.url;
}

export function QuoteForm({
  defaultMessage = "",
  defaultService = "",
}: {
  defaultMessage?: string;
  defaultService?: string;
}) {
  const initialService = services.find((s) => s.slug === defaultService)?.title ?? "";
  // The plain "Enquiry: <service>" prefill is now covered by the dropdown, so start the text box empty.
  const initialMessage = defaultMessage.trim() === `Enquiry: ${initialService}` ? "" : defaultMessage;
  const serviceGroups = getServiceGroups();
  const [service, setService] = useState(initialService);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(initialMessage);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [submittedPhone, setSubmittedPhone] = useState("");
  const [photos, setPhotos] = useState<PickedPhoto[]>([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => () => photos.forEach((p) => URL.revokeObjectURL(p.preview)), [photos]);

  const addPhotos = (list: FileList | null) => {
    if (!list) return;
    const incoming = Array.from(list).filter((f) => f.type.startsWith("image/") || /\.(heic|heif)$/i.test(f.name));
    if (incoming.length < list.length) toast.error("Only photos can be added.");
    const room = MAX_PHOTOS - photos.length;
    if (incoming.length > room) toast.error(`You can add up to ${MAX_PHOTOS} photos.`);
    const next = incoming.slice(0, Math.max(0, room)).map((file) => ({ file, preview: URL.createObjectURL(file) }));
    setPhotos((prev) => [...prev, ...next]);
    if (fileInput.current) fileInput.current.value = "";
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!name.trim() || !phone.trim() || !email.trim()) {
      toast.error("Please enter your name, phone number and email address.");
      return;
    }

    setSubmitting(true);
    try {
      const photoLinks: string[] = [];
      let skipped = 0;
      for (let i = 0; i < photos.length; i++) {
        setUploadStatus(`Uploading photo ${i + 1} of ${photos.length}...`);
        try {
          photoLinks.push(await uploadPhoto(photos[i].file));
        } catch {
          skipped++;
        }
      }
      setUploadStatus("");
      if (skipped > 0) {
        toast.error(
          skipped === photos.length
            ? "Your photos couldn't be uploaded, so your request will be sent without them."
            : `${skipped} photo${skipped > 1 ? "s" : ""} couldn't be uploaded and will be left out.`,
        );
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "e16f3311-c329-4de2-a6f4-a49b368d309d",
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          service: service || "Not specified",
          message: message.trim() || "No message provided",
          photos: photoLinks.length ? photoLinks.join("\n") : "No photos added",
          subject: service
            ? `New Quote Request: ${service} - Pilkington Electrical`
            : "New Quote Request - Pilkington Electrical",
        }),
      });
      const data = await response.json();
      if (
        !response.ok ||
        !data ||
        typeof data !== "object" ||
        !("success" in data) ||
        !data.success
      )
        throw new Error("Failed to send");
      setSubmittedPhone(phone.trim());
      setDone(true);
      trackQuoteRequest(typeof window !== "undefined" ? window.location.pathname : "unknown");
      toast.success("Quote request sent! Shane will be in touch shortly.");
      setName("");
      setPhone("");
      setEmail("");
      setService(initialService);
      setMessage(initialMessage);
      setPhotos([]);
    } catch (err) {
      console.error(err);
      toast.error(
        "Couldn't send your request. Please call 0466 270 949 or email contact@pilkingtonelectrical.com.au.",
      );
    } finally {
      setSubmitting(false);
      setUploadStatus("");
    }
  };

  if (done) {
    return (
      <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
        <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="h-6 w-6" />
        </div>
        <p className="text-lg font-bold">Request received</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks, I'll be in touch on {submittedPhone} as soon as possible.
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
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2 [&>*]:min-w-0">
      <label className="grid gap-2 text-sm font-semibold">
        <span>Your name <span className="font-normal text-muted-foreground">(required)</span></span>
        <input
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          required
          className={inputClass}
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        <span>Phone number <span className="font-normal text-muted-foreground">(required)</span></span>
        <input
          type="tel"
          autoComplete="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={30}
          required
          className={inputClass}
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold md:col-span-2">
        <span>What do you need? <span className="font-normal text-muted-foreground">(optional)</span></span>
        <select value={service} onChange={(e) => setService(e.target.value)} className={`pe-select ${inputClass} w-full min-w-0`}>
          <option value="">Select a service</option>
          {serviceGroups.map((g) => (
            <optgroup key={g.title} label={g.title}>
              {g.items.map((svc) => (
                <option key={svc.slug} value={svc.title}>
                  {svc.title}
                </option>
              ))}
            </optgroup>
          ))}
          <option value="Something else or not sure">Something else or not sure</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold md:col-span-2">
        <span>Email address <span className="font-normal text-muted-foreground">(required)</span></span>
        <input
          type="email"
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={255}
          required
          className={inputClass}
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold md:col-span-2">
        Tell me about the job
        <textarea
          placeholder="Include your suburb, what you need and preferred timing..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={2000}
          rows={6}
          className={inputClass}
        />
      </label>
      <div className="grid gap-2 text-sm font-semibold md:col-span-2">
        <span>
          Photos of the job <span className="font-normal text-muted-foreground">(optional, up to {MAX_PHOTOS})</span>
        </span>
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => addPhotos(e.target.files)}
          className="sr-only"
          id="quote-photos"
          disabled={submitting}
        />
        <div className="flex flex-wrap gap-3">
          {photos.map((p, i) => (
            <div key={p.preview} className="relative h-20 w-20 overflow-hidden rounded-xl bg-muted ring-1 ring-border">
              <img src={p.preview} alt={`Photo ${i + 1}`} className="h-full w-full object-cover" />
              <button
                type="button"
                onClick={() => removePhoto(i)}
                disabled={submitting}
                aria-label={`Remove photo ${i + 1}`}
                className="absolute right-1 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/75 text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
          {photos.length < MAX_PHOTOS && (
            <label
              htmlFor="quote-photos"
              className="inline-flex h-20 min-w-20 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-primary/40 px-4 text-xs font-bold text-primary transition-colors hover:bg-primary/5"
            >
              <Camera className="h-5 w-5" aria-hidden="true" />
              Add photos
            </label>
          )}
        </div>
        <span className="text-xs font-normal text-muted-foreground">
          The switchboard, the area you want work done and any fault are the most useful. Photos are kept privately and deleted after 90 days.
        </span>
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-brand-dark disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> {uploadStatus || "Sending..."}
            </>
          ) : (
            "Send Request"
          )}
        </button>
      </div>
    </form>
  );
}
