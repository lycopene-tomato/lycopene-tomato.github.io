/* ============================================================
 * content/nl-NL/record.js — Dutch: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["nl-NL"] = window.__CONTENT__["nl-NL"] || {};
window.__CONTENT__["nl-NL"].categories = window.__CONTENT__["nl-NL"].categories || {};

window.__CONTENT__["nl-NL"].categories.record = {
  id: "record",
  name: "Log-serie",
  subtitle: "Vang de kleine feiten, zie het patroon, voorkom de volgende keer.",
  lineup_title: "Apps om op inhoud te sorteren.",
  label_call: "Zorg",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Preventie",
  formula: { a: "Notities", b: "Feiten", c: "Volgende keer voor zijn" },

  story: {
    tagline: "Verander „alweer\" in „deze keer ben ik er klaar voor\".",
    intro: "Geen emoties, notities. Zodra het patroon zichtbaar wordt, komt ook het antwoord naar boven.",
    empathy: {
      label: "Vandaag weer…",
      badge: "Stress",
      lines: [
        "De school belt. Alweer.",
        "Mijn hart krimpt ineen.",
        "Maar is dit echt „alweer\"?",
        "Hetzelfde als de vorige keer? Of anders?",
        "Alleen op het geheugen kan ik niet vertrouwen——.",
      ],
      tried_label: "Notities had ik toch gemaakt.",
      tried: [
        "Op papier vind ik ze later niet meer terug.",
        "Notities op de telefoon: te moeilijk te ordenen.",
        "„Was dit niet al eens gebeurd?\" — zonder dat ik het kan nakijken.",
      ],
      pivot: "Het geheugen stapelt op tot het barst.\nNotities laten het hele plaatje zien.",
      idea_label: "Toen kwam er een idee.",
      idea: "Het moment snel vastleggen\nen met het patroon de volgende keer voor zijn.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Schoolleven",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Notities",
      formula_b: "Feiten",
      formula_c: "Rustig reageren",
      concept: "Notities × Feiten = Rustig reageren",
      call: ["Wie was ○○ ook alweer?", "Is dit hetzelfde kind als de vorige ruzie?"],
      trick: [
        "Noteer datum, plek, betrokkenen en wat er is gebeurd.",
        "Bedoeld om later in te vullen, als het is bekoeld.",
        "Op datum sorteren: terugkerende patronen komen vanzelf bovendrijven.",
        "Voor oudergesprekken trek je alleen de hoofdpunten eruit.",
        "Voeg foto's of spraakmemo's toe (blijft op het toestel).",
        "Exporteer als PDF of tekst.",
      ],
    },
  ],
};
