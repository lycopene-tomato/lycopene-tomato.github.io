/* ============================================================
 * content/ko/record.js — Korean: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ko"] = window.__CONTENT__["ko"] || {};
window.__CONTENT__["ko"].categories = window.__CONTENT__["ko"].categories || {};

window.__CONTENT__["ko"].categories.record = {
  id: "record",
  name: "Log 시리즈",
  subtitle: "작은 일을 살며시 기록. 패턴을 보고, 다음을 막아요.",
  lineup_title: "내용에 따라 정리하는 앱.",
  label_call: "마음의 소리",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "예방",
  formula: { a: "기록", b: "사건", c: "다음을 막다" },

  story: {
    tagline: "「또야」가 「다음엔 준비된다」로.",
    intro: "감정이 아닌, 기록. 패턴이 보이면, 답도 보입니다.",
    empathy: {
      label: "오늘도 또…",
      badge: "두근",
      lines: [
        "학교에서 또 전화.",
        "심장이 조여옵니다.",
        "근데 정말 「또」일까?",
        "지난번과 같은 일? 아니면 다른 일?",
        "기억만으론 알 수 없어요——.",
      ],
      tried_label: "메모는 해봤지만.",
      tried: [
        "종이에 적어도, 나중에 찾을 수 없어.",
        "스마트폰 메모는 정리하기 어려워.",
        "「전에도 있지 않았나?」 확인하고 싶어도 못해.",
      ],
      pivot: "기억에만 담아두면 터질 때까지 쌓이기만.\n기록해두면 전체를 볼 수 있어요.",
      idea_label: "그래서 생각했어요.",
      idea: "그 순간을 빠르게 잡아두고,\n패턴으로 다음을 막자.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "학교 생활",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "기록",
      formula_b: "사건",
      formula_c: "차분한 후속 대응",
      concept: "기록 × 사건 = 차분한 후속 대응",
      call: ["○○이가 누구더라?", "전에 싸운 그 친구야?"],
      trick: [
        "날짜, 장소, 관련 인물, 어떤 일이 있었는지 기록.",
        "마음이 가라앉은 후 채워도 되도록 설계.",
        "시간순으로 정렬하면 반복되는 패턴이 자연스럽게 떠올라요.",
        "학부모 면담용으로 요점만 따로 빼낼 수 있어요.",
        "사진이나 음성 메모도 첨부 (단말기 내에만 저장).",
        "PDF나 텍스트로 내보내기 지원.",
      ],
    },
  ],
};
