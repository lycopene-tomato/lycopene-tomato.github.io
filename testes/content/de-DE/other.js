/* ============================================================
 * content/de-DE/other.js — German: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["de-DE"] = window.__CONTENT__["de-DE"] || {};
window.__CONTENT__["de-DE"].categories = window.__CONTENT__["de-DE"].categories || {};

window.__CONTENT__["de-DE"].categories.other = {
  id: "other",
  name: "Other-Serie",
  subtitle: "Abseits der Erziehungs-Achse — Spaß-Bonus, einfach so gebaut. Spiel · Tool · Pause.",
  lineup_title: "Bonus-Apps.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Bauchgefühl", b: "Entwicklung", c: "Bonus" },

  story: {
    tagline: "Aus dem Bauch heraus — als Bonus.",
    intro: "Die Hauptlinie sind Apps, die Erziehung leichter machen. Hier daneben — ein Bonus, mal eben so gebaut.\nSpiel, Werkzeug, Pause — noch ist nichts da.",
    empathy: {
      label: "Manchmal so eine Lust?",
      badge: "Locker",
      lines: [
        "Lassen wir das Wichtige mal beiseite.",
        "Ein Spiel, ein Tool — egal was.",
        "……Im Moment ist hier noch nichts.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Spiel",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 Minute",
      formula_b: "Gehirn-Weckruf",
      formula_c: "Kopfwechsel",
      concept: "1 Minute × Gehirn-Weckruf = Kopfwechsel",
      call: ["Nur ein kleines Rätsel?"],
      trick: [
        "Etwa eine Minute pro Rätsel.",
        "Die Schwierigkeit steigt langsam an.",
        "Werbefrei.",
      ],
    },
  ],
};
