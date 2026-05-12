/* ============================================================
 * content/sk/record.js — Slovak: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["sk"] = window.__CONTENT__["sk"] || {};
window.__CONTENT__["sk"].categories = window.__CONTENT__["sk"].categories || {};

window.__CONTENT__["sk"].categories.record = {
  id: "record",
  name: "Séria Log",
  subtitle: "Zachyť drobné udalosti, vidieť vzor, predísť nabudúce.",
  lineup_title: "Aplikácie triediace podľa obsahu.",
  label_call: "Obava",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Prevencia",
  formula: { a: "Záznamy", b: "Fakty", c: "Predísť nabudúce" },

  story: {
    tagline: "Premeň „zase\" na „tentokrát som pripravená\".",
    intro: "Nie emócie — záznamy. Keď sa vynorí vzor, vynorí sa aj odpoveď.",
    empathy: {
      label: "Dnes zase…",
      badge: "Stres",
      lines: [
        "Volá škola. Zase.",
        "Srdce sa zovrie.",
        "Ale je to naozaj „zase\"?",
        "Rovnaké ako naposledy? Alebo iné?",
        "Len pamäť nestačí——.",
      ],
      tried_label: "Veď som si poznačila.",
      tried: [
        "Na papieri — neskôr to nenájdem.",
        "Poznámky v telefóne: ťažko sa to triedi.",
        "„Tohto sa už predsa stalo, nie?\" — ale nemám ako overiť.",
      ],
      pivot: "Pamäť sa hromadí, kým praskne.\nZáznam ukáže celok jedným pohľadom.",
      idea_label: "Vtedy mi napadlo:",
      idea: "Zachytiť moment rýchlo,\na cez vzor predísť nabudúce.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Školský život",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Záznamy",
      formula_b: "Fakty",
      formula_c: "Pokojná reakcia",
      concept: "Záznamy × Fakty = Pokojná reakcia",
      call: ["Kto bol ○○?", "To isté dieťa ako pri minulej hádke?"],
      trick: [
        "Zapíš dátum, miesto, zúčastnených a čo sa stalo.",
        "Navrhnuté na vyplnenie neskôr, s chladnou hlavou.",
        "Zoraď podľa dátumu — opakujúce sa vzory vyplávajú samé.",
        "Na stretnutie s učiteľmi vytiahni len podstatu.",
        "Priloh fotky alebo hlasové poznámky (všetko zostáva v zariadení).",
        "Export do PDF alebo textu.",
      ],
    },
  ],
};
