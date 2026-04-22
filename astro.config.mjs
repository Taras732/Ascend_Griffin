import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ascendgriffin.org",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
    assets: "_assets",
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
