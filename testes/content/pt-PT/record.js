/* ============================================================
 * content/pt-PT/record.js — European Portuguese: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["pt-PT"] = window.__CONTENT__["pt-PT"] || {};
window.__CONTENT__["pt-PT"].categories = window.__CONTENT__["pt-PT"].categories || {};

window.__CONTENT__["pt-PT"].categories.record = {
  id: "record",
  name: "Série Log",
  subtitle: "Captar os pequenos factos, ver o padrão, antecipar a próxima vez.",
  lineup_title: "Apps para organizar por conteúdo.",
  label_call: "Preocupação",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Prevenção",
  formula: { a: "Notas", b: "Factos", c: "Evitar a próxima" },

  story: {
    tagline: "Transforma \"outra vez\" em \"desta vez estou pronta\".",
    intro: "Não são emoções, são notas. Quando o padrão aparece, a resposta também.",
    empathy: {
      label: "Hoje, outra vez…",
      badge: "Stress",
      lines: [
        "A escola liga. Outra vez.",
        "O coração aperta-se.",
        "Mas é mesmo \"outra vez\"?",
        "Igualzinho à última? Ou diferente?",
        "Só a memória não chega——.",
      ],
      tried_label: "Eu até tomei notas.",
      tried: [
        "Em papel, depois não as encontro.",
        "Notas do telemóvel: difícil de organizar.",
        "\"Já não tinha acontecido?\" — sem forma de confirmar.",
      ],
      pivot: "A memória acumula até rebentar.\nA nota mostra o todo de uma só vez.",
      idea_label: "E então tive uma ideia.",
      idea: "Captar o momento de imediato\ne usar o padrão para evitar a próxima vez.",
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
      formula_b: "Factos",
      formula_c: "Resposta tranquila",
      concept: "Notas × Factos = Resposta tranquila",
      call: ["Quem era a ○○?", "É a mesma criança da última discussão?"],
      trick: [
        "Regista data, local, envolvidos e o que aconteceu.",
        "Pensado para ser preenchido depois, com a cabeça fria.",
        "Ordenado por data, surgem os padrões recorrentes.",
        "Para a reunião com a escola, retira só o essencial.",
        "Anexa fotos ou notas de voz (tudo fica no dispositivo).",
        "Exporta em PDF ou texto.",
      ],
    },
  ],
};
