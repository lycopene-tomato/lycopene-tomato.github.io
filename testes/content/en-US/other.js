/* ============================================================
 * content/en-US/other.js — English: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["en-US"] = window.__CONTENT__["en-US"] || {};
window.__CONTENT__["en-US"].categories = window.__CONTENT__["en-US"].categories || {};

window.__CONTENT__["en-US"].categories.other = {
  id: "other",
  name: "Others",
  subtitle: "Off the “make parenting easier” path — a bonus shelf. Games, handy tools, little breathers.",
  lineup_title: "Bonus apps.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "On a whim", b: "Built", c: "Bonus" },

  story: {
    tagline: "On a whim — a bonus.",
    intro: "The main work is the “make parenting a little easier” apps. This is everything else, things made on a whim.\nGames, handy tools, breathers. Nothing here yet, though.",
    empathy: {
      label: "Once in a while, this kind of mood?",
      badge: "Easygoing",
      lines: [
        "Set the main thing aside for a sec.",
        "A game, a handy tool — whatever.",
        "…there’s nothing here yet, though.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Little Puzzle",
      tag: "Game",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minute",
      formula_b: "Brain warm-up",
      formula_c: "Mood switch",
      concept: "1 minute × Brain warm-up = Mood switch",
      call: ["Just one puzzle?"],
      trick: [
        "One puzzle in one minute — built for the in-between moments.",
        "Difficulty rises gradually.",
        "No ads.",
      ],
    },
  ],
};
