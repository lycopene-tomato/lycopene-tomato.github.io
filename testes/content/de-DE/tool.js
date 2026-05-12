/* ============================================================
 * content/de-DE/tool.js — German: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["de-DE"] = window.__CONTENT__["de-DE"] || {};
window.__CONTENT__["de-DE"].categories = window.__CONTENT__["de-DE"].categories || {};

window.__CONTENT__["de-DE"].categories.tool = {
  id: "tool",
  name: "Timer-Serie",
  subtitle: "Aus „später“ wird „jetzt“ — Timer gegen Aufschieben.",
  lineup_title: "Countdown je nach Situation.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Gegen Aufschieben",
  formula: { a: "Tool", b: "Moment", c: "Erledigt" },

  story: {
    tagline: "„Später“ wird zu „jetzt“.",
    intro: "Für das Kind, das immer „noch fünf Minuten“ sagt.\nZeit und Grenze, damit der Wechsel klickt.",
    empathy: {
      label: "Kennst du diesen Moment?",
      lines: [
        "Sobald etwas passiert, greife ich zum Handy.",
        "Ich suche die App, ich suche die Einstellung, ich verirre mich.",
        "Am Ende… „lass mal“.",
        "Moment, was wollte ich noch machen?",
        "Ich will einfach sofort das richtige Werkzeug öffnen.",
      ],
      pivot: "Multifunktions-Apps wirken mächtig. Nicht in diesem Moment.\nJetzt brauche ich nur eine einzige Sache.",
      idea_label: "Also kam mir eine Idee.",
      idea: "Kleine Werkzeuge bauen, jedes für einen einzigen Moment.\nÖffnen, tippen — fertig.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Zeit",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Wurf",
      formula_b: "Später",
      formula_c: "Im Wiederwurf bewegen",
      concept: "Wurf × Später = Im Wiederwurf bewegen",
      call: ["Machen wir kurz Pause?", "Noch ein Wurf?"],
      trick: [
        "Kein „5 Minuten antippen“ — Winkel und Schwung des Wurfs bauen die Zeit. Auch das Ende fühlt sich stimmig an.",
        "Jeder Planet hat seine eigene Zeit. Weiter weg von der Sonne länger, ganz nah wird man hineingezogen.",
        "Nur Pluto ist die ∞-Challenge, ohne dass die Schwerkraft mit der Zeit zunimmt. Rekord brechen ist die Belohnung.",
      ],
    },
  ],
};
