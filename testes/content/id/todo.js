/* ============================================================
 * content/id/todo.js — Indonesian: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["id"] = window.__CONTENT__["id"] || {};
window.__CONTENT__["id"].categories = window.__CONTENT__["id"].categories || {};

window.__CONTENT__["id"].categories.todo = {
  id: "todo",
  name: "Seri Todo",
  subtitle: "Dari \"Cepat kerjakan!\" ke \"Aku mau coba!\" — aplikasi pembentuk kebiasaan.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Kebiasaan",
  formula: { a: "Main", b: "Tugas", c: "Kebiasaan" },

  story: {
    tagline: "Dari \"Cepat kerjakan!\" ke \"Aku coba dulu\".",
    intro: "Aplikasi yang mengajak anak mulai sendiri lewat permainan.",
    empathy: {
      label: "Familiar?",
      lines: [
        "Mengasuh anak itu melelahkan.",
        "\"Cepat kerjakan!\" tidak mempan.",
        "Suara dinaikkan pun mereka cuma cemberut.",
        "Hal yang sama, setiap hari.",
        "Sebenarnya hanya butuh semenit kalau saja mereka mau mulai.",
      ],
      pivot: "Saat bermain mereka fokus penuh.\nAndai tugas terasa seperti itu juga…",
      idea_label: "Lalu muncul satu ide.",
      idea: "Bagaimana kalau saya sisipkan sedikit permainan ke daftar tugas,\nsupaya mereka mulai sendiri?",
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
      formula_c: "Bergerak karena kejutan",
      concept: "Gacha × Tugas = Bergerak karena kejutan",
      call: ["Kali ini muncul apa, ya?", "Mungkin kapsul hadiah?"],
      trick: [
        "Bisa diarahkan secara halus tugas mana yang keluar.",
        "Atur prioritas — makan dulu, sikat gigi belakangan.",
        "Selipkan \"kapsul hadiah\" di sana-sini.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Tata letak bebas",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Tugas",
      formula_c: "Urutan mereka sendiri",
      concept: "Bingo × Tugas = Urutan mereka sendiri",
      call: ["Ayo bikin bingo!", "Bingo = hadiah."],
      trick: [
        "Tempatkan tugas di mana saja di papan.",
        "Pilih berapa bingo yang memberi hadiah.",
        "Letakkan tugas paling tidak disukai di tengah — satu sentuh = empat bingo.",
        "Rantaikan langkah-langkah terkait dalam satu baris supaya semuanya harus dikerjakan.",
        "Terasa seperti pilihan mereka — padahal kamu yang menentukan urutan.",
        "Bingo-kalender pas untuk liburan atau pekan ujian.",
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
      formula_c: "Selangkah demi selangkah",
      concept: "Permainan papan × Tugas = Selangkah demi selangkah",
      call: ["Main ular tangga, yuk?", "Sampai di kaki gunung, kamu dapat hadiah."],
      trick: [
        "Urutan dikunci sepenuhnya.",
        "Duduk → buka buku → ambil pensil → satu soal → hadiah → halaman berikutnya…",
        "Kalau langkah pertama cukup kecil, sisanya datang sendiri.",
        "Tiap jalur punya kepadatan kotak yang berbeda.",
        "Gunung (akhir padat) / Antariksa (awal padat) / Tepi sungai (rata) — pilih sesuai mood.",
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
      formula_c: "Bergerak karena kemajuan",
      concept: "Pertumbuhan × Tugas = Bergerak karena kemajuan",
      call: ["Hari ini menyiram berapa?", "Apakah akan tumbuh?"],
      trick: [
        "Yang dihargai itu usaha, bukan sekadar selesai/belum.",
        "Tanaman tumbuh per 10%.",
        "Targetkan satu tahap pertumbuhan tiap menyiram.",
        "Kalau berlebih, air berubah warna.",
      ],
    },
  ],
};
