/* ============================================================
 * content/de-DE/record.js — German: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["de-DE"] = window.__CONTENT__["de-DE"] || {};
window.__CONTENT__["de-DE"].categories = window.__CONTENT__["de-DE"].categories || {};

window.__CONTENT__["de-DE"].categories.record = {
  id: "record",
  name: "Log-Serie",
  subtitle: "Kleine Vorfälle festhalten, das Muster erkennen, dem nächsten Mal zuvorkommen.",
  lineup_title: "Apps, die nach Inhalt sortieren.",
  label_call: "Sorge",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Vorsorge",
  formula: { a: "Notizen", b: "Fakten", c: "Nächstes Mal abfedern" },

  story: {
    tagline: "Aus „schon wieder“ wird „diesmal bin ich bereit“.",
    intro: "Keine Gefühle, Notizen. Sobald das Muster sichtbar wird, taucht auch die Antwort auf.",
    empathy: {
      label: "Auch heute wieder…",
      badge: "Stress",
      lines: [
        "Die Schule ruft an. Schon wieder.",
        "Das Herz zieht sich zusammen.",
        "Aber ist es wirklich „schon wieder“?",
        "Genauso wie davor? Oder anders?",
        "Mein Gedächtnis allein reicht nicht aus——.",
      ],
      tried_label: "Notizen habe ich doch gemacht.",
      tried: [
        "Auf Papier finde ich später nichts wieder.",
        "Im Handy-Notizblock: schwer zu ordnen.",
        "„Das hatten wir schon mal, oder?“ — ohne nachschlagen zu können.",
      ],
      pivot: "Erinnerung stapelt sich, bis sie kippt.\nNotizen zeigen das Ganze auf einen Blick.",
      idea_label: "Also kam mir eine Idee.",
      idea: "Den Moment schnell festhalten\nund mit dem Muster dem nächsten Mal zuvorkommen.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Schulalltag",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Notizen",
      formula_b: "Fakten",
      formula_c: "Ruhig reagieren",
      concept: "Notizen × Fakten = Ruhig reagieren",
      call: ["Wer war ○○ noch mal?", "Ist das dasselbe Kind wie beim letzten Streit?"],
      trick: [
        "Notiere Datum, Ort, Beteiligte und was passiert ist.",
        "Bewusst dafür gemacht, später in Ruhe ausgefüllt zu werden.",
        "Sortiert nach Datum tauchen wiederkehrende Muster auf.",
        "Für Elterngespräche genau das Wesentliche herausziehen.",
        "Fotos oder Sprachnotizen anhängen (bleibt auf dem Gerät).",
        "Export als PDF oder Text.",
      ],
    },
  ],
};
