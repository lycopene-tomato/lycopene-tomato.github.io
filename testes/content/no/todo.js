/* ============================================================
 * content/no/todo.js — Norwegian: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["no"] = window.__CONTENT__["no"] || {};
window.__CONTENT__["no"].categories = window.__CONTENT__["no"].categories || {};

window.__CONTENT__["no"].categories.todo = {
  id: "todo",
  name: "Todo-serien",
  subtitle: "Fra \"Gjør det nå!\" til \"Jeg har lyst til å prøve!\" — apper som bygger vaner.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Vaner",
  formula: { a: "Lek", b: "Oppgaver", c: "Vane" },

  story: {
    tagline: "Fra \"Gjør det nå!\" til \"Jeg prøver\".",
    intro: "Apper som inviterer barnet til å starte selv — gjennom lek.",
    empathy: {
      label: "Kjennes det igjen?",
      lines: [
        "Det er slitsomt å oppdra barn.",
        "\"Gjør det nå!\" funker ikke.",
        "Hever du stemmen, surmuler de bare.",
        "Det samme, dag etter dag.",
        "Det hadde tatt et minutt, hvis de bare begynte.",
      ],
      pivot: "Når de leker, er de helt med.\nOm bare oppgavene føltes likedan…",
      idea_label: "Da kom det en idé.",
      idea: "Hva om jeg blander litt lek inn i to-do-listen,\nslik at de starter av seg selv?",
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
      formula_b: "Oppgaver",
      formula_c: "Kom i gang med overraskelse",
      concept: "Gacha × Oppgaver = Kom i gang med overraskelse",
      call: ["Hva kommer denne gangen?", "Kanskje en belønningskapsel?"],
      trick: [
        "Du kan styre lavmælt hvilken oppgave som dukker opp.",
        "Sett prioriteringer — middag før tannpuss.",
        "Strø inn \"belønningskapsler\" her og der.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Fri plassering",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Oppgaver",
      formula_c: "I deres egen rekkefølge",
      concept: "Bingo × Oppgaver = I deres egen rekkefølge",
      call: ["Vi tar bingo!", "Bingo = belønning."],
      trick: [
        "Plasser oppgaver hvor du vil på brettet.",
        "Velg hvor mange bingoer som gir belønning.",
        "Legg den mest upopulære oppgaven i midten — ett trykk = fire bingoer.",
        "Koble sammenhengende steg på én rad slik at alt må gjøres.",
        "Det føles som deres valg — men du setter rekkefølgen.",
        "Kalender-bingo passer godt i ferier eller eksamensuke.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoBrettspill",
      tag: "Små steg",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Brettspill",
      formula_b: "Oppgaver",
      formula_c: "Steg for steg",
      concept: "Brettspill × Oppgaver = Steg for steg",
      call: ["Skal vi ta brettspill?", "Når du er ved foten av fjellet får du belønning."],
      trick: [
        "Rekkefølgen er helt låst.",
        "Sett deg → åpne boken → ta pennen → én oppgave → belønning → neste side…",
        "Er første steg lite nok, kommer resten av seg selv.",
        "Hver rute har sin egen tetthet av felt.",
        "Fjell (tett mot slutt) / Verdensrom (tett i starten) / Elvebredd (jevnt) — velg etter humør.",
      ],
    },
    {
      id: "farm",
      name: "TodoHage",
      tag: "Vekst",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Vekst",
      formula_b: "Oppgaver",
      formula_c: "Kom i gang med fremgang",
      concept: "Vekst × Oppgaver = Kom i gang med fremgang",
      call: ["Hvor mye vanner du i dag?", "Vil den vokse?"],
      trick: [
        "Vi belønner innsats, ikke bare gjort/ikke gjort.",
        "Planter vokser i steg på 10 %.",
        "Sikt på ett veksttrinn per vanning.",
        "Går du over målet, skifter vannet farge.",
      ],
    },
  ],
};
