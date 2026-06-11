/// <reference types="vitest" />
/// <reference types="vite/client" />

import tailwindcss from "@tailwindcss/vite";
import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), "");

  // Use CDN_BASE env variable, default to '/' for local/nginx deployment
  const basePath = env.CDN_BASE || "/";

  return {
    // Base path - configurable via CDN_BASE environment variable
    base: basePath,
    plugins: [
      react(),
      babel({
        presets: [reactCompilerPreset()],
      }),
      tailwindcss(),
      ViteImageOptimizer(),
    ],
    resolve: {
      tsconfigPaths: true,
      alias: {
        "@": resolve(__dirname, "./src"),
        src: resolve(__dirname, "./src"),
      },
    },
    build: {
      chunkSizeWarningLimit: 300,
      rolldownOptions: {
        external: [
          /.*\/__test__\/.*/, // Excludes all files in __test__ directories
          /.*\.test\..*/, // Excludes all .test. files
          /.*\.spec\..*/, // Excludes all .spec. files
          /.*playwright.*\.config\.ts/, // Excludes playwright config files
        ],
      },
    },
  };
});
