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
    // Inline per-route CSS into the HTML → no render-blocking stylesheet request,
    // CSS ships with the document (big FCP/LCP win on throttled mobile).
    inlineStylesheets: "always",
    assets: "_assets",
  },
});
