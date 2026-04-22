// Why-me 3 pillars (see Tech_Spec §6.5b + Messaging §1)
export interface Pillar {
  num: string;
  title: string;
  body: string;
  proof: string;
}

export const pillars: Pillar[] = [
  {
    num: "01",
    title: "Один accountable від PRD до launch",
    body: "Classic engagement розподіляє відповідальність між vendor / PM / BA / ops. Хтось завжди може сказати «не моє». У моєму контракті — один підпис на sign-off. Якщо продукт не запустився — винен я. Fixed+performance/equity замість hourly — skin-in-the-game.",
    proof: "8 років BA у 4 IT-компаніях (HUSPI, Stfalcon, SK, Indeema). Я знаю де «не моє» ламається.",
  },
  {
    num: "02",
    title: "Рішення, не документи",
    body: "Ваш engagement деливер — не 80-сторінковий BRD, не 40-слайдовий deck. Output — decision, який ви захищаєте у board meeting, або shipped milestone у prod. Документи — by-product. Кожен SOW має «decision to be made» або «outcome to ship» на першій сторінці.",
    proof: "−35% change requests коли один accountable веде PRD → release (моя статистика по 4 проектах).",
  },
  {
    num: "03",
    title: "Practitioner CEO, не consultant",
    body: "Я щодня CEO AI-стартапу TreximAI — живу з accountability на реальному payroll. Кожна рекомендація проходить тест «я це роблю зараз, і ось що ламається». Не HBR, не McKinsey фреймворк — real-time state команди, pricing, vendor management, AI-stack.",
    proof: "TreximAI code + Claude Code + BMAD workflow у daily use. Скріни — у LinkedIn feed.",
  },
];
