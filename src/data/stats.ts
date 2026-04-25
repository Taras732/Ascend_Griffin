// Stats strip — 4 metrics (see Tech_Spec §6.3)
export interface Stat {
  value: string;
  valueHtml?: string; // allows <em>8</em> років
  label: string;
}

export const stats: Stat[] = [
  {
    value: "$30-80K",
    valueHtml: "<em>$30-80K</em>",
    label: "Типовий перший IT-контракт. На цій сумі легко переплатити вдвічі",
  },
  {
    value: "35-70%",
    valueHtml: "<em>35-70%</em>",
    label: "Менше зайвих витрат, коли є якісне планування та розуміння процесів",
  },
  {
    value: "23+",
    valueHtml: "<em>23+</em>",
    label: "IT-проєктів досвіду — ваш проєкт не буде експериментом",
  },
];
