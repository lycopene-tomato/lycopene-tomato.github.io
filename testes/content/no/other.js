/* ============================================================
 * content/no/other.js — Norwegian: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["no"] = window.__CONTENT__["no"] || {};
window.__CONTENT__["no"].categories = window.__CONTENT__["no"].categories || {};

window.__CONTENT__["no"].categories.other = {
  id: "other",
  name: "Other-serien",
  subtitle: "Utenfor foreldreaksen — en bonus laget på sparket. Spill · verktøy · pause.",
  lineup_title: "Bonusapper.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "På innfall", b: "Utvikling", c: "Bonus" },

  story: {
    tagline: "På innfall — som bonus.",
    intro: "Hovedlinjen er apper som letter foreldrerollen. Ved siden av — en bonus laget på sparket.\nSpill, verktøy, pause — det er ingenting her ennå.",
    empathy: {
      label: "Får du av og til en slik lyst?",
      badge: "Lett",
      lines: [
        "Sett det viktige til side en stund.",
        "Et spill, et verktøy — hva som helst.",
        "……Akkurat nå er det ingenting her.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Spill",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minutt",
      formula_b: "Vekk hjernen",
      formula_c: "Bytt luft",
      concept: "1 minutt × Vekk hjernen = Bytt luft",
      call: ["Bare ett puslespill?"],
      trick: [
        "Omtrent ett minutt per oppgave.",
        "Vanskelighetsgraden stiger sakte.",
        "Uten reklame.",
      ],
    },
  ],
};
