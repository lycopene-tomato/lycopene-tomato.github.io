/* ============================================================
 * content/ro/record.js — Romanian: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ro"] = window.__CONTENT__["ro"] || {};
window.__CONTENT__["ro"].categories = window.__CONTENT__["ro"].categories || {};

window.__CONTENT__["ro"].categories.record = {
  id: "record",
  name: "Seria Log",
  subtitle: "Notează micile întâmplări, vezi tiparul, previne data viitoare.",
  lineup_title: "Aplicații care sortează după conținut.",
  label_call: "Îngrijorare",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Prevenție",
  formula: { a: "Notițe", b: "Fapte", c: "Previne data viitoare" },

  story: {
    tagline: "Schimbă „iar\" în „de data asta sunt pregătită\".",
    intro: "Nu emoții — notițe. Când tiparul iese la suprafață, iese și răspunsul.",
    empathy: {
      label: "Astăzi iar…",
      badge: "Stres",
      lines: [
        "Sună școala. Iar.",
        "Mi se strânge inima.",
        "Dar e cu adevărat „iar\"?",
        "La fel ca data trecută? Sau altfel?",
        "Doar memoria nu mai ajunge——.",
      ],
      tried_label: "Doar mi-am notat ceva.",
      tried: [
        "Pe hârtie — pe urmă nu le mai găsesc.",
        "Notițele din telefon: greu de organizat.",
        "„N-a fost cumva deja?\" — fără cale de a verifica.",
      ],
      pivot: "Memoria se adună până plesnește.\nNotița arată întregul dintr-o privire.",
      idea_label: "Atunci mi-a venit o idee.",
      idea: "Să prinzi momentul rapid,\nși prin tipar să previi data viitoare.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Viața școlară",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Notițe",
      formula_b: "Fapte",
      formula_c: "Reacție calmă",
      concept: "Notițe × Fapte = Reacție calmă",
      call: ["Cine era ○○?", "Același copil ca la cearta de data trecută?"],
      trick: [
        "Notează data, locul, persoanele implicate și ce s-a întâmplat.",
        "Gândit să fie completat ulterior, la rece.",
        "Sortează după dată — tiparele repetitive ies singure la iveală.",
        "Pentru întâlnirea cu profesorii, extrage doar esențialul.",
        "Atașează fotografii sau memo-uri vocale (totul rămâne pe dispozitiv).",
        "Export în PDF sau text.",
      ],
    },
  ],
};
