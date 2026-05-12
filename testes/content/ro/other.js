/* ============================================================
 * content/ro/other.js — Romanian: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ro"] = window.__CONTENT__["ro"] || {};
window.__CONTENT__["ro"].categories = window.__CONTENT__["ro"].categories || {};

window.__CONTENT__["ro"].categories.other = {
  id: "other",
  name: "Seria Other",
  subtitle: "În afara axei parentale — un bonus făcut din mers. Joc · unealtă · pauză.",
  lineup_title: "Aplicații bonus.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Din inspirație", b: "Dezvoltare", c: "Bonus" },

  story: {
    tagline: "Din inspirație — ca bonus.",
    intro: "Axa principală sunt aplicațiile care ușurează parentingul. Alături — un bonus făcut din mers.\nJoc, unealtă, pauză — momentan nu există nimic.",
    empathy: {
      label: "Uneori îți vine cheful ăsta?",
      badge: "Lejer",
      lines: [
        "Să lăsăm deoparte ce e important pentru o clipă.",
        "Un joc, o unealtă — orice.",
        "……Momentan nu există nimic aici.",
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
      formula_b: "Trezirea minții",
      formula_c: "Schimbare de aer",
      concept: "1 minut × Trezirea minții = Schimbare de aer",
      call: ["Doar o ghicitoare?"],
      trick: [
        "Aproximativ un minut pe ghicitoare.",
        "Dificultatea crește lent.",
        "Fără reclame.",
      ],
    },
  ],
};
