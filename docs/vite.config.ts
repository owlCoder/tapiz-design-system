import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@tapizlabs/ui": path.resolve(__dirname, "../dist/index.js"),
      "@tapizlabs/ui/theme.css": path.resolve(__dirname, "../dist/theme.css"),
      "@tapizlabs/ui/tailwind-theme.css": path.resolve(
        __dirname,
        "../dist/tailwind-theme.css"
      ),
    },
  },
});
