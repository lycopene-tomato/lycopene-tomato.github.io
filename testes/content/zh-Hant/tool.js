/* ============================================================
 * content/zh-Hant/tool.js — Chinese (Traditional): Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["zh-Hant"] = window.__CONTENT__["zh-Hant"] || {};
window.__CONTENT__["zh-Hant"].categories = window.__CONTENT__["zh-Hant"].categories || {};

window.__CONTENT__["zh-Hant"].categories.tool = {
  id: "tool",
  name: "Timer系列",
  subtitle: "把「待會儿」變成「現在」——拖延應对的計時器系列。",
  lineup_title: "按情境的倒計時。",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "應对拖延",
  formula: { a: "工具", b: "瞬間", c: "解决" },

  story: {
    tagline: "「待會儿」就變「現在」。",
    intro: "给「再 5 分鐘」停不下來的孩子。\n用時間和分段,创造切換的契機。",
    empathy: {
      label: "有過這樣的瞬間嗎?",
      lines: [
        "事情來了第一時間想拿起手機。",
        "找應用,找設置,迷路。",
        "结果——「算了」。",
        "等等,刚刚要做什麼來着?",
        "我只想瞬間打开正確的工具。",
      ],
      pivot: "功能繁多的應用看起來強大。可此刻没用。\n這一刻只需要單一用途的工具。",
      idea_label: "于是我想到——",
      idea: "做一些贴合單一瞬間的小工具。\n打开,點一下,搞定。",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "時間",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "發射",
      formula_b: "稍後",
      formula_c: "再來一次就動",
      concept: "發射 × 稍後 = 再來一次就動",
      call: ["要不要,稍微休息一下?", "再發射一次?"],
      trick: [
        "不是「按 5 分鐘」,而是用發射的角度和勢頭,自己创造時間。结束也心服口服。",
        "每颗行星時間不同。距太陽越遠轉得越長,靠近時則被螺旋吸入。",
        "只有冥王星是没有隨時間增加重力的 ∞ 挑戰。打破最長纪錄是獎勵。",
      ],
    },
  ],
};
