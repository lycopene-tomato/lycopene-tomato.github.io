/* ============================================================
 * content/ko/other.js — Korean: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ko"] = window.__CONTENT__["ko"] || {};
window.__CONTENT__["ko"].categories = window.__CONTENT__["ko"].categories || {};

window.__CONTENT__["ko"].categories.other = {
  id: "other",
  name: "Other 시리즈",
  subtitle: "육아 라인에서 벗어나 가볍게 만든 보너스. 게임 · 유틸 · 한숨 돌리기 등.",
  lineup_title: "보너스 앱.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "보너스",
  formula: { a: "내키는 대로", b: "개발", c: "보너스" },

  story: {
    tagline: "내키는 대로 만든, 보너스.",
    intro: "메인은 「육아를 조금이라도 가볍게」 하는 앱. 여긴 그 외, 가볍게 만든 보너스 칸.\n게임, 유틸, 한숨 돌리기 — 아직 아무 것도 없지만.",
    empathy: {
      label: "가끔은 이런 기분도?",
      badge: "느긋",
      lines: [
        "메인 이야기는 잠깐 옆에 두고.",
        "게임이든 유틸이든.",
        "……아직 아무 것도 없지만.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "게임",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 분",
      formula_b: "두뇌 운동",
      formula_c: "기분 전환",
      concept: "1 분 × 두뇌 운동 = 기분 전환",
      call: ["딱 한 문제?"],
      trick: [
        "한 문제 약 1 분.",
        "난이도가 서서히 올라가요.",
        "광고 없음.",
      ],
    },
  ],
};
