// FAQ — 8 questions (see Tech_Spec §6.7)
export interface FAQEntry {
  q: string;
  a: string;
}

export const faq: FAQEntry[] = [
  {
    q: "Скільки часу ви виділяєте клієнту? Чи не перевантажене ви?",
    a: "Capacity cap: 1 Tier 4 (Full-Cycle) + 1 Tier 3 (retainer) одночасно. Tier 1-2 проекти — 1 за квартал. TreximAI — мій основний фокус, практика вторинна. Це не sales trick — це скільки реально можу тримати якість.",
  },
  {
    q: "Чому не hourly? А якщо ви закінчите за 3 дні замість тижня?",
    a: "Hourly створює incentive розтягнути роботу. Value-based pricing inline з вашим outcome. Якщо я закінчу за 3 дні — це хороша новина, ви отримуєте рішення швидше. Walk-away effective rate у мене $250+/год — економіка сходиться для обох.",
  },
  {
    q: "Що якщо результат не сподобається?",
    a: "50% prepay + 50% після delivery review. Якщо deliverable не матчить SOW — переробляю за свій рахунок. Якщо матчить, але ви хотіли «щось інше» — значить SOW був поганий, обговорюємо scope amendment. За якість deliverable відповідаю я. За business outcome — не гарантую (чесно: ніхто не може).",
  },
  {
    q: "Advisor vs Full-Cycle — як мені знати, що треба мені?",
    a: "Якщо у вас є команда / вендор і ви не знаєте як їх контролювати — advisor. Якщо у вас немає команди і ви хочете один контракт від PRD до релізу — full-cycle. На Discovery Call (30 хв безкоштовно) швидко визначимо.",
  },
  {
    q: "Повний scope Tier 4 Full-Cycle — що входить?",
    a: "Discovery + PRD (3 тиж, я lead) → delivery з моєю командою (frontend / backend / QA / DevOps за потреби) → weekly demos + bi-weekly stakeholder reviews → shipped milestone → 30-day post-launch warranty → handover package (код, docs, runbook, playbook). Команда — та сама, з якою я будую TreximAI. Pricing: fixed / fixed+bonus / fixed+equity per deal.",
  },
  {
    q: "NDA?",
    a: "Так. Mutual NDA — стандарт перед Scoping Call, якщо ви ділитесь чутливою інформацією. Template надішлю протягом 24 год після запиту.",
  },
  {
    q: "UA / EN — якою мовою працюєте?",
    a: "Працюю обома. UA — default для Lviv / Kyiv / UA-network. EN — для international (UK, DE, PL, US). Документи — мовою клієнта. Weekly calls — узгоджуємо на Discovery.",
  },
  {
    q: "Гарантія? Що якщо проект провалиться?",
    a: "Deliverable я гарантую (matches SOW or rework). Business outcome — ні, і ніхто чесний не може. Що я можу гарантувати: (а) якщо ви не задоволені після першого тижня Tier 4 — 100% refund, без запитань; (б) fixed+bonus/equity структура означає що у мене skin-in-the-game; (в) якщо на Discovery бачу, що fail imminent — скажу «не варто це робити» до підписання SOW, не після.",
  },
];
