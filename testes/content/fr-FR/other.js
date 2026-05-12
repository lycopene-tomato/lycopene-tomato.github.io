/* ============================================================
 * content/fr-FR/other.js — French (France): Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["fr-FR"] = window.__CONTENT__["fr-FR"] || {};
window.__CONTENT__["fr-FR"].categories = window.__CONTENT__["fr-FR"].categories || {};

window.__CONTENT__["fr-FR"].categories.other = {
  id: "other",
  name: "Série Other",
  subtitle: "Hors de l'axe parental, un bonus fait à la volée. Jeu · utilitaire · pause.",
  lineup_title: "Apps bonus.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Au feeling", b: "Dev", c: "Bonus" },

  story: {
    tagline: "Au feeling, en bonus.",
    intro: "L'axe principal, ce sont les applis pour alléger la parentalité. Ici, c'est à côté, un bonus fait à la volée.\nJeu, outil, pause — il n'y a encore rien.",
    empathy: {
      label: "Parfois, ce genre d'envie ?",
      badge: "Cool",
      lines: [
        "Mettons l'essentiel de côté.",
        "Un jeu, un outil, peu importe.",
        "……Pour l'instant, il n'y a rien.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Jeu",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minute",
      formula_b: "Réveil cérébral",
      formula_c: "Changement d'air",
      concept: "1 minute × Réveil cérébral = Changement d'air",
      call: ["Juste un casse-tête ?"],
      trick: [
        "Environ une minute par énigme.",
        "La difficulté monte doucement.",
        "Sans pub.",
      ],
    },
  ],
};
