/* ============================================================
 * content/zh-Hant/record.js — 繁體中文：記錄系列
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["zh-Hant"] = window.__CONTENT__["zh-Hant"] || {};
window.__CONTENT__["zh-Hant"].categories = window.__CONTENT__["zh-Hant"].categories || {};

window.__CONTENT__["zh-Hant"].categories.record = {
  id: "record",
  name: "Log",
  subtitle: "把每天的「又來了」，化作看見孩子的成長，與父母的安心。",
  lineup_title: "依內容不同，整理用的應用程式。",
  label_call: "煩躁",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "預防",
  formula: { a: "又來了", b: "記錄", c: "成長？" },

  story: {
    tagline: "「又來了」會變成「好像減少了」。",
    intro: "只憑記憶，看不見的變化很多。\n寫下來，孩子的小小成長與父母的安心，就會浮現出來。",
    empathy: {
      label: "今天又是這樣……",
      badge: "心慌",
      lines: [
        "學校又打電話來了。",
        "胸口被揪緊。",
        "可是，真的是「又」嗎？",
        "和上次一樣嗎？還是有變化？",
        "光靠記憶，分不出來——",
      ],
      tried_label: "也有做筆記，可是……",
      tried: [
        "寫在紙上，之後找不到。",
        "用手機的備忘錄又難整理。",
        "「以前是不是也有過？」想確認也沒辦法。",
      ],
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "家長備忘",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "麻煩事",
      formula_b: "記錄",
      formula_c: "整理過後變得清楚",
      concept: "麻煩事 × 記錄 = 整理過後變得清楚",
      call: [
        "○○是誰來著？",
        "和上次吵架是同一個孩子嗎？",
      ],
      trick: [
        "在日曆上以圓點顯示發生日，依朋友別統計件數。可以用「人」與「時間」整理。",
        "只給家長看的備忘（對方家長的聯絡方式、朋友的個性等）用心算題的家長閘門保護。",
        "依場所（學校、家庭、才藝班）分類，多個兄弟姊妹也能切換。",
      ],
    },
  ],
};
