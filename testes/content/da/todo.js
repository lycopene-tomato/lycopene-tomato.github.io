/* ============================================================
 * content/da/todo.js — Danish: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["da"] = window.__CONTENT__["da"] || {};
window.__CONTENT__["da"].categories = window.__CONTENT__["da"].categories || {};

window.__CONTENT__["da"].categories.todo = {
  id: "todo",
  name: "Todo-serien",
  subtitle: "Fra \"Gør det nu!\" til \"Det vil jeg prøve!\" — apps der bygger vaner.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Vaner",
  formula: { a: "Leg", b: "Opgaver", c: "Vane" },

  story: {
    tagline: "Fra \"Gør det nu!\" til \"Jeg prøver\".",
    intro: "Apps, der gennem leg inviterer barnet til selv at gå i gang.",
    empathy: {
      label: "Kender du det?",
      lines: [
        "At opdrage er hårdt.",
        "\"Gør det nu!\" virker ikke.",
        "Hæver du stemmen, surmuler de bare.",
        "Det samme, hver eneste dag.",
        "Det ville være klaret på et minut, hvis de bare gik i gang.",
      ],
      pivot: "Når de leger, er de helt opslugte.\nHvis bare opgaverne følte sig sådan…",
      idea_label: "Så fik jeg en idé.",
      idea: "Hvad nu hvis jeg blander lidt leg ind i to-do-listen,\nså de selv går i gang?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Overraskelse",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Opgaver",
      formula_c: "Sæt gang med overraskelse",
      concept: "Gacha × Opgaver = Sæt gang med overraskelse",
      call: ["Hvad kommer der denne gang?", "Måske en belønningskapsel?"],
      trick: [
        "Du kan stille og roligt styre, hvilken opgave der dukker op.",
        "Sæt prioriteter — aftensmad før tandbørstning.",
        "Drys \"belønningskapsler\" ind hist og her.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Fri opstilling",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Opgaver",
      formula_c: "I deres egen rækkefølge",
      concept: "Bingo × Opgaver = I deres egen rækkefølge",
      call: ["Lad os gå efter bingo!", "Bingo = belønning."],
      trick: [
        "Placér opgaver, hvor du vil, på pladen.",
        "Vælg, hvor mange bingoer der giver belønning.",
        "Læg den mest upopulære opgave i midten — et tryk = fire bingoer.",
        "Kæd sammenhængende trin på én række, så alt skal laves.",
        "Det føles som deres valg — men du sætter rækkefølgen.",
        "Kalender-bingo passer fint til ferier eller eksamensuger.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoBræt",
      tag: "Små skridt",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Brætspil",
      formula_b: "Opgaver",
      formula_c: "Skridt for skridt",
      concept: "Brætspil × Opgaver = Skridt for skridt",
      call: ["Skal vi spille bræt?", "Når du når foden af bjerget, får du en belønning."],
      trick: [
        "Rækkefølgen er helt låst.",
        "Sæt dig → åbn bogen → tag blyanten → én opgave → belønning → næste side…",
        "Er det første skridt lille nok, kommer resten af sig selv.",
        "Hver rute har sin egen tæthed af felter.",
        "Bjerg (tæt mod slutningen) / Rum (tæt i begyndelsen) / Flodbred (jævn) — vælg efter humør.",
      ],
    },
    {
      id: "farm",
      name: "TodoHave",
      tag: "Vækst",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Vækst",
      formula_b: "Opgaver",
      formula_c: "Sæt gang med fremgang",
      concept: "Vækst × Opgaver = Sæt gang med fremgang",
      call: ["Hvor meget vander du i dag?", "Mon den vokser?"],
      trick: [
        "Vi belønner indsats, ikke kun gjort/ikke gjort.",
        "Planter vokser i trin på 10 %.",
        "Sigt efter ét vækststrin pr. vanding.",
        "Går du over målet, skifter vandet farve.",
      ],
    },
  ],
};
