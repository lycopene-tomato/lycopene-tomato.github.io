/* ============================================================
 * content/pl/record.js — Polish: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["pl"] = window.__CONTENT__["pl"] || {};
window.__CONTENT__["pl"].categories = window.__CONTENT__["pl"].categories || {};

window.__CONTENT__["pl"].categories.record = {
  id: "record",
  name: "Seria Log",
  subtitle: "Łap drobne fakty, dostrzegaj wzorzec, wyprzedzaj kolejny raz.",
  lineup_title: "Aplikacje, które porządkują po treści.",
  label_call: "Niepokój",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Profilaktyka",
  formula: { a: "Notatki", b: "Fakty", c: "Uprzedzić kolejny raz" },

  story: {
    tagline: "Zamień „znowu\" w „tym razem jestem gotowa\".",
    intro: "Nie emocje — notatki. Gdy wzorzec staje się widoczny, pojawia się też odpowiedź.",
    empathy: {
      label: "Dziś znowu…",
      badge: "Stres",
      lines: [
        "Szkoła dzwoni. Znowu.",
        "Serce się ściska.",
        "Ale czy to naprawdę „znowu\"?",
        "Tak samo jak ostatnio? Czy inaczej?",
        "Sama pamięć nie wystarcza——.",
      ],
      tried_label: "Przecież robiłam notatki.",
      tried: [
        "Na papierze potem ich nie znajduję.",
        "Notatki w telefonie: trudno uporządkować.",
        "„Już raz tak nie było?\" — bez możliwości sprawdzenia.",
      ],
      pivot: "Pamięć piętrzy się aż do wybuchu.\nNotatka pokazuje całość naraz.",
      idea_label: "Wtedy wpadłam na pomysł.",
      idea: "Złapać moment od razu,\na wzorcem wyprzedzić kolejny raz.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Życie szkolne",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Notatki",
      formula_b: "Fakty",
      formula_c: "Spokojna reakcja",
      concept: "Notatki × Fakty = Spokojna reakcja",
      call: ["Kim ○○ tym razem był?", "Czy to samo dziecko, co przy poprzedniej kłótni?"],
      trick: [
        "Zapisuj datę, miejsce, uczestników i to, co się stało.",
        "Pomyślane do wypełnienia później, na chłodno.",
        "Sortowanie po dacie — powtarzające się wzorce same wychodzą na wierzch.",
        "Na zebranie ze szkołą bierz tylko esencję.",
        "Dołączaj zdjęcia lub notki głosowe (wszystko zostaje na urządzeniu).",
        "Eksport do PDF lub tekstu.",
      ],
    },
  ],
};
