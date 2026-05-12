/* ============================================================
 * content/ko/other.js — 한국어: 그 외 카테고리
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.ko = window.__CONTENT__.ko || {};
window.__CONTENT__.ko.categories = window.__CONTENT__.ko.categories || {};

window.__CONTENT__.ko.categories.other = {
  id: "other",
  name: "기타",
  subtitle: "「육아를 조금이라도 편하게」 축에서 벗어난, 보너스 칸. 게임・편리한 도구・숨돌리기 등.",
  lineup_title: "보너스 앱.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "보너스",
  formula: { a: "변덕", b: "개발", c: "보너스" },

  story: {
    tagline: "변덕으로, 보너스예요.",
    intro: "메인은 「육아를 조금이라도 편하게」 앱들. 여기는 그 밖에, 잠깐 만들어 본 보너스 칸.\n게임이든, 편리한 도구든, 숨돌리기든. 아직 아무것도 없지만요.",
    empathy: {
      label: "가끔은, 이런 기분도?",
      badge: "느긋느긋",
      lines: [
        "메인 이야기는, 잠깐 옆에 두고.",
        "게임이든, 편리한 도구든.",
        "……아직, 아무것도 없지만요.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "작은 퍼즐",
      tag: "게임",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1분",
      formula_b: "두뇌 체조",
      formula_c: "기분 전환",
      concept: "1분 × 두뇌 체조 = 기분 전환",
      call: ["한 문제만 풀어 볼까?"],
      trick: [
        "한 문제 1분이면 끝나는, 자투리 시간용 퍼즐.",
        "난이도는 서서히 올라가는 설계.",
        "광고 없음.",
      ],
    },
  ],
};
