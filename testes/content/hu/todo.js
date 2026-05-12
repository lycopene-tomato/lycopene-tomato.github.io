/* ============================================================
 * content/hu/todo.js — Hungarian: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["hu"] = window.__CONTENT__["hu"] || {};
window.__CONTENT__["hu"].categories = window.__CONTENT__["hu"].categories || {};

window.__CONTENT__["hu"].categories.todo = {
  id: "todo",
  name: "Todo sorozat",
  subtitle: "A „Csináld már!\"-tól a „Ki akarom próbálni!\"-ig — szokásépítő alkalmazások.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Szokások",
  formula: { a: "Játék", b: "Feladatok", c: "Szokás" },

  story: {
    tagline: "A „Csináld már!\"-tól a „Megpróbálom\"-ig.",
    intro: "Olyan alkalmazások, amelyek játékon keresztül hívják a gyereket arra, hogy magától induljon el.",
    empathy: {
      label: "Ismerős?",
      lines: [
        "Gyereket nevelni kimerítő.",
        "A „Csináld már!\" nem működik.",
        "Felemeled a hangod, és csak duzzognak.",
        "Nap mint nap ugyanaz.",
        "Egy perc alatt kész lenne, ha csak elkezdenék.",
      ],
      pivot: "Játék közben teljesen átadják magukat.\nBárcsak a feladatok is így éreztetnék magukat…",
      idea_label: "Akkor eszembe jutott egy ötlet.",
      idea: "Mi lenne, ha egy kis játékot kevernék a teendőlistába,\nhogy maguktól nekikezdjenek?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Meglepetés",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Feladatok",
      formula_c: "Indulás meglepetéssel",
      concept: "Gacha × Feladatok = Indulás meglepetéssel",
      call: ["Mi jön ki ma?", "Talán jutalomkapszula?"],
      trick: [
        "Finoman terelheted, melyik feladat bukkanjon fel.",
        "Állíts be prioritásokat — vacsora a fogmosás előtt.",
        "Szórj közé „jutalomkapszulákat\".",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Szabad elrendezés",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingó",
      formula_b: "Feladatok",
      formula_c: "Saját sorrendben",
      concept: "Bingó × Feladatok = Saját sorrendben",
      call: ["Csináljunk bingót!", "Bingó = jutalom."],
      trick: [
        "Helyezd a feladatokat bárhová a táblán.",
        "Állítsd be, hány bingó ad jutalmat.",
        "A legutáltabb feladat középre — egy érintés = négy bingó.",
        "Sorba köthetsz össze egymáshoz kapcsolódó lépéseket, hogy mindet meg kelljen csinálni.",
        "Úgy tűnik, az ő választásuk — a sorrendet azonban te szabod meg.",
        "A naptár-bingó kiválóan működik vakációra vagy vizsgaidőszakra.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoTábla",
      tag: "Apró lépések",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Társasjáték",
      formula_b: "Feladatok",
      formula_c: "Lépésről lépésre",
      concept: "Társasjáték × Feladatok = Lépésről lépésre",
      call: ["Játsszunk társast?", "A hegy lábához érve jár a jutalom."],
      trick: [
        "A sorrend teljesen rögzítve.",
        "Leülni → kinyitni a könyvet → fogni a ceruzát → egy feladat → jutalom → következő oldal…",
        "Ha az első lépés elég kicsi, a többi magától jön.",
        "Minden útvonalnak megvan a saját mezősűrűsége.",
        "Hegy (a vége sűrű) / Űr (az eleje sűrű) / Folyópart (egyenletes) — válassz hangulat szerint.",
      ],
    },
    {
      id: "farm",
      name: "TodoKert",
      tag: "Növekedés",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Növekedés",
      formula_b: "Feladatok",
      formula_c: "Indulás a haladással",
      concept: "Növekedés × Feladatok = Indulás a haladással",
      call: ["Mennyit öntözöl ma?", "Vajon kinő?"],
      trick: [
        "A próbálkozást jutalmazzuk, nem csak kész/nem kész.",
        "A növények 10 %-os lépésekben nőnek.",
        "Cél: egy növekedési szint öntözésenként.",
        "Ha túlöntözöd, a víz színt vált.",
      ],
    },
  ],
};
