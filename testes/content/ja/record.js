window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.ja = window.__CONTENT__.ja || {};
window.__CONTENT__.ja.categories = window.__CONTENT__.ja.categories || {};

window.__CONTENT__.ja.categories.record = {
  id: "record",
  name: "Log系",
  subtitle: "親が、ちゃんと残す。小さな出来事をデータにして、次を防ぐ。",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "プロアクティブ",
  formula: { a: "記録", b: "事柄", c: "プロアクティブに防止" },

  story: {
    tagline: "起きてしまった事を、「次は防ぐ」に変える。",
    intro: "感情ではなく記録で。見えるパターンと、応える手打ち。",
    empathy: {
      label: "こんな日々、ありませんか？",
      lines: [
        "また、同じトラブルが起きた。",
        "こんな事、この前もあった気がする。",
        "もしかして、周期がある？",
        "でも記憶だけじゃ、あいまい。",
        "今度こそは、見逃さないようにしたい。",
      ],
      pivot: "「記憶」だと、いつの間にか藄めて爆発する。\n「記録」にしておけば、全体が見える。",
      idea_label: "そこで、考えた。",
      idea: "事柄をその場でさっと記録して、\nパターンを見て「次を防く」ところまでやろう。",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "トラブルノート",
      tag: "親メモ",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "トラブル",
      formula_b: "記録",
      formula_c: "整理して見える",
      concept: "トラブル × 記録 = 整理して見える",
      call: [
        "○○くん？誰だっけ？",
        "前のケンカと同じ子？",
      ],
      trick: [
        "カレンダーに発生日をドット表示、友達別に件数集計。「人」と「時間」で整理できます。",
        "親だけのメモ (相手の親の連絡先・友達の性格など) は暗算問題のペアレントゲートで保護。",
        "場所 (学校・家族・習い事) で分類、きょうだい複数の切り替えにも対応。",
      ],
    },
  ],
};
