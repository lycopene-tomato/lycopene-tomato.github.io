/* ============================================================
 * content/hu/record.js — Hungarian: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["hu"] = window.__CONTENT__["hu"] || {};
window.__CONTENT__["hu"].categories = window.__CONTENT__["hu"].categories || {};

window.__CONTENT__["hu"].categories.record = {
  id: "record",
  name: "Log sorozat",
  subtitle: "Kapd el a kis történéseket, lásd a mintát, előzd meg a következőt.",
  lineup_title: "Alkalmazások, amelyek tartalom szerint rendeznek.",
  label_call: "Aggodalom",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Megelőzés",
  formula: { a: "Jegyzetek", b: "Tények", c: "Előzd meg a következőt" },

  story: {
    tagline: "A „már megint\"-ből legyen „most felkészültem\".",
    intro: "Nem érzelmek — jegyzetek. Amikor előbukkan a minta, vele jön a válasz is.",
    empathy: {
      label: "Ma megint…",
      badge: "Stressz",
      lines: [
        "Telefonál az iskola. Megint.",
        "Elszorul a szív.",
        "De ez tényleg „megint\"?",
        "Mint a múltkor? Vagy más?",
        "Csak az emlékezet kevés——.",
      ],
      tried_label: "Pedig jegyzeteltem.",
      tried: [
        "Papíron — később nem találom.",
        "Telefonos jegyzetek: nehéz rendszerezni.",
        "„Nem történt ez már korábban is?\" — és nincs mód utánanézni.",
      ],
      pivot: "Az emlékezet halmozódik, amíg ki nem robban.\nA jegyzet egyetlen pillantásra megmutatja a teljes képet.",
      idea_label: "Akkor eszembe jutott egy ötlet.",
      idea: "Kapd el gyorsan a pillanatot,\nés a minta segítségével előzd meg a következőt.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Iskolai élet",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Jegyzetek",
      formula_b: "Tények",
      formula_c: "Nyugodt reakció",
      concept: "Jegyzetek × Tények = Nyugodt reakció",
      call: ["Ki is volt ○○?", "Ugyanaz a gyerek, mint a múltkori vitában?"],
      trick: [
        "Jegyezd fel a dátumot, helyet, résztvevőket és azt, mi történt.",
        "Arra terveztük, hogy később, hideg fejjel töltsd ki.",
        "Dátum szerint rendezve maguktól előjönnek az ismétlődő minták.",
        "A tanári megbeszélésre csak a lényeget szedd ki.",
        "Csatolj képet vagy hangjegyzetet (minden a készüléken marad).",
        "Export PDF-be vagy szövegbe.",
      ],
    },
  ],
};
