/* ============================================================
 * content/vi/tool.js — Vietnamese: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["vi"] = window.__CONTENT__["vi"] || {};
window.__CONTENT__["vi"].categories = window.__CONTENT__["vi"].categories || {};

window.__CONTENT__["vi"].categories.tool = {
  id: "tool",
  name: "Bộ Timer",
  subtitle: "\"Lát nữa\" trở thành \"ngay bây giờ\" — bộ đếm chống trì hoãn.",
  lineup_title: "Đếm ngược theo tình huống.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Chống trì hoãn",
  formula: { a: "Công cụ", b: "Khoảnh khắc", c: "Xong" },

  story: {
    tagline: "\"Lát nữa\" trở thành \"ngay bây giờ\".",
    intro: "Cho đứa trẻ lúc nào cũng nói \"thêm năm phút\".\nThời gian và giới hạn tạo ra cú click chuyển trạng thái.",
    empathy: {
      label: "Bạn có quen khoảnh khắc này?",
      lines: [
        "Có chuyện là cầm ngay điện thoại.",
        "Tìm ứng dụng, tìm cài đặt, lạc lối.",
        "Cuối cùng… \"thôi bỏ qua\".",
        "Khoan, mình định làm gì nhỉ?",
        "Mình chỉ muốn mở đúng công cụ ngay lập tức.",
      ],
      pivot: "Các ứng dụng đa năng trông rất mạnh. Nhưng không phải lúc này.\nLúc này mình chỉ cần một thứ duy nhất.",
      idea_label: "Thế là một ý tưởng nảy ra.",
      idea: "Làm những công cụ nhỏ cho một khoảnh khắc duy nhất.\nMở, chạm — xong.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Thời gian",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Phóng",
      formula_b: "Lát nữa",
      formula_c: "Bắt đầu bằng cú phóng tiếp",
      concept: "Phóng × Lát nữa = Bắt đầu bằng cú phóng tiếp",
      call: ["Nghỉ một chút nhé?", "Phóng thêm một lần?"],
      trick: [
        "Không phải \"chạm 5 phút\" — góc và lực của cú phóng tạo nên thời gian. Lúc kết thúc cũng rất vừa khít.",
        "Mỗi hành tinh có thời gian riêng. Xa Mặt Trời: dài hơn; rất gần: xoáy hút.",
        "Chỉ Diêm Vương là thử thách ∞ mà trọng lực không tăng theo thời gian. Phá kỷ lục là phần thưởng.",
      ],
    },
  ],
};
