/* ============================================================
 * content/it/tool.js — Italian: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["it"] = window.__CONTENT__["it"] || {};
window.__CONTENT__["it"].categories = window.__CONTENT__["it"].categories || {};

window.__CONTENT__["it"].categories.tool = {
  id: "tool",
  name: "Serie Timer",
  subtitle: "Il «dopo» diventa «adesso» — timer contro la procrastinazione.",
  lineup_title: "Conto alla rovescia secondo la situazione.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Anti-rimando",
  formula: { a: "Strumento", b: "Momento", c: "Risolto" },

  story: {
    tagline: "«Dopo» si trasforma in «adesso».",
    intro: "Per il bambino che dice sempre «ancora 5 minuti».\nTempo e limite per far scattare il cambio.",
    empathy: {
      label: "Lo conosci questo momento?",
      lines: [
        "Appena succede qualcosa prendo il telefono.",
        "Cerco l'app, cerco l'impostazione, mi perdo.",
        "Alla fine… «lascia perdere».",
        "Aspetta, cosa volevo fare?",
        "Voglio solo aprire lo strumento giusto al volo.",
      ],
      pivot: "Le app multifunzione sembrano potenti. Non in questo momento.\nAdesso mi serve una sola cosa.",
      idea_label: "E allora mi è venuta un'idea.",
      idea: "Costruire piccoli strumenti per un singolo momento.\nApri, tocca, fatto.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Tempo",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Lancio",
      formula_b: "Dopo",
      formula_c: "Muoversi nel rilancio",
      concept: "Lancio × Dopo = Muoversi nel rilancio",
      call: ["Facciamo una pausa?", "Un altro lancio?"],
      trick: [
        "Non un «tocca 5 min» — sono l'angolo e lo slancio del lancio a creare il tempo. Anche la fine sembra giusta.",
        "Ogni pianeta ha il suo tempo. Più lontano dal Sole, più lungo; vicinissimo, spirale d'assorbimento.",
        "Solo Plutone è la sfida ∞ senza aumento di gravità col tempo. Battere il record è il premio.",
      ],
    },
  ],
};
