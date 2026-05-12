/* ============================================================
 * content/it/record.js — Italian: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["it"] = window.__CONTENT__["it"] || {};
window.__CONTENT__["it"].categories = window.__CONTENT__["it"].categories || {};

window.__CONTENT__["it"].categories.record = {
  id: "record",
  name: "Serie Log",
  subtitle: "Annota i piccoli fatti, vedi lo schema, anticipa la prossima volta.",
  lineup_title: "App per archiviare per contenuto.",
  label_call: "Preoccupazione",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Prevenzione",
  formula: { a: "Note", b: "Fatti", c: "Prevenire la prossima" },

  story: {
    tagline: "Trasforma «di nuovo» in «stavolta sono pronta».",
    intro: "Non emozioni, note. Quando emerge lo schema, emerge anche la risposta.",
    empathy: {
      label: "Anche oggi…",
      badge: "Stress",
      lines: [
        "La scuola chiama. Di nuovo.",
        "Mi si stringe il cuore.",
        "Ma è davvero «di nuovo»?",
        "Come prima? O diverso?",
        "La memoria da sola non basta——.",
      ],
      tried_label: "Eppure qualche appunto l'avevo preso.",
      tried: [
        "Su carta, poi non li ritrovo.",
        "Note del telefono: difficili da organizzare.",
        "«Non era già successo?» — senza poterlo verificare.",
      ],
      pivot: "I ricordi si accumulano fino a esplodere.\nLe note, invece, mostrano l'insieme.",
      idea_label: "E allora mi è venuta un'idea.",
      idea: "Catturare il momento al volo\ne usare lo schema per prevenire la prossima volta.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Vita scolastica",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Note",
      formula_b: "Fatti",
      formula_c: "Reagire con calma",
      concept: "Note × Fatti = Reagire con calma",
      call: ["Chi era ○○, ricordi?", "È lo stesso bambino dell'ultimo litigio?"],
      trick: [
        "Registra data, luogo, persone coinvolte e cosa è successo.",
        "Pensato per essere compilato dopo, a mente fredda.",
        "Ordinando per data emergono gli schemi ricorrenti.",
        "Per i colloqui con la scuola estrai solo l'essenziale.",
        "Allega foto o note vocali (tutto resta sul dispositivo).",
        "Esporta in PDF o testo.",
      ],
    },
  ],
};
