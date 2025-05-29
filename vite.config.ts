// import { defineConfig } from "vitest/config";
// import path from "path";

// export default defineConfig({
//   test: {
//     globals: true,
//     environment: "node",
//   },
//   resolve: {
//     alias: {
//       "@components": path.resolve(__dirname, "src/components"),
//       "@layouts": path.resolve(__dirname, "src/layouts"),
//     },
//   },
// });

/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    // Vitest configuration options
  },
});
