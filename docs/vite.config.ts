import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@tapizlabs/ui/tailwind-theme.css": path.resolve(
        __dirname,
        "node_modules/@tapizlabs/ui/dist/tailwind-theme.css"
      ),
      "@tapizlabs/ui/theme.css": path.resolve(
        __dirname,
        "node_modules/@tapizlabs/ui/dist/theme.css"
      ),
      "@tapizlabs/ui": path.resolve(
        __dirname,
        "node_modules/@tapizlabs/ui/dist/index.js"
      ),
    },
  },
});
