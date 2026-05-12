/* ============================================================
 * content/ca/todo.js — Catalan: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ca"] = window.__CONTENT__["ca"] || {};
window.__CONTENT__["ca"].categories = window.__CONTENT__["ca"].categories || {};

window.__CONTENT__["ca"].categories.todo = {
  id: "todo",
  name: "Sèrie Todo",
  subtitle: "De «Fes-ho!» a «Vull provar-ho!» — apps que creen hàbits.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Hàbits",
  formula: { a: "Joc", b: "Tasques", c: "Hàbit" },

  story: {
    tagline: "De «Fes-ho!» a «Provem-ho».",
    intro: "Apps que, a través del joc, conviden l'infant a començar tot sol.",
    empathy: {
      label: "Et sona?",
      lines: [
        "Criar és esgotador.",
        "El «Fes-ho!» no funciona.",
        "Aixeques la veu i només fan morros.",
        "El mateix, cada dia.",
        "Estaria fet en un minut, si tan sols comencessin.",
      ],
      pivot: "Quan juguen estan totalment absorbits.\nSi les tasques fessin la mateixa sensació…",
      idea_label: "Aleshores em va venir una idea.",
      idea: "I si barrejava una mica de joc a la llista de tasques,\nperquè comencin per ells mateixos?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Sorpresa",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Tasques",
      formula_c: "Moure's per sorpresa",
      concept: "Gacha × Tasques = Moure's per sorpresa",
      call: ["Què sortirà aquest cop?", "Potser una càpsula de recompensa?"],
      trick: [
        "Pots dirigir amb discreció quina tasca surt.",
        "Estableix prioritats — sopar abans que rentar dents.",
        "Escampa «càpsules de recompensa» entremig.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Disposició lliure",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Tasques",
      formula_c: "En el seu ordre",
      concept: "Bingo × Tasques = En el seu ordre",
      call: ["Va, anem a fer bingo!", "Bingo = recompensa."],
      trick: [
        "Posa les tasques on vulguis al tauler.",
        "Tria quants bingos donen recompensa.",
        "La tasca més odiada al centre — un toc = quatre bingos.",
        "Encadena passos relacionats en una fila perquè s'hagin de fer tots.",
        "Sembla la seva tria — però l'ordre el decideixes tu.",
        "El bingo de calendari va molt bé per a vacances o setmana d'exàmens.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoOca",
      tag: "Passos petits",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Joc de taula",
      formula_b: "Tasques",
      formula_c: "Pas a pas",
      concept: "Joc de taula × Tasques = Pas a pas",
      call: ["Juguem una oca?", "Arriba al peu de la muntanya — i té una recompensa."],
      trick: [
        "L'ordre està completament bloquejat.",
        "Seu-te → obre el llibre → agafa el llapis → un exercici → recompensa → pàgina següent…",
        "Si el primer pas és prou petit, la resta ve sola.",
        "Cada ruta té la seva densitat de caselles.",
        "Muntanya (densa al final) / Espai (densa al principi) / Vora de riu (uniforme) — tria segons l'humor.",
      ],
    },
    {
      id: "farm",
      name: "TodoHort",
      tag: "Creixement",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Creixement",
      formula_b: "Tasques",
      formula_c: "Moure's pel progrés",
      concept: "Creixement × Tasques = Moure's pel progrés",
      call: ["Quant regues avui?", "Creixerà?"],
      trick: [
        "Premem l'esforç, no només fet/no fet.",
        "Les plantes creixen en passos del 10 %.",
        "Apunta a un nivell de creixement per rec.",
        "Si passes l'objectiu, l'aigua canvia de color.",
      ],
    },
  ],
};
