/* ============================================================
 * content/tr/other.js — Turkish: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["tr"] = window.__CONTENT__["tr"] || {};
window.__CONTENT__["tr"].categories = window.__CONTENT__["tr"].categories || {};

window.__CONTENT__["tr"].categories.other = {
  id: "other",
  name: "Other serisi",
  subtitle: "Ebeveynlik ekseninin dışında — uçarken yapılmış bir bonus. Oyun · araç · mola.",
  lineup_title: "Bonus uygulamalar.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "İçinden gelen", b: "Geliştirme", c: "Bonus" },

  story: {
    tagline: "İçinden geldiği gibi — bonus olarak.",
    intro: "Ana eksen, ebeveynliği hafifletmeyi amaçlayan uygulamalardır. Burası yanında — uçarken yapılmış bir bonus.\nOyun, araç, mola — şimdilik hiçbir şey yok.",
    empathy: {
      label: "Bazen böyle bir istek olur mu?",
      badge: "Rahat",
      lines: [
        "Önemliyi bir yana bırakalım.",
        "Bir oyun, bir araç — fark etmez.",
        "……Şimdilik burada hiçbir şey yok.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Oyun",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 dakika",
      formula_b: "Beyni uyandır",
      formula_c: "Hava değişimi",
      concept: "1 dakika × Beyni uyandır = Hava değişimi",
      call: ["Bir bulmacacık?"],
      trick: [
        "Bilmece başına yaklaşık bir dakika.",
        "Zorluk yavaşça yükselir.",
        "Reklamsız.",
      ],
    },
  ],
};
