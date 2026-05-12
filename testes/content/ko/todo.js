/* ============================================================
 * content/ko/todo.js — Korean: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ko"] = window.__CONTENT__["ko"] || {};
window.__CONTENT__["ko"].categories = window.__CONTENT__["ko"].categories || {};

window.__CONTENT__["ko"].categories.todo = {
  id: "todo",
  name: "Todo 시리즈",
  subtitle: "「빨리해!」를 「해보고 싶다!」로 — 습관 만들기 앱.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "습관",
  formula: { a: "놀이", b: "할 일", c: "습관" },

  story: {
    tagline: "「빨리해!」에서 「해볼게!」로.",
    intro: "놀이의 장치로, 아이가 스스로 움직이게.",
    empathy: {
      label: "어디서 본 듯한가요?",
      lines: [
        "육아는 정말 힘들어요.",
        "「빨리해!」는 통하지 않아요.",
        "목소리를 높여도, 그저 토라질 뿐.",
        "매일같이 반복되는 같은 말.",
        "시작만 하면 1 분이면 끝나는데.",
      ],
      pivot: "놀이엔 그토록 몰입하는데.\n할 일도 그렇게 되면 좋겠다…",
      idea_label: "그래서 생각했어요.",
      idea: "할 일에 놀이를 살짝 섞어,\n스스로 움직이게 만들면 어떨까.",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "두근",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "가챠",
      formula_b: "할 일",
      formula_c: "두근거림으로 움직이다",
      concept: "가챠 × 할 일 = 두근거림으로 움직이다",
      call: ["이번엔 뭐가 나올까!", "보상 캡슐일지도?"],
      trick: [
        "어떤 할 일이 나올지 살짝 유도할 수 있어요.",
        "우선순위 설정 — 양치 전에 저녁부터.",
        "「보상 캡슐」을 적당히 섞어둡니다.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "자유 배치",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "빙고",
      formula_b: "할 일",
      formula_c: "자기 순서로 움직이다",
      concept: "빙고 × 할 일 = 자기 순서로 움직이다",
      call: ["빙고 맞춰보자!", "빙고가 되면 보상."],
      trick: [
        "할 일을 보드 위 어디든 배치.",
        "몇 빙고로 보상 받을지 선택.",
        "싫어하는 할 일을 가운데에 — 한 번에 4 빙고.",
        "관련 단계를 한 줄로 — 다 해야 끝.",
        "본인이 고른 것처럼 보이지만 순서는 부모가 정함.",
        "캘린더 빙고는 여름방학 계획이나 시험 준비에 최적.",
      ],
    },
    {
      id: "sugoroku",
      name: "Todo 보드",
      tag: "작은 한 걸음",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "보드 게임",
      formula_b: "할 일",
      formula_c: "한 걸음씩",
      concept: "보드 게임 × 할 일 = 한 걸음씩",
      call: ["보드 게임 한 판 할래?", "산기슭까지 가면 보상."],
      trick: [
        "순서를 완전히 고정.",
        "앉기 → 책 펴기 → 연필 잡기 → 한 문제 → 보상 → 다음 페이지…",
        "첫 발걸음이 충분히 작으면, 나머지는 자연스럽게 따라옵니다.",
        "스테이지마다 칸 밀도가 달라요.",
        "산 (뒤로 갈수록 많음) / 우주 (앞이 많음) / 강가 (균등) — 기분으로 골라요.",
      ],
    },
    {
      id: "farm",
      name: "Todo 텃밭",
      tag: "성장",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "성장",
      formula_b: "할 일",
      formula_c: "진척으로 움직이다",
      concept: "성장 × 할 일 = 진척으로 움직이다",
      call: ["오늘은 물 얼마나 줄까?", "쑥쑥 자랄까?"],
      trick: [
        "보상하는 건 결과가 아니라 「노력」.",
        "식물은 10%씩 자랍니다.",
        "물 한 번에 한 단계 성장이 목표.",
        "목표를 넘기면 물의 색깔이 바뀌어요.",
      ],
    },
  ],
};
