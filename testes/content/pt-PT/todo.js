/* ============================================================
 * content/pt-PT/todo.js — European Portuguese: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["pt-PT"] = window.__CONTENT__["pt-PT"] || {};
window.__CONTENT__["pt-PT"].categories = window.__CONTENT__["pt-PT"].categories || {};

window.__CONTENT__["pt-PT"].categories.todo = {
  id: "todo",
  name: "Série Todo",
  subtitle: "De \"Faz já!\" para \"Quero tentar!\" — apps que criam hábitos.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Hábitos",
  formula: { a: "Brincadeira", b: "Tarefas", c: "Hábito" },

  story: {
    tagline: "De \"Faz já!\" para \"Vou tentar!\".",
    intro: "Apps que convidam a criança a mexer-se sozinha — através da brincadeira.",
    empathy: {
      label: "Soa-te familiar?",
      lines: [
        "Educar é desgastante.",
        "\"Faz já!\" não funciona.",
        "Mesmo levantando a voz, eles ficam amuados.",
        "A mesma coisa, todos os dias.",
        "Bastaria um minuto, se começassem.",
      ],
      pivot: "Quando brincam, ficam concentradíssimos.\nSe as tarefas fossem assim também…",
      idea_label: "E então tive uma ideia.",
      idea: "E se misturasse um pouco de brincadeira na lista de tarefas,\npara começarem por iniciativa própria?",
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
      formula_c: "Mexer-se por surpresa",
      concept: "Gacha × Tarefas = Mexer-se por surpresa",
      call: ["O que sairá desta vez?", "Quem sabe uma cápsula de recompensa?"],
      trick: [
        "Pode-se influenciar discretamente que tarefa sai.",
        "Define prioridades — jantar antes de escovar os dentes.",
        "Mistura \"cápsulas de recompensa\" aqui e ali.",
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
        "Coloca as tarefas onde quiseres no cartão.",
        "Escolhe quantos bingos valem uma recompensa.",
        "Põe a tarefa mais chata no meio — um toque = quatro bingos.",
        "Encadeia passos relacionados numa linha, para terem de fazer tudo.",
        "Parece escolha deles — mas és tu que defines a ordem.",
        "Bingo de calendário funciona muito bem para férias ou véspera de exame.",
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
      call: ["Vamos jogar tabuleiro?", "Chegou ao sopé da montanha — recompensa para ti."],
      trick: [
        "A ordem fica totalmente fixada.",
        "Sentar → abrir o livro → pegar no lápis → uma questão → recompensa → próxima página…",
        "Se o primeiro passo for pequeno o bastante, o resto vem sozinho.",
        "Cada trajeto tem a sua densidade de casas.",
        "Montanha (denso no fim) / Espaço (denso no início) / Beira do rio (uniforme) — escolhe pelo humor.",
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
      formula_c: "Mexer-se pelo progresso",
      concept: "Crescimento × Tarefas = Mexer-se pelo progresso",
      call: ["Quanto vais regar hoje?", "Será que cresce?"],
      trick: [
        "Premeia o esforço, não só o feito/não-feito.",
        "As plantas crescem de 10 % em 10 %.",
        "Aponta a um nível de crescimento por cada rega.",
        "Se passares do alvo, a água muda de cor.",
      ],
    },
  ],
};
