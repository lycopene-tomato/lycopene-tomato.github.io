/* ============================================================
 * content/ko/todo.js — 한국어: Todo 시리즈
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.ko = window.__CONTENT__.ko || {};
window.__CONTENT__.ko.categories = window.__CONTENT__.ko.categories || {};

window.__CONTENT__.ko.categories.todo = {
  id: "todo",
  name: "Todo",
  subtitle: "「해!」를 「해 보고 싶어!」로 바꾸는, 습관 만들기 시리즈.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "습관 만들기",
  formula: { a: "놀이", b: "할 일", c: "습관" },

  story: {
    tagline: "「해!」를 「해 보고 싶어!」로.",
    intro: "놀이의 장치로, 아이가 스스로 움직이기 시작해요.\n「빨리!」를 외치지 않아도 되는 매일의 구조.",
    empathy: {
      label: "또 이런 날만 계속되네요.",
      badge: "답답함",
      lines: [
        "오늘 아침에도, 또 소리치고 말았다.",
        "「해!」라고 해도 안 한다.",
        "화내면, 기분 상해서 더 안 한다.",
        "매일, 매일, 똑같은 일의 반복.",
        "하면 금방 끝나는데——.",
      ],
      tried_label: "이것저것 해 봤지만.",
      tried: [
        "Todo 리스트를 만들어도, 체크하는 걸 잊어버린다.",
        "할 일을 종이에 써 줘도, 「하기 싫어」라고 한다.",
        "보상 스티커도, 얼마 지나면 질려한다.",
      ],
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "서프라이즈",
      appstore_url: "https://apps.apple.com/us/app/todogatya/id6761904343",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "가챠",
      formula_b: "할 일",
      formula_c: "서프라이즈로 움직인다",
      concept: "가챠 × 할 일 = 서프라이즈로 움직인다",
      call: [
        "다음엔 뭐가 나올까?",
        "한번 뽑아 볼까?",
      ],
      trick: [
        "가챠는 나오는 순서를 조금 조절할 수 있어서, 「밥 → 양치」의 우선순위는 지킬 수 있어요.",
        "보상(좋아하는 간식, 게임 10분 등)도 가챠에 섞어 두면 「다음엔 뭐가 나올까?」가 계속 이어져요.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "자유 배치",
      appstore_url: "https://apps.apple.com/us/app/todobingo/id6762549881",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "빙고",
      formula_b: "할 일",
      formula_c: "스스로 정해서 움직인다",
      concept: "빙고 × 할 일 = 스스로 정해서 움직인다",
      call: [
        "어디부터 채울까?",
        "한 칸만 더 채우면 빙고!",
      ],
      trick: [
        "가운데 칸은 모든 줄의 교차점. 꼭 시키고 싶은 일은 여기에 두면 반드시 지나가요.",
        "첫 번째 줄은 쉬운 할 일로. 「한 칸만 더」 라는 완료 욕구가 움직임을 만들어요.",
        "「문제를 푼다 → 채점 → 수정」을 한 줄에 넣으면, 순서를 본인이 정하는 것 같지만 빙고 조건은 부모가 잡고 있어요.",
        "달력 빙고로 장기 계획도. 하루에 한 칸씩 칠하고, 빼먹은 날은 나중에 채워도 OK.",
      ],
    },
    {
      id: "sugoroku",
      name: "Todo 보드",
      tag: "작은 걸음",
      appstore_url: "https://apps.apple.com/us/app/todoladders/id6762462275",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "보드 게임",
      formula_b: "할 일",
      formula_c: "보이게 해서 움직인다",
      concept: "보드 게임 × 할 일 = 보이게 해서 움직인다",
      call: [
        "골까지 몇 칸 남았어?",
        "다음 보상까지 3개 남았어.",
      ],
      trick: [
        "보상 칸을 사이사이에 넣으면, 「다음 보상까지 몇 칸」이 항상 보이게 설계돼요.",
        "「자리에 앉는다 → 책을 펼친다 → 연필을 든다」처럼 잘게 나누면, 무거운 첫걸음이 가벼워져요.",
        "스테이지는 산(보상이 뒤쪽) / 우주(보상이 앞쪽) / 물가(고르게) 세 가지. 칸 밀도를 기분에 따라 골라요.",
      ],
    },
    {
      id: "farm",
      name: "Todo 텃밭",
      tag: "쌓아 가기",
      appstore_url: "https://apps.apple.com/us/app/todofarm/id6763425345",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "키우기",
      formula_b: "할 일",
      formula_c: "한 만큼 움직인다",
      concept: "키우기 × 할 일 = 한 만큼 움직인다",
      call: [
        "오늘은 물을 얼마나 줄까?",
        "5분이라도, 5분어치는 제대로 자라요.",
      ],
      trick: [
        "한 / 못 한 의 이분이 아니에요. 한 만큼 쌓이는 설계. 5분은 5분어치, 20분은 20분어치.",
        "단위는 시간・횟수・페이지 중에서 선택. 피아노는 분, 문제집은 페이지, 암기는 횟수.",
        "쉰 날은 시들게 두고, 다시 시작할 때 살아나요.",
      ],
    },
  ],
};
