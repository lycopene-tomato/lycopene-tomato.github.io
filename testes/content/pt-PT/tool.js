/* ============================================================
 * content/pt-PT/tool.js — European Portuguese: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["pt-PT"] = window.__CONTENT__["pt-PT"] || {};
window.__CONTENT__["pt-PT"].categories = window.__CONTENT__["pt-PT"].categories || {};

window.__CONTENT__["pt-PT"].categories.tool = {
  id: "tool",
  name: "Série Timer",
  subtitle: "O \"depois\" torna-se \"agora\" — temporizadores antiadiamento.",
  lineup_title: "Contagem decrescente conforme a situação.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Antiadiamento",
  formula: { a: "Ferramenta", b: "Momento", c: "Resolvido" },

  story: {
    tagline: "\"Depois\" transforma-se em \"agora\".",
    intro: "Para a criança que diz sempre \"mais 5 minutos\".\nTempo e limite para criar o clique da mudança.",
    empathy: {
      label: "Conheces este momento?",
      lines: [
        "Pego logo no telemóvel quando algo acontece.",
        "Procuro a app, procuro a definição, perco-me.",
        "No final… \"deixa lá\".",
        "Espera, o que ia eu fazer?",
        "Quero só abrir a ferramenta certa na hora.",
      ],
      pivot: "Apps multifuncionais parecem poderosas. Não neste momento.\nAgora preciso de uma só coisa.",
      idea_label: "E então tive uma ideia.",
      idea: "Fazer pequenas ferramentas para um único momento.\nAbrir, tocar — pronto.",
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
      call: ["Vamos fazer uma pausa?", "Mais um lançamento?"],
      trick: [
        "Nada de \"toca 5 min\" — é o ângulo e o impulso do lançamento que criam o tempo. O fim também soa certo.",
        "Cada planeta tem o seu tempo. Mais longe do Sol, mais longo; muito perto, espiral que absorve.",
        "Só Plutão é o desafio ∞, sem aumento de gravidade com o tempo. Bater o recorde é a recompensa.",
      ],
    },
  ],
};
