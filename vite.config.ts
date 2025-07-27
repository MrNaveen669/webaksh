import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async () => {
  const plugins = [react(), runtimeErrorOverlay()];

  // Handle conditional plugin loading without top-level await
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const cartographerModule = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographerModule.cartographer());
  }

  return {
    root: path.resolve(__dirname, "client"),
    plugins,
    build: {
      outDir: path.resolve(__dirname, "dist/client"),
      emptyOutDir: true,
      sourcemap: true
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    build: {
      outDir: path.resolve(__dirname, "dist/client"), // ✅ Outputs only frontend here
      emptyOutDir: false, // ✅ Prevents deleting backend build
    },
  };
});