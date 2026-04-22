// How it works — 4-step process (see Tech_Spec §6.6)
export interface Step {
  num: string;
  title: string;
  duration: string;
  body: string;
}

export const steps: Step[] = [
  {
    num: "01",
    title: "Discovery Call",
    duration: "30 min · free · via Cal.com",
    body: "Я розумію ваш контекст. Ви розумієте fit. 50% дзвінків закінчуються «ми не fit» — і це здорово: я рекомендую іншого. Якщо fit — йдемо до scoping.",
  },
  {
    num: "02",
    title: "Scoping Call",
    duration: "30-45 min · free",
    body: "Глибше у scope: які deliverables, хто stakeholder, який timeline, який budget range. Прямо питаю про бюджет — менше surprises потім. Виходимо з ясним «ок, пишу proposal» або «не fit, ось альтернатива».",
  },
  {
    num: "03",
    title: "Proposal + SOW",
    duration: "1-3 робочих дні",
    body: "1-2 сторінки максимум: проблема, scope, process, інвестиція (одна цифра), що НЕ входить, next step. 50% prepay стандарт. Для Full-Cycle — sleep-on-it 48 год обов'язковий перед підписанням.",
  },
  {
    num: "04",
    title: "Delivery + Handover",
    duration: "SOW-dependent",
    body: "Weekly check-ins, kick-off на Day 1, mid-project demo. Delivery: solution + playbook, який ви можете використати без мене. Upsell розмова у кінці — без тиску; якщо не fit на retainer, прошу case study + 2-3 referral.",
  },
];
