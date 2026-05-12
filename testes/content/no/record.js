/* ============================================================
 * content/no/record.js — Norwegian: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["no"] = window.__CONTENT__["no"] || {};
window.__CONTENT__["no"].categories = window.__CONTENT__["no"].categories || {};

window.__CONTENT__["no"].categories.record = {
  id: "record",
  name: "Log-serien",
  subtitle: "Fang de små hendelsene, se mønsteret, forebygg neste gang.",
  lineup_title: "Apper som ordner etter innhold.",
  label_call: "Bekymring",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Forebygging",
  formula: { a: "Notater", b: "Fakta", c: "Forebygg neste gang" },

  story: {
    tagline: "Gjør \"igjen\" til \"denne gangen er jeg klar\".",
    intro: "Ikke følelser — notater. Når mønsteret stiger frem, kommer svaret også.",
    empathy: {
      label: "I dag igjen…",
      badge: "Stress",
      lines: [
        "Skolen ringer. Igjen.",
        "Hjertet snører seg.",
        "Men er dette virkelig \"igjen\"?",
        "Likt som sist? Eller annerledes?",
        "Bare minnet er ikke nok——.",
      ],
      tried_label: "Jeg noterte jo.",
      tried: [
        "På papir — finner det ikke etterpå.",
        "Mobilnotater: vanskelig å rydde.",
        "\"Var ikke dette her før?\" — uten mulighet til å sjekke.",
      ],
      pivot: "Hukommelsen hoper seg opp til den sprenger.\nNotatet viser helheten på én gang.",
      idea_label: "Da kom det en idé.",
      idea: "Fange øyeblikket raskt,\nog bruke mønsteret til å forebygge neste gang.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Skolelivet",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Notater",
      formula_b: "Fakta",
      formula_c: "Rolig respons",
      concept: "Notater × Fakta = Rolig respons",
      call: ["Hvem var ○○?", "Samme barn som ved forrige krangel?"],
      trick: [
        "Skriv dato, sted, involverte og hva som skjedde.",
        "Laget for å fylles ut etterpå, når roen har senket seg.",
        "Sorter på dato — gjentakende mønstre dukker opp av seg selv.",
        "Til foreldremøtet — trekk ut bare det essensielle.",
        "Legg ved bilder eller talenotater (alt blir på enheten).",
        "Eksporter til PDF eller tekst.",
      ],
    },
  ],
};
