/* ============================================================
 * content/nl-NL/other.js — Dutch: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["nl-NL"] = window.__CONTENT__["nl-NL"] || {};
window.__CONTENT__["nl-NL"].categories = window.__CONTENT__["nl-NL"].categories || {};

window.__CONTENT__["nl-NL"].categories.other = {
  id: "other",
  name: "Other-serie",
  subtitle: "Buiten de opvoedlijn, een bonus op de vlieg gemaakt. Spel · tool · pauze.",
  lineup_title: "Bonus-apps.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Op gevoel", b: "Bouw", c: "Bonus" },

  story: {
    tagline: "Op gevoel, als bonus.",
    intro: "De hoofdlijn is apps die het ouderschap lichter maken. Hiernaast: een bonus, op de vlieg gemaakt.\nSpel, tool, pauze — er staat nog niets.",
    empathy: {
      label: "Soms zo'n behoefte?",
      badge: "Relaxed",
      lines: [
        "Laten we het belangrijke even opzij zetten.",
        "Een spelletje, een tool — wat dan ook.",
        "……Voorlopig staat hier nog niets.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Spel",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minuut",
      formula_b: "Hersenen wakker",
      formula_c: "Frisse lucht",
      concept: "1 minuut × Hersenen wakker = Frisse lucht",
      call: ["Even één puzzeltje?"],
      trick: [
        "Ongeveer een minuut per puzzel.",
        "De moeilijkheid loopt langzaam op.",
        "Zonder reclame.",
      ],
    },
  ],
};
