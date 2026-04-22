// Services — 5-tier ladder (see Tech_Spec §6.4)
export interface Service {
  tier: string;
  name: string;
  hook: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: "primary" | "secondary";
  row: 1 | 2;
}

export const services: Service[] = [
  {
    tier: "Tier 1",
    name: "Vendor Selection Audit",
    hook: "2-5 вендорів під 12-критеріальну scorecard. Ми знаємо кого обрати і чому — до підпису SOW.",
    price: "$3—5K",
    priceNote: "одноразово · 5 робочих днів",
    features: [
      "Vendor scorecards по 12 критеріях",
      "Red flags + торгівельна позиція",
      "Recommendation memo",
      "5 робочих днів delivery",
    ],
    cta: "Запит аудиту",
    ctaHref: "#contact",
    row: 1,
  },
  {
    tier: "Tier 1b",
    name: "AI Workflow Audit",
    hook: "5-10 інтерв'ю + код-snapshot. Карта де AI може дати +30% швидкості вашій команді.",
    price: "$3—5K",
    priceNote: "одноразово · 1-2 тижні",
    features: [
      "Current-state map dev-процесів",
      "AI adoption roadmap",
      "Pilot scope",
      "Workshop plan",
    ],
    cta: "Запит аудиту",
    ctaHref: "#contact",
    row: 1,
  },
  {
    tier: "Tier 2 ⭐",
    name: "Discovery Sprint",
    hook: "Від ідеї до SOW-ready package — за 2-4 тижні. Без вендорського conflict of interest.",
    price: "$8—15K",
    priceNote: "2-4 тижні · signature product",
    features: [
      "User research (5-10 stakeholder interviews)",
      "AS-IS / TO-BE process maps",
      "Functional specs + user stories",
      "Architecture rec + estimation breakdown",
      "Risk register + vendor RFP",
    ],
    cta: "Забронювати Discovery Call",
    ctaHref: "#book",
    featured: "primary",
    row: 1,
  },
  {
    tier: "Tier 3",
    name: "Fractional Product Owner",
    hook: "4-8 год / тиж на вашому боці. Oversight вендора або вашої команди. 1 accountable підпис на sign-off.",
    price: "$5—8K",
    priceNote: "/ місяць · мін 3 міс",
    features: [
      "Weekly 1:1 з founder / CEO",
      "Sprint participation + sign-offs на change requests",
      "Async Slack / email ≤24 год",
      "Monthly strategic review",
    ],
    cta: "Обговорити fit",
    ctaHref: "#book",
    row: 2,
  },
  {
    tier: "Tier 4 ⭐⭐",
    name: "Full-Cycle Engagement",
    hook: "Не advisor — delivery. Я + моя battle-tested команда (та сама, що будує TreximAI). Один контракт PRD → shipped.",
    price: "$50—150K",
    priceNote: "3-6 міс · fixed+bonus або fixed+equity",
    features: [
      "Discovery + PRD (я lead)",
      "Full-stack delivery з моєю командою",
      "Weekly demos + bi-weekly stakeholder reviews",
      "Release accountability — один підпис на ship",
      "30-day post-launch warranty + handover package",
    ],
    cta: "Обговорити engagement",
    ctaHref: "#book",
    featured: "secondary",
    row: 2,
  },
];

export const capacityNote =
  "Capacity cap: 1 Tier 4 (Full-Cycle) + 1 Tier 3 (retainer) одночасно. Для Tier 4 — sleep-on-it 48 год перед proposal.";
