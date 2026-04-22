// Problem cards — 3 (see Tech_Spec §6.2)
export interface Problem {
  icon: string; // lucide icon name
  title: string;
  body: string;
  stat: string;
}

export const problems: Problem[] = [
  {
    icon: "users-x",
    title: "П'ять підрядників. Жоден не accountable за outcome.",
    body: "Vendor пише код. PM — сроки. BA — requirements. Хтось платить за hosting. Ваш MVP не запускається, і на питання «хто винен?» — тиша. Classic IT engagement distributes responsibility так, що за результат не відповідає ніхто, крім вас.",
    stat: "73% first-time IT-проектів перевищують бюджет на 60%+ (McKinsey, 2023)",
  },
  {
    icon: "arrow-right-left",
    title: "Кожен handoff — це «не моє». І scope creep на $30-80K.",
    body: "Discovery зробив один. Ship — інший. Між ними 4 change requests «бо ми не знали». Це не bugs — це gaps відповідальності між фазами. Ви платите двічі за одне і те ж.",
    stat: "−35% change requests коли один accountable веде PRD → release",
  },
  {
    icon: "wallet",
    title: "Власний CTO — $8-15K/міс. Раніше — не виправдано.",
    body: "Наймати head-of-product або CTO за $120K+/рік коли у вас ще немає product-market fit — overkill. Але хтось має тримати product-side від PRD до релізу. Fractional advisor (4-8 год/тиж) або один accountable на весь цикл вирішує це за 30-50% ціни.",
    stat: "Fractional PO: 4-8 год/тиж за $5-8K/міс vs full-time CTO $10-15K/міс",
  },
];
