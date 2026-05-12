/* ============================================================
 * content/ru/other.js — Russian: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ru"] = window.__CONTENT__["ru"] || {};
window.__CONTENT__["ru"].categories = window.__CONTENT__["ru"].categories || {};

window.__CONTENT__["ru"].categories.other = {
  id: "other",
  name: "Серия Other",
  subtitle: "Вне родительской оси — бонус, собранный на лету. Игра · инструмент · пауза.",
  lineup_title: "Бонус-приложения.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Бонус",
  formula: { a: "По наитию", b: "Разработка", c: "Бонус" },

  story: {
    tagline: "По наитию — как бонус.",
    intro: "Основная линия — приложения, которые облегчают родительство. А тут сбоку — бонус, собранный на лету.\nИгра, инструмент, пауза — пока ничего нет.",
    empathy: {
      label: "Бывает такое настроение?",
      badge: "Лайтово",
      lines: [
        "Отложим серьёзное в сторону.",
        "Игра, инструмент — что угодно.",
        "……Пока тут ничего нет.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Игра",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 минута",
      formula_b: "Разбудить мозг",
      formula_c: "Сменить обстановку",
      concept: "1 минута × Разбудить мозг = Сменить обстановку",
      call: ["Всего одна головоломка?"],
      trick: [
        "Около минуты на загадку.",
        "Сложность нарастает плавно.",
        "Без рекламы.",
      ],
    },
  ],
};
