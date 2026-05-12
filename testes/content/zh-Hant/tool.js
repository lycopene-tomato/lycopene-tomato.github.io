/* ============================================================
 * content/zh-Hant/tool.js — 繁體中文：Timer 系列
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["zh-Hant"] = window.__CONTENT__["zh-Hant"] || {};
window.__CONTENT__["zh-Hant"].categories = window.__CONTENT__["zh-Hant"].categories || {};

window.__CONTENT__["zh-Hant"].categories.tool = {
  id: "tool",
  name: "Timer 系列",
  subtitle: "把「等一下」變成「現在」。對付拖延的計時器系列。",
  lineup_title: "依情境選擇，倒數計時。",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "對付拖延",
  formula: { a: "巧思", b: "等一下", c: "現在" },

  story: {
    tagline: "「等一下」會變成「現在」。",
    intro: "對於停不下「等一下」「再 5 分鐘」的孩子。\n用時間與段落，做出切換時刻的小契機。",
    empathy: {
      label: "這樣的瞬間，是不是常常發生？",
      badge: "拖拖拉拉",
      lines: [
        "「再 5 分鐘」始終結束不了。",
        "「一下下」一回神就 30 分鐘了。",
        "打開漫畫，那天就回不來了。",
        "越說「快去做」，越僵住。",
        "用普通的計時器，只會吵起來。",
      ],
      tried_label: "也試過很多方法。",
      tried: [
        "說「還有 5 分鐘」，可是孩子還抓不到 5 分鐘的感覺。",
        "休息中也要一直喊「還有 3 分鐘」「還有 2 分鐘」。",
        "把東西拿走，就大發脾氣。",
      ],
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "動著休息",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "發射",
      formula_b: "等一下",
      formula_c: "再發射一次就動起來",
      concept: "發射 × 等一下 = 再發射一次就動起來",
      call: [
        "要稍微休息一下嗎？",
        "再發射一次看看？",
      ],
      trick: [
        "不是「按一下 5 分鐘」，而是用發射的角度和力道，自己決定時間。結束時也心服口服。",
        "每個行星的時間不一樣。離太陽越遠，繞得越久；越靠近，會被螺旋吸進去。",
        "只有冥王星是隨時間經過不會增加重力的 ∞ 挑戰。當作刷新最長紀錄的獎勵。",
      ],
    },
  ],
};
