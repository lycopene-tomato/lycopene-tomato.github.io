/* ============================================================
 * content/ko/record.js — 한국어: 기록 시리즈
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.ko = window.__CONTENT__.ko || {};
window.__CONTENT__.ko.categories = window.__CONTENT__.ko.categories || {};

window.__CONTENT__.ko.categories.record = {
  id: "record",
  name: "Log",
  subtitle: "매일의 「또야」를, 아이의 성장과 부모의 안도로 바꾸는 기록 시리즈.",
  lineup_title: "내용에 맞춰, 정리용 앱.",
  label_call: "답답함",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "예방",
  formula: { a: "또야", b: "기록", c: "성장?" },

  story: {
    tagline: "「또야」가 「줄어들고 있네」로 바뀌어요.",
    intro: "기억만으로는 보이지 않는 변화가 있어요.\n기록하면 아이의 작은 성장과 부모의 안도가 보이기 시작해요.",
    empathy: {
      label: "오늘도, 또……",
      badge: "조마조마",
      lines: [
        "학교에서 또 전화가 왔다.",
        "심장이 조여 온다.",
        "그런데, 정말 「또」일까?",
        "전과 똑같은 걸까? 아니면 달라진 걸까?",
        "기억만으로는 알 수 없다——.",
      ],
      tried_label: "메모는 해 왔지만.",
      tried: [
        "종이에 써도, 나중에 찾을 수 없다.",
        "스마트폰 메모는 정리가 어렵다.",
        "「전에도 있지 않았나?」 싶어도 확인할 수가 없다.",
      ],
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "부모 메모",
      appstore_url: "https://apps.apple.com/app/id6762575526",
      hero_image: "images/apps/trouble.jpeg",
      pricing: "무료",
      formula_a: "트러블",
      formula_b: "기록",
      formula_c: "정리해서 보이게",
      concept: "트러블 × 기록 = 정리해서 보이게",
      call: [
        "○○이 누구더라?",
        "지난번 싸움이랑 같은 아이?",
      ],
      trick: [
        "달력에 발생일을 점으로 표시, 친구별로 건수 집계. 「누구」와 「언제」로 정리할 수 있어요.",
        "부모만 보는 메모(상대 부모 연락처, 친구의 성격 등)는 암산 문제 페어런트 게이트로 보호.",
        "장소(학교・가족・학원)로 분류, 여러 형제자매 전환도 가능해요.",
      ],
      setupSteps: [
        { title: "등장인물을 먼저 등록", desc: "학교・가족・학원별로 관계되는 사람을 넣어 둬요. 「○○이 누구더라」를 매번 검색하지 않아도 돼요." },
        { title: "트러블이 있는 날 바로 기록", desc: "한 줄이라도 좋아요. 나중에 「지난번 싸움이랑 같은 아이?」를 확인할 수 있어요." },
        { title: "연락처 같은 부모 메모는 게이트로 보호", desc: "암산 문제를 풀어야 열려요. 아이가 휴대폰을 만져도 못 봐요." },
      ],
    },
  ],
};
