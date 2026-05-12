/* ============================================================
 * content/ms/todo.js — Malay: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ms"] = window.__CONTENT__["ms"] || {};
window.__CONTENT__["ms"].categories = window.__CONTENT__["ms"].categories || {};

window.__CONTENT__["ms"].categories.todo = {
  id: "todo",
  name: "Siri Todo",
  subtitle: "Daripada \"Buatlah!\" kepada \"Saya nak cuba!\" — aplikasi pembentuk tabiat.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Tabiat",
  formula: { a: "Main", b: "Tugas", c: "Tabiat" },

  story: {
    tagline: "Daripada \"Buatlah!\" kepada \"Biar saya cuba\".",
    intro: "Aplikasi yang mengajak anak mula sendiri menerusi permainan.",
    empathy: {
      label: "Pernah rasa begini?",
      lines: [
        "Membesarkan anak memang penat.",
        "\"Buatlah!\" tak menjadi.",
        "Naikkan suara pun mereka cuma merajuk.",
        "Setiap hari benda yang sama.",
        "Sebenarnya cukup seminit, kalau mereka mula sahaja.",
      ],
      pivot: "Bila bermain, mereka fokus sepenuhnya.\nKalaulah tugas terasa seperti itu juga…",
      idea_label: "Lalu satu idea timbul.",
      idea: "Bagaimana kalau saya selitkan sedikit permainan ke dalam senarai tugas,\nsupaya mereka mula sendiri?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Kejutan",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Tugas",
      formula_c: "Bergerak dengan kejutan",
      concept: "Gacha × Tugas = Bergerak dengan kejutan",
      call: ["Apa pula akan keluar kali ini?", "Mungkin kapsul hadiah?"],
      trick: [
        "Anda boleh halakan secara halus tugas mana yang muncul.",
        "Tetapkan keutamaan — makan malam dahulu, gosok gigi kemudian.",
        "Selitkan \"kapsul hadiah\" di sana sini.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Susunan bebas",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Tugas",
      formula_c: "Mengikut susunan mereka",
      concept: "Bingo × Tugas = Mengikut susunan mereka",
      call: ["Jom buat bingo!", "Bingo = hadiah."],
      trick: [
        "Letakkan tugas di mana-mana pada papan.",
        "Pilih berapa bingo perlu untuk dapat hadiah.",
        "Letak tugas paling tak suka di tengah — satu sentuhan = empat bingo.",
        "Rangkaikan langkah berkaitan pada satu baris supaya semua perlu dibuat.",
        "Nampak seperti pilihan mereka — sebenarnya susunan ditetapkan anda.",
        "Bingo-kalendar sangat sesuai untuk cuti atau minggu peperiksaan.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoUlarTangga",
      tag: "Langkah kecil",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Permainan papan",
      formula_b: "Tugas",
      formula_c: "Langkah demi langkah",
      concept: "Permainan papan × Tugas = Langkah demi langkah",
      call: ["Main ular tangga, jom?", "Sampai kaki gunung, anda dapat hadiah."],
      trick: [
        "Susunan dikunci sepenuhnya.",
        "Duduk → buka buku → ambil pensel → satu soalan → hadiah → halaman seterusnya…",
        "Kalau langkah pertama cukup kecil, selebihnya datang sendiri.",
        "Setiap laluan ada kepadatan petak yang berbeza.",
        "Gunung (padat di hujung) / Angkasa (padat di awal) / Tepi sungai (rata) — pilih ikut mood.",
      ],
    },
    {
      id: "farm",
      name: "TodoKebun",
      tag: "Pertumbuhan",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Pertumbuhan",
      formula_b: "Tugas",
      formula_c: "Bergerak dengan kemajuan",
      concept: "Pertumbuhan × Tugas = Bergerak dengan kemajuan",
      call: ["Hari ini siram berapa banyak?", "Adakah ia akan tumbuh?"],
      trick: [
        "Yang dihargai ialah usaha, bukan sekadar siap/tak siap.",
        "Pokok tumbuh dalam langkah 10%.",
        "Sasarkan satu peringkat pertumbuhan setiap kali menyiram.",
        "Kalau berlebihan, air bertukar warna.",
      ],
    },
  ],
};
