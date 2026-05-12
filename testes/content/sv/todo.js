/* ============================================================
 * content/sv/todo.js — Swedish: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["sv"] = window.__CONTENT__["sv"] || {};
window.__CONTENT__["sv"].categories = window.__CONTENT__["sv"].categories || {};

window.__CONTENT__["sv"].categories.todo = {
  id: "todo",
  name: "Todo-serien",
  subtitle: "Från \"Gör det nu!\" till \"Jag vill prova!\" — appar som bygger vanor.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Vanor",
  formula: { a: "Lek", b: "Uppgifter", c: "Vana" },

  story: {
    tagline: "Från \"Gör det nu!\" till \"Jag försöker\".",
    intro: "Appar som genom lek lockar barnet att börja själv.",
    empathy: {
      label: "Känns det igen?",
      lines: [
        "Att uppfostra är slitsamt.",
        "\"Gör det nu!\" funkar inte.",
        "Höjer du rösten, bara tjurar de.",
        "Samma sak, varje dag.",
        "På en minut är det klart — om de bara började.",
      ],
      pivot: "När de leker är de helt fokuserade.\nOm bara uppgifterna kändes likadant…",
      idea_label: "Då dök en idé upp.",
      idea: "Tänk om jag blandar in lite lek i att-göra-listan,\nså att de kommer igång själva?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Överraskning",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Uppgifter",
      formula_c: "Sätt fart med överraskning",
      concept: "Gacha × Uppgifter = Sätt fart med överraskning",
      call: ["Vad kommer den här gången?", "Kanske en belöningskapsel?"],
      trick: [
        "Du kan diskret styra vilken uppgift som dyker upp.",
        "Sätt prioriteringar — middag före tandborstning.",
        "Strö in \"belöningskapslar\" här och där.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Fri layout",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Uppgifter",
      formula_c: "I deras egen ordning",
      concept: "Bingo × Uppgifter = I deras egen ordning",
      call: ["Kom igen — bingo!", "Bingo = belöning."],
      trick: [
        "Placera uppgifter var du vill på brickan.",
        "Välj hur många bingo som ger belöning.",
        "Lägg den värsta uppgiften i mitten — ett tryck = fyra bingo.",
        "Kedja relaterade steg på en rad så att allt måste göras.",
        "Det ser ut som deras val — men du sätter ordningen.",
        "Kalender-bingo är perfekt för loven eller tentaveckan.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoBrädspel",
      tag: "Små steg",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Brädspel",
      formula_b: "Uppgifter",
      formula_c: "Steg för steg",
      concept: "Brädspel × Uppgifter = Steg för steg",
      call: ["Ska vi köra brädspel?", "Nå bergets fot, så får du belöning."],
      trick: [
        "Ordningen är helt låst.",
        "Sätt dig → öppna boken → ta pennan → en uppgift → belöning → nästa sida…",
        "Är första steget tillräckligt litet kommer resten av sig själv.",
        "Varje sträcka har sin egen rutdensitet.",
        "Berg (tätt mot slutet) / Rymd (tätt i början) / Älvsida (jämnt) — välj efter humör.",
      ],
    },
    {
      id: "farm",
      name: "TodoTrädgård",
      tag: "Växande",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Växande",
      formula_b: "Uppgifter",
      formula_c: "Sätt fart med framsteg",
      concept: "Växande × Uppgifter = Sätt fart med framsteg",
      call: ["Hur mycket vattnar du idag?", "Kommer det att växa?"],
      trick: [
        "Vi belönar ansträngning, inte bara gjort/ej gjort.",
        "Växterna växer i steg om 10 %.",
        "Sikta på ett växtsteg per vattning.",
        "Vattnar du för mycket byter vattnet färg.",
      ],
    },
  ],
};
