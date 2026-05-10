window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.ja = window.__CONTENT__.ja || {};
window.__CONTENT__.ja.categories = window.__CONTENT__.ja.categories || {};

window.__CONTENT__.ja.categories.tool = {
  id: "tool",
  name: "Tool系",
  subtitle: "ささやかな、しかし確かな道具。今起きている事象をその場で解決。",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "アドホック",
  formula: { a: "ツール", b: "事象", c: "解決" },

  story: {
    tagline: "今、ちょっと遅めたい。今、タイマーが欲しい。",
    intro: "多機能より、迷わないこと。そんなツールたち。",
    empathy: {
      label: "こんな瞬間、ありませんか？",
      lines: [
        "、と思ったその瞬間に、スマホを取る。",
        "アプリを探す、設定を探す、迷う。",
        "その間に、「もういい」って言われる。",
        "あれ、何しようとしてたんだっけ？。",
        "もっと、一発で出したい。",
      ],
      pivot: "多機能なアプリは、使いこなしそう。\n「これだけ」のアプリが、今欲しい。",
      idea_label: "そこで、考えた。",
      idea: "「起きた事象」に、「それだけのツール」を。\nタップしたらすぐ動く、そんな道具を作ろう。",
    },
  },

  apps: [
    {
      id: "timer",
      name: "シンプルタイマー",
      tag: "時間",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "タイマー",
      formula_b: "シンプル",
      formula_c: "迷わず使える",
      concept: "タイマー × シンプル = 迷わず使える",
      call: ["何分にする？", "鳴ったら教えてね。"],
      trick: [
        "余計な機能を削ぎ落とした、見るだけで分かるUI。",
        "ロック画面でも残り時間が大きく見えます。",
        "複数同時起動にも対応。",
      ],
    },
  ],
};
