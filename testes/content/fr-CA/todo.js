/* ============================================================
 * content/fr-CA/todo.js — French (Canada) (France): Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["fr-CA"] = window.__CONTENT__["fr-CA"] || {};
window.__CONTENT__["fr-CA"].categories = window.__CONTENT__["fr-CA"].categories || {};

window.__CONTENT__["fr-CA"].categories.todo = {
  id: "todo",
  name: "Série Todo",
  subtitle: "Du «Fais-le !» au «Je veux essayer !» — des applis pour créer des habitudes.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Habitudes",
  formula: { a: "Jeu", b: "Tâches", c: "Habitude" },

  story: {
    tagline: "De «Fais-le !» à «Je vais essayer !».",
    intro: "Des applis qui invitent l'enfant à se mettre en mouvement — par le jeu.",
    empathy: {
      label: "Ça vous parle ?",
      lines: [
        "Élever, c'est dur.",
        "«Fais-le !», ça ne marche pas.",
        "Même en haussant le ton, ils boudent.",
        "La même chose, chaque jour.",
        "Une minute si seulement ils commençaient.",
      ],
      pivot: "Tellement concentrés quand ils jouent.\nSi seulement les tâches étaient pareilles…",
      idea_label: "Alors je me suis dit :",
      idea: "Et si on glissait un peu de jeu dans la liste de tâches,\npour qu'ils démarrent d'eux-mêmes ?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Surprise",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Tâches",
      formula_c: "Bouger par surprise",
      concept: "Gacha × Tâches = Bouger par surprise",
      call: ["Qu'est-ce qui va sortir ?", "Peut-être une capsule récompense ?"],
      trick: [
        "On peut orienter en douceur la tâche qui sort.",
        "Définissez les priorités — manger avant de se brosser les dents.",
        "Mélangez quelques « capsules récompense » par-ci par-là.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Tableau libre",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Tâches",
      formula_c: "Leur propre ordre",
      concept: "Bingo × Tâches = Leur propre ordre",
      call: ["Allez, on fait bingo !", "Bingo = récompense."],
      trick: [
        "Placez les tâches où vous voulez sur la grille.",
        "Choisissez combien de bingos donnent une récompense.",
        "La tâche la plus pénible au centre — un appui = quatre bingos.",
        "Enchaînez les étapes liées en ligne pour qu'ils doivent tout faire.",
        "Ça ressemble à leur choix — mais c'est vous qui décidez l'ordre.",
        "Le bingo calendrier marche très bien pour les vacances ou les examens.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoOie",
      tag: "Petits pas",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Jeu de plateau",
      formula_b: "Tâches",
      formula_c: "Pas à pas",
      concept: "Jeu de plateau × Tâches = Pas à pas",
      call: ["On joue à l'oie ?", "Atteins le pied du mont et tu gagnes."],
      trick: [
        "Ordre totalement verrouillé.",
        "S'asseoir → ouvrir le livre → prendre le crayon → un exercice → récompense → page suivante…",
        "Si le premier pas est assez petit, la suite vient seule.",
        "Chaque parcours a sa densité de cases.",
        "Montagne (final dense) / Espace (début dense) / Bord de rivière (régulier) — au choix de l'humeur.",
      ],
    },
    {
      id: "farm",
      name: "TodoPotager",
      tag: "Croissance",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Croissance",
      formula_b: "Tâches",
      formula_c: "Bouger avec la progression",
      concept: "Croissance × Tâches = Bouger avec la progression",
      call: ["Combien d'eau aujourd'hui ?", "Ça va pousser ?"],
      trick: [
        "On récompense l'effort, pas seulement le fait/pas fait.",
        "Les plantes poussent par tranches de 10 %.",
        "Objectif : un palier de croissance par arrosage.",
        "Si vous dépassez, l'eau change de couleur.",
      ],
    },
  ],
};
