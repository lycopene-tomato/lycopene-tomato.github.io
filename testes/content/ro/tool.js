/* ============================================================
 * content/ro/tool.js — Romanian: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ro"] = window.__CONTENT__["ro"] || {};
window.__CONTENT__["ro"].categories = window.__CONTENT__["ro"].categories || {};

window.__CONTENT__["ro"].categories.tool = {
  id: "tool",
  name: "Seria Timer",
  subtitle: "„Mai târziu\" devine „acum\" — cronometre împotriva amânării.",
  lineup_title: "Cronometru potrivit situației.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Anti-amânare",
  formula: { a: "Unealtă", b: "Moment", c: "Rezolvat" },

  story: {
    tagline: "„Mai târziu\" devine „acum\".",
    intro: "Pentru copilul care spune mereu „încă cinci minute\".\nTimp și limită care fac să zboară comutatorul.",
    empathy: {
      label: "Recunoști momentul?",
      lines: [
        "De cum se întâmplă ceva, pun mâna pe telefon.",
        "Caut aplicația, caut setarea, mă pierd.",
        "În final… „las-o baltă\".",
        "Stai, ce voiam să fac?",
        "Vreau doar să deschid pe loc unealta potrivită.",
      ],
      pivot: "Aplicațiile multifuncționale par puternice. Nu în acest moment.\nAcum am nevoie de un singur lucru.",
      idea_label: "Atunci mi-a venit o idee.",
      idea: "Să fac unelte mici pentru un singur moment.\nDeschide, atinge — gata.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Timp",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Aruncare",
      formula_b: "Mai târziu",
      formula_c: "Pornire prin altă aruncare",
      concept: "Aruncare × Mai târziu = Pornire prin altă aruncare",
      call: ["Facem o pauză?", "Încă o aruncare?"],
      trick: [
        "Nu „apasă 5 min\" — unghiul și forța aruncării fac timpul. Și sfârșitul se simte exact cât trebuie.",
        "Fiecare planetă are timpul ei. Mai departe de Soare: mai lung; foarte aproape: spirală care înghite.",
        "Doar Pluto e provocarea ∞ fără ca gravitația să crească cu timpul. Doborârea recordului este recompensa.",
      ],
    },
  ],
};
