/* ============================================================
 * content/sv/other.js — Swedish: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["sv"] = window.__CONTENT__["sv"] || {};
window.__CONTENT__["sv"].categories = window.__CONTENT__["sv"].categories || {};

window.__CONTENT__["sv"].categories.other = {
  id: "other",
  name: "Other-serien",
  subtitle: "Utanför föräldraskapsaxeln — en bonus gjord på en infall. Spel · verktyg · paus.",
  lineup_title: "Bonusappar.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "På känsla", b: "Utveckling", c: "Bonus" },

  story: {
    tagline: "På känsla — som en bonus.",
    intro: "Huvudaxeln är appar som lättar på föräldraskapet. Vid sidan om: en bonus gjord på en infall.\nSpel, verktyg, paus — det finns inget än.",
    empathy: {
      label: "Får du ibland den lusten?",
      badge: "Lätt",
      lines: [
        "Lägg det viktiga åt sidan en stund.",
        "Ett spel, ett verktyg — vad som helst.",
        "……Just nu finns inget här.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Spel",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minut",
      formula_b: "Väck hjärnan",
      formula_c: "Byt luft",
      concept: "1 minut × Väck hjärnan = Byt luft",
      call: ["Bara ett pussel?"],
      trick: [
        "Ungefär en minut per pussel.",
        "Svårigheten stiger sakta.",
        "Utan reklam.",
      ],
    },
  ],
};
