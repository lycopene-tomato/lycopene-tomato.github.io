/* ============================================================
 * content/it/other.js — Italian: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["it"] = window.__CONTENT__["it"] || {};
window.__CONTENT__["it"].categories = window.__CONTENT__["it"].categories || {};

window.__CONTENT__["it"].categories.other = {
  id: "other",
  name: "Serie Other",
  subtitle: "Fuori dall'asse genitoriale, un bonus fatto al volo. Gioco · strumento · pausa.",
  lineup_title: "App bonus.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Di pancia", b: "Sviluppo", c: "Bonus" },

  story: {
    tagline: "Di pancia, come bonus.",
    intro: "L'asse principale sono le app per alleggerire la genitorialità. Qui di fianco, un bonus fatto al volo.\nGioco, strumento, pausa — per ora non c'è niente.",
    empathy: {
      label: "A volte ti viene questa voglia?",
      badge: "Sciolti",
      lines: [
        "Mettiamo da parte l'essenziale.",
        "Un gioco, uno strumento — non importa cosa.",
        "……Per ora qui non c'è nulla.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Gioco",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minuto",
      formula_b: "Sveglia il cervello",
      formula_c: "Cambio di aria",
      concept: "1 minuto × Sveglia il cervello = Cambio di aria",
      call: ["Solo un rompicapo?"],
      trick: [
        "Circa un minuto per enigma.",
        "La difficoltà sale piano piano.",
        "Senza pubblicità.",
      ],
    },
  ],
};
