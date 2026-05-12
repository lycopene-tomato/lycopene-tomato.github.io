/* ============================================================
 * content/pt-BR/todo.js — Brazilian Portuguese: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["pt-BR"] = window.__CONTENT__["pt-BR"] || {};
window.__CONTENT__["pt-BR"].categories = window.__CONTENT__["pt-BR"].categories || {};

window.__CONTENT__["pt-BR"].categories.todo = {
  id: "todo",
  name: "Série Todo",
  subtitle: "De \"Faz logo!\" para \"Quero tentar!\" — apps que criam hábitos.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Hábitos",
  formula: { a: "Brincadeira", b: "Tarefas", c: "Hábito" },

  story: {
    tagline: "De \"Faz logo!\" para \"Vou tentar!\".",
    intro: "Apps que convidam a criança a se mexer sozinha — pela brincadeira.",
    empathy: {
      label: "Parece familiar?",
      lines: [
        "Criar filhos é puxado.",
        "\"Faz logo!\" não funciona.",
        "Mesmo levantando a voz, eles só ficam emburrados.",
        "A mesma coisa, todo santo dia.",
        "Bastaria um minuto, se eles só começassem.",
      ],
      pivot: "Quando brincam, ficam concentradíssimos.\nSe as tarefas fossem assim também…",
      idea_label: "Aí me veio uma ideia.",
      idea: "E se eu misturasse um pouco de brincadeira na lista de tarefas,\npara que começassem por conta própria?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Surpresa",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Tarefas",
      formula_c: "Se mexer por surpresa",
      concept: "Gacha × Tarefas = Se mexer por surpresa",
      call: ["O que será que vai sair?", "Quem sabe uma cápsula de recompensa?"],
      trick: [
        "Dá para influenciar de leve qual tarefa vai sair.",
        "Defina prioridades — jantar antes de escovar os dentes.",
        "Misture \"cápsulas de recompensa\" aqui e ali.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Disposição livre",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Tarefas",
      formula_c: "Na ordem deles",
      concept: "Bingo × Tarefas = Na ordem deles",
      call: ["Vamos fazer bingo!", "Bingo = recompensa."],
      trick: [
        "Coloque as tarefas onde quiser na cartela.",
        "Escolha quantos bingos valem uma recompensa.",
        "Coloque a tarefa mais chata no meio — um toque = quatro bingos.",
        "Encadeie etapas relacionadas numa linha para que precisem fazer todas.",
        "Parece escolha deles — mas você é quem define a ordem.",
        "Bingo de calendário funciona ótimo para férias ou véspera de prova.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoTabuleiro",
      tag: "Passinhos",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Tabuleiro",
      formula_b: "Tarefas",
      formula_c: "Passo a passo",
      concept: "Tabuleiro × Tarefas = Passo a passo",
      call: ["Bora jogar tabuleiro?", "Chegou ao pé da montanha — recompensa pra você."],
      trick: [
        "A ordem fica totalmente travada.",
        "Sentar → abrir o livro → pegar o lápis → uma questão → recompensa → próxima página…",
        "Se o primeiro passo for pequeno o bastante, o resto vem sozinho.",
        "Cada trajeto tem densidade própria de casas.",
        "Montanha (denso no fim) / Espaço (denso no começo) / Beira de rio (uniforme) — escolha pelo humor.",
      ],
    },
    {
      id: "farm",
      name: "TodoHorta",
      tag: "Crescimento",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Crescimento",
      formula_b: "Tarefas",
      formula_c: "Se mexer pelo progresso",
      concept: "Crescimento × Tarefas = Se mexer pelo progresso",
      call: ["Quanto vai regar hoje?", "Será que cresce?"],
      trick: [
        "Premia o esforço, não só o feito/não-feito.",
        "As plantas crescem de 10% em 10%.",
        "Mire um nível de crescimento por rega.",
        "Se passar do alvo, a água muda de cor.",
      ],
    },
  ],
};
