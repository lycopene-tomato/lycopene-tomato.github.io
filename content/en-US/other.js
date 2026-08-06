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
  seoTitle: "retro game ports and other side projects",
  seoDesc: "The bonus shelf, off the make-parenting-easier path: a PC-9801 magazine tennis game ported to iPhone, and other small tools and breathers.",
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
      appstore_url: "https://apps.apple.com/app/id6770316950",
      hero_image: "images/apps/receive.jpeg",
      pricing: "Free",
      formula_a: "PC-98",
      formula_b: "Smartphone",
      formula_c: "Memories",
      concept: "PC-98 × Smartphone = Memories",
      seoTitle: "a PC-9801 N88-BASIC tennis game ported to iPhone",
      seoDesc: "Receive No.1, a 100-line type-in tennis game from the 80s Japanese magazine Bēmaga, ported line-for-line to iPhone — same physics, same trig table — plus a Genetic Algorithm CPU opponent the original hardware couldn’t run.",
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
    {
      id: "pivotmerge",
      name: "Pivot & Merge",
      tag: "2×2 spin",
      appstore_url: "https://apps.apple.com/app/id6795719501",
      hero_image: "images/apps/pivotmerge.jpeg",
      pricing: "Free",
      formula_a: "Rotate",
      formula_b: "Merge",
      formula_c: "Chain",
      concept: "Rotate × Merge = Chain",
      seoTitle: "a number puzzle you play by rotating 2×2 blocks, with no clock",
      seoDesc: "Put a finger on the board and the nearest 2×2 turns with it. Matching numbers merge vertically or horizontally, tiles fall into the gaps, and another match starts a chain. It is turn-based, so nothing is chasing you and the board waits if you stop mid-game.",
      call: [
        "A minute to learn",
        "A lifetime to master",
      ],
      trick: [
        "<<Pivot & Merge>> Put a finger down and spin the nearest 2×2. That is the whole control.",
        "Matching numbers merge. Two of them double, four multiply by eight.",
        "Tiles fall into the gaps and match again — your score multiplies by the chain count.",
        "Turn-based. The board never moves until you touch it, so you can stop anywhere.",
      ],
      setupSteps: [
        { title: "Put a finger down and spin", desc: "The four nearest cells turn under your finger. The angle you release at is the one that sticks; let go while it is still gray and nothing happens." },
        { title: "Merge across or down", desc: "Once my kid learned that four in a square multiply by eight, they started building that shape on purpose." },
        { title: "Watch it fall and match", desc: "The chain keeps going after you lift your finger, and that part we just watch together." },
      ],
    },
  ],
};
