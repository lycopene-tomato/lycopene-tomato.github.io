/* ============================================================
 * content/zh-Hant/todo.js — 繁體中文：Todo 系列
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["zh-Hant"] = window.__CONTENT__["zh-Hant"] || {};
window.__CONTENT__["zh-Hant"].categories = window.__CONTENT__["zh-Hant"].categories || {};

window.__CONTENT__["zh-Hant"].categories.todo = {
  id: "todo",
  name: "Todo",
  subtitle: "把「快去做！」變成「我想試試看！」的習慣養成系列。",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "養成習慣",
  formula: { a: "遊戲", b: "該做的事", c: "習慣" },

  story: {
    tagline: "把「快去做！」變成「我想試試看！」。",
    intro: "用一點點遊戲的巧思，讓孩子自己願意動起來。\n不必再每天說「快一點！」的日常結構。",
    empathy: {
      label: "每天都是這樣的日子。",
      badge: "煩躁",
      lines: [
        "今天早上，又對孩子大聲了。",
        "說「快去做！」也沒用。",
        "生氣，孩子就鬧脾氣，更不做。",
        "每天、每天，重複一樣的事。",
        "只要做就立刻結束了的——",
      ],
      tried_label: "試過很多方法。",
      tried: [
        "做了 Todo 清單，可是孩子忘了打勾。",
        "把該做的事寫在紙上，孩子只說「不想做」。",
        "獎勵貼紙也是，過一陣子就膩了。",
      ],
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "驚喜",
      appstore_url: "https://apps.apple.com/us/app/todogatya/id6761904343",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "扭蛋",
      formula_b: "該做的事",
      formula_c: "用驚喜啟動",
      concept: "扭蛋 × 該做的事 = 用驚喜啟動",
      call: [
        "下一個會是什麼呢？",
        "要不要轉一下？",
      ],
      trick: [
        "扭蛋的出場順序可以稍微控制，所以「吃飯 → 刷牙」的順序還是能守住。",
        "把獎勵（喜歡的零食、10 分鐘遊戲時間等）混進扭蛋，「下一個會是什麼？」的期待感就能持續。",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "自由排列",
      appstore_url: "https://apps.apple.com/us/app/todobingo/id6762549881",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "賓果",
      formula_b: "該做的事",
      formula_c: "自己決定動起來",
      concept: "賓果 × 該做的事 = 自己決定動起來",
      call: [
        "從哪一格開始填？",
        "再一格就賓果了！",
      ],
      trick: [
        "中間那一格是所有列的必經點。把希望孩子做的事放在這裡，就一定會被完成。",
        "把最簡單的事放在第一列。「再一格」的完成欲望會推著孩子動。",
        "把「解題 → 打勾 → 訂正」放在同一列，看起來是孩子自己決定順序，但其實你掌握著賓果的條件。",
        "日曆賓果可以做長期計畫。每天填一格，偷懶的日子之後再補上也沒關係。",
      ],
    },
    {
      id: "sugoroku",
      name: "Todo飛行棋",
      tag: "小步驟",
      appstore_url: "https://apps.apple.com/us/app/todoladders/id6762462275",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "飛行棋",
      formula_b: "該做的事",
      formula_c: "視覺化來啟動",
      concept: "飛行棋 × 該做的事 = 視覺化來啟動",
      call: [
        "離終點還有幾步？",
        "距離下一個獎勵還剩 3 個。",
      ],
      trick: [
        "把獎勵格穿插進去，「再走幾步就到下一個獎勵」隨時都看得到。",
        "「坐下 → 翻開課本 → 拿起鉛筆」拆得越細，最沉重的第一步就越容易跨出去。",
        "舞台有山（獎勵在後）、宇宙（獎勵在前）、河邊（平均分布）三種。依心情挑選格子密度。",
      ],
    },
    {
      id: "farm",
      name: "Todo菜園",
      tag: "累積",
      appstore_url: "https://apps.apple.com/us/app/todofarm/id6763425345",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "栽培",
      formula_b: "該做的事",
      formula_c: "做了多少就動多少",
      concept: "栽培 × 該做的事 = 做了多少就動多少",
      call: [
        "今天要澆多少水呢？",
        "5 分鐘也好，5 分鐘份就會好好長大喔。",
      ],
      trick: [
        "不是「完成 / 沒完成」的二分。做多少就累積多少。5 分鐘就是 5 分鐘份，20 分鐘就是 20 分鐘份。",
        "單位可以從時間、次數、頁數中選。鋼琴用分鐘，習作用頁數，背誦用次數。",
        "偷懶的日子讓植物枯萎，下次重新開始時可以復活。",
      ],
    },
  ],
};
