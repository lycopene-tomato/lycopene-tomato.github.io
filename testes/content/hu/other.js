/* ============================================================
 * content/hu/other.js — Hungarian: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["hu"] = window.__CONTENT__["hu"] || {};
window.__CONTENT__["hu"].categories = window.__CONTENT__["hu"].categories || {};

window.__CONTENT__["hu"].categories.other = {
  id: "other",
  name: "Other sorozat",
  subtitle: "A szülői tengelyen kívül — egy mellékesen készült bónusz. Játék · eszköz · szünet.",
  lineup_title: "Bónusz alkalmazások.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bónusz",
  formula: { a: "Megérzésből", b: "Fejlesztés", c: "Bónusz" },

  story: {
    tagline: "Megérzésből — bónuszként.",
    intro: "A főtengely a szülőséget enyhítő alkalmazások. Mellette — egy mellékesen készült bónusz.\nJáték, eszköz, szünet — most még nincs itt semmi.",
    empathy: {
      label: "Néha rád is jön ilyen vágy?",
      badge: "Lazán",
      lines: [
        "Tegyük félre a fontosat egy pillanatra.",
        "Egy játék, egy eszköz — bármi.",
        "……Most még semmi sincs itt.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Játék",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 perc",
      formula_b: "Agyébresztés",
      formula_c: "Friss levegő",
      concept: "1 perc × Agyébresztés = Friss levegő",
      call: ["Csak egy fejtörő?"],
      trick: [
        "Körülbelül egy perc rejtvényenként.",
        "A nehézség lassan nő.",
        "Reklámmentes.",
      ],
    },
  ],
};
