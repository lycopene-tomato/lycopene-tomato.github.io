/* ============================================================
 * content/ja/todo.js — 日本語：Todo系カテゴリ
 * ============================================================
 * このカテゴリのテキストとアプリ群。アプリ追加はこの apps[] に
 * 1要素 push するだけ。
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.ja = window.__CONTENT__.ja || {};
window.__CONTENT__.ja.categories = window.__CONTENT__.ja.categories || {};

window.__CONTENT__.ja.categories.todo = {
  id: "todo",
  name: "Todo系",
  subtitle: "「やって！」を「やってみたい！」に変える、習慣づくりシリーズ。",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "習慣づくり",
  formula: { a: "遊び", b: "やる事", c: "習慣" },

  story: {
    tagline: "「やって！」を、「やってみたい！」に。",
    intro: "遊びの仕掛けで、子どもが自分から動き出す。\n「早く！」を言わなくて済む、毎日のしくみ。",
    empathy: {
      label: "こんな日々、ありませんか？",
      lines: [
        "今朝もまた、怒鳴ってしまった。",
        "「やって！」と言ってもやらない。",
        "怒っても、機嫌を損ねてやらない。",
        "毎日、毎日、同じことの繰り返し。",
        "やればすぐ終わるのに——。",
      ],
      tried_label: "いろいろ試したけど。",
      tried: [
        "Todoリストを作っても、チェックするのを忘れる。",
        "やる事を紙に書いても、「やりたくない」って言う。",
        "ご褒美シールも、しばらく経つと飽きる。",
      ],
      pivot: "遊ぶ事だけは、一生懸命なのに。\n同じくらい、やる事にもやる気を出してくれればいいのに。",
      idea_label: "そこで、考えた。",
      idea: "やる事リストに 遊びの要素 を組み合わせたら、\n自分から 動いてくれないかな？",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "Todoガチャ",
      tag: "サプライズ",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "ガチャ",
      formula_b: "やる事",
      formula_c: "サプライズで動く",
      concept: "ガチャ × やる事 = サプライズで動く",
      call: ["ガチャで何がでるかな!!", "ご褒美カプセルでるかも。"],
      trick: [
        "ガチャは、出る順番を少し制御できます。",
        "ご飯 → 歯磨き のように、優先順位が決められます。",
        "ご褒美ガチャを入れられるようにしています。",
      ],
    },
    {
      id: "bingo",
      name: "Todoビンゴ",
      tag: "自由配置",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "ビンゴ",
      formula_b: "やる事",
      formula_c: "自分で順番を決めて動く",
      concept: "ビンゴ × やる事 = 自分で順番を決めて動く",
      call: ["スタンプを押してビンゴしよう!!", "ビンゴしたらご褒美あげる。"],
      trick: [
        "やる事を好きな場所に配置できます。",
        "ビンゴ数毎にご褒美の有無が設定できます。",
        "中央のマスにやる気が出ない事を配置すると、1個やるだけで4ビンゴ達成できます。",
        "「宿題 → まるつけ → 間違い直し」と時間で関連するやる事を並べると、間違い直しまでやらないとビンゴできません。",
        "自分で選んでいるようで、やる順番を制御できる仕組み。",
        "カレンダービンゴで夏休みや試験までの計画にも。長期計画にぴったり。",
      ],
    },
    {
      id: "sugoroku",
      name: "Todoすごろく",
      tag: "小ステップ",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "すごろく",
      formula_b: "やる事",
      formula_c: "小さいステップで動く",
      concept: "すごろく × やる事 = 小さいステップで動く",
      call: ["すごろくしよう。", "山のふもとまでいけたらご褒美ね。"],
      trick: [
        "やる順番を完全に決めます。",
        "席に座る → 本を開く → 鉛筆と消しゴムを用意する → 1問目解く → ご褒美 → 1ページやる…",
        "細かくやる事を分けると、重い一歩目が進めばやってくれるはず。",
        "ステージによって、マスの密度を変えてあります。",
        "後ろより(山) / 前より(宇宙) / 平均(ほとり)。気分で使い分けて。",
      ],
    },
    {
      id: "farm",
      name: "Todo農園",
      tag: "成長",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "育成",
      formula_b: "やる事",
      formula_c: "進捗で動く",
      concept: "育成 × やる事 = 進捗で動く",
      call: ["今日はどのくらい水あげる？", "成長するかな？"],
      trick: [
        "完了/未完了ではなく、頑張った分だけ記録に残す。",
        "10%ずつ成長するようにしてあります。",
        "1回の水やりで、1段成長するように設定してみてください。",
        "1回の目標量を超えて頑張ると、水の色が変わります。何色に変わるかな？",
      ],
    },
    {
      id: "wbs",
      name: "TodoWBS",
      tag: "時間",
      appstore_url: "",
      hero_image: "images/apps/wbs.jpeg",
      formula_a: "矢羽",
      formula_b: "やる事",
      formula_c: "時間で動く",
      concept: "矢羽 × やる事 = 時間で動く",
      call: ["ゲームの時間が長くなるから、やっちゃお。"],
      trick: [
        "開始時刻からやる事を並べます。",
        "早く終われば、ご褒美時間が伸びるようになっています。",
      ],
    },
  ],
};
