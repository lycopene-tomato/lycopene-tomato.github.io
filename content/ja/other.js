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
    intro: "メインは「育児を少しでも楽に」のアプリ。ここはそれ以外、ふらっと作ったおまけ枠。\nゲームとか、便利ツールとか、息抜きとか。",
    empathy: {
      label: "たまには、こんな気持ちも？",
      badge: "ゆるゆる",
      lines: [
        "メインの話は、ちょっと置いといて。",
        "ゲームでも、便利ツールでも。",
        "自分が子供時代の想い出とか。",
      ],
    },
  },

  apps: [
    {
      id: "receive",
      name: "Receive No.1",
      tag: "PC-98",
      appstore_url: "",
      lp_published: true,
      hero_image: "images/apps/receive.jpeg",
      pricing: "無料",
      formula_a: "PC-98",
      formula_b: "スマフォ",
      formula_c: "想い出",
      concept: "PC-98 × スマフォ = 想い出",
      call: [
        "ベーマガ!?",
        "N88-BASIC",
      ],
      trick: [
        "<<Receive No.1>> あの頃のテニスゲームが、いまここに。",
        "当時不可能だった CPU 対戦を実装。",
        "GA (Genetic Algorithm) を導入、成長する対戦相手。",
        "当たり判定・三角関数まで当時のロジックを再現。",
      ],
      code_sample: "670 BEEP:IF SU=T THEN SU=ABS(SU-3) ELSE P(SU)=P(SU)+1\n680 GOSUB *TOKUTENKAKU:IF P(SU)=15 THEN GOTO *SHOUHAI",
      setupSteps: [
        { title: "とにかくプレイ", desc: "フィールド下が、タッチパットになっています。" },
        { title: "当時を再現", desc: "腕をすり抜ける時がある理不尽さ。" },
        { title: "タイミング", desc: "甦る当時の記憶。" },
      ],
    },
  ],
};
