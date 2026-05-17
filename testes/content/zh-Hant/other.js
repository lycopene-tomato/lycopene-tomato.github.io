/* ============================================================
 * content/zh-Hant/other.js — 繁體中文：其他類
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["zh-Hant"] = window.__CONTENT__["zh-Hant"] || {};
window.__CONTENT__["zh-Hant"].categories = window.__CONTENT__["zh-Hant"].categories || {};

window.__CONTENT__["zh-Hant"].categories.other = {
  id: "other",
  name: "Other",
  subtitle: "偏離「讓育兒輕鬆一些」主軸的附加區。遊戲、便利工具、喘口氣的小東西。",
  lineup_title: "附加的應用程式。",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "附加",
  formula: { a: "隨興", b: "開發", c: "附加" },

  story: {
    tagline: "隨興，當作附加。",
    intro: "主力是「讓育兒輕鬆一些」的應用程式。這裡是主軸之外，隨手做的附加區。\n遊戲、便利工具、喘口氣之類的。雖然還什麼都沒放。",
    empathy: {
      label: "偶爾，也有這樣的心情？",
      badge: "放鬆",
      lines: [
        "主題的事，先暫時放一邊。",
        "遊戲也好，便利工具也好。",
        "……雖然，現在還什麼都沒有。",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "小拼圖",
      tag: "遊戲",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      pricing: "免費",
      formula_a: "1 分鐘",
      formula_b: "腦力暖身",
      formula_c: "轉換心情",
      concept: "1 分鐘 × 腦力暖身 = 轉換心情",
      call: ["要不要解一題就好？"],
      trick: [
        "1 題 1 分鐘就結束，給空檔時間玩的拼圖。",
        "難度設計成慢慢往上爬。",
        "沒有廣告。",
      ],
      setupSteps: [
        { title: "打開應用程式，解一題", desc: "從簡單的開始就好。1 題 1 分鐘就結束，沖咖啡的空檔就能解 1 題。" },
        { title: "解完了就下一題", desc: "卡住了就停。下次隨時都能接著解。" },
        { title: "變難了，就停下來", desc: "難度是慢慢往上爬的設計。「就到這裡」可以自己決定。" },
      ],
    },
  ],
};
