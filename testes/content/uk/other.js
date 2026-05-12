/* ============================================================
 * content/uk/other.js — Ukrainian: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["uk"] = window.__CONTENT__["uk"] || {};
window.__CONTENT__["uk"].categories = window.__CONTENT__["uk"].categories || {};

window.__CONTENT__["uk"].categories.other = {
  id: "other",
  name: "Серія Other",
  subtitle: "Поза батьківською віссю — бонус, зроблений мимохідь. Гра · інструмент · пауза.",
  lineup_title: "Бонус-застосунки.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Бонус",
  formula: { a: "За настроєм", b: "Розробка", c: "Бонус" },

  story: {
    tagline: "За настроєм — як бонус.",
    intro: "Головна вісь — застосунки, що полегшують батьківство. Поруч — бонус, зроблений мимохідь.\nГра, інструмент, пауза — поки тут немає нічого.",
    empathy: {
      label: "Часом виникає таке бажання?",
      badge: "Невимушено",
      lines: [
        "Відкладімо важливе на хвильку.",
        "Гра, інструмент — будь-що.",
        "……Наразі тут нічого немає.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Гра",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 хвилина",
      formula_b: "Розбудити мозок",
      formula_c: "Зміна повітря",
      concept: "1 хвилина × Розбудити мозок = Зміна повітря",
      call: ["Лише одна загадка?"],
      trick: [
        "Приблизно хвилина на загадку.",
        "Складність зростає поступово.",
        "Без реклами.",
      ],
    },
  ],
};
