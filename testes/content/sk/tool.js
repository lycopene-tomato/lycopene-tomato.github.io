/* ============================================================
 * content/sk/tool.js — Slovak: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["sk"] = window.__CONTENT__["sk"] || {};
window.__CONTENT__["sk"].categories = window.__CONTENT__["sk"].categories || {};

window.__CONTENT__["sk"].categories.tool = {
  id: "tool",
  name: "Séria Timer",
  subtitle: "„Neskôr\" sa mení na „teraz\" — odpočty proti odkladaniu.",
  lineup_title: "Odpočet podľa situácie.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Proti odkladaniu",
  formula: { a: "Nástroj", b: "Okamih", c: "Hotovo" },

  story: {
    tagline: "„Neskôr\" sa mení na „teraz\".",
    intro: "Pre dieťa, ktoré stále hovorí „ešte päť minút\".\nČas a hranica, ktoré spustia cvaknutie zmeny.",
    empathy: {
      label: "Poznáš ten okamih?",
      lines: [
        "Stačí jedna situácia a hneď siaham po telefóne.",
        "Hľadám aplikáciu, hľadám nastavenie, strácam sa.",
        "Nakoniec… „nechaj to tak\".",
        "Počkať, čo som chcela urobiť?",
        "Chcem len okamžite otvoriť správny nástroj.",
      ],
      pivot: "Multifunkčné appky vyzerajú mocne. Nie v tejto chvíli.\nTeraz potrebujem jednu jedinú vec.",
      idea_label: "Vtedy mi napadlo:",
      idea: "Robiť malé nástroje na jediný okamih.\nOtvor, klepni — hotovo.",
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
      formula_b: "Neskôr",
      formula_c: "Pohyb ďalším hodom",
      concept: "Hod × Neskôr = Pohyb ďalším hodom",
      call: ["Dáme si pauzu?", "Ešte jeden hod?"],
      trick: [
        "Žiadne „stlač 5 min\" — čas tvorí uhol a sila hodu. Aj koniec sa cíti tak akurát.",
        "Každá planéta má svoj čas. Ďalej od Slnka: dlhší; úplne blízko: pohlcujúca špirála.",
        "Iba Pluto je výzva ∞, kde gravitácia s časom nerastie. Prekonanie rekordu je odmena.",
      ],
    },
  ],
};
