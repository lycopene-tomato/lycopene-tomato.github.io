/* ============================================================
 * content/pt-BR/record.js — Brazilian Portuguese: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["pt-BR"] = window.__CONTENT__["pt-BR"] || {};
window.__CONTENT__["pt-BR"].categories = window.__CONTENT__["pt-BR"].categories || {};

window.__CONTENT__["pt-BR"].categories.record = {
  id: "record",
  name: "Série Log",
  subtitle: "Capturar os pequenos fatos, enxergar o padrão, prevenir a próxima vez.",
  lineup_title: "Apps para organizar por conteúdo.",
  label_call: "Preocupação",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Prevenção",
  formula: { a: "Notas", b: "Fatos", c: "Evitar da próxima" },

  story: {
    tagline: "Transforme \"de novo\" em \"dessa vez estou pronta\".",
    intro: "Não são emoções, são notas. Quando o padrão aparece, a resposta também.",
    empathy: {
      label: "Hoje, de novo…",
      badge: "Estresse",
      lines: [
        "A escola liga. De novo.",
        "O coração aperta.",
        "Mas é mesmo \"de novo\"?",
        "Igualzinho à última vez? Ou diferente?",
        "Só a memória não dá conta——.",
      ],
      tried_label: "Eu até anotei.",
      tried: [
        "No papel, depois não acho mais.",
        "Notas do celular: difícil de organizar.",
        "\"Não rolou isso antes?\" — sem ter como conferir.",
      ],
      pivot: "A memória vai acumulando até explodir.\nA nota deixa o todo visível.",
      idea_label: "Aí me veio uma ideia.",
      idea: "Capturar o momento rapidinho\ne usar o padrão para evitar a próxima vez.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Vida escolar",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Notas",
      formula_b: "Fatos",
      formula_c: "Resposta tranquila",
      concept: "Notas × Fatos = Resposta tranquila",
      call: ["Quem era ○○ mesmo?", "É a mesma criança da última briga?"],
      trick: [
        "Registre data, lugar, envolvidos e o que aconteceu.",
        "Pensado para ser preenchido depois, já com a cabeça fria.",
        "Ordenado por data, padrões recorrentes vão aparecendo.",
        "Para a reunião com a escola, puxe só o essencial.",
        "Anexe fotos ou áudios (tudo fica no aparelho).",
        "Exporte em PDF ou texto.",
      ],
    },
  ],
};
