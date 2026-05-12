/* ============================================================
 * content/cs/other.js — Czech: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["cs"] = window.__CONTENT__["cs"] || {};
window.__CONTENT__["cs"].categories = window.__CONTENT__["cs"].categories || {};

window.__CONTENT__["cs"].categories.other = {
  id: "other",
  name: "Série Other",
  subtitle: "Mimo osu rodičovství — bonus vytvořený mimochodem. Hra · nástroj · pauza.",
  lineup_title: "Bonusové aplikace.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Z popudu", b: "Vývoj", c: "Bonus" },

  story: {
    tagline: "Z popudu — jako bonus.",
    intro: "Hlavní osu tvoří aplikace, které ulevují rodičovství. Vedle nich — bonus vytvořený mimochodem.\nHra, nástroj, pauza — zatím tu nic není.",
    empathy: {
      label: "Občas takhle máš chuť?",
      badge: "V pohodě",
      lines: [
        "Odložme to důležité stranou.",
        "Hra, nástroj — cokoli.",
        "……Zatím tu nic není.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Hra",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minuta",
      formula_b: "Probudit mozek",
      formula_c: "Vyvětrat",
      concept: "1 minuta × Probudit mozek = Vyvětrat",
      call: ["Jen jednu hádanku?"],
      trick: [
        "Asi minuta na hádanku.",
        "Obtížnost roste pomalu.",
        "Bez reklam.",
      ],
    },
  ],
};
