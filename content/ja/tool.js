window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.ja = window.__CONTENT__.ja || {};
window.__CONTENT__.ja.categories = window.__CONTENT__.ja.categories || {};

window.__CONTENT__.ja.categories.tool = {
  id: "tool",
  name: "Timer",
  subtitle: "「あとで」を「今」に。後回し・先延ばし対策のタイマー系。",
  lineup_title: "状況に合わせて、カウントダウン。",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "後回し対策",
  formula: { a: "仕掛け", b: "あとで", c: "今に" },

  story: {
    tagline: "「あとで」が、「今」になる。",
    intro: "「あとで」「あと5分」が止まらない子に。\n時間と区切りで、切り替えのきっかけを作るアプリ群。",
    empathy: {
      label: "こんな瞬間、ありませんか？",
      badge: "ぐずぐず",
      lines: [
        "「あと5分」が、終わらない。",
        "「ちょっとだけ」が、気づけば 30 分。",
        "マンガを開いたら、その日は戻らない。",
        "「やりなさい」と言うほど、固まる。",
        "普通のタイマーじゃ、もめるだけ。",
      ],
      tried_label: "色々試したけど。",
      tried: [
        "「あと5分」と言っても、まだ5分の感覚がつかめない。",
        "休憩中もずっと「あと3分」「あと2分」と声をかけ続けないと。",
        "取り上げると、激怒する。",
      ],
      pivot: "「あと5分」を決めているのは、いつもこっち。\nだから終わりも、他人事なのかもしれない。",
      idea_label: "そこで、考えた。",
      idea: "時間の区切りを、子ども自身に決めさせたら、\n「あとで」の終わりに、納得してくれないかな？",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "動かす休憩",
      appstore_url: "https://apps.apple.com/app/id6767539058",
      hero_image: "images/apps/timer.jpeg",
      pricing: "無料",
      formula_a: "打ち上げ",
      formula_b: "あとで",
      formula_c: "もう一回で動く",
      concept: "打ち上げ × あとで = もう一回で動く",
      call: [
        "ちょっと、休む？",
        "もう一回、打ち上げる？",
      ],
      trick: [
        "「押して5分」じゃなく、打ち上げの角度と勢いで自分で時間を作る。終わりも納得。",
        "惑星ごとに時間が違う。太陽から遠いほど長く回り、近づくと螺旋で吸い込まれる。",
        "冥王星だけは、時間経過による重力増加なしの ∞ チャレンジ。最長記録の更新ご褒美に。",
      ],
      setupSteps: [
        { title: "惑星を 1 つ選ぶ", desc: "短く休みたい日は近い星、長く休みたい日は遠い星。うちは最初、月か火星から始めた。" },
        { title: "角度と勢いを決めて打ち上げる", desc: "矢印を引っ張る強さで休憩の長さが変わる。「5 分」じゃなく自分の感覚で決められる。" },
        { title: "戻ってきたら「もう一回？」を選ぶ", desc: "自分で選んだ休憩なので、終わりが揉めない。最長記録は重力なしの冥王星で更新。" },
      ],
    },
    {
      id: "lastdays",
      name: "LastDays",
      tag: "残り時間",
      appstore_url: "https://apps.apple.com/app/id6779920918",
      hero_image: "images/apps/lastdays.jpeg",
      pricing: "無料",
      formula_a: "年齢",
      formula_b: "卒業",
      formula_c: "一緒にいられる時間",
      concept: "年齢 × 卒業 = 一緒にいられる時間",
      call: [
        "あと、何回？",
        "今日は、何を一緒にした？",
      ],
      trick: [
        "生年月日と性別を入れるだけ。13 の指標が「あと何回」「あと何日」に化ける。",
        "Tim Urban の \"The Tail End\"。18歳までに、わが子と過ごす時間の約 93% が終わる。「なんとなく」が数字で見える。",
        "数字をタップで、映えるシェア画像に。個人情報は載らない。後悔のためでなく、今日のために。",
      ],
      setupSteps: [
        { title: "生年月日と性別を入れる", desc: "アプリを開いて 30 秒。ここから 13 指標がカウントダウンを始める。家で何かを変える必要はない。" },
        { title: "かんたん設定をワンタップ", desc: "共働き / 保育園 / 幼稚園 / 学童…生活に合わせると数字が現実に近づく。細かい調整も後で効く。" },
        { title: "気になる指標をタップ", desc: "「あと◯回」「あと◯日」がそのまま映えるシェア画像に。子の名前や誕生日は画像に出ない。" },
      ],
    },
  ],
};
