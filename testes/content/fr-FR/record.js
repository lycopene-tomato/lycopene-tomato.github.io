/* ============================================================
 * content/fr-FR/record.js — French (France): Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["fr-FR"] = window.__CONTENT__["fr-FR"] || {};
window.__CONTENT__["fr-FR"].categories = window.__CONTENT__["fr-FR"].categories || {};

window.__CONTENT__["fr-FR"].categories.record = {
  id: "record",
  name: "Série Log",
  subtitle: "Capturer les petits faits, voir le schéma, anticiper la prochaine fois.",
  lineup_title: "Des applis pour ranger par contenu.",
  label_call: "Inquiétude",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Prévention",
  formula: { a: "Notes", b: "Faits", c: "Éviter la prochaine fois" },

  story: {
    tagline: "Transformez « encore » en « cette fois, je suis prêt ».",
    intro: "Pas des émotions, des notes. Quand le motif apparaît, la réponse aussi.",
    empathy: {
      label: "Encore aujourd'hui…",
      badge: "Stress",
      lines: [
        "L'école appelle. Encore.",
        "Le cœur se serre.",
        "Mais est-ce vraiment « encore » ?",
        "Pareil qu'avant ? Ou différent ?",
        "La mémoire seule ne suffit pas——.",
      ],
      tried_label: "J'ai pris des notes, pourtant.",
      tried: [
        "Sur papier, impossible de les retrouver après.",
        "Notes du téléphone : trop dur à organiser.",
        "« Ça s'est déjà passé non ? » sans pouvoir vérifier.",
      ],
      pivot: "La mémoire empile jusqu'à exploser.\nLa note, elle, montre l'ensemble.",
      idea_label: "Alors je me suis dit :",
      idea: "Capturer vite le moment,\net se servir du schéma pour éviter la prochaine.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Vie scolaire",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Notes",
      formula_b: "Faits",
      formula_c: "Réagir calmement",
      concept: "Notes × Faits = Réagir calmement",
      call: ["Qui c'était, ○○ déjà ?", "C'est le même enfant que la dernière dispute ?"],
      trick: [
        "Notez date, lieu, personnes impliquées et ce qui s'est passé.",
        "Pensé pour être rempli plus tard, à froid.",
        "Tri par date : les schémas récurrents émergent.",
        "Extrayez juste l'essentiel pour les réunions parents-profs.",
        "Joignez photos ou notes vocales (tout reste sur l'appareil).",
        "Export en PDF ou texte.",
      ],
    },
  ],
};
