/* ============================================================
 * content/en/other.js — English: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.en = window.__CONTENT__.en || {};
window.__CONTENT__.en.categories = window.__CONTENT__.en.categories || {};

window.__CONTENT__.en.categories.other = {
  id: "other",
  name: "Others",
  subtitle: "Off the parenting axis. Tiny apps for the in-between moments.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Game / Experiment",
  formula: { a: "App", b: "Situation", c: "Breather" },

  story: {
    tagline: "Empty your head — for a minute.",
    intro: "Apps I just wanted to make, because I wanted to.",
    empathy: {
      label: "Ever feel like…?",
      lines: [
        "I want a quick break from parenting.",
        "But long games are too much to keep up with.",
        "Five or ten minutes is plenty.",
        "On the train, in line, before bed.",
        "I want to switch off — but use my brain a little.",
      ],
      pivot: "I want a separate axis from parenting,\na little switch to flip the mood.",
      idea_label: "So I had an idea.",
      idea: "Make small apps for those moments —\nbecause I want to.",
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Game",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minute",
      formula_b: "Brain workout",
      formula_c: "Mood switch",
      concept: "1 minute × Brain workout = Mood switch",
      call: ["Just one puzzle?"],
      trick: [
        "Each puzzle takes about a minute.",
        "Difficulty ramps up gradually.",
        "No ads.",
      ],
    },
  ],
};
