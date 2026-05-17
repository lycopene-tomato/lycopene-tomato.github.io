/* ============================================================
 * content/ko/tool.js — 한국어: Timer 시리즈
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.ko = window.__CONTENT__.ko || {};
window.__CONTENT__.ko.categories = window.__CONTENT__.ko.categories || {};

window.__CONTENT__.ko.categories.tool = {
  id: "tool",
  name: "Timer",
  subtitle: "「이따가」를 「지금」으로. 미루기・뒤로 밀기 대책의 타이머 시리즈.",
  lineup_title: "상황에 맞춰, 카운트다운.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "미루기 대책",
  formula: { a: "장치", b: "이따가", c: "지금으로" },

  story: {
    tagline: "「이따가」가, 「지금」이 돼요.",
    intro: "「이따가」「5분만 더」가 멈추지 않는 아이에게.\n시간과 매듭으로, 전환의 계기를 만드는 앱들.",
    empathy: {
      label: "이런 순간, 있지 않으세요?",
      badge: "꾸물꾸물",
      lines: [
        "「5분만 더」가 끝나지 않는다.",
        "「조금만」이 어느새 30분.",
        "만화를 펼치면, 그날은 돌아오지 않는다.",
        "「하라고」 할수록, 굳어 버린다.",
        "보통 타이머로는, 싸움만 난다.",
      ],
      tried_label: "이것저것 시도해 봤지만.",
      tried: [
        "「5분 남았어」라고 해도, 아직 5분의 감이 잡히지 않는다.",
        "쉬는 동안에도 「3분 남았어」「2분 남았어」 계속 말해야 한다.",
        "뺏으면, 폭발한다.",
      ],
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "움직이는 휴식",
      appstore_url: "https://apps.apple.com/us/app/planetlooptimer/id6767539058",
      hero_image: "images/apps/timer.jpeg",
      pricing: "무료",
      formula_a: "발사",
      formula_b: "이따가",
      formula_c: "한 번 더로 움직인다",
      concept: "발사 × 이따가 = 한 번 더로 움직인다",
      call: [
        "잠깐, 쉴까?",
        "한 번 더 발사해 볼까?",
      ],
      trick: [
        "「누르면 5분」이 아니라, 발사 각도와 힘으로 스스로 시간을 만들어요. 끝나는 것도 납득돼요.",
        "행성마다 시간이 달라요. 태양에서 멀수록 오래 돌고, 가까워지면 나선형으로 빨려 들어가요.",
        "명왕성만은 시간 경과에 따른 중력 증가가 없는 ∞ 챌린지. 최장 기록 갱신 보상으로.",
      ],
      setupSteps: [
        { title: "행성을 하나 고른다", desc: "짧게 쉬고 싶은 날은 가까운 별, 길게 쉬고 싶은 날은 먼 별. 우리 집은 처음에 달이나 화성부터 시작했어요." },
        { title: "각도와 힘을 정하고 발사한다", desc: "화살표를 당기는 세기로 휴식 길이가 바뀌어요. 「5분」이 아니라 본인 감각으로 정할 수 있어요." },
        { title: "돌아오면 「한 번 더?」를 고른다", desc: "본인이 고른 휴식이라, 끝날 때 싸움이 안 나요. 최장 기록은 중력 없는 명왕성에서 갱신해요." },
      ],
    },
  ],
};
