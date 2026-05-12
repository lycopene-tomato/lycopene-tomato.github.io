/* ============================================================
 * content/pt-BR/other.js — Brazilian Portuguese: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["pt-BR"] = window.__CONTENT__["pt-BR"] || {};
window.__CONTENT__["pt-BR"].categories = window.__CONTENT__["pt-BR"].categories || {};

window.__CONTENT__["pt-BR"].categories.other = {
  id: "other",
  name: "Série Other",
  subtitle: "Fora do eixo parental, um bônus feito de improviso. Jogo · ferramenta · pausa.",
  lineup_title: "Apps bônus.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bônus",
  formula: { a: "No feeling", b: "Dev", c: "Bônus" },

  story: {
    tagline: "No feeling, de bônus.",
    intro: "O eixo principal são apps que aliviam a maternidade/paternidade. Aqui é o anexo, um bônus feito de improviso.\nJogo, ferramenta, pausa — ainda não tem nada.",
    empathy: {
      label: "Às vezes bate essa vontade?",
      badge: "Tranquilo",
      lines: [
        "Deixa o essencial de lado.",
        "Um joguinho, uma ferramenta — tanto faz.",
        "……Por enquanto, não tem nada.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Jogo",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minuto",
      formula_b: "Despertar cerebral",
      formula_c: "Mudança de ar",
      concept: "1 minuto × Despertar cerebral = Mudança de ar",
      call: ["Só um quebra-cabeça?"],
      trick: [
        "Cerca de um minuto por enigma.",
        "A dificuldade sobe devagarinho.",
        "Sem anúncios.",
      ],
    },
  ],
};
