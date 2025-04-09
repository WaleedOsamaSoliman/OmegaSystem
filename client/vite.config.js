import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@css": path.resolve("./", "src", "assets", "statics", "css"),
      "@components": path.resolve("./", "src", "assets", "components"),
      "@fonts": path.resolve("./", "src", "assets", "statics", "fonts"),
      "@imgs": path.resolve("./", "src", "assets", "statics", "imgs"),
      "@context": path.resolve("./", "src", "assets", "context"),
      "@preload": path.resolve("./", "src", "assets", "preloads"),
      "@pages": path.resolve("./", "src", "assets", "pages"),
      "@actions": path.resolve("./", "src", "assets", "actions"),
    },
  },
});
