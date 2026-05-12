/* ============================================================
 * content/da/other.js — Danish: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["da"] = window.__CONTENT__["da"] || {};
window.__CONTENT__["da"].categories = window.__CONTENT__["da"].categories || {};

window.__CONTENT__["da"].categories.other = {
  id: "other",
  name: "Other-serien",
  subtitle: "Uden for forældreaksen — en bonus lavet i farten. Spil · værktøj · pause.",
  lineup_title: "Bonus-apps.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Efter fornemmelse", b: "Udvikling", c: "Bonus" },

  story: {
    tagline: "Efter fornemmelse — som bonus.",
    intro: "Hovedaksen er apps, der gør forældrelivet lettere. Ved siden af — en bonus lavet i farten.\nSpil, værktøj, pause — der er intet endnu.",
    empathy: {
      label: "Får du nogle gange den lyst?",
      badge: "Let",
      lines: [
        "Læg det vigtige til side et øjeblik.",
        "Et spil, et værktøj — hvad som helst.",
        "……Lige nu er der intet her.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Spil",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minut",
      formula_b: "Væk hjernen",
      formula_c: "Skift luft",
      concept: "1 minut × Væk hjernen = Skift luft",
      call: ["Bare en lille opgave?"],
      trick: [
        "Cirka et minut pr. gåde.",
        "Sværheden stiger langsomt.",
        "Uden reklamer.",
      ],
    },
  ],
};
