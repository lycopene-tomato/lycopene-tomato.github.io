/* ============================================================
 * content/sk/other.js — Slovak: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["sk"] = window.__CONTENT__["sk"] || {};
window.__CONTENT__["sk"].categories = window.__CONTENT__["sk"].categories || {};

window.__CONTENT__["sk"].categories.other = {
  id: "other",
  name: "Séria Other",
  subtitle: "Mimo osi rodičovstva — bonus vytvorený popri. Hra · nástroj · pauza.",
  lineup_title: "Bonusové aplikácie.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Z pocitu", b: "Vývoj", c: "Bonus" },

  story: {
    tagline: "Z pocitu — ako bonus.",
    intro: "Hlavná os sú aplikácie, ktoré uľahčujú rodičovstvo. Vedľa — bonus vytvorený popri.\nHra, nástroj, pauza — zatiaľ tu nič nie je.",
    empathy: {
      label: "Občas máš takú chuť?",
      badge: "Pohodlne",
      lines: [
        "Odložme dôležité na chvíľu nabok.",
        "Hra, nástroj — čokoľvek.",
        "……Zatiaľ tu nič nie je.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Hra",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minúta",
      formula_b: "Prebudiť mozog",
      formula_c: "Vyvetrať",
      concept: "1 minúta × Prebudiť mozog = Vyvetrať",
      call: ["Len jedna hádanka?"],
      trick: [
        "Asi minúta na hádanku.",
        "Náročnosť stúpa pomaly.",
        "Bez reklám.",
      ],
    },
  ],
};
