// Mode choice — Advisor vs Full-Cycle (see Tech_Spec §6.5)
export interface Mode {
  label: string;
  title: string;
  hook: string;
  fit: string[];
  nofit: string[];
  linkText: string;
  linkHref: string;
}

export const modes: Mode[] = [
  {
    label: "Advisor Mode",
    title: "У вас є команда (своя або вендор). Не вистачає одного accountable на вашому боці.",
    hook: "Я веду oversight — sign-offs, change-request filter, sprint review від вашого імені. 4-8 год / тиждень.",
    fit: [
      "У вас є команда або вендор",
      "Бюджет: $3-15K entry або $5-8K/міс retainer",
      "Non-tech decision-maker",
    ],
    nofit: [
      "Потрібне delivery, а не oversight",
      "Hourly-billable мислення",
    ],
    linkText: "→ Vendor Audit · AI Audit · Discovery Sprint · Fractional PO",
    linkHref: "#services",
  },
  {
    label: "Full-Cycle Mode",
    title: "У вас немає команди. Ви хочете один контракт від PRD до shipped.",
    hook: "Я заводжу свою battle-tested команду (ту саму, що будує TreximAI). Один accountable, один SOW, fixed+bonus/equity.",
    fit: [
      "Перший IT-продукт",
      "Бюджет: $50-150K total, 3-6 міс timeline",
      "Готовність до skin-in-the-game pricing",
    ],
    nofit: [
      "Потрібна тільки Discovery",
      "Уже є own dev team",
      "Enterprise з procurement циклом >4 міс",
    ],
    linkText: "→ Full-Cycle Engagement (Tier 4)",
    linkHref: "#services",
  },
];
