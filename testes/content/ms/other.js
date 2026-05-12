/* ============================================================
 * content/ms/other.js — Malay: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ms"] = window.__CONTENT__["ms"] || {};
window.__CONTENT__["ms"].categories = window.__CONTENT__["ms"].categories || {};

window.__CONTENT__["ms"].categories.other = {
  id: "other",
  name: "Siri Other",
  subtitle: "Luar paksi keibubapaan — bonus yang dibuat secara dadakan. Permainan · alat · rehat.",
  lineup_title: "Aplikasi bonus.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Ikut rasa", b: "Pembangunan", c: "Bonus" },

  story: {
    tagline: "Ikut rasa — sebagai bonus.",
    intro: "Paksi utama ialah aplikasi yang meringankan keibubapaan. Di sebelahnya — bonus yang dibuat dadakan.\nPermainan, alat, rehat — buat masa ini belum ada.",
    empathy: {
      label: "Kadangkala ada rasa begini?",
      badge: "Santai",
      lines: [
        "Mari ketepikan dulu hal yang penting.",
        "Permainan, alat — apa-apa pun boleh.",
        "……Buat masa ini di sini belum ada apa-apa.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Permainan",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minit",
      formula_b: "Kejutkan otak",
      formula_c: "Tukar suasana",
      concept: "1 minit × Kejutkan otak = Tukar suasana",
      call: ["Sekeping teka-teki sahaja?"],
      trick: [
        "Kira-kira seminit setiap teka-teki.",
        "Kesukaran meningkat perlahan-lahan.",
        "Tanpa iklan.",
      ],
    },
  ],
};
