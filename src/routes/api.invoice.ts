import { createFileRoute } from "@tanstack/react-router";
import { env } from "cloudflare:workers";

/**
 * Behind the customer invoice page (/pay?t=TOKEN). Invoices are stored in the
 * Cloudflare D1 database "pilkington-invoices".
 *   GET  ?t=TOKEN                 -> the invoice snapshot (does not count as a view)
 *   POST {t, action: "view"}      -> counts a view (only real browsers run the page script)
 *   POST {t, action: "paid", note} -> the customer says they've paid
 */
const TOKEN_RE = /^[A-Za-z0-9_-]{16,64}$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store", "x-robots-tag": "noindex, nofollow" },
  });

type Row = { snapshot: string; paid_claimed_at: string | null };

async function load(token: string) {
  return env.INVOICES_DB.prepare("SELECT snapshot, paid_claimed_at FROM invoice_links WHERE token = ?").bind(token).first<Row>();
}

function reply(row: Row, claimed: string | null) {
  let snapshot: unknown = {};
  try {
    snapshot = JSON.parse(row.snapshot);
  } catch {
    snapshot = {};
  }
  return json({ snapshot, paid_claimed_at: claimed });
}

export const Route = createFileRoute("/api/invoice")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const token = (new URL(request.url).searchParams.get("t") || "").trim();
        if (!TOKEN_RE.test(token)) return json({ error: "not_found" }, 404);
        try {
          const row = await load(token);
          if (!row) return json({ error: "not_found" }, 404);
          return reply(row, row.paid_claimed_at);
        } catch {
          return json({ error: "server_error" }, 500);
        }
      },
      POST: async ({ request }) => {
        const body = (await request.json().catch(() => ({}))) as { t?: unknown; action?: unknown; note?: unknown };
        const token = String(body.t || "").trim();
        if (!TOKEN_RE.test(token)) return json({ error: "not_found" }, 404);
        try {
          const row = await load(token);
          if (!row) return json({ error: "not_found" }, 404);
          let claimed = row.paid_claimed_at;
          const now = new Date().toISOString();
          const db = env.INVOICES_DB;
          if (body.action === "view") {
            await db.batch([
              db.prepare("UPDATE invoice_links SET view_count = view_count + 1, first_viewed_at = COALESCE(first_viewed_at, ?), last_viewed_at = ?, updated_at = ? WHERE token = ?").bind(now, now, now, token),
              db.prepare("INSERT INTO link_events (token, kind, at) VALUES (?, 'view', ?)").bind(token, now),
            ]);
          } else if (body.action === "paid") {
            const note = String(body.note || "").slice(0, 200);
            await db.batch([
              db.prepare("UPDATE invoice_links SET paid_claimed_at = COALESCE(paid_claimed_at, ?), paid_claim_note = COALESCE(paid_claim_note, ?), updated_at = ? WHERE token = ?").bind(now, note, now, token),
              db.prepare("INSERT INTO link_events (token, kind, at) VALUES (?, 'paid_claim', ?)").bind(token, now),
            ]);
            claimed = claimed || now;
          }
          return reply(row, claimed);
        } catch {
          return json({ error: "server_error" }, 500);
        }
      },
    },
  },
});
