/* ============================================================
 * content/sk/todo.js — Slovak: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["sk"] = window.__CONTENT__["sk"] || {};
window.__CONTENT__["sk"].categories = window.__CONTENT__["sk"].categories || {};

window.__CONTENT__["sk"].categories.todo = {
  id: "todo",
  name: "Séria Todo",
  subtitle: "Z „Urob to!\" na „Chcem to skúsiť!\" — aplikácie, ktoré budujú návyky.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Návyky",
  formula: { a: "Hra", b: "Úlohy", c: "Návyk" },

  story: {
    tagline: "Z „Urob to!\" na „Skúsim to\".",
    intro: "Aplikácie, ktoré cez hru pozývajú dieťa, aby sa rozbehlo samo.",
    empathy: {
      label: "Znie to známo?",
      lines: [
        "Vychovávať deti je vyčerpávajúce.",
        "„Urob to!\" nefunguje.",
        "Zvýšiš hlas, a oni sa len mračia.",
        "Deň čo deň to isté.",
        "Stačila by minúta — keby sa len rozbehli.",
      ],
      pivot: "Pri hraní sú úplne ponorení.\nKeby tak úlohy mali rovnaký účinok…",
      idea_label: "Vtedy mi napadlo:",
      idea: "Čo keby som primiešal trochu hry do zoznamu úloh,\naby sa rozbehli sami?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Prekvapenie",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Úlohy",
      formula_c: "Pohyb cez prekvapenie",
      concept: "Gacha × Úlohy = Pohyb cez prekvapenie",
      call: ["Čo dnes vyjde?", "Možno kapsula s odmenou?"],
      trick: [
        "Môžeš nenápadne smerovať, ktorá úloha vypadne.",
        "Nastav priority — večera skôr ako zuby.",
        "Medzi úlohy rozhádž „kapsule s odmenou\".",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Voľné rozloženie",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Úlohy",
      formula_c: "V ich poradí",
      concept: "Bingo × Úlohy = V ich poradí",
      call: ["Poďme na bingo!", "Bingo = odmena."],
      trick: [
        "Umiestni úlohy kdekoľvek na hraciu plochu.",
        "Vyber, koľko bíng dáva odmenu.",
        "Najmenej obľúbenú úlohu daj doprostred — jeden ťuk = štyri bingá.",
        "Spoj na jeden riadok nadväzujúce kroky, aby museli urobiť všetko.",
        "Vyzerá to ako ich voľba — ale poradie určuješ ty.",
        "Kalendárové bingo skvelo sadne na prázdniny alebo skúškový týždeň.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoDoska",
      tag: "Malé kroky",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Stolová hra",
      formula_b: "Úlohy",
      formula_c: "Krok za krokom",
      concept: "Stolová hra × Úlohy = Krok za krokom",
      call: ["Zahráme si dosku?", "Po dosiahnutí úpätia hory dostaneš odmenu."],
      trick: [
        "Poradie je úplne uzamknuté.",
        "Sadni si → otvor knihu → vezmi ceruzku → jedna úloha → odmena → ďalšia strana…",
        "Ak je prvý krok dostatočne malý, zvyšok príde sám.",
        "Každá trasa má vlastnú hustotu políčok.",
        "Hora (hustá na konci) / Vesmír (hustý na začiatku) / Breh rieky (rovnomerná) — vyber podľa nálady.",
      ],
    },
    {
      id: "farm",
      name: "TodoZáhrada",
      tag: "Rast",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Rast",
      formula_b: "Úlohy",
      formula_c: "Pohyb cez pokrok",
      concept: "Rast × Úlohy = Pohyb cez pokrok",
      call: ["Koľko dnes polievaš?", "Vyrastie to?"],
      trick: [
        "Odmeňujeme úsilie, nielen hotovo/nehotovo.",
        "Rastliny rastú po 10 %.",
        "Cieľ: jeden stupeň rastu na jedno zaliatie.",
        "Keď cieľ prekročíš, voda zmení farbu.",
      ],
    },
  ],
};
