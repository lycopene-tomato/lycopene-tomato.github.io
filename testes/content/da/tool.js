/* ============================================================
 * content/da/tool.js — Danish: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["da"] = window.__CONTENT__["da"] || {};
window.__CONTENT__["da"].categories = window.__CONTENT__["da"].categories || {};

window.__CONTENT__["da"].categories.tool = {
  id: "tool",
  name: "Timer-serien",
  subtitle: "\"Senere\" bliver til \"nu\" — timere mod udsættelse.",
  lineup_title: "Nedtælling efter situation.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Mod udsættelse",
  formula: { a: "Værktøj", b: "Øjeblik", c: "Klaret" },

  story: {
    tagline: "\"Senere\" bliver \"nu\".",
    intro: "Til barnet, der altid siger \"fem minutter mere\".\nTid og grænse, der får knappen til at klikke.",
    empathy: {
      label: "Kender du det øjeblik?",
      lines: [
        "Sker der noget, griber jeg telefonen.",
        "Leder efter app, leder efter indstilling, farer vild.",
        "Til sidst… \"glem det\".",
        "Vent, hvad var det jeg ville?",
        "Jeg vil bare åbne det rigtige værktøj med det samme.",
      ],
      pivot: "Multifunktionsapps ser stærke ud. Ikke i dette øjeblik.\nLige nu har jeg kun brug for én ting.",
      idea_label: "Så fik jeg en idé.",
      idea: "Lave små værktøjer til ét enkelt øjeblik.\nÅbn, tryk — færdig.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Tid",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Kast",
      formula_b: "Senere",
      formula_c: "Sæt gang med et nyt kast",
      concept: "Kast × Senere = Sæt gang med et nyt kast",
      call: ["Tager vi en pause?", "Et kast mere?"],
      trick: [
        "Ikke \"tryk 5 min\" — vinklen og kraften i kastet skaber tiden. Slutningen føles også passende.",
        "Hver planet har sin egen tid. Længere fra solen: længere; meget tæt på: en spiral der suger ind.",
        "Kun Pluto er ∞-udfordringen, hvor tyngdekraften ikke vokser med tiden. At slå rekorden er belønningen.",
      ],
    },
  ],
};
