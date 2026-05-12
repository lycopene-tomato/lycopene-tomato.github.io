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
  name: "Todo",
  subtitle: "「やって！」を「やってみたい！」に変える、習慣づくりシリーズ。",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "習慣づくり",
  formula: { a: "遊び", b: "やる事", c: "習慣" },

  story: {
    tagline: "「やって！」を、「やってみたい！」に。",
    intro: "遊びの仕掛けで、子どもが自分から動き出す。\n「早く！」を言わなくて済む、毎日のしくみ。",
    empathy: {
      label: "こんな日ばっかり。",
      badge: "イライラ",
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
      appstore_url: "https://apps.apple.com/us/app/todogatya/id6761904343",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "ガチャ",
      formula_b: "やる事",
      formula_c: "サプライズで動く",
      concept: "ガチャ × やる事 = サプライズで動く",
      call: [
        "次、何が出るかな？",
        "引いてみようか？",
      ],
      trick: [
        "ガチャは出る順番を少し制御できるので、「ご飯 → 歯磨き」の優先順位は守れます。",
        "ごほうび（好きなおやつ・ゲーム10分など）もガチャに混ぜると「次、何が出るかな？」が続きます。",
      ],
    },
    {
      id: "bingo",
      name: "Todoビンゴ",
      tag: "自由配置",
      appstore_url: "https://apps.apple.com/us/app/todobingo/id6762549881",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "ビンゴ",
      formula_b: "やる事",
      formula_c: "自分で決めて動く",
      concept: "ビンゴ × やる事 = 自分で決めて動く",
      call: [
        "どこから埋める？",
        "あと1マスでビンゴ！",
      ],
      trick: [
        "中央マスは全列の通過点。やってほしい事はここに置くと確実に通ります。",
        "最初の列は簡単なやる事に。「あと1マス」の完結欲で動きます。",
        "「問題を解く → 丸つけ → 直し」を一列に入れると、やる順番を自分で決めているようで、ビンゴ条件を制御できます。",
        "カレンダービンゴで長期計画にも。1日1マスずつ塗り、サボった日は後から埋めてOK。",
      ],
    },
    {
      id: "sugoroku",
      name: "Todoすごろく",
      tag: "小ステップ",
      appstore_url: "https://apps.apple.com/us/app/todoladders/id6762462275",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "すごろく",
      formula_b: "やる事",
      formula_c: "見える化で動く",
      concept: "すごろく × やる事 = 見える化で動く",
      call: [
        "あと何歩でゴール？",
        "次のごほうびまで、あと3つ。",
      ],
      trick: [
        "ごほうびマスを間に挟むと、「あと○歩で次のごほうび」が常に見える設計に。",
        "「席に座る → 本を開く → 鉛筆を用意」と細かく分けると、重い一歩目が進みます。",
        "ステージは山(後ろより) / 宇宙(前より) / ほとり(平均) の3種。マスの密度を気分で選べます。",
      ],
    },
    {
      id: "farm",
      name: "Todo農園",
      tag: "積み上げ",
      appstore_url: "https://apps.apple.com/us/app/todofarm/id6763425345",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "育成",
      formula_b: "やる事",
      formula_c: "やった分だけ動く",
      concept: "育成 × やる事 = やった分だけ動く",
      call: [
        "今日はどれくらい水あげる？",
        "5分でも、5分分ちゃんと育つよ。",
      ],
      trick: [
        "出来た/全部出来ないじゃない。やった分だけ積み上がる設計。5分は5分分、20分は20分分。",
        "単位は時間・回数・ページから選択。ピアノは分、ドリルはページ、暗記は回数。",
        "サボった日に枯らせて、また始めるときに復活できます。",
      ],
    },
  ],
};
