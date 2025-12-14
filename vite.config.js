import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages(User Pages) safe:
// - base "./" prevents asset path issues
export default defineConfig({
  base: "./",
  plugins: [react()],
});
