/* ============================================================
 * content/zh-Hant/record.js — Chinese (Traditional): Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["zh-Hant"] = window.__CONTENT__["zh-Hant"] || {};
window.__CONTENT__["zh-Hant"].categories = window.__CONTENT__["zh-Hant"].categories || {};

window.__CONTENT__["zh-Hant"].categories.record = {
  id: "record",
  name: "Log系列",
  subtitle: "默默記錄小事件,看见模式,预防下一次。",
  lineup_title: "按內容整理的應用。",
  label_call: "心聲",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "预防",
  formula: { a: "記錄", b: "事件", c: "下次不重來" },

  story: {
    tagline: "把「又來了」變成「下次有準备了」。",
    intro: "不是情绪,而是記錄。模式浮現,答案也隨之出現。",
    empathy: {
      label: "又是今天啊……",
      badge: "心跳",
      lines: [
        "學校又打電話來了。",
        "心里揪着。",
        "可真的是「又來」嗎?",
        "和上次一樣?还是不一樣?",
        "光靠記忆,看不清——。",
      ],
      tried_label: "其實有做笔記。",
      tried: [
        "寫在纸上,後來找不到。",
        "用手機便签,整理起來太難。",
        "「以前是不是也有過?」想確認也確認不了。",
      ],
      pivot: "光記在脑子里,堆到爆炸為止。\n記下來,才能看见全貌。",
      idea_label: "于是我想到——",
      idea: "當下快速捕捉,\n再從模式中预防下一次。",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "校園生活",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "記錄",
      formula_b: "事件",
      formula_c: "更從容地跟進",
      concept: "記錄 × 事件 = 更從容地跟進",
      call: ["○○是誰來着?", "和上次吵架的孩子是同一个?"],
      trick: [
        "記錄日期、地點、相關人物和發生了什麼。",
        "設計成等冷静下來再补充也没問題。",
        "按時間排序,反復出現的模式自然浮現。",
        "為家長會單独抽出重點。",
        "可附帶照片或語音备忘錄(仅保存在設备內)。",
        "支持導出為 PDF 或文本。",
      ],
    },
  ],
};
