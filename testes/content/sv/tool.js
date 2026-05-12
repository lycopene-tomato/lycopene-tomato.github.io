/* ============================================================
 * content/sv/tool.js — Swedish: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["sv"] = window.__CONTENT__["sv"] || {};
window.__CONTENT__["sv"].categories = window.__CONTENT__["sv"].categories || {};

window.__CONTENT__["sv"].categories.tool = {
  id: "tool",
  name: "Timer-serien",
  subtitle: "\"Sen\" blir \"nu\" — timers mot uppskjutande.",
  lineup_title: "Nedräkning efter situation.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Mot uppskjutande",
  formula: { a: "Verktyg", b: "Stund", c: "Klart" },

  story: {
    tagline: "\"Sen\" blir \"nu\".",
    intro: "För barnet som alltid säger \"fem minuter till\".\nTid och gräns som får växeln att klicka.",
    empathy: {
      label: "Känner du igen den här stunden?",
      lines: [
        "Något händer — och jag tar mobilen.",
        "Letar app, letar inställning, tappar bort mig.",
        "Till slut… \"strunt samma\".",
        "Vänta, vad skulle jag göra?",
        "Jag vill bara öppna rätt verktyg direkt.",
      ],
      pivot: "Multiappar ser kraftfulla ut. Men inte i den här stunden.\nNu behöver jag bara en enda sak.",
      idea_label: "Då dök en idé upp.",
      idea: "Bygga små verktyg för en enda stund.\nÖppna, tryck — klart.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Tid",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Kast",
      formula_b: "Sen",
      formula_c: "Kom igång med nytt kast",
      concept: "Kast × Sen = Kom igång med nytt kast",
      call: ["Ta en paus?", "Ett kast till?"],
      trick: [
        "Inte \"tryck 5 min\" — vinkeln och kraften i kastet skapar tiden. Slutet känns också rätt.",
        "Varje planet har sin egen tid. Längre från solen: längre; väldigt nära: en spiral som suger in.",
        "Bara Pluto är ∞-utmaningen utan att gravitationen ökar med tiden. Att slå rekordet är belöningen.",
      ],
    },
  ],
};
