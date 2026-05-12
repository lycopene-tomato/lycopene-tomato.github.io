/* ============================================================
 * content/ms/tool.js — Malay: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ms"] = window.__CONTENT__["ms"] || {};
window.__CONTENT__["ms"].categories = window.__CONTENT__["ms"].categories || {};

window.__CONTENT__["ms"].categories.tool = {
  id: "tool",
  name: "Siri Timer",
  subtitle: "\"Nanti\" bertukar jadi \"sekarang\" — pemasa lawan menangguh.",
  lineup_title: "Kira detik mengikut situasi.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Anti-tangguh",
  formula: { a: "Alat", b: "Detik", c: "Selesai" },

  story: {
    tagline: "\"Nanti\" bertukar menjadi \"sekarang\".",
    intro: "Untuk anak yang sentiasa kata \"lima minit lagi\".\nMasa dan had yang mencetuskan klik perubahan.",
    empathy: {
      label: "Detik ini biasa?",
      lines: [
        "Bila berlaku sesuatu, terus capai telefon.",
        "Cari aplikasi, cari tetapan, hilang arah.",
        "Akhirnya… \"sudahlah\".",
        "Tunggu, saya nak buat apa tadi?",
        "Saya cuma mahu buka terus alat yang betul.",
      ],
      pivot: "Aplikasi pelbagai fungsi nampak hebat. Bukan dalam detik ini.\nSekarang saya perlukan satu benda sahaja.",
      idea_label: "Lalu satu idea timbul.",
      idea: "Bina alat kecil untuk satu detik sahaja.\nBuka, sentuh — siap.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Masa",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Lontaran",
      formula_b: "Nanti",
      formula_c: "Bergerak dengan lontaran semula",
      concept: "Lontaran × Nanti = Bergerak dengan lontaran semula",
      call: ["Rehat sebentar?", "Lontar sekali lagi?"],
      trick: [
        "Bukan \"sentuh 5 minit\" — sudut dan kekuatan lontaran yang mencipta masa. Hujungnya pun terasa pas.",
        "Setiap planet ada masanya sendiri. Lebih jauh dari Matahari: lebih panjang; sangat dekat: pusaran menelan.",
        "Hanya Pluto cabaran ∞ tanpa graviti bertambah dengan masa. Memecahkan rekod itu ganjaran.",
      ],
    },
  ],
};
