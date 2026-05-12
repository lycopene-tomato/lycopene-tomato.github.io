/* ============================================================
 * content/vi/record.js — Vietnamese: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["vi"] = window.__CONTENT__["vi"] || {};
window.__CONTENT__["vi"].categories = window.__CONTENT__["vi"].categories || {};

window.__CONTENT__["vi"].categories.record = {
  id: "record",
  name: "Bộ Log",
  subtitle: "Ghi lại những sự việc nhỏ, thấy được khuôn mẫu, đề phòng lần sau.",
  lineup_title: "Ứng dụng sắp xếp theo nội dung.",
  label_call: "Lo lắng",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Phòng ngừa",
  formula: { a: "Ghi chú", b: "Sự việc", c: "Đề phòng lần sau" },

  story: {
    tagline: "Biến \"lại nữa\" thành \"lần này mình sẵn sàng\".",
    intro: "Không phải cảm xúc — là ghi chú. Khi khuôn mẫu hiện ra, câu trả lời cũng hiện theo.",
    empathy: {
      label: "Hôm nay lại nữa…",
      badge: "Áp lực",
      lines: [
        "Trường gọi. Lại nữa.",
        "Tim thắt lại.",
        "Nhưng đây có thực sự là \"lại nữa\"?",
        "Giống như lần trước? Hay khác?",
        "Chỉ trí nhớ thôi không đủ——.",
      ],
      tried_label: "Mình có ghi chú rồi mà.",
      tried: [
        "Trên giấy — sau lại không tìm thấy.",
        "Ghi chú điện thoại: khó sắp xếp.",
        "\"Cái này từng xảy ra rồi đúng không?\" — mà không có cách kiểm tra.",
      ],
      pivot: "Trí nhớ tích lại đến lúc vỡ tung.\nGhi chú cho thấy toàn cảnh trong một lần nhìn.",
      idea_label: "Thế là một ý tưởng nảy ra.",
      idea: "Bắt lấy khoảnh khắc thật nhanh,\nrồi dùng khuôn mẫu để đề phòng lần sau.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Đời sống ở trường",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Ghi chú",
      formula_b: "Sự việc",
      formula_c: "Phản ứng bình tĩnh",
      concept: "Ghi chú × Sự việc = Phản ứng bình tĩnh",
      call: ["○○ là ai nhỉ?", "Có phải đứa trẻ trong vụ cãi nhau lần trước không?"],
      trick: [
        "Ghi ngày, nơi, người liên quan và chuyện đã xảy ra.",
        "Thiết kế để điền sau, khi đầu đã nguội.",
        "Sắp theo ngày, khuôn mẫu lặp lại sẽ tự lộ ra.",
        "Cho buổi họp với giáo viên, trích đúng phần cốt lõi.",
        "Đính kèm ảnh hoặc ghi âm (tất cả ở lại trên máy).",
        "Xuất ra PDF hoặc văn bản.",
      ],
    },
  ],
};
