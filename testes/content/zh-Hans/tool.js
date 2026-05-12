/* ============================================================
 * content/zh-Hans/tool.js — Chinese (Simplified): Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["zh-Hans"] = window.__CONTENT__["zh-Hans"] || {};
window.__CONTENT__["zh-Hans"].categories = window.__CONTENT__["zh-Hans"].categories || {};

window.__CONTENT__["zh-Hans"].categories.tool = {
  id: "tool",
  name: "Timer系列",
  subtitle: "把「待会儿」变成「现在」——拖延应对的计时器系列。",
  lineup_title: "按情境的倒计时。",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "应对拖延",
  formula: { a: "工具", b: "瞬间", c: "解决" },

  story: {
    tagline: "「待会儿」就变「现在」。",
    intro: "给「再 5 分钟」停不下来的孩子。\n用时间和分段,创造切换的契机。",
    empathy: {
      label: "有过这样的瞬间吗?",
      lines: [
        "事情来了第一时间想拿起手机。",
        "找应用,找设置,迷路。",
        "结果——「算了」。",
        "等等,刚刚要做什么来着?",
        "我只想瞬间打开正确的工具。",
      ],
      pivot: "功能繁多的应用看起来强大。可此刻没用。\n这一刻只需要单一用途的工具。",
      idea_label: "于是我想到——",
      idea: "做一些贴合单一瞬间的小工具。\n打开,点一下,搞定。",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "时间",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "发射",
      formula_b: "稍后",
      formula_c: "再来一次就动",
      concept: "发射 × 稍后 = 再来一次就动",
      call: ["要不要,稍微休息一下?", "再发射一次?"],
      trick: [
        "不是「按 5 分钟」,而是用发射的角度和势头,自己创造时间。结束也心服口服。",
        "每颗行星时间不同。距太阳越远转得越长,靠近时则被螺旋吸入。",
        "只有冥王星是没有随时间增加重力的 ∞ 挑战。打破最长纪录是奖励。",
      ],
    },
  ],
};
