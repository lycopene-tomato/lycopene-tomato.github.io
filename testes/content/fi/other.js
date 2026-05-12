/* ============================================================
 * content/fi/other.js — Finnish: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["fi"] = window.__CONTENT__["fi"] || {};
window.__CONTENT__["fi"].categories = window.__CONTENT__["fi"].categories || {};

window.__CONTENT__["fi"].categories.other = {
  id: "other",
  name: "Other-sarja",
  subtitle: "Vanhemmuusakselin ulkopuolella — bonus, joka tehtiin lennossa. Peli · työkalu · tauko.",
  lineup_title: "Bonus-sovellukset.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Fiiliksellä", b: "Kehitys", c: "Bonus" },

  story: {
    tagline: "Fiiliksellä — bonuksena.",
    intro: "Pääakseli on sovelluksia, jotka helpottavat vanhemmuutta. Vieressä — bonus, lennossa tehty.\nPeli, työkalu, tauko — vielä ei ole mitään.",
    empathy: {
      label: "Tuleeko joskus tällainen halu?",
      badge: "Kevyt",
      lines: [
        "Laitetaan tärkeä syrjään hetkeksi.",
        "Peli, työkalu — mikä vain.",
        "……Toistaiseksi täällä ei ole mitään.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Peli",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minuutti",
      formula_b: "Aivot ylös",
      formula_c: "Tuuletus",
      concept: "1 minuutti × Aivot ylös = Tuuletus",
      call: ["Yksi pieni pulma?"],
      trick: [
        "Noin minuutti per pulma.",
        "Vaikeustaso nousee hitaasti.",
        "Ei mainoksia.",
      ],
    },
  ],
};
