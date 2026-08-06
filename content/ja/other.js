window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.ja = window.__CONTENT__.ja || {};
window.__CONTENT__.ja.categories = window.__CONTENT__.ja.categories || {};

window.__CONTENT__.ja.categories.other = {
  id: "other",
  name: "Other",
  subtitle: "「育児を少しでも楽に」から外れる、おまけ枠。ゲーム・便利ツール・息抜きなど。",
  seoTitle: "レトロゲーム移植などのおまけアプリ",
  seoDesc: "「育児を少しでも楽に」から外れるおまけ枠。PC-9801のベーマガ掲載ゲームのiPhone移植など、ゲームや息抜きの小さなアプリを置いています。",
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
      appstore_url: "https://apps.apple.com/app/id6770316950",
      hero_image: "images/apps/receive.jpeg",
      pricing: "無料",
      formula_a: "PC-98",
      formula_b: "スマフォ",
      formula_c: "想い出",
      concept: "PC-98 × スマフォ = 想い出",
      seoTitle: "PC-9801のベーマガ掲載テニスゲームをiPhoneに移植",
      seoDesc: "マイコンBASICマガジン掲載の2人対戦テニスゲーム「レシーブNo.1」を、N88-BASIC 100行の物理計算ごとiPhoneに移植。当時は不可能だったCPU対戦を遺伝的アルゴリズムで実装したレトロゲームです。",
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
    {
      id: "pivotmerge",
      name: "Pivot & Merge",
      tag: "2×2回転",
      appstore_url: "https://apps.apple.com/app/id6795719501",
      hero_image: "images/apps/pivotmerge.jpeg",
      pricing: "無料",
      formula_a: "回転",
      formula_b: "合体",
      formula_c: "連鎖",
      concept: "回転 × 合体 = 連鎖",
      seoTitle: "2×2を回して数字を合体させる、時間制限のないパズル",
      seoDesc: "盤面に指を置くと、いちばん近い2×2が指について回ります。同じ数字がたて・よこでつながると合体し、空いたマスに落ちてきてまた揃うと連鎖。ターン制なので時間に追われず、途中でやめても盤面はそのまま残ります。",
      call: [
        "覚えるのは1分",
        "極めるには一生",
      ],
      trick: [
        "<<Pivot & Merge>> 指を置いて、いちばん近い 2×2 を回すだけ。",
        "同じ数字がつながると合体。2 個で 2 倍、4 個なら 8 倍。",
        "空いたマスに落ちてきて、また揃えば連鎖。スコアは連鎖した数だけ倍になる。",
        "ターン制。指を置くまで盤面は動かないので、いつでも中断できる。",
      ],
      setupSteps: [
        { title: "指を置いて回す", desc: "いちばん近い 4 マスが指について回ります。離した向きで確定、グレーのまま離せば取り消し。" },
        { title: "たて・よこで合体", desc: "うちの子は「4 つくっつけると 8 倍」を覚えてから、狙って四角く並べるようになりました。" },
        { title: "落ちて、また揃う", desc: "指を離したあとに連鎖が伸びていくので、そこだけ一緒に眺めています。" },
      ],
    },
  ],
};
