// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://cindymarintorres.github.io",
  base: process.env.GITHUB_ACTIONS ? "/fullstack-portfolio" : "/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
});
