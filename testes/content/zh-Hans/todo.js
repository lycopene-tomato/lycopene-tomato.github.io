/* ============================================================
 * content/zh-Hans/todo.js — Chinese (Simplified): Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["zh-Hans"] = window.__CONTENT__["zh-Hans"] || {};
window.__CONTENT__["zh-Hans"].categories = window.__CONTENT__["zh-Hans"].categories || {};

window.__CONTENT__["zh-Hans"].categories.todo = {
  id: "todo",
  name: "Todo系列",
  subtitle: "把「快去做!」变成「我想试试!」——养成习惯的应用。",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "习惯",
  formula: { a: "玩", b: "任务", c: "习惯" },

  story: {
    tagline: "从「快去做!」到「我想试试!」",
    intro: "用玩心轻推一下,让孩子自己开始动起来。",
    empathy: {
      label: "似曾相识?",
      lines: [
        "带孩子真不容易。",
        "「快去做!」根本不起作用。",
        "就算提高音量,他们也只是闹脾气。",
        "同样的话,每天都要重复。",
        "其实只要开始,一分钟就做完了。",
      ],
      pivot: "玩起来那么投入。\n要是做事也能这样就好了……",
      idea_label: "于是我想到——",
      idea: "把一点玩心混进待办事项里,\n看看他们能不能自己动起来。",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "惊喜",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "扭蛋",
      formula_b: "任务",
      formula_c: "在惊喜中行动",
      concept: "扭蛋 × 任务 = 在惊喜中行动",
      call: ["这次会抽到什么?", "说不定是奖励扭蛋哦?"],
      trick: [
        "可以悄悄引导抽到哪个任务。",
        "设定优先顺序,比如先吃饭再刷牙。",
        "在其中混入「奖励扭蛋」。",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "自由排列",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "宾果",
      formula_b: "任务",
      formula_c: "按自己的顺序行动",
      concept: "宾果 × 任务 = 按自己的顺序行动",
      call: ["集齐宾果吧!", "宾果就能拿到奖励。"],
      trick: [
        "在棋盘上任意位置放置任务。",
        "可设定多少连线后获得奖励。",
        "把不喜欢的任务放在正中央——点一下就完成 4 个连线。",
        "把相关步骤连成一行,必须全部完成。",
        "看似是孩子选的——其实顺序由你决定。",
        "日历宾果非常适合暑假计划或备考。",
      ],
    },
    {
      id: "sugoroku",
      name: "Todo飞行棋",
      tag: "小步前进",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "飞行棋",
      formula_b: "任务",
      formula_c: "一步一步走",
      concept: "飞行棋 × 任务 = 一步一步走",
      call: ["来下盘飞行棋吧。", "到山脚下就能拿到奖励。"],
      trick: [
        "顺序完全固定。",
        "坐下 → 翻开书 → 拿起铅笔 → 做完一题 → 奖励 → 下一页……",
        "只要第一步够小,后面自然就跟上来。",
        "每个关卡格子密度不同。",
        "山地(后半段重)/太空(前半段重)/河边(均匀)——按心情挑选。",
      ],
    },
    {
      id: "farm",
      name: "Todo菜园",
      tag: "成长",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "成长",
      formula_b: "任务",
      formula_c: "用进度推动",
      concept: "成长 × 任务 = 用进度推动",
      call: ["今天浇多少水?", "会长大吗?"],
      trick: [
        "奖励的是努力,不只是「做或没做」。",
        "植物每次成长 10%。",
        "目标是每次浇水推进一格成长。",
        "超过目标后,水会变颜色。",
      ],
    },
  ],
};
