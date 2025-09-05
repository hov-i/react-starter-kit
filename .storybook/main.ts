import { mergeConfig } from "vite";
import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  typescript: {
    reactDocgen: "react-docgen",
  },
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
  ],
  docs: {
    autodocs: false,
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
          "@assets": path.resolve(__dirname, "../src/assets"),
          "@components": path.resolve(__dirname, "../src/components"),
          "@shared": path.resolve(__dirname, "../src/shared"),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@/assets/styles/main.scss";`,
          },
        },
      },
    });
  },
};

export default config;
