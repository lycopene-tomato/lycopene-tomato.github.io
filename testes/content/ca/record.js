/* ============================================================
 * content/ca/record.js — Catalan: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ca"] = window.__CONTENT__["ca"] || {};
window.__CONTENT__["ca"].categories = window.__CONTENT__["ca"].categories || {};

window.__CONTENT__["ca"].categories.record = {
  id: "record",
  name: "Sèrie Log",
  subtitle: "Captura els petits fets, veu el patró, anticipa el pròxim cop.",
  lineup_title: "Apps que ordenen per contingut.",
  label_call: "Preocupació",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Prevenció",
  formula: { a: "Notes", b: "Fets", c: "Evita el pròxim cop" },

  story: {
    tagline: "Converteix «altra vegada» en «aquest cop estic preparada».",
    intro: "No emocions — notes. Quan apareix el patró, també apareix la resposta.",
    empathy: {
      label: "Avui altra vegada…",
      badge: "Estrès",
      lines: [
        "Truca l'escola. Una altra vegada.",
        "Se m'encongeix el cor.",
        "Però és realment «altra vegada»?",
        "Igual que la darrera? O diferent?",
        "Només amb la memòria no n'hi ha prou——.",
      ],
      tried_label: "Però ja havia pres notes.",
      tried: [
        "En paper — després no les trobo.",
        "Notes del mòbil: difícils d'ordenar.",
        "«No havia passat ja?» — sense forma de comprovar.",
      ],
      pivot: "La memòria s'acumula fins a esclatar.\nLa nota mostra el conjunt d'una sola ullada.",
      idea_label: "Aleshores em va venir una idea.",
      idea: "Capturar el moment de pressa,\ni amb el patró anticipar el pròxim cop.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Vida escolar",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Notes",
      formula_b: "Fets",
      formula_c: "Resposta tranquil·la",
      concept: "Notes × Fets = Resposta tranquil·la",
      call: ["Qui era ○○?", "El mateix nen que en l'última baralla?"],
      trick: [
        "Anota data, lloc, implicats i què va passar.",
        "Pensat per omplir-se després, en fred.",
        "Ordenat per data — els patrons recurrents surten sols.",
        "Per a la reunió amb el professorat, treu només l'essencial.",
        "Adjunta fotos o notes de veu (tot queda al dispositiu).",
        "Exporta a PDF o text.",
      ],
    },
  ],
};
