import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Inject <link rel="preload"> for the two critical font faces
 * (Playfair 600 headings, Source Sans 400 body) using the hashed
 * build filenames. Zero dependencies — plain Vite generateBundle.
 */
function preloadCriticalFonts(): Plugin {
  return {
    name: "preload-critical-fonts",
    apply: "build",
    // Runs after Vite's core html plugin emits index.html into the bundle.
    enforce: "post",
    generateBundle(_options, bundle) {
      const critical = Object.keys(bundle).filter(
        (name) =>
          name.endsWith(".woff2") &&
          (name.includes("playfair-display-latin-600") ||
            name.includes("source-sans-3-latin-400"))
      );
      if (critical.length === 0) return;
      const links = critical
        .map(
          (name) =>
            `<link rel="preload" as="font" type="font/woff2" href="/${name}" crossorigin>`
        )
        .join("");
      for (const [name, chunk] of Object.entries(bundle)) {
        if (name.endsWith(".html") && "source" in chunk) {
          chunk.source = String(chunk.source).replace("</head>", `${links}</head>`);
        }
      }
    },
  };
}

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), tailwindcss(), preloadCriticalFonts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 300,
  },
});
