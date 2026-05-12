/* ============================================================
 * content/vi/todo.js — Vietnamese: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["vi"] = window.__CONTENT__["vi"] || {};
window.__CONTENT__["vi"].categories = window.__CONTENT__["vi"].categories || {};

window.__CONTENT__["vi"].categories.todo = {
  id: "todo",
  name: "Bộ Todo",
  subtitle: "Từ \"Làm đi!\" thành \"Mình muốn thử!\" — ứng dụng xây thói quen.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Thói quen",
  formula: { a: "Chơi", b: "Việc", c: "Thói quen" },

  story: {
    tagline: "Từ \"Làm đi!\" thành \"Để mình thử\".",
    intro: "Những ứng dụng dùng trò chơi để mời con tự bắt đầu.",
    empathy: {
      label: "Nghe quen không?",
      lines: [
        "Nuôi con thật mệt.",
        "\"Làm đi!\" không ăn thua.",
        "Lớn tiếng thì chúng cũng chỉ giận dỗi.",
        "Cùng một câu chuyện, ngày nào cũng vậy.",
        "Chỉ cần bắt đầu là xong trong một phút.",
      ],
      pivot: "Lúc chơi thì chú tâm hết mình.\nGiá mà việc cũng cho cảm giác như vậy…",
      idea_label: "Thế là một ý tưởng nảy ra.",
      idea: "Sao không trộn chút trò chơi vào danh sách việc,\nđể chúng tự bắt đầu?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Bất ngờ",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Việc",
      formula_c: "Bắt đầu bằng bất ngờ",
      concept: "Gacha × Việc = Bắt đầu bằng bất ngờ",
      call: ["Lần này sẽ ra gì nhỉ?", "Biết đâu là viên thưởng?"],
      trick: [
        "Có thể nhẹ nhàng hướng việc nào sẽ ra.",
        "Đặt ưu tiên — ăn cơm trước, đánh răng sau.",
        "Xen \"viên thưởng\" vào đây đó.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Bố cục tự do",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Việc",
      formula_c: "Theo thứ tự của con",
      concept: "Bingo × Việc = Theo thứ tự của con",
      call: ["Cùng làm bingo nào!", "Bingo = phần thưởng."],
      trick: [
        "Đặt việc ở đâu trên bảng tuỳ thích.",
        "Chọn cần bao nhiêu bingo mới có thưởng.",
        "Đặt việc ghét nhất ở giữa — một chạm = bốn bingo.",
        "Xâu các bước liên quan trên một hàng để phải làm hết.",
        "Trông như lựa chọn của con — nhưng bạn mới là người đặt thứ tự.",
        "Bingo-lịch rất hợp kỳ nghỉ hay tuần thi.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoCờ",
      tag: "Bước nhỏ",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Cờ bàn",
      formula_b: "Việc",
      formula_c: "Từng bước",
      concept: "Cờ bàn × Việc = Từng bước",
      call: ["Chơi cờ bàn nha?", "Tới chân núi là có thưởng."],
      trick: [
        "Thứ tự khoá hoàn toàn.",
        "Ngồi xuống → mở sách → cầm bút → một bài → thưởng → trang tiếp…",
        "Nếu bước đầu đủ nhỏ, phần còn lại tự đến.",
        "Mỗi tuyến có mật độ ô riêng.",
        "Núi (dày ở cuối) / Vũ trụ (dày ở đầu) / Bờ sông (đều) — chọn theo tâm trạng.",
      ],
    },
    {
      id: "farm",
      name: "TodoVườn",
      tag: "Lớn lên",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Lớn lên",
      formula_b: "Việc",
      formula_c: "Bắt đầu bằng tiến độ",
      concept: "Lớn lên × Việc = Bắt đầu bằng tiến độ",
      call: ["Hôm nay tưới bao nhiêu?", "Liệu nó có lớn không?"],
      trick: [
        "Thưởng cho nỗ lực, không chỉ xong/chưa.",
        "Cây lớn theo từng nấc 10%.",
        "Mục tiêu: mỗi lần tưới lên một nấc.",
        "Tưới quá mức, nước đổi màu.",
      ],
    },
  ],
};
