/* ============================================================
 * content/da/record.js — Danish: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["da"] = window.__CONTENT__["da"] || {};
window.__CONTENT__["da"].categories = window.__CONTENT__["da"].categories || {};

window.__CONTENT__["da"].categories.record = {
  id: "record",
  name: "Log-serien",
  subtitle: "Fang de små hændelser, se mønsteret, foregrib næste gang.",
  lineup_title: "Apps der ordner efter indhold.",
  label_call: "Bekymring",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Forebyggelse",
  formula: { a: "Noter", b: "Fakta", c: "Foregrib næste gang" },

  story: {
    tagline: "Gør \"igen\" til \"denne gang er jeg klar\".",
    intro: "Ikke følelser — noter. Når mønsteret træder frem, gør svaret det også.",
    empathy: {
      label: "I dag igen…",
      badge: "Stress",
      lines: [
        "Skolen ringer. Igen.",
        "Det knuger om hjertet.",
        "Men er det virkelig \"igen\"?",
        "Det samme som sidst? Eller anderledes?",
        "Hukommelsen alene rækker ikke——.",
      ],
      tried_label: "Jeg noterede da også.",
      tried: [
        "På papir — finder det ikke bagefter.",
        "Mobilens noter: svære at få styr på.",
        "\"Var det ikke sket før?\" — uden mulighed for at tjekke.",
      ],
      pivot: "Hukommelsen hober sig op, indtil den brister.\nNoten viser helheden på én gang.",
      idea_label: "Så fik jeg en idé.",
      idea: "Fange øjeblikket hurtigt,\nog bruge mønsteret til at foregribe næste gang.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Skolelivet",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Noter",
      formula_b: "Fakta",
      formula_c: "Roligt svar",
      concept: "Noter × Fakta = Roligt svar",
      call: ["Hvem var ○○?", "Det samme barn som ved sidste skænderi?"],
      trick: [
        "Skriv dato, sted, hvem der var med og hvad der skete.",
        "Tænkt til at blive udfyldt senere, når roen er sænket sig.",
        "Sortér efter dato — gentagende mønstre dukker op af sig selv.",
        "Til forældremødet — træk kun det væsentlige ud.",
        "Vedhæft billeder eller talenoter (alt bliver på enheden).",
        "Eksportér til PDF eller tekst.",
      ],
    },
  ],
};
