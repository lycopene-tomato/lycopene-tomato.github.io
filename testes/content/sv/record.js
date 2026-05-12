/* ============================================================
 * content/sv/record.js — Swedish: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["sv"] = window.__CONTENT__["sv"] || {};
window.__CONTENT__["sv"].categories = window.__CONTENT__["sv"].categories || {};

window.__CONTENT__["sv"].categories.record = {
  id: "record",
  name: "Log-serien",
  subtitle: "Fånga små händelser, se mönstret, förekom nästa gång.",
  lineup_title: "Appar som sorterar efter innehåll.",
  label_call: "Oro",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Förebyggande",
  formula: { a: "Anteckningar", b: "Fakta", c: "Förekom nästa gång" },

  story: {
    tagline: "Gör om \"igen\" till \"den här gången är jag redo\".",
    intro: "Inte känslor — anteckningar. När mönstret träder fram, gör svaret det också.",
    empathy: {
      label: "Idag igen…",
      badge: "Stress",
      lines: [
        "Skolan ringer. Igen.",
        "Hjärtat dras ihop.",
        "Men är det verkligen \"igen\"?",
        "Samma som förra gången? Eller annat?",
        "Bara minnet räcker inte——.",
      ],
      tried_label: "Jag antecknade ju.",
      tried: [
        "På papper — hittar inte sen.",
        "Telefonens anteckningar: svåra att ordna.",
        "\"Var det inte så förra gången?\" — utan möjlighet att kolla.",
      ],
      pivot: "Minnet staplas tills det brister.\nAnteckningen visar helheten på en gång.",
      idea_label: "Då dök en idé upp.",
      idea: "Fånga ögonblicket snabbt,\noch använd mönstret för att förekomma nästa gång.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Skollivet",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Anteckningar",
      formula_b: "Fakta",
      formula_c: "Lugn respons",
      concept: "Anteckningar × Fakta = Lugn respons",
      call: ["Vem var ○○?", "Samma barn som vid förra bråket?"],
      trick: [
        "Notera datum, plats, inblandade och vad som hände.",
        "Tänkt att fyllas i senare, när det lugnat sig.",
        "Sortera efter datum och återkommande mönster dyker upp av sig själva.",
        "Inför föräldramöte — dra ut bara det väsentliga.",
        "Bifoga bilder eller röstanteckningar (allt stannar på enheten).",
        "Exportera som PDF eller text.",
      ],
    },
  ],
};
