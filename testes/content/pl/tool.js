/* ============================================================
 * content/pl/tool.js — Polish: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["pl"] = window.__CONTENT__["pl"] || {};
window.__CONTENT__["pl"].categories = window.__CONTENT__["pl"].categories || {};

window.__CONTENT__["pl"].categories.tool = {
  id: "tool",
  name: "Seria Timer",
  subtitle: "„Później\" staje się „teraz\" — minutniki przeciw odkładaniu.",
  lineup_title: "Odliczanie pod konkretną sytuację.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Anty-odkładanie",
  formula: { a: "Narzędzie", b: "Moment", c: "Załatwione" },

  story: {
    tagline: "„Później\" zmienia się w „teraz\".",
    intro: "Dla dziecka, które zawsze mówi „jeszcze pięć minut\".\nCzas i granica, żeby pstryknął przełącznik.",
    empathy: {
      label: "Znasz ten moment?",
      lines: [
        "Coś się dzieje — od razu sięgam po telefon.",
        "Szukam aplikacji, szukam ustawienia, gubię się.",
        "W końcu… „dajmy spokój\".",
        "Czekaj, co ja w ogóle chciałam zrobić?",
        "Chcę po prostu od razu otworzyć właściwe narzędzie.",
      ],
      pivot: "Aplikacje wielofunkcyjne wyglądają potężnie. Nie w tym momencie.\nTeraz potrzebuję jednej, jedynej rzeczy.",
      idea_label: "Wtedy wpadłam na pomysł.",
      idea: "Zrobić małe narzędzia na jeden moment.\nOtworzyć, dotknąć — gotowe.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Czas",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Rzut",
      formula_b: "Później",
      formula_c: "Ruszyć przez kolejny rzut",
      concept: "Rzut × Później = Ruszyć przez kolejny rzut",
      call: ["Krótka przerwa?", "Jeszcze jeden rzut?"],
      trick: [
        "To nie „naciśnij 5 min\" — czas tworzą kąt i rozmach rzutu. Koniec też brzmi w sam raz.",
        "Każda planeta ma swój czas. Dalej od Słońca: dłuższy; bardzo blisko: spirala wsysania.",
        "Tylko Pluton to wyzwanie ∞ bez narastania grawitacji w czasie. Nagrodą jest pobity rekord.",
      ],
    },
  ],
};
