/* ============================================================
 * content/id/tool.js — Indonesian: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["id"] = window.__CONTENT__["id"] || {};
window.__CONTENT__["id"].categories = window.__CONTENT__["id"].categories || {};

window.__CONTENT__["id"].categories.tool = {
  id: "tool",
  name: "Seri Timer",
  subtitle: "\"Nanti\" jadi \"sekarang\" — timer lawan menunda.",
  lineup_title: "Hitung mundur sesuai situasi.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Anti-menunda",
  formula: { a: "Alat", b: "Momen", c: "Beres" },

  story: {
    tagline: "\"Nanti\" berubah jadi \"sekarang\".",
    intro: "Untuk anak yang selalu bilang \"lima menit lagi\".\nWaktu dan batas yang memicu klik perubahan.",
    empathy: {
      label: "Familiar dengan momen ini?",
      lines: [
        "Begitu ada kejadian, ponsel langsung kuraih.",
        "Cari aplikasi, cari pengaturan, malah tersesat.",
        "Akhirnya… \"sudahlah\".",
        "Tunggu, tadi aku mau apa?",
        "Aku cuma ingin langsung buka alat yang tepat.",
      ],
      pivot: "Aplikasi serba bisa terlihat hebat. Tapi tidak di momen ini.\nSekarang aku butuh satu hal saja.",
      idea_label: "Lalu muncul satu ide.",
      idea: "Bikin alat kecil untuk satu momen.\nBuka, sentuh — selesai.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Waktu",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Lemparan",
      formula_b: "Nanti",
      formula_c: "Bergerak lewat lemparan ulang",
      concept: "Lemparan × Nanti = Bergerak lewat lemparan ulang",
      call: ["Istirahat sebentar, yuk?", "Lempar sekali lagi?"],
      trick: [
        "Bukan \"sentuh 5 menit\" — sudut dan kekuatan lemparan yang menentukan waktu. Akhirnya pun terasa pas.",
        "Tiap planet punya waktunya sendiri. Lebih jauh dari Matahari: lebih lama; sangat dekat: spiral yang menelan.",
        "Hanya Pluto yang merupakan tantangan ∞ tanpa gravitasi menambah seiring waktu. Pecahkan rekor — itu hadiahnya.",
      ],
    },
  ],
};
