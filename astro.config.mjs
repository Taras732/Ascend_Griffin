import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ascendgriffin.org",
  compressHTML: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "uk"],
    routing: {
      prefixDefaultLocale: false, // / = en, /uk/ = uk
    },
  },
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
