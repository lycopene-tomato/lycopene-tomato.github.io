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
  seoTitle: "레트로 게임 이식 등 보너스 앱",
  seoDesc: "『육아를 조금이라도 편하게』 축에서 벗어난 보너스 칸: iPhone 으로 이식한 PC-9801 잡지 테니스 게임과 작은 도구들.",
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
      appstore_url: "https://apps.apple.com/app/id6770316950",
      hero_image: "images/apps/receive.jpeg",
      pricing: "무료",
      formula_a: "PC-98",
      formula_b: "스마트폰",
      formula_c: "추억",
      concept: "PC-98 × 스마트폰 = 추억",
      seoTitle: "iPhone 으로 이식한 PC-9801 테니스 게임",
      seoDesc: "일본 80 년대 잡지 베마가에 실린 100 줄짜리 테니스 게임 《Receive No.1》을 물리 계산과 삼각함수 테이블까지 그대로 iPhone 으로 이식. 당시 하드웨어로는 불가능했던 유전 알고리즘 CPU 대전도 넣었습니다.",
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
    {
      id: "pivotmerge",
      name: "Pivot & Merge",
      tag: "2×2 회전",
      appstore_url: "https://apps.apple.com/app/id6795719501",
      hero_image: "images/apps/pivotmerge.jpeg",
      pricing: "무료",
      formula_a: "회전",
      formula_b: "합체",
      formula_c: "연쇄",
      concept: "회전 × 합체 = 연쇄",
      seoTitle: "2×2 를 돌려 숫자를 합치는, 시간 제한 없는 퍼즐",
      seoDesc: "판에 손가락을 올리면 가장 가까운 2×2 가 따라 돕니다. 같은 숫자가 세로나 가로로 이어지면 합쳐지고, 위의 타일이 빈칸으로 떨어져 다시 맞으면 연쇄입니다. 턴제라 쫓기지 않고, 도중에 그만둬도 판은 그대로 남습니다.",
      call: [
        "배우는 데 1 분",
        "익히는 데 평생",
      ],
      trick: [
        "<<Pivot & Merge>> 손가락을 올리고 가장 가까운 2×2 를 돌리기. 조작은 이게 전부.",
        "같은 숫자는 합쳐집니다. 두 개면 2 배, 네 개면 8 배.",
        "타일이 빈칸으로 떨어져 다시 맞으면, 점수가 연쇄 수만큼 곱해집니다.",
        "턴제. 손을 대기 전까지 판은 움직이지 않아서 언제든 멈출 수 있습니다.",
      ],
      setupSteps: [
        { title: "손가락을 올리고 돌리기", desc: "가장 가까운 네 칸이 손가락을 따라 돕니다. 손을 뗀 방향으로 확정되고, 회색인 채로 떼면 취소입니다." },
        { title: "세로 가로로 합체", desc: "우리 아이는 '네 개를 네모로 모으면 8 이 된다'를 알고 나서, 그 모양을 노리고 만들기 시작했습니다." },
        { title: "떨어지고, 다시 맞고", desc: "손을 뗀 뒤에도 연쇄가 이어져서, 그 부분은 같이 보고 있습니다." },
      ],
    },
  ],
};
