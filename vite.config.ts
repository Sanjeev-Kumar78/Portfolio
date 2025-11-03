import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split react-icons by library to reduce initial bundle
          if (id.includes("node_modules/react-icons/fa")) {
            return "icons-fa";
          }
          if (id.includes("node_modules/react-icons/hi2")) {
            return "icons-hi2";
          }
          if (id.includes("node_modules/react-icons/hi")) {
            return "icons-hi";
          }

          // Vendor chunks
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom")
          ) {
            return "vendor-react";
          }

          if (id.includes("node_modules/@emailjs")) {
            return "emailjs";
          }

          if (id.includes("node_modules/@vercel")) {
            return "analytics";
          }
        },
      },
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    sourcemap: false,
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: ["react-icons"],
  },
});
