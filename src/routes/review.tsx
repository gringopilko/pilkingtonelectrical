import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/review")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(null, {
          status: 302,
          headers: { Location: "https://g.page/r/CTgFnx_3jda8EBM/review" },
        });
      },
    },
  },
});
