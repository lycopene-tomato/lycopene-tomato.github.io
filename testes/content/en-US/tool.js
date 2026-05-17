/* ============================================================
 * content/en-US/tool.js — English: Timer category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["en-US"] = window.__CONTENT__["en-US"] || {};
window.__CONTENT__["en-US"].categories = window.__CONTENT__["en-US"].categories || {};

window.__CONTENT__["en-US"].categories.tool = {
  id: "tool",
  name: "Timer",
  subtitle: "Turn “later” into “now.” Timers built for the kid who keeps putting things off.",
  lineup_title: "Countdowns that fit the moment.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Beat procrastination",
  formula: { a: "Hook", b: "Later", c: "Now" },

  story: {
    tagline: "“Later” becomes “now.”",
    intro: "For the kid stuck on “in a minute” and “just five more.”\nApps that use time and boundaries to make switching gears possible.",
    empathy: {
      label: "Sound familiar?",
      badge: "Dragging it out",
      lines: [
        "“Five more minutes” never ends.",
        "“Just a bit” turns into 30 minutes.",
        "Open a comic and the day is gone.",
        "The more you say “do it,” the more they freeze.",
        "A plain timer only starts a fight.",
      ],
      tried_label: "I’ve tried everything.",
      tried: [
        "Saying “five more minutes” doesn’t help — they don’t feel five minutes yet.",
        "Even during the break, I have to keep calling out “three minutes,” “two minutes.”",
        "Take the screen away and they explode.",
      ],
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Active break",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      pricing: "Free",
      formula_a: "Launch",
      formula_b: "Later",
      formula_c: "One more launch to start",
      concept: "Launch × Later = One more launch to start",
      call: [
        "Take a little break?",
        "Want to launch one more?",
      ],
      trick: [
        "Not “press for 5 minutes” — you set the time yourself by choosing the launch angle and power. The ending feels earned.",
        "Each planet runs on its own clock. The farther from the sun, the longer the orbit; closer in, it spirals down and gets pulled back.",
        "Only Pluto runs the ∞ Challenge — no gravity buildup over time. A reward for beating your own longest record.",
      ],
      setupSteps: [
        { title: "Pick one planet", desc: "Closer planets for a short break, farther ones if you want it longer. We started with the Moon or Mars." },
        { title: "Set the angle and power, then launch", desc: "How hard you pull the arrow decides how long the break runs. Not “5 minutes” — your own gut feel." },
        { title: "When it comes back, choose “one more?”", desc: "Since the break was their choice, the end of it doesn’t turn into a fight. Pluto, with no gravity, is where the longest-record runs happen." },
      ],
    },
  ],
};
