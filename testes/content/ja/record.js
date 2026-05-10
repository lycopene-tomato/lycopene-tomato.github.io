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
      id: "wasuremono",
      name: "忘れ物ノート",
      tag: "持ち物",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/wasuremono.jpeg",
      formula_a: "記録",
      formula_b: "持ち物",
      formula_c: "忘れ物が減る",
      concept: "記録 × 持ち物 = 忘れ物が減る",
      call: ["今日も忘れ物しなかった？", "明日の準備、一緒に見ようか。"],
      trick: [
        "「何を、いつ、どんな状況で」忘れたかを記録できます。",
        "曜日ごと・教科ごとの傾向が見えるので、対策が打ちやすい。",
        "繰り返し忘れる物には、前日リマインドが設定できます。",
        "怒るのではなく、データで一緒に振り返るのが目的です。",
        "兄弟で別々に記録できます。",
      ],
    },
    {
      id: "trouble",
      name: "トラブルノート",
      tag: "学校生活",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "記録",
      formula_b: "出来事",
      formula_c: "冷静に向き合える",
      concept: "記録 × 出来事 = 冷静に向き合える",
      call: ["今日、学校でどうだった？", "大丈夫、ちゃんとメモしておくね。"],
      trick: [
        "学校で起きたトラブルを、日付・場所・関係者・内容で残せます。",
        "感情の高ぶった瞬間ではなく、後から落ち着いて記入できる構造に。",
        "時系列で並べると、繰り返しのパターンが見えてきます。",
        "面談や連絡帳の前に、要点だけ書き出して持ち出せます。",
        "写真や音声メモも紐付けられます（端末内のみ保存）。",
        "エクスポートはPDF / テキスト両対応。",
      ],
    },
  ],
};
