/* ============================================================
 * content/en/tool.js — English: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.en = window.__CONTENT__.en || {};
window.__CONTENT__.en.categories = window.__CONTENT__.en.categories || {};

window.__CONTENT__.en.categories.tool = {
  id: "tool",
  name: "Tool",
  subtitle: "Small but reliable tools. One thing, well, right now.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Ad-hoc",
  formula: { a: "Tool", b: "Moment", c: "Solved" },

  story: {
    tagline: "I just need this — right now.",
    intro: "Not multipurpose. Just no-fuss.",
    empathy: {
      label: "Know this moment?",
      lines: [
        "I grab the phone the moment it happens.",
        "Hunt for the app, hunt for the setting, get lost.",
        "And then — “never mind.”",
        "Wait, what was I about to do?",
        "I just want to pull up the right thing instantly.",
      ],
      pivot: "Multi-feature apps look powerful. They aren’t in this moment.\nA single-purpose tool is what I need now.",
      idea_label: "So I had an idea.",
      idea: "Make tiny tools that match a single moment.\nOpen, tap, done.",
    },
  },

  apps: [
    {
      id: "atodeyaru",
      name: "Later Countdown",
      tag: "Switch",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/atodeyaru.jpeg",
      formula_a: "Countdown",
      formula_b: "Switch",
      formula_c: "Smooth transition",
      concept: "Countdown × Switch = Smooth transition",
      call: ["Five minutes, then we go.", "When it hits zero, we start!"],
      trick: [
        "When ‘right now’ won’t work, give a short buffer.",
        "Big, simple time display.",
        "A gentle sound when it finishes.",
        "One tap for your common durations.",
      ],
    },
    {
      id: "timer",
      name: "Plain Timer",
      tag: "Time",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Timer",
      formula_b: "Plain",
      formula_c: "Zero learning curve",
      concept: "Timer × Plain = Zero learning curve",
      call: ["How many minutes?", "Tell me when it rings."],
      trick: [
        "Stripped-down UI — readable at a glance.",
        "Big numbers visible from the lock screen.",
        "Run several at once.",
      ],
    },
  ],
};
