/* ============================================================
 * content/en-US/tool.js — English: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["en-US"] = window.__CONTENT__["en-US"] || {};
window.__CONTENT__["en-US"].categories = window.__CONTENT__["en-US"].categories || {};

window.__CONTENT__["en-US"].categories.tool = {
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
      id: "timer",
      name: "PlanetLoopTimer",
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
