# Ascend Griffin — ascendgriffin.org

Landing site для TS_Practice (Accountable Product Ownership by Taras Smaliukh).

## Tech stack

- **Framework:** Astro 5.x (SSG)
- **Styling:** vanilla CSS з tokens + v3 Paper Atelier basis
- **Deploy:** Cloudflare Pages
- **Booking:** Cal.com (external link)
- **Analytics:** Cloudflare Web Analytics

## Project structure

```
src/
  components/       # 11 atomic sections (Nav, Hero, StatsStrip, Problem, Services, Mode, WhyMe, HowItWorks, FAQ, CTALast, Footer)
  data/             # content (services.ts, faq.ts, stats.ts) — single source of truth
  layouts/          # BaseLayout.astro
  pages/            # index.astro + legal pages
  styles/           # tokens.css, v3-theme.css, site.css
  assets/logo/      # logo raw assets
public/             # favicon, og-image, robots.txt
```

## Commands

```bash
npm install         # перший раз
npm run dev         # dev server @ localhost:4321
npm run build       # static build → dist/
npm run preview     # serve dist locally
```

## Reference

- Spec: `d:/Obsidian/Obdsidian_2026/10_Projects/TS_Practice/04_Website/Tech_Spec.md` v1.1
- Brand: `d:/Obsidian/Obdsidian_2026/10_Projects/TS_Practice/03_Branding/Brand_Book.md`
- Messaging: `d:/Obsidian/Obdsidian_2026/10_Projects/TS_Practice/03_Branding/05_Messaging.md`
- Design basis: `_legacy/reference/v3-paper-atelier.html` (v3 Paper Atelier)

## Development timeline (Apr 22-30)

| Date | Milestone |
|---|---|
| 2026-04-22 | Project scaffolding + components skeleton |
| 2026-04-23 | Content review + final copy + deploy staging |
| 2026-04-24 | Soft launch + LinkedIn post + 5 outreach |
| 2026-04-30 | Public launch з full feature set |
