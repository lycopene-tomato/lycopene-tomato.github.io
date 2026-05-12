/* ============================================================
 * content/cs/record.js — Czech: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["cs"] = window.__CONTENT__["cs"] || {};
window.__CONTENT__["cs"].categories = window.__CONTENT__["cs"].categories || {};

window.__CONTENT__["cs"].categories.record = {
  id: "record",
  name: "Série Log",
  subtitle: "Zachyť drobné události, viz vzorec, předejdi příště.",
  lineup_title: "Aplikace třídicí podle obsahu.",
  label_call: "Obava",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Prevence",
  formula: { a: "Záznamy", b: "Fakta", c: "Předejdi příště" },

  story: {
    tagline: "Změň „zase\" na „tentokrát jsem připraven\".",
    intro: "Ne emoce — záznamy. Když vyplave vzorec, vyplave i odpověď.",
    empathy: {
      label: "Dnes zase…",
      badge: "Stres",
      lines: [
        "Volá škola. Zase.",
        "Srdce se sevře.",
        "Ale je to opravdu „zase\"?",
        "Stejné jako minule? Nebo jiné?",
        "Pouhá paměť nestačí——.",
      ],
      tried_label: "Vždyť jsem si zapisoval.",
      tried: [
        "Na papír — pak to nenajdu.",
        "Poznámky v telefonu: těžko uspořádat.",
        "„Tohle už přece bylo, ne?\" — a nemám jak ověřit.",
      ],
      pivot: "Paměť se hromadí, dokud nepraskne.\nZáznam ukáže celek jedním pohledem.",
      idea_label: "Tehdy mě napadlo:",
      idea: "Zachytit moment rychle,\na pomocí vzorce předejít příště.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Školní život",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Záznamy",
      formula_b: "Fakta",
      formula_c: "Klidná reakce",
      concept: "Záznamy × Fakta = Klidná reakce",
      call: ["Kdo byl ○○?", "Stejné dítě jako u minulé hádky?"],
      trick: [
        "Zapiš datum, místo, zúčastněné a co se stalo.",
        "Navrženo k vyplnění až s odstupem, s chladnou hlavou.",
        "Seřaď podle data — opakující se vzorce vyplavou samy.",
        "Na schůzku s učiteli vyber jen to podstatné.",
        "Připoj fotky nebo hlasové poznámky (vše zůstává v zařízení).",
        "Export do PDF nebo textu.",
      ],
    },
  ],
};
