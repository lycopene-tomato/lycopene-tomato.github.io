/* ============================================================
 * content/hu/tool.js — Hungarian: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["hu"] = window.__CONTENT__["hu"] || {};
window.__CONTENT__["hu"].categories = window.__CONTENT__["hu"].categories || {};

window.__CONTENT__["hu"].categories.tool = {
  id: "tool",
  name: "Timer sorozat",
  subtitle: "A „majd később\"-ből „most\" lesz — időzítők a halogatás ellen.",
  lineup_title: "Visszaszámlálás helyzetre szabva.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Halogatás ellen",
  formula: { a: "Eszköz", b: "Pillanat", c: "Megoldva" },

  story: {
    tagline: "A „majd később\"-ből „most\" lesz.",
    intro: "Annak a gyereknek, aki mindig azt mondja: „még öt percet\".\nIdő és határ, amitől kattan a váltás.",
    empathy: {
      label: "Ismerős ez a pillanat?",
      lines: [
        "Bármi történjék, rögtön a telefonért nyúlok.",
        "Keresem az appot, keresem a beállítást, elveszek.",
        "A végén… „hagyjuk\".",
        "Várjunk, mit is akartam csinálni?",
        "Csak azonnal meg akarom nyitni a megfelelő eszközt.",
      ],
      pivot: "A többfunkciós alkalmazások erősnek tűnnek. De most nem.\nMost egyetlen dologra van szükségem.",
      idea_label: "Akkor eszembe jutott egy ötlet.",
      idea: "Csináljunk kis eszközöket egyetlen pillanatra.\nMegnyit, koppint — kész.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Idő",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Dobás",
      formula_b: "Később",
      formula_c: "Indulás újabb dobással",
      concept: "Dobás × Később = Indulás újabb dobással",
      call: ["Tartsunk szünetet?", "Még egy dobás?"],
      trick: [
        "Nem „nyomd 5 percre\" — az idő a dobás szögéből és erejéből születik. A vége is pont jó érzés.",
        "Minden bolygónak megvan a saját ideje. Naptól távolabb: hosszabb; egészen közel: elnyelő spirál.",
        "Csak a Plútó a ∞-kihívás, ahol a gravitáció nem nő az idővel. A rekord megdöntése a jutalom.",
      ],
    },
  ],
};
