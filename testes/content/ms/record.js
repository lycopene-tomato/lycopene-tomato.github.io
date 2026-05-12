/* ============================================================
 * content/ms/record.js — Malay: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ms"] = window.__CONTENT__["ms"] || {};
window.__CONTENT__["ms"].categories = window.__CONTENT__["ms"].categories || {};

window.__CONTENT__["ms"].categories.record = {
  id: "record",
  name: "Siri Log",
  subtitle: "Rekod kejadian kecil, lihat coraknya, halang kejadian seterusnya.",
  lineup_title: "Aplikasi yang menyusun ikut kandungan.",
  label_call: "Risau",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Pencegahan",
  formula: { a: "Catatan", b: "Fakta", c: "Halang kali berikutnya" },

  story: {
    tagline: "Tukar \"sekali lagi\" kepada \"kali ini saya bersedia\".",
    intro: "Bukan emosi — catatan. Apabila corak muncul, jawapan turut muncul.",
    empathy: {
      label: "Hari ini lagi…",
      badge: "Tekanan",
      lines: [
        "Sekolah menelefon. Sekali lagi.",
        "Hati rasa berat.",
        "Tapi adakah ini benar-benar \"sekali lagi\"?",
        "Sama macam dulu? Atau berbeza?",
        "Hanya mengandalkan ingatan tak cukup——.",
      ],
      tried_label: "Saya pun sudah mencatat.",
      tried: [
        "Di kertas, kemudian tak jumpa.",
        "Nota telefon: payah disusun.",
        "\"Bukankah pernah berlaku?\" — tanpa cara untuk semak.",
      ],
      pivot: "Ingatan menumpuk sampai meletus.\nCatatan menunjukkan keseluruhan dalam satu pandangan.",
      idea_label: "Lalu satu idea timbul.",
      idea: "Tangkap detik itu segera,\ndan gunakan corak untuk halang kali berikutnya.",
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
      formula_c: "Tindak balas tenang",
      concept: "Catatan × Fakta = Tindak balas tenang",
      call: ["○○ tu siapa, ya?", "Anak yang sama dengan pertengkaran sebelumnya?"],
      trick: [
        "Catat tarikh, tempat, siapa terlibat, dan apa yang berlaku.",
        "Direka untuk diisi kemudian, semasa kepala sudah tenang.",
        "Isih ikut tarikh — corak berulang akan muncul sendiri.",
        "Untuk mesyuarat dengan guru, ambil intipati sahaja.",
        "Lampirkan foto atau nota suara (semua kekal pada peranti).",
        "Eksport ke PDF atau teks.",
      ],
    },
  ],
};
