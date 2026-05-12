/* ============================================================
 * content/pl/todo.js — Polish: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["pl"] = window.__CONTENT__["pl"] || {};
window.__CONTENT__["pl"].categories = window.__CONTENT__["pl"].categories || {};

window.__CONTENT__["pl"].categories.todo = {
  id: "todo",
  name: "Seria Todo",
  subtitle: "Z „Zrób to!\" do „Chcę spróbować!\" — aplikacje, które budują nawyki.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Nawyki",
  formula: { a: "Zabawa", b: "Zadania", c: "Nawyk" },

  story: {
    tagline: "Z „Zrób to!\" do „Spróbuję!\"",
    intro: "Aplikacje, które przez zabawę zachęcają dziecko, żeby ruszyło samo.",
    empathy: {
      label: "Brzmi znajomo?",
      lines: [
        "Wychowywanie jest męczące.",
        "„Zrób to!\" nie działa.",
        "Nawet jak podniesiesz głos, tylko się obrażają.",
        "To samo, każdego dnia.",
        "Wystarczyłaby minuta, gdyby tylko zaczęli.",
      ],
      pivot: "Gdy się bawią, są skupieni do końca.\nGdyby tylko zadania działały tak samo…",
      idea_label: "Wtedy wpadłam na pomysł.",
      idea: "A gdyby tak dorzucić trochę zabawy do listy zadań,\nżeby ruszyli sami z siebie?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Niespodzianka",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Zadania",
      formula_c: "Ruch przez zaskoczenie",
      concept: "Gacha × Zadania = Ruch przez zaskoczenie",
      call: ["Co tym razem wypadnie?", "Może kapsuła z nagrodą?"],
      trick: [
        "Możesz delikatnie sterować, jakie zadanie wypadnie.",
        "Ustaw priorytety — kolacja przed myciem zębów.",
        "Rozsyp tu i ówdzie „kapsuły z nagrodą\".",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Swobodny układ",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Zadania",
      formula_c: "We własnej kolejności",
      concept: "Bingo × Zadania = We własnej kolejności",
      call: ["Lecimy na bingo!", "Bingo = nagroda."],
      trick: [
        "Umieszczasz zadania, gdzie chcesz na planszy.",
        "Wybierasz, ile bingo daje nagrodę.",
        "Najmniej lubiane zadanie idzie na środek — jedno tknięcie = cztery bingo.",
        "Łącz powiązane kroki w jedną linię, żeby musieli zrobić wszystko.",
        "Wygląda jak ich wybór — ale kolejność ustalasz ty.",
        "Bingo-kalendarz świetnie sprawdza się przy wakacjach lub sesji.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoPlansza",
      tag: "Małe kroki",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Plansza",
      formula_b: "Zadania",
      formula_c: "Krok po kroku",
      concept: "Plansza × Zadania = Krok po kroku",
      call: ["Zagramy w planszówkę?", "Dotrzyj do podnóża góry, a dostaniesz nagrodę."],
      trick: [
        "Kolejność jest całkiem zablokowana.",
        "Usiąść → otworzyć książkę → wziąć ołówek → jedno zadanie → nagroda → następna strona…",
        "Jeśli pierwszy krok jest dość mały, reszta wchodzi sama.",
        "Każda trasa ma własną gęstość pól.",
        "Góra (gęsta końcówka) / Kosmos (gęsty start) / Brzeg rzeki (równomiernie) — wybór według nastroju.",
      ],
    },
    {
      id: "farm",
      name: "TodoOgród",
      tag: "Wzrost",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Wzrost",
      formula_b: "Zadania",
      formula_c: "Ruch przez postęp",
      concept: "Wzrost × Zadania = Ruch przez postęp",
      call: ["Ile wody dzisiaj?", "Urośnie?"],
      trick: [
        "Nagradzasz wysiłek, nie tylko zrobione/niezrobione.",
        "Rośliny rosną co 10 %.",
        "Cel: jeden poziom wzrostu na podlanie.",
        "Jak przelejesz, woda zmienia kolor.",
      ],
    },
  ],
};
