/* ============================================================
 * content/pt-BR/tool.js — Brazilian Portuguese: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["pt-BR"] = window.__CONTENT__["pt-BR"] || {};
window.__CONTENT__["pt-BR"].categories = window.__CONTENT__["pt-BR"].categories || {};

window.__CONTENT__["pt-BR"].categories.tool = {
  id: "tool",
  name: "Série Timer",
  subtitle: "O \"depois\" vira \"agora\" — timers anti-procrastinação.",
  lineup_title: "Contagem regressiva conforme a situação.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Anti-procrastinação",
  formula: { a: "Ferramenta", b: "Momento", c: "Resolvido" },

  story: {
    tagline: "\"Depois\" se transforma em \"agora\".",
    intro: "Para a criança que sempre diz \"mais 5 minutos\".\nTempo e limite para criar o clique da mudança.",
    empathy: {
      label: "Esse momento te soa familiar?",
      lines: [
        "Já pego o celular assim que algo acontece.",
        "Procuro o app, procuro o ajuste, me perco.",
        "No fim… \"deixa pra lá\".",
        "Peraí, o que eu ia fazer mesmo?",
        "Só quero abrir a ferramenta certa na hora.",
      ],
      pivot: "Apps multifuncionais parecem poderosos. Não nesse momento.\nAgora preciso de uma coisa só.",
      idea_label: "Aí me veio uma ideia.",
      idea: "Fazer ferramentas pequenas para um único momento.\nAbrir, tocar, pronto.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Tempo",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Lançamento",
      formula_b: "Depois",
      formula_c: "Mover-se relançando",
      concept: "Lançamento × Depois = Mover-se relançando",
      call: ["Vamos dar uma pausa?", "Mais um lançamento?"],
      trick: [
        "Nada de \"toque 5 min\" — é o ângulo e o impulso do lançamento que criam o tempo. O fim também soa justo.",
        "Cada planeta tem seu tempo. Mais longe do Sol, mais longo; pertinho, a espiral suga.",
        "Só Plutão é o desafio ∞, sem o aumento de gravidade com o tempo. Bater o recorde é a recompensa.",
      ],
    },
  ],
};
