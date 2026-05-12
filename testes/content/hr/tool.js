/* ============================================================
 * content/hr/tool.js — Croatian: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["hr"] = window.__CONTENT__["hr"] || {};
window.__CONTENT__["hr"].categories = window.__CONTENT__["hr"].categories || {};

window.__CONTENT__["hr"].categories.tool = {
  id: "tool",
  name: "Timer serija",
  subtitle: "„Kasnije\" postaje „sada\" — tajmeri protiv odgađanja.",
  lineup_title: "Odbrojavanje prema situaciji.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Protiv odgađanja",
  formula: { a: "Alat", b: "Trenutak", c: "Riješeno" },

  story: {
    tagline: "„Kasnije\" postaje „sada\".",
    intro: "Za dijete koje uvijek kaže „još pet minuta\".\nVrijeme i granica koji uključe sklopku promjene.",
    empathy: {
      label: "Poznaješ li taj trenutak?",
      lines: [
        "Čim se nešto dogodi, posegnem za mobitelom.",
        "Tražim aplikaciju, tražim postavku, izgubim se.",
        "Na kraju… „pusti to\".",
        "Čekaj, što sam htjela napraviti?",
        "Samo želim odmah otvoriti pravi alat.",
      ],
      pivot: "Višenamjenske aplikacije izgledaju moćno. Ne u ovom trenutku.\nSada mi treba samo jedna stvar.",
      idea_label: "Tada mi je sinula ideja.",
      idea: "Praviti male alate za jedan jedini trenutak.\nOtvori, dodirni — gotovo.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Vrijeme",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Bacanje",
      formula_b: "Kasnije",
      formula_c: "Pokret novim bacanjem",
      concept: "Bacanje × Kasnije = Pokret novim bacanjem",
      call: ["Da napravimo pauzu?", "Još jedno bacanje?"],
      trick: [
        "Ne „pritisni 5 min\" — kut i snaga bacanja stvaraju vrijeme. I kraj se čini taman.",
        "Svaki planet ima svoje vrijeme. Dalje od Sunca: dulje; sasvim blizu: spirala koja uvlači.",
        "Samo Pluton je izazov ∞ bez rasta gravitacije s vremenom. Obaranje rekorda je nagrada.",
      ],
    },
  ],
};
