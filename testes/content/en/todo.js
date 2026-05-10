/* ============================================================
 * content/en/todo.js — English: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.en = window.__CONTENT__.en || {};
window.__CONTENT__.en.categories = window.__CONTENT__.en.categories || {};

window.__CONTENT__.en.categories.todo = {
  id: "todo",
  name: "Todo",
  subtitle: "Turn “Do it!” into “I want to try!” — habit-building apps.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Habits",
  formula: { a: "Play", b: "Tasks", c: "Habit" },

  story: {
    tagline: "From “Do it!” to “Let me try!”",
    intro: "Apps that nudge kids to start moving on their own — through play.",
    empathy: {
      label: "Sound familiar?",
      lines: [
        "Parenting is hard.",
        "“Do it!” doesn’t work.",
        "Even when you raise your voice, they just sulk.",
        "The same thing, every single day.",
        "It would be done in a minute, if they just started.",
      ],
      pivot: "They’re so engaged when they play.\nIf only tasks felt the same way…",
      idea_label: "So I had an idea.",
      idea: "What if I mixed a little play into the to-do list,\nso they’d start moving on their own?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "Todo Gacha",
      tag: "Surprise",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Tasks",
      formula_c: "Move with surprise",
      concept: "Gacha × Tasks = Move with surprise",
      call: ["Wonder what we’ll get this time!", "Maybe a reward capsule?"],
      trick: [
        "You can softly steer which task comes out.",
        "Set priorities, e.g. dinner before brushing teeth.",
        "Mix in “reward capsules” here and there.",
      ],
    },
    {
      id: "bingo",
      name: "Todo Bingo",
      tag: "Free layout",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Tasks",
      formula_c: "Move in their own order",
      concept: "Bingo × Tasks = Move in their own order",
      call: ["Stamp your way to bingo!", "Bingo gets you a reward."],
      trick: [
        "Place tasks anywhere on the board.",
        "Choose how many bingos earns a reward.",
        "Put the unwanted task in the middle — one tap = four bingos.",
        "Chain related steps in a line so they have to finish them all.",
        "It feels like their choice — but you set the order.",
        "Calendar bingo works great for summer plans or exam prep.",
      ],
    },
    {
      id: "sugoroku",
      name: "Todo Sugoroku",
      tag: "Tiny steps",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Board game",
      formula_b: "Tasks",
      formula_c: "Move step-by-step",
      concept: "Board game × Tasks = Move step-by-step",
      call: ["Let’s play sugoroku.", "Reach the foothills and you get a reward."],
      trick: [
        "Lock the order completely.",
        "Sit down → open book → grab pencil → solve one → reward → next page…",
        "If the first step is small enough, the rest just follows.",
        "Stages have different square density.",
        "Mountain (back-loaded) / Space (front-loaded) / Riverside (even) — pick by mood.",
      ],
    },
    {
      id: "farm",
      name: "Todo Farm",
      tag: "Growth",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Growth",
      formula_b: "Tasks",
      formula_c: "Move by progress",
      concept: "Growth × Tasks = Move by progress",
      call: ["How much will you water today?", "Will it grow?"],
      trick: [
        "Reward effort, not just done/not-done.",
        "Plants grow 10% at a time.",
        "Aim for one stage of growth per watering.",
        "Push past the goal and the water changes color.",
      ],
    },
  ],
};
