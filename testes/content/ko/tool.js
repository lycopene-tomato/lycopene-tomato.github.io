/* ============================================================
 * content/ko/tool.js — Korean: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ko"] = window.__CONTENT__["ko"] || {};
window.__CONTENT__["ko"].categories = window.__CONTENT__["ko"].categories || {};

window.__CONTENT__["ko"].categories.tool = {
  id: "tool",
  name: "Timer 시리즈",
  subtitle: "「나중에」를 「지금」으로 — 미루기 대책 타이머.",
  lineup_title: "상황에 맞는 카운트다운.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "미루기 대책",
  formula: { a: "도구", b: "순간", c: "해결" },

  story: {
    tagline: "「나중에」가 「지금」으로.",
    intro: "「조금만 더」「5 분만 더」가 멈추지 않는 아이에게.\n시간과 구분으로 전환의 계기를 만들어요.",
    empathy: {
      label: "이런 순간, 있죠?",
      lines: [
        "일이 생기면 바로 폰을 꺼냅니다.",
        "앱을 찾고, 설정을 찾다 길을 잃어요.",
        "결국 — 「됐다, 됐어」.",
        "어, 방금 뭐 하려 했더라?",
        "딱 맞는 도구를 바로 띄우고 싶어요.",
      ],
      pivot: "기능 많은 앱은 강력해 보이죠. 이 순간엔 별 도움이 안 돼요.\n한 순간엔 한 가지 도구가 필요해요.",
      idea_label: "그래서 생각했어요.",
      idea: "단 한 순간에 딱 맞는 작은 도구를.\n열고, 한 번 누르면 끝.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "시간",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "발사",
      formula_b: "나중에",
      formula_c: "한 번 더로 움직이다",
      concept: "발사 × 나중에 = 한 번 더로 움직이다",
      call: ["잠깐, 쉴까?", "한 번 더, 발사할까?"],
      trick: [
        "「5 분 누르세요」가 아니라, 발사 각도와 기세로 시간을 직접 만들어요. 끝맺음도 납득.",
        "행성마다 시간이 달라요. 태양에서 멀수록 길게 돌고, 가까이 가면 나선으로 빨려 들어가요.",
        "명왕성만은 시간 경과로 중력이 늘지 않는 ∞ 챌린지. 최장 기록 갱신이 보상.",
      ],
    },
  ],
};
