/* ============================================================
 * content/ko/other.js — 한국어: 그 외 카테고리
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.ko = window.__CONTENT__.ko || {};
window.__CONTENT__.ko.categories = window.__CONTENT__.ko.categories || {};

window.__CONTENT__.ko.categories.other = {
  id: "other",
  name: "Other",
  subtitle: "「육아를 조금이라도 편하게」 축에서 벗어난, 보너스 칸. 게임・편리한 도구・숨돌리기 등.",
  lineup_title: "보너스 앱.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "보너스",
  formula: { a: "변덕", b: "개발", c: "보너스" },

  story: {
    tagline: "변덕으로, 보너스예요.",
    intro: "메인은 「육아를 조금이라도 편하게」 앱들. 여기는 그 밖에, 잠깐 만들어 본 보너스 칸.\n게임이든, 편리한 도구든, 숨돌리기든.",
    empathy: {
      label: "가끔은, 이런 기분도?",
      badge: "느긋느긋",
      lines: [
        "메인 이야기는, 잠깐 옆에 두고.",
        "게임이든, 편리한 도구든.",
        "내가 어렸을 때의 추억 같은 것도.",
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
      pricing: "무료",
      formula_a: "PC-98",
      formula_b: "스마트폰",
      formula_c: "추억",
      concept: "PC-98 × 스마트폰 = 추억",
      call: [
        "BASIC 매거진!?",
        "N88-BASIC",
      ],
      trick: [
        "<<Receive No.1>> 그때 그 테니스 게임이, 지금 여기에.",
        "당시 불가능했던 CPU 대전을 구현.",
        "GA (Genetic Algorithm) 도입, 성장하는 상대.",
        "충돌 판정, 삼각함수까지 당시 로직 그대로.",
      ],
      code_sample: "670 BEEP:IF SU=T THEN SU=ABS(SU-3) ELSE P(SU)=P(SU)+1\n680 GOSUB *TOKUTENKAKU:IF P(SU)=15 THEN GOTO *SHOUHAI",
      setupSteps: [
        { title: "일단 플레이", desc: "필드 아래가 터치패드입니다." },
        { title: "당시 그대로", desc: "공이 팔을 빠져나가는 그때의 부조리함." },
        { title: "타이밍", desc: "당시의 기억이 되살아납니다." },
      ],
    },
  ],
};
