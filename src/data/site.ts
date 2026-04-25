// Site-wide meta + copy (see Tech_Spec §5.2 nav, §6.8 CTA, §13 SEO, Messaging §2.3)

export const site = {
  name: "Ascend Griffin",
  domain: "ascendgriffin.org",
  url: "https://ascendgriffin.org",
  founder: "Taras Smaliukh",
  founderTitle: "CEO TreximAI · 8 років BA у Lviv IT-network",
  city: "Lviv, Ukraine",
  email: "taras@ascendgriffin.org",
  linkedin: "https://www.linkedin.com/in/taras732/",
  calcom: "https://cal.com/taras-smaliukh/discovery-30min",

  // Analytics — leave empty to disable, paste Measurement ID to enable
  // Get yours at: https://analytics.google.com → Admin → Data Streams → Measurement ID (G-XXXXXXXXXX)
  ga4Id: "",
  // Cloudflare Web Analytics token (alternative, cookieless)
  cfAnalyticsToken: "",

  // Brand messaging
  eyebrow: "IT-супровід від ідеї до результату",
  heroH1Html:
    'Ваш <em>союзник</em> в IT-проєктах,<br>який діє виключно у <em>ваших інтересах</em>.',
  heroLede:
    "Ви відчуваєте, що вирішуєте навмання: незрозумілі терміни, різні оцінки від підрядників, брак даних для порівняння. Беру відповідальність за результат — перекладаю складне на зрозуміле, аналізую ринок, звіряю факти, щоб прийняті рішення були максимально ефективними.",
  heroCtaPrimary: "Discovery Call",
  heroCtaSecondary: "Як це працює →",
  heroMicro: "", // TODO: select final variant (see conversation 2026-04-24)

  // CTA block
  ctaEyebrow: "НАСТУПНИЙ КРОК",
  ctaH2Html: "Зустріч на <em>30 хвилин</em>.",
  ctaLede:
    "Безкоштовно. Без презентацій. Просто розмова про ваш проект.",
  ctaPrimary: "Discovery Call",
  ctaAlt: "Або стежте за моєю роботою у LinkedIn",
  ctaSig: "— Taras Smaliukh · Lviv, Ukraine",

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
      "Ascend Griffin — IT-супровід від ідеї до результату | ваш союзник у проектах",
    description:
      "Незалежний експерт на вашій стороні у IT-проектах: від перевірки ідеї до масштабування і оптимізації готових продуктів. Аудит, дослідження, супровід — для стартапів і бізнесу.",
    keywords:
      "IT-супровід, союзник у IT-проєктах, дослідження стартапу, аудит IT-проекту, оптимізація продукту, vibe coding, startup advisor, AI-інструменти, валідація ідеї, масштабування MVP",
    ogImage: "/og-image.png",
    locale: "uk_UA",
  },

  // Footer
  footerTagline:
    "IT-супровід від ідеї до результату. Союзник у ваших IT-проектах — від валідації ідеї до масштабування і оптимізації.",
  madeIn: "Lviv, Ukraine",
  year: 2026,
};
