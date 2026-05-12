/* ============================================================
 * content/de-DE/todo.js — German: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["de-DE"] = window.__CONTENT__["de-DE"] || {};
window.__CONTENT__["de-DE"].categories = window.__CONTENT__["de-DE"].categories || {};

window.__CONTENT__["de-DE"].categories.todo = {
  id: "todo",
  name: "Todo-Serie",
  subtitle: "Aus „Mach das!“ wird „Will ich ausprobieren!“ — Apps für neue Gewohnheiten.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Gewohnheiten",
  formula: { a: "Spiel", b: "Aufgaben", c: "Gewohnheit" },

  story: {
    tagline: "Aus „Mach das!“ wird „Probier ich mal!“",
    intro: "Apps, die Kinder durchs Spielen anstupsen, von selbst loszulegen.",
    empathy: {
      label: "Kennst du das?",
      lines: [
        "Erziehung ist anstrengend.",
        "„Mach das!“ funktioniert nicht.",
        "Wirst du lauter, ziehen sie sich nur zurück.",
        "Tag für Tag dasselbe Theater.",
        "Würden sie nur anfangen, wäre es in einer Minute erledigt.",
      ],
      pivot: "Beim Spielen sind sie voll dabei.\nWenn Aufgaben sich nur genauso anfühlen würden…",
      idea_label: "Also kam mir eine Idee.",
      idea: "Was, wenn ich ein bisschen Spiel in die To-do-Liste mische,\ndamit sie von allein loslegen?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Überraschung",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Aufgaben",
      formula_c: "Loslegen mit Überraschung",
      concept: "Gacha × Aufgaben = Loslegen mit Überraschung",
      call: ["Was kommt diesmal heraus?", "Vielleicht eine Belohnungskapsel?"],
      trick: [
        "Du kannst leise steuern, welche Aufgabe gezogen wird.",
        "Setze Prioritäten — Abendessen vor Zähneputzen.",
        "Streue „Belohnungskapseln“ zwischendurch ein.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Freie Anordnung",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Aufgaben",
      formula_c: "In eigener Reihenfolge",
      concept: "Bingo × Aufgaben = In eigener Reihenfolge",
      call: ["Auf zum Bingo!", "Bingo = Belohnung."],
      trick: [
        "Platziere Aufgaben frei auf dem Brett.",
        "Lege fest, wie viele Bingos eine Belohnung geben.",
        "Pack die ungeliebte Aufgabe in die Mitte — ein Tipp = vier Bingos.",
        "Verkette zusammenhängende Schritte in einer Reihe, damit alles erledigt wird.",
        "Es fühlt sich nach ihrer Wahl an — die Reihenfolge legst aber du fest.",
        "Kalender-Bingo passt prima für Ferien oder Prüfungsphasen.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoBrett",
      tag: "Kleine Schritte",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Brettspiel",
      formula_b: "Aufgaben",
      formula_c: "Schritt für Schritt",
      concept: "Brettspiel × Aufgaben = Schritt für Schritt",
      call: ["Spielen wir eine Runde Brett?", "Bis zum Berg ans Ziel — und du bekommst eine Belohnung."],
      trick: [
        "Die Reihenfolge ist fest verriegelt.",
        "Hinsetzen → Buch aufschlagen → Stift greifen → eine Aufgabe → Belohnung → nächste Seite…",
        "Ist der erste Schritt klein genug, läuft der Rest fast von allein.",
        "Jede Strecke hat eine andere Felderdichte.",
        "Berg (dichter Schluss) / Weltraum (dichter Start) / Flussufer (gleichmäßig) — je nach Stimmung.",
      ],
    },
    {
      id: "farm",
      name: "TodoGarten",
      tag: "Wachstum",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Wachstum",
      formula_b: "Aufgaben",
      formula_c: "Loslegen mit Fortschritt",
      concept: "Wachstum × Aufgaben = Loslegen mit Fortschritt",
      call: ["Wie viel gießt du heute?", "Wächst es wohl?"],
      trick: [
        "Belohnt wird die Mühe, nicht nur erledigt/nicht erledigt.",
        "Pflanzen wachsen in 10-%-Schritten.",
        "Ziel: eine Wachstumsstufe pro Gießen.",
        "Gießt du mehr als nötig, ändert das Wasser die Farbe.",
      ],
    },
  ],
};
