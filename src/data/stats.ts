// Stats strip — 4 metrics (see Tech_Spec §6.3)
export interface Stat {
  value: string;
  valueHtml?: string; // allows <em>8</em> років
  label: string;
}

export const stats: Stat[] = [
  {
    value: "8",
    valueHtml: "<em>8</em>",
    label: "Років BA у life-safety",
  },
  {
    value: "4",
    valueHtml: "<em>4</em>",
    label: "IT-компанії зсередини",
  },
  {
    value: "−35%",
    valueHtml: "<em>−35%</em>",
    label: "Change requests",
  },
  {
    value: "CEO",
    valueHtml: "<em>CEO</em>",
    label: "TreximAI · AI-стартап",
  },
];
