/* ============================================================
 * content/sl-SI/record.js — Slovenian: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["sl-SI"] = window.__CONTENT__["sl-SI"] || {};
window.__CONTENT__["sl-SI"].categories = window.__CONTENT__["sl-SI"].categories || {};

window.__CONTENT__["sl-SI"].categories.record = {
  id: "record",
  name: "Serija Log",
  subtitle: "Ujemi drobne dogodke, vidi vzorec, prehiteni naslednjič.",
  lineup_title: "Aplikacije, ki razvrščajo po vsebini.",
  label_call: "Skrb",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Preventiva",
  formula: { a: "Zapiski", b: "Dejstva", c: "Prehiteni naslednjič" },

  story: {
    tagline: "Spremeni »spet« v »tokrat sem pripravljena«.",
    intro: "Ne čustva — zapiski. Ko vzorec stopi v ospredje, stopi tudi odgovor.",
    empathy: {
      label: "Danes spet…",
      badge: "Stres",
      lines: [
        "Pokliče šola. Spet.",
        "Srce se stisne.",
        "A je to res »spet«?",
        "Enako kot prejšnjič? Ali drugače?",
        "Sam spomin ne zadošča——.",
      ],
      tried_label: "Saj sem si zapisala.",
      tried: [
        "Na papirju — kasneje jih ne najdem.",
        "Telefonski zapiski: težko jih je urediti.",
        "»Se to ni že zgodilo?« — in nikakor ne morem preveriti.",
      ],
      pivot: "Spomin se kopiči, dokler ne poči.\nZapis pokaže celoto z enim pogledom.",
      idea_label: "Takrat mi je padla na pamet ideja.",
      idea: "Hitro ujeti trenutek,\nin s pomočjo vzorca prehiteti naslednjič.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Šolsko življenje",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Zapiski",
      formula_b: "Dejstva",
      formula_c: "Mirna reakcija",
      concept: "Zapiski × Dejstva = Mirna reakcija",
      call: ["Kdo je bil ○○?", "Isti otrok kot pri prejšnjem prepiru?"],
      trick: [
        "Zapiši datum, kraj, udeležence in kaj se je zgodilo.",
        "Zasnovano za poznejše izpolnjevanje, ko se ohladi.",
        "Razvrščeno po datumu — ponavljajoči se vzorci sami priplavajo na površje.",
        "Za sestanek z učitelji izvleci samo bistvo.",
        "Priloži fotografije ali glasovne zapise (vse ostane v napravi).",
        "Izvoz v PDF ali besedilo.",
      ],
    },
  ],
};
