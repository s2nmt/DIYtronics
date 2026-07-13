import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages at domain root (or custom domain) — same as DIYtronics.
// For project pages (user.github.io/repo/), set base: "/repo/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
