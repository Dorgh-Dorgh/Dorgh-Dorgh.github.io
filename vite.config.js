import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages (User Pages) safe:
// - base "./" prevents asset path issues
// - HashRouter prevents 404 on refresh
export default defineConfig({
  base: "./",
  plugins: [react()],
});
