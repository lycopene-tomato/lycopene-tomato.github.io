/* ============================================================
 * content/fr-CA/tool.js — French (Canada) (France): Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["fr-CA"] = window.__CONTENT__["fr-CA"] || {};
window.__CONTENT__["fr-CA"].categories = window.__CONTENT__["fr-CA"].categories || {};

window.__CONTENT__["fr-CA"].categories.tool = {
  id: "tool",
  name: "Série Timer",
  subtitle: "Le « plus tard » devient « maintenant » — minuteries anti-procrastination.",
  lineup_title: "Compte à rebours selon la situation.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Anti-procrastination",
  formula: { a: "Outil", b: "Moment", c: "Résolu" },

  story: {
    tagline: "« Plus tard » se transforme en « maintenant ».",
    intro: "Pour l'enfant qui dit toujours « encore 5 minutes ».\nDu temps et des limites pour créer le déclic du changement.",
    empathy: {
      label: "Ce moment-là, ça vous parle ?",
      lines: [
        "Je prends mon téléphone dès qu'un truc arrive.",
        "Je cherche l'appli, je cherche le réglage, je me perds.",
        "Au final… « laisse tomber ».",
        "Attends, je voulais faire quoi ?",
        "Je veux juste ouvrir le bon outil tout de suite.",
      ],
      pivot: "Les applis multifonctions ont l'air puissantes. Pas dans ce moment.\nLà, j'ai besoin d'une seule chose.",
      idea_label: "Alors je me suis dit :",
      idea: "Faire de petits outils pour un seul moment précis.\nOuvrir, toucher, c'est fait.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Temps",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Lancement",
      formula_b: "Plus tard",
      formula_c: "Bouger en relançant",
      concept: "Lancement × Plus tard = Bouger en relançant",
      call: ["On fait une pause ?", "On relance une fois ?"],
      trick: [
        "Pas un « appui 5 min » — c'est l'angle et l'élan du lancement qui créent le temps. La fin aussi semble juste.",
        "Chaque planète a son temps. Plus loin du Soleil, plus longue ; tout près, spirale d'absorption.",
        "Seule Pluton est le défi ∞ sans augmentation de gravité avec le temps. Battre le record est la récompense.",
      ],
    },
  ],
};
