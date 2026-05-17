window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.ja = window.__CONTENT__.ja || {};
window.__CONTENT__.ja.categories = window.__CONTENT__.ja.categories || {};

window.__CONTENT__.ja.categories.other = {
  id: "other",
  name: "Other",
  subtitle: "「育児を少しでも楽に」から外れる、おまけ枠。ゲーム・便利ツール・息抜きなど。",
  lineup_title: "おまけのアプリ。",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "おまけ",
  formula: { a: "気まぐれ", b: "開発", c: "おまけ" },

  story: {
    tagline: "気まぐれで、おまけです。",
    intro: "メインは「育児を少しでも楽に」のアプリ。ここはそれ以外、ふらっと作ったおまけ枠。\nゲームとか、便利ツールとか、息抜きとか。まだ何もないけど。",
    empathy: {
      label: "たまには、こんな気持ちも？",
      badge: "ゆるゆる",
      lines: [
        "メインの話は、ちょっと置いといて。",
        "ゲームでも、便利ツールでも。",
        "……まだ、何もないけど。",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "ちいさなパズル",
      tag: "ゲーム",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      pricing: "無料",
      formula_a: "1分",
      formula_b: "頭の体操",
      formula_c: "気分転換",
      concept: "1分 × 頭の体操 = 気分転換",
      call: ["1問だけ、やってみる？"],
      trick: [
        "1問1分で完結する、スキマ時間用パズル。",
        "難易度は徐々に上がる設計。",
        "広告なし。",
      ],
      setupSteps: [
        { title: "アプリを開いて、1 問やる", desc: "最初は易しいところから。1 問 1 分で終わるので、コーヒー入れる間に 1 問。" },
        { title: "解けたら次へ", desc: "詰まったらやめても OK。続きはいつでも再開できる。" },
        { title: "難しくなったらやめる", desc: "徐々に難しくなる設計。「ここで打ち止め」を自分で決められる。" },
      ],
    },
  ],
};
