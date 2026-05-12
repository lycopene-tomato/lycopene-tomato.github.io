/* ============================================================
 * content/no/tool.js — Norwegian: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["no"] = window.__CONTENT__["no"] || {};
window.__CONTENT__["no"].categories = window.__CONTENT__["no"].categories || {};

window.__CONTENT__["no"].categories.tool = {
  id: "tool",
  name: "Timer-serien",
  subtitle: "\"Senere\" blir \"nå\" — timere mot utsettelse.",
  lineup_title: "Nedtelling etter situasjon.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Mot utsettelse",
  formula: { a: "Verktøy", b: "Øyeblikk", c: "Løst" },

  story: {
    tagline: "\"Senere\" blir \"nå\".",
    intro: "For barnet som alltid sier \"fem minutter til\".\nTid og grense som lar bryteren klikke.",
    empathy: {
      label: "Kjenner du dette øyeblikket?",
      lines: [
        "Idet noe skjer tar jeg telefonen.",
        "Leter etter app, leter etter innstilling, går meg bort.",
        "Til slutt… \"glem det\".",
        "Vent, hva skulle jeg gjøre?",
        "Jeg vil bare åpne riktig verktøy med en gang.",
      ],
      pivot: "Multifunksjonsapper ser kraftige ut. Ikke i dette øyeblikket.\nNå trenger jeg bare én ting.",
      idea_label: "Da kom det en idé.",
      idea: "Lage små verktøy for ett enkelt øyeblikk.\nÅpne, trykk — ferdig.",
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
      formula_c: "Kom i gang med et nytt kast",
      concept: "Kast × Senere = Kom i gang med et nytt kast",
      call: ["Tar vi en pause?", "Ett kast til?"],
      trick: [
        "Ikke \"trykk 5 min\" — vinkelen og kraften i kastet skaper tiden. Slutten føles også passe.",
        "Hver planet har sin egen tid. Lenger fra sola: lenger; svært nær: en spiral som suger inn.",
        "Bare Pluto er ∞-utfordringen uten at tyngdekraften øker med tiden. Å slå rekorden er belønningen.",
      ],
    },
  ],
};
