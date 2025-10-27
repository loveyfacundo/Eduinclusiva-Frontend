import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
// Tailwind is handled via PostCSS (postcss.config.js / tailwind.config.js);
// don't import a non-standard `@tailwindcss/vite` package here.
export default defineConfig({
  plugins: [react()],
});
