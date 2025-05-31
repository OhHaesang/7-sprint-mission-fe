import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        product: resolve(__dirname, "product.html"),
      },
    },
  },
  server: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/product$/, to: "/product.html" },
        { from: /^\/product\/.*$/, to: "/product.html" },
      ],
    },
  },
});
