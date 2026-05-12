/* ============================================================
 * content/cs/todo.js — Czech: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["cs"] = window.__CONTENT__["cs"] || {};
window.__CONTENT__["cs"].categories = window.__CONTENT__["cs"].categories || {};

window.__CONTENT__["cs"].categories.todo = {
  id: "todo",
  name: "Série Todo",
  subtitle: "Z „Udělej to!\" na „Chci to zkusit!\" — aplikace, které budují návyky.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Návyky",
  formula: { a: "Hra", b: "Úkoly", c: "Návyk" },

  story: {
    tagline: "Z „Udělej to!\" na „Zkusím to\".",
    intro: "Aplikace, které dítě skrze hru lákají, aby se rozjelo samo.",
    empathy: {
      label: "Zní to povědomě?",
      lines: [
        "Vychovávat děti je vyčerpávající.",
        "„Udělej to!\" nefunguje.",
        "Zvedneš hlas, a oni se jen mračí.",
        "Den co den to samé.",
        "Stačila by minuta — kdyby jen začali.",
      ],
      pivot: "Když si hrají, jsou plně zabraní.\nKdyby tak úkoly měly stejný efekt…",
      idea_label: "Tehdy mě napadlo:",
      idea: "Co kdybych do seznamu úkolů přidal trochu hry,\naby se rozjeli sami od sebe?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Překvapení",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Úkoly",
      formula_c: "Pohyb přes překvapení",
      concept: "Gacha × Úkoly = Pohyb přes překvapení",
      call: ["Co dnes vypadne?", "Třeba kapsle s odměnou?"],
      trick: [
        "Můžeš nenápadně směrovat, který úkol vypadne.",
        "Nastav priority — večeře dřív než zuby.",
        "Mezi úkoly zaházej i „kapsle s odměnou\".",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Volné rozložení",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Úkoly",
      formula_c: "V jejich pořadí",
      concept: "Bingo × Úkoly = V jejich pořadí",
      call: ["Pojďme na bingo!", "Bingo = odměna."],
      trick: [
        "Umísti úkoly kamkoli na hrací plán.",
        "Vyber, kolik bing dává odměnu.",
        "Nejnepopulárnější úkol dej doprostřed — jedno klepnutí = čtyři binga.",
        "Spoj na jednu řadu navazující kroky, aby museli udělat všechno.",
        "Vypadá to jako jejich volba — ale pořadí určuješ ty.",
        "Kalendářní bingo skvěle sedí na prázdniny nebo zkouškový týden.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoDeska",
      tag: "Malé kroky",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Stolní hra",
      formula_b: "Úkoly",
      formula_c: "Krok po kroku",
      concept: "Stolní hra × Úkoly = Krok po kroku",
      call: ["Zahrajeme deskovku?", "K úpatí hory — a dostaneš odměnu."],
      trick: [
        "Pořadí je zcela uzamčené.",
        "Sednout → otevřít knihu → vzít tužku → jeden úkol → odměna → další stránka…",
        "Když je první krok dost malý, zbytek přijde sám.",
        "Každá trasa má svou hustotu políček.",
        "Hora (hustá ke konci) / Vesmír (hustá na začátku) / Břeh řeky (rovnoměrná) — vyber podle nálady.",
      ],
    },
    {
      id: "farm",
      name: "TodoZahrada",
      tag: "Růst",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Růst",
      formula_b: "Úkoly",
      formula_c: "Pohyb přes pokrok",
      concept: "Růst × Úkoly = Pohyb přes pokrok",
      call: ["Kolik dnes zaléváš?", "Vyroste to?"],
      trick: [
        "Odměňujeme úsilí, ne jen hotovo/nehotovo.",
        "Rostliny rostou po 10 %.",
        "Cíl: jeden stupeň růstu za jedno zalití.",
        "Když cíl překročíš, voda změní barvu.",
      ],
    },
  ],
};
