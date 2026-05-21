import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ascendgriffin.org",
  compressHTML: true,
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "uk"],
    routing: {
      prefixDefaultLocale: false, // / = en, /uk/ = uk
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          uk: "uk-UA",
        },
      },
      filter: (page) => !page.includes("/drafts/"),
    }),
  ],
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
