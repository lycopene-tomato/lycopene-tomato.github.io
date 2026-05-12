/* ============================================================
 * content/ca/other.js — Catalan: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ca"] = window.__CONTENT__["ca"] || {};
window.__CONTENT__["ca"].categories = window.__CONTENT__["ca"].categories || {};

window.__CONTENT__["ca"].categories.other = {
  id: "other",
  name: "Sèrie Other",
  subtitle: "Fora de l'eix parental — un bonus fet de passada. Joc · eina · pausa.",
  lineup_title: "Apps bonus.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Per intuïció", b: "Desenvolupament", c: "Bonus" },

  story: {
    tagline: "Per intuïció — com a bonus.",
    intro: "L'eix principal són apps que alleugen la criança. Al costat — un bonus fet de passada.\nJoc, eina, pausa — de moment no hi ha res.",
    empathy: {
      label: "De vegades et ve aquesta ganes?",
      badge: "A l'aire",
      lines: [
        "Posem l'important una mica de banda.",
        "Un joc, una eina — el que sigui.",
        "……De moment aquí no hi ha res.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Joc",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minut",
      formula_b: "Desperta el cervell",
      formula_c: "Canvi d'aires",
      concept: "1 minut × Desperta el cervell = Canvi d'aires",
      call: ["Només un enigma?"],
      trick: [
        "Aproximadament un minut per enigma.",
        "La dificultat puja a poc a poc.",
        "Sense anuncis.",
      ],
    },
  ],
};
