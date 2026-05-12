/* ============================================================
 * content/nl-NL/tool.js — Dutch: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["nl-NL"] = window.__CONTENT__["nl-NL"] || {};
window.__CONTENT__["nl-NL"].categories = window.__CONTENT__["nl-NL"].categories || {};

window.__CONTENT__["nl-NL"].categories.tool = {
  id: "tool",
  name: "Timer-serie",
  subtitle: "„Straks\" wordt „nu\" — timers tegen uitstelgedrag.",
  lineup_title: "Aftellen passend bij de situatie.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Tegen uitstellen",
  formula: { a: "Tool", b: "Moment", c: "Opgelost" },

  story: {
    tagline: "„Straks\" verandert in „nu\".",
    intro: "Voor het kind dat altijd „nog vijf minuten\" zegt.\nTijd en grens zorgen voor het klik-moment.",
    empathy: {
      label: "Ken je dit moment?",
      lines: [
        "Zodra er iets gebeurt, pak ik de telefoon.",
        "Ik zoek de app, ik zoek de instelling, ik verdwaal.",
        "Uiteindelijk… „laat maar\".",
        "Wacht, wat wilde ik ook alweer doen?",
        "Ik wil gewoon meteen het juiste gereedschap openen.",
      ],
      pivot: "Multitool-apps zien er krachtig uit. Niet op dit moment.\nIk heb nu maar één ding nodig.",
      idea_label: "Toen kwam er een idee.",
      idea: "Maak kleine tools voor één enkel moment.\nOpenen, tikken — klaar.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Tijd",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Worp",
      formula_b: "Straks",
      formula_c: "Met de herworp meebewegen",
      concept: "Worp × Straks = Met de herworp meebewegen",
      call: ["Even pauze?", "Nog een worp?"],
      trick: [
        "Geen „tik 5 min\" — hoek en zwaai van de worp maken de tijd. Ook het einde voelt kloppend.",
        "Elke planeet heeft zijn eigen tijd. Verder van de zon: langer; vlakbij: opslokkende spiraal.",
        "Alleen Pluto is de ∞-uitdaging, zonder dat de zwaartekracht met de tijd toeneemt. Het record breken is de beloning.",
      ],
    },
  ],
};
