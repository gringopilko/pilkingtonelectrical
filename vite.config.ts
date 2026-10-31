import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      // Route loaders get their own small files, so page data (services, guides, suburbs)
      // only downloads on the pages that use it instead of on every page.
      router: {
        codeSplittingOptions: {
          defaultBehavior: [["loader"], ["component"], ["pendingComponent"], ["errorComponent"], ["notFoundComponent"]],
        },
      },
    }),
    viteReact(),
  ],
  });
