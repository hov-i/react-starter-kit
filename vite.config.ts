import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    build: {
      outDir: "www",
    },
    esbuild: {
      drop: command === "build" ? ["console", "debugger"] : [],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@apis": path.resolve(__dirname, "src/apis"),
        "@remote": path.resolve(__dirname, "src/remote"),
        "@shared": path.resolve(__dirname, "src/shared"),
        "@constants": path.resolve(__dirname, "src/constants"),
        "@models": path.resolve(__dirname, "src/models"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/main.scss";`,
          includePaths: [path.resolve(__dirname, "src")],
        },
      },
    },
  };
});
