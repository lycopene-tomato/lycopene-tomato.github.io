/* ============================================================
 * content/pl/other.js — Polish: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["pl"] = window.__CONTENT__["pl"] || {};
window.__CONTENT__["pl"].categories = window.__CONTENT__["pl"].categories || {};

window.__CONTENT__["pl"].categories.other = {
  id: "other",
  name: "Seria Other",
  subtitle: "Poza osią rodzicielską — bonus zrobiony z impulsu. Gra · narzędzie · pauza.",
  lineup_title: "Aplikacje bonusowe.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Z impulsu", b: "Rozwój", c: "Bonus" },

  story: {
    tagline: "Z impulsu — jako bonus.",
    intro: "Główna oś to aplikacje, które łagodzą rodzicielstwo. Tu obok — bonus zrobiony z impulsu.\nGra, narzędzie, pauza — na razie nic tu nie ma.",
    empathy: {
      label: "Czasem masz na to ochotę?",
      badge: "Luźno",
      lines: [
        "Odłóżmy ważne sprawy na bok.",
        "Gra, narzędzie — cokolwiek.",
        "……Na razie nic tu nie ma.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Gra",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minuta",
      formula_b: "Pobudka dla mózgu",
      formula_c: "Zmiana powietrza",
      concept: "1 minuta × Pobudka dla mózgu = Zmiana powietrza",
      call: ["Tylko jedna łamigłówka?"],
      trick: [
        "Około minuty na zagadkę.",
        "Trudność rośnie powoli.",
        "Bez reklam.",
      ],
    },
  ],
};
