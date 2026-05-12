/* ============================================================
 * content/ca/tool.js — Catalan: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ca"] = window.__CONTENT__["ca"] || {};
window.__CONTENT__["ca"].categories = window.__CONTENT__["ca"].categories || {};

window.__CONTENT__["ca"].categories.tool = {
  id: "tool",
  name: "Sèrie Timer",
  subtitle: "El «després» es converteix en «ara» — temporitzadors contra la procrastinació.",
  lineup_title: "Compte enrere segons la situació.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Antiprocrastinació",
  formula: { a: "Eina", b: "Moment", c: "Resolt" },

  story: {
    tagline: "El «després» es converteix en «ara».",
    intro: "Per a l'infant que sempre diu «cinc minuts més».\nTemps i límit perquè faci clic el canvi.",
    empathy: {
      label: "Coneixes aquest moment?",
      lines: [
        "De seguida que passa alguna cosa, agafo el mòbil.",
        "Busco l'app, busco l'ajust, em perdo.",
        "Al final… «deixa-ho».",
        "Espera, què volia fer?",
        "Només vull obrir l'eina adequada de seguida.",
      ],
      pivot: "Les apps multifunció semblen potents. No en aquest moment.\nAra necessito una sola cosa.",
      idea_label: "Aleshores em va venir una idea.",
      idea: "Fer eines petites per a un sol moment.\nObre, toca — fet.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Temps",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Llançament",
      formula_b: "Després",
      formula_c: "Moure's per relançament",
      concept: "Llançament × Després = Moure's per relançament",
      call: ["Fem una pausa?", "Un altre llançament?"],
      trick: [
        "No és «prem 5 min» — l'angle i la força del llançament fan el temps. El final també queda just.",
        "Cada planeta té el seu temps. Més lluny del Sol: més llarg; molt a prop: espiral que xucla.",
        "Només Plutó és el repte ∞ sense que la gravetat creixi amb el temps. Batre el rècord és la recompensa.",
      ],
    },
  ],
};
