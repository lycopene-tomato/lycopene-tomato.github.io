/* ============================================================
 * content/sl-SI/tool.js — Slovenian: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["sl-SI"] = window.__CONTENT__["sl-SI"] || {};
window.__CONTENT__["sl-SI"].categories = window.__CONTENT__["sl-SI"].categories || {};

window.__CONTENT__["sl-SI"].categories.tool = {
  id: "tool",
  name: "Serija Timer",
  subtitle: "»Kasneje« postane »zdaj« — časovniki proti odlašanju.",
  lineup_title: "Odštevanje glede na situacijo.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Proti odlašanju",
  formula: { a: "Orodje", b: "Trenutek", c: "Rešeno" },

  story: {
    tagline: "»Kasneje« postane »zdaj«.",
    intro: "Za otroka, ki vedno reče »še pet minut«.\nČas in meja, ki sprožita klik spremembe.",
    empathy: {
      label: "Poznaš ta trenutek?",
      lines: [
        "Takoj ko se kaj zgodi, zagrabim telefon.",
        "Iščem aplikacijo, iščem nastavitev, se izgubim.",
        "Na koncu… »pusti«.",
        "Čakaj, kaj sem hotela narediti?",
        "Samo želim takoj odpreti pravo orodje.",
      ],
      pivot: "Več-funkcijske aplikacije so videti močne. Ne v tem trenutku.\nZdaj potrebujem eno samo stvar.",
      idea_label: "Takrat mi je padla na pamet ideja.",
      idea: "Izdelati majhna orodja za en sam trenutek.\nOdpri, pritisni — končano.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Čas",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Met",
      formula_b: "Kasneje",
      formula_c: "Premik z novim metom",
      concept: "Met × Kasneje = Premik z novim metom",
      call: ["Naredimo premor?", "Še en met?"],
      trick: [
        "Ne »pritisni 5 min« — kot in moč meta ustvarita čas. Tudi konec se zdi pravi.",
        "Vsak planet ima svoj čas. Dlje od Sonca: daljši; čisto blizu: spirala, ki vleče.",
        "Samo Pluton je izziv ∞, brez naraščanja gravitacije skozi čas. Rušenje rekorda je nagrada.",
      ],
    },
  ],
};
