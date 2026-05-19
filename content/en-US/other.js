/* ============================================================
 * content/en-US/other.js — English: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["en-US"] = window.__CONTENT__["en-US"] || {};
window.__CONTENT__["en-US"].categories = window.__CONTENT__["en-US"].categories || {};

window.__CONTENT__["en-US"].categories.other = {
  id: "other",
  name: "Other",
  subtitle: "Off the “make parenting easier” path — a bonus shelf. Games, handy tools, little breathers.",
  lineup_title: "Bonus apps.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "On a whim", b: "Built", c: "Bonus" },

  story: {
    tagline: "On a whim — a bonus.",
    intro: "The main work is the “make parenting a little easier” apps. This is everything else, things made on a whim.\nGames, handy tools, breathers.",
    empathy: {
      label: "Once in a while, this kind of mood?",
      badge: "Easygoing",
      lines: [
        "Set the main thing aside for a sec.",
        "A game, a handy tool — whatever.",
        "Or a memory from when I was a kid.",
      ],
    },
  },

  apps: [
    {
      id: "receive",
      name: "Receive No.1",
      tag: "PC-98",
      appstore_url: "",
      hero_image: "images/apps/receive.jpeg",
      pricing: "Free",
      formula_a: "PC-98",
      formula_b: "Smartphone",
      formula_c: "Memories",
      concept: "PC-98 × Smartphone = Memories",
      call: [
        "BASIC Magazine!?",
        "N88-BASIC",
      ],
      trick: [
        "<<Receive No.1>> The tennis game from back then — now right here.",
        "CPU opponent: implemented. Back then, it was impossible.",
        "GA (Genetic Algorithm) inside — the opponent learns and grows.",
        "Hit detection, trigonometry — original-era logic faithfully reproduced.",
      ],
      code_sample: "670 BEEP:IF SU=T THEN SU=ABS(SU-3) ELSE P(SU)=P(SU)+1\n680 GOSUB *TOKUTENKAKU:IF P(SU)=15 THEN GOTO *SHOUHAI",
      setupSteps: [
        { title: "Just play", desc: "The lower part of the field works as a touchpad." },
        { title: "Era-accurate", desc: "Sometimes the ball passes through your arm — that's the original unfairness." },
        { title: "Timing", desc: "Memories from back then come rushing back." },
      ],
    },
  ],
};
