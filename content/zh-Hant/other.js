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
  seoTitle: "復古遊戲移植等等的附加作品",
  seoDesc: "偏離「讓育兒輕鬆一些」主軸的附加區:移植到 iPhone 的 PC-9801 雜誌網球遊戲,還有一些小工具和喘口氣的小東西。",
  lineup_title: "附加的應用程式。",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "附加",
  formula: { a: "隨興", b: "開發", c: "附加" },

  story: {
    tagline: "隨興，當作附加。",
    intro: "主力是「讓育兒輕鬆一些」的應用程式。這裡是主軸之外，隨手做的附加區。\n遊戲、便利工具、喘口氣之類的。",
    empathy: {
      label: "偶爾，也有這樣的心情？",
      badge: "放鬆",
      lines: [
        "主題的事，先暫時放一邊。",
        "遊戲也好，便利工具也好。",
        "或是自己小時候的回憶之類的。",
      ],
    },
  },

  apps: [
    {
      id: "receive",
      name: "Receive No.1",
      tag: "PC-98",
      appstore_url: "https://apps.apple.com/app/id6770316950",
      hero_image: "images/apps/receive.jpeg",
      pricing: "免費",
      formula_a: "PC-98",
      formula_b: "智慧型手機",
      formula_c: "回憶",
      concept: "PC-98 × 智慧型手機 = 回憶",
      seoTitle: "移植到 iPhone 的 PC-9801 網球遊戲",
      seoDesc: "日本 80 年代雜誌 Bēmaga 上的 100 行打字輸入網球遊戲《Receive No.1》,連物理計算和三角函數表一起逐行移植到 iPhone,再加上當年硬體跑不動的遺傳演算法 CPU 對手。",
      call: [
        "BASIC 雜誌!?",
        "N88-BASIC",
      ],
      trick: [
        "<<Receive No.1>> 那時候的網球遊戲，現在來到這裡。",
        "實作了當時不可能的 CPU 對戰。",
        "導入 GA (Genetic Algorithm)，會成長的對手。",
        "碰撞判定、三角函數，完全重現當時的邏輯。",
      ],
      code_sample: "670 BEEP:IF SU=T THEN SU=ABS(SU-3) ELSE P(SU)=P(SU)+1\n680 GOSUB *TOKUTENKAKU:IF P(SU)=15 THEN GOTO *SHOUHAI",
      setupSteps: [
        { title: "總之先玩", desc: "球場下方是觸控板。" },
        { title: "重現當時", desc: "球有時候會穿過手臂的那種不講理感。" },
        { title: "時機", desc: "當時的記憶,湧現出來。" },
      ],
    },
  ],
};
