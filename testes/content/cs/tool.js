/* ============================================================
 * content/cs/tool.js — Czech: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["cs"] = window.__CONTENT__["cs"] || {};
window.__CONTENT__["cs"].categories = window.__CONTENT__["cs"].categories || {};

window.__CONTENT__["cs"].categories.tool = {
  id: "tool",
  name: "Série Timer",
  subtitle: "„Potom\" se mění na „teď\" — odpočty proti odkládání.",
  lineup_title: "Odpočet podle situace.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Proti odkládání",
  formula: { a: "Nástroj", b: "Okamžik", c: "Hotovo" },

  story: {
    tagline: "„Potom\" se mění na „teď\".",
    intro: "Pro dítě, které pořád říká „ještě pět minut\".\nČas a hranice, které spustí cvaknutí změny.",
    empathy: {
      label: "Znáš ten okamžik?",
      lines: [
        "Stačí jedna situace a hned beru telefon.",
        "Hledám aplikaci, hledám nastavení, ztrácím se.",
        "Nakonec… „nech to být\".",
        "Počkat, co jsem chtěla dělat?",
        "Chci jen okamžitě otevřít ten správný nástroj.",
      ],
      pivot: "Multifunkční appky vypadají mocně. Ne v tuhle chvíli.\nTeď potřebuji jedinou věc.",
      idea_label: "Tehdy mě napadlo:",
      idea: "Dělat malé nástroje pro jediný okamžik.\nOtevři, klepni — hotovo.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Čas",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Hod",
      formula_b: "Potom",
      formula_c: "Pohyb dalším hodem",
      concept: "Hod × Potom = Pohyb dalším hodem",
      call: ["Dáme si pauzu?", "Ještě jeden hod?"],
      trick: [
        "Žádné „stiskni 5 min\" — čas vytváří úhel a síla hodu. I konec se cítí tak akorát.",
        "Každá planeta má svůj čas. Dál od Slunce: delší; úplně blízko: spirála pohlcení.",
        "Jen Pluto je výzva ∞, kde gravitace s časem neroste. Pokoření rekordu je odměna.",
      ],
    },
  ],
};
