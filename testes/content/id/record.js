/* ============================================================
 * content/id/record.js — Indonesian: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["id"] = window.__CONTENT__["id"] || {};
window.__CONTENT__["id"].categories = window.__CONTENT__["id"].categories || {};

window.__CONTENT__["id"].categories.record = {
  id: "record",
  name: "Seri Log",
  subtitle: "Catat kejadian kecil, lihat polanya, cegah lain kali.",
  lineup_title: "Aplikasi yang menyusun berdasarkan isi.",
  label_call: "Khawatir",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Pencegahan",
  formula: { a: "Catatan", b: "Fakta", c: "Cegah lain kali" },

  story: {
    tagline: "Ubah \"lagi-lagi\" jadi \"kali ini aku siap\".",
    intro: "Bukan emosi — catatan. Saat pola muncul, jawaban pun ikut muncul.",
    empathy: {
      label: "Hari ini lagi…",
      badge: "Stres",
      lines: [
        "Sekolah menelepon. Lagi.",
        "Dada terasa sesak.",
        "Tapi apakah ini benar-benar \"lagi\"?",
        "Sama seperti dulu? Atau berbeda?",
        "Ingatan saja tidak cukup——.",
      ],
      tried_label: "Padahal sudah dicatat.",
      tried: [
        "Di kertas, nantinya tidak ketemu.",
        "Catatan di ponsel: susah dirapikan.",
        "\"Ini bukannya pernah terjadi?\" — tanpa cara untuk mengecek.",
      ],
      pivot: "Ingatan menumpuk sampai meletup.\nCatatan memperlihatkan gambaran utuh sekaligus.",
      idea_label: "Lalu muncul satu ide.",
      idea: "Tangkap momennya cepat-cepat,\nlalu pakai polanya untuk mencegah lain kali.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Kehidupan sekolah",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Catatan",
      formula_b: "Fakta",
      formula_c: "Tanggapan tenang",
      concept: "Catatan × Fakta = Tanggapan tenang",
      call: ["○○ itu siapa, ya?", "Anak yang sama dengan perselisihan sebelumnya?"],
      trick: [
        "Catat tanggal, tempat, siapa yang terlibat, dan apa yang terjadi.",
        "Dirancang untuk diisi belakangan, saat kepala sudah dingin.",
        "Diurutkan menurut tanggal — pola berulang muncul sendiri.",
        "Untuk rapat dengan guru, ambil intinya saja.",
        "Lampirkan foto atau memo suara (semua tetap di perangkat).",
        "Ekspor ke PDF atau teks.",
      ],
    },
  ],
};
