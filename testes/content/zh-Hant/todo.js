/* ============================================================
 * content/zh-Hant/todo.js — Chinese (Traditional): Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["zh-Hant"] = window.__CONTENT__["zh-Hant"] || {};
window.__CONTENT__["zh-Hant"].categories = window.__CONTENT__["zh-Hant"].categories || {};

window.__CONTENT__["zh-Hant"].categories.todo = {
  id: "todo",
  name: "Todo系列",
  subtitle: "把「快去做!」變成「我想試試!」——養成習慣的應用。",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "習慣",
  formula: { a: "玩", b: "任務", c: "習慣" },

  story: {
    tagline: "從「快去做!」到「我想試試!」",
    intro: "用玩心轻推一下,讓孩子自己开始動起來。",
    empathy: {
      label: "似曾相識?",
      lines: [
        "帶孩子真不容易。",
        "「快去做!」根本不起作用。",
        "就算提高音量,他們也只是闹脾氣。",
        "同樣的話,每天都要重復。",
        "其實只要开始,一分鐘就做完了。",
      ],
      pivot: "玩起來那麼投入。\n要是做事也能這樣就好了……",
      idea_label: "于是我想到——",
      idea: "把一點玩心混進待办事项里,\n看看他們能不能自己動起來。",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "驚喜",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "扭蛋",
      formula_b: "任務",
      formula_c: "在驚喜中行動",
      concept: "扭蛋 × 任務 = 在驚喜中行動",
      call: ["這次會抽到什麼?", "說不定是獎勵扭蛋哦?"],
      trick: [
        "可以悄悄引導抽到哪个任務。",
        "設定優先顺序,比如先吃飯再刷牙。",
        "在其中混入「獎勵扭蛋」。",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "自由排列",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "宾果",
      formula_b: "任務",
      formula_c: "按自己的顺序行動",
      concept: "宾果 × 任務 = 按自己的顺序行動",
      call: ["集齊宾果吧!", "宾果就能拿到獎勵。"],
      trick: [
        "在棋盘上任意位置放置任務。",
        "可設定多少连線後獲得獎勵。",
        "把不喜歡的任務放在正中央——點一下就完成 4 个连線。",
        "把相關步骤连成一行,必须全部完成。",
        "看似是孩子選的——其實顺序由你决定。",
        "日歷宾果非常适合暑假計劃或备考。",
      ],
    },
    {
      id: "sugoroku",
      name: "Todo飛行棋",
      tag: "小步前進",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "飛行棋",
      formula_b: "任務",
      formula_c: "一步一步走",
      concept: "飛行棋 × 任務 = 一步一步走",
      call: ["來下盘飛行棋吧。", "到山脚下就能拿到獎勵。"],
      trick: [
        "顺序完全固定。",
        "坐下 → 翻开书 → 拿起铅笔 → 做完一題 → 獎勵 → 下一頁……",
        "只要第一步够小,後面自然就跟上來。",
        "每个關卡格子密度不同。",
        "山地(後半段重)/太空(前半段重)/河邊(均勻)——按心情挑選。",
      ],
    },
    {
      id: "farm",
      name: "Todo菜園",
      tag: "成長",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "成長",
      formula_b: "任務",
      formula_c: "用進度推動",
      concept: "成長 × 任務 = 用進度推動",
      call: ["今天浇多少水?", "會長大嗎?"],
      trick: [
        "獎勵的是努力,不只是「做或没做」。",
        "植物每次成長 10%。",
        "目标是每次浇水推進一格成長。",
        "超過目标後,水會變顏色。",
      ],
    },
  ],
};
