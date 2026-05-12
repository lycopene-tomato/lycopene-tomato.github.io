/* ============================================================
 * content/nl-NL/todo.js — Dutch: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["nl-NL"] = window.__CONTENT__["nl-NL"] || {};
window.__CONTENT__["nl-NL"].categories = window.__CONTENT__["nl-NL"].categories || {};

window.__CONTENT__["nl-NL"].categories.todo = {
  id: "todo",
  name: "Todo-serie",
  subtitle: "Van „Doe het nou!\" naar „Ik wil het proberen!\" — apps die gewoontes bouwen.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Gewoontes",
  formula: { a: "Spel", b: "Taken", c: "Gewoonte" },

  story: {
    tagline: "Van „Doe het nou!\" naar „Ik probeer het wel.\"",
    intro: "Apps die kinderen door spel een zetje geven om zelf te beginnen.",
    empathy: {
      label: "Klinkt bekend?",
      lines: [
        "Opvoeden is pittig.",
        "„Doe het nou!\" werkt niet.",
        "Zelfs als je je stem verheft, mokken ze gewoon.",
        "Elke dag hetzelfde liedje.",
        "Was in een minuut gedaan, als ze maar zouden beginnen.",
      ],
      pivot: "Als ze spelen zijn ze volledig betrokken.\nAls taken zich nu maar zo voelden…",
      idea_label: "Toen kwam er een idee.",
      idea: "Wat als ik een beetje spel door het takenlijstje meng,\nzodat ze uit zichzelf beginnen?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Verrassing",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Taken",
      formula_c: "In beweging door verrassing",
      concept: "Gacha × Taken = In beweging door verrassing",
      call: ["Wat komt er deze keer uit?", "Misschien een beloningscapsule?"],
      trick: [
        "Je stuurt subtiel welke taak naar boven komt.",
        "Stel prioriteiten in — eten vóór tandenpoetsen.",
        "Strooi af en toe „beloningscapsules\" tussen de taken.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Vrij indelen",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Taken",
      formula_c: "Eigen volgorde",
      concept: "Bingo × Taken = Eigen volgorde",
      call: ["Kom op, bingo halen!", "Bingo = beloning."],
      trick: [
        "Plaats taken waar je wilt op het bord.",
        "Kies hoeveel bingo's één beloning opleveren.",
        "Zet de vervelendste taak in het midden — één tik = vier bingo's.",
        "Schakel samenhangende stappen op één lijn, zodat alles moet gebeuren.",
        "Het voelt als hun keuze — maar jij bepaalt de volgorde.",
        "Kalender-bingo werkt prima voor vakantie of tentamenweek.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoGanzenbord",
      tag: "Kleine stappen",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Bordspel",
      formula_b: "Taken",
      formula_c: "Stap voor stap",
      concept: "Bordspel × Taken = Stap voor stap",
      call: ["Zullen we ganzenbord spelen?", "Bereik de voet van de berg en je krijgt een beloning."],
      trick: [
        "Volgorde is volledig vergrendeld.",
        "Gaan zitten → boek openen → potlood pakken → één opgave → beloning → volgende pagina…",
        "Is de eerste stap klein genoeg, dan komt de rest vanzelf.",
        "Elke route heeft zijn eigen dichtheid van vakjes.",
        "Berg (dichter aan het eind) / Ruimte (dichter aan het begin) / Rivieroever (gelijkmatig) — kies naar bui.",
      ],
    },
    {
      id: "farm",
      name: "TodoMoestuin",
      tag: "Groei",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Groei",
      formula_b: "Taken",
      formula_c: "Voortgang voedt actie",
      concept: "Groei × Taken = Voortgang voedt actie",
      call: ["Hoeveel water vandaag?", "Zou het groeien?"],
      trick: [
        "Inspanning telt, niet alleen klaar/niet klaar.",
        "Planten groeien in stappen van 10%.",
        "Mik op één groeistap per keer water geven.",
        "Schiet je voorbij het doel, dan verandert het water van kleur.",
      ],
    },
  ],
};
