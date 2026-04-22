// Site-wide meta + copy (see Tech_Spec §5.2 nav, §6.8 CTA, §13 SEO, Messaging §2.3)

export const site = {
  name: "Ascend Griffin",
  domain: "ascendgriffin.org",
  url: "https://ascendgriffin.org",
  founder: "Taras Smaliukh",
  founderTitle: "CEO TreximAI · 8 років BA у Lviv IT-network",
  city: "Lviv, Ukraine",
  email: "taras@ascendgriffin.org",
  linkedin: "https://www.linkedin.com/in/taras-smaliukh",
  calcom: "https://cal.com/taras-smaliukh/discovery-30min",

  // Brand messaging
  eyebrow: "Accountable Product Ownership · Україна",
  heroH1Html:
    'Ваш перший IT-продукт — на <em>моїй репутації</em>.<br>Від <em>PRD до релізу</em>.',
  heroLede:
    "Один accountable контракт замість п'яти «не моє». Advisor — якщо у вас є команда. Full-cycle — якщо ви хочете мою. Fixed плюс performance, не hourly.",
  heroCtaPrimary: "Забронювати Discovery Call — 30 хв безкоштовно",
  heroCtaSecondary: "Подивитись 5 offer-ів",

  // CTA block
  ctaEyebrow: "НАСТУПНИЙ КРОК",
  ctaH2Html: "30 хвилин розмови — і ви знаєте, чи я <em>fit</em>.",
  ctaLede:
    "Discovery Call безкоштовний. 50% дзвінків закінчуються «ми не fit» — і я рекомендую іншого. Інших 50% — ми починаємо писати scope.",
  ctaPrimary: "Забронювати Discovery Call",
  ctaAlt: "Ще не готовий? Приєднуйтесь у LinkedIn",
  ctaSig: "— Taras Smaliukh · одна людина, одна репутація",

  // Nav
  nav: [
    { label: "Services", href: "#services" },
    { label: "Why me", href: "#why" },
    { label: "Process", href: "#how" },
    { label: "FAQ", href: "#faq" },
  ],

  // SEO
  seo: {
    title:
      "Ascend Griffin — Accountable Product Ownership для non-tech засновників | Львів",
    description:
      "Один accountable контракт від PRD до релізу. Advisor або full-cycle delivery з battle-tested командою. Для non-tech founder-ів і SMB власників в Україні та EU. Fixed+performance, не hourly.",
    keywords:
      "accountable product ownership, fractional product owner, discovery sprint, vendor audit, ai workflow audit, non-tech founder, ukraine, lviv",
    ogImage: "/og-image.png",
    locale: "uk_UA",
  },

  // Footer
  footerTagline:
    "Accountable Product Ownership для non-tech засновників і SMB власників. Один контракт від Discovery до релізу.",
  madeIn: "Lviv, Ukraine",
  year: 2026,
};
