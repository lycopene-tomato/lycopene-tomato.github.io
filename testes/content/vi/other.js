/* ============================================================
 * content/vi/other.js — Vietnamese: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["vi"] = window.__CONTENT__["vi"] || {};
window.__CONTENT__["vi"].categories = window.__CONTENT__["vi"].categories || {};

window.__CONTENT__["vi"].categories.other = {
  id: "other",
  name: "Bộ Other",
  subtitle: "Ngoài trục nuôi dạy — phần thưởng làm ngẫu hứng. Trò chơi · công cụ · nghỉ ngơi.",
  lineup_title: "Ứng dụng thưởng thêm.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Thưởng thêm",
  formula: { a: "Theo cảm hứng", b: "Phát triển", c: "Thưởng thêm" },

  story: {
    tagline: "Theo cảm hứng — như món thưởng thêm.",
    intro: "Trục chính là các ứng dụng làm nhẹ việc nuôi dạy. Bên cạnh — phần thưởng làm ngẫu hứng.\nTrò chơi, công cụ, nghỉ ngơi — hiện chưa có gì.",
    empathy: {
      label: "Đôi khi bạn muốn vậy?",
      badge: "Thoải mái",
      lines: [
        "Tạm gác chuyện chính sang một bên.",
        "Một trò chơi, một công cụ — gì cũng được.",
        "……Hiện ở đây chưa có gì.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Trò chơi",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 phút",
      formula_b: "Đánh thức não",
      formula_c: "Đổi không khí",
      concept: "1 phút × Đánh thức não = Đổi không khí",
      call: ["Một câu đố thôi?"],
      trick: [
        "Khoảng một phút cho mỗi câu đố.",
        "Độ khó tăng dần từ từ.",
        "Không quảng cáo.",
      ],
    },
  ],
};
