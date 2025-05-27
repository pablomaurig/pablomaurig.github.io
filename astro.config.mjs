// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Uncomment to deploy to GitHub Pages
  site: "https://pablomaurig.github.io",
  base: "/",
});
