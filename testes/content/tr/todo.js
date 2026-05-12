/* ============================================================
 * content/tr/todo.js — Turkish: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["tr"] = window.__CONTENT__["tr"] || {};
window.__CONTENT__["tr"].categories = window.__CONTENT__["tr"].categories || {};

window.__CONTENT__["tr"].categories.todo = {
  id: "todo",
  name: "Todo serisi",
  subtitle: "\"Hadi yap!\"tan \"Denemek istiyorum!\"a — alışkanlık kuran uygulamalar.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Alışkanlıklar",
  formula: { a: "Oyun", b: "Görevler", c: "Alışkanlık" },

  story: {
    tagline: "\"Hadi yap!\"tan \"Bir denerim\"e.",
    intro: "Çocuğu oyun yoluyla kendiliğinden harekete çağıran uygulamalar.",
    empathy: {
      label: "Tanıdık geliyor mu?",
      lines: [
        "Çocuk büyütmek zor.",
        "\"Hadi yap!\" işe yaramıyor.",
        "Sesini yükseltsen surat yapıp duruyorlar.",
        "Her gün aynı şey.",
        "Sadece başlasalar, bir dakikada biter.",
      ],
      pivot: "Oyun oynarken tamamen odaklı oluyorlar.\nGörevler de öyle hissettirseydi…",
      idea_label: "O anda aklıma bir fikir geldi.",
      idea: "Görev listesine birazcık oyun katsam,\nkendi kendilerine başlasalar?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Sürpriz",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Görevler",
      formula_c: "Sürprizle harekete",
      concept: "Gacha × Görevler = Sürprizle harekete",
      call: ["Bu kez ne çıkacak?", "Belki ödül kapsülü?"],
      trick: [
        "Hangi görevin çıkacağına usulca yön verebilirsin.",
        "Önceliği belirle — yemek, diş fırçalamadan önce.",
        "Aralara \"ödül kapsülleri\" serpiştir.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Serbest yerleşim",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Görevler",
      formula_c: "Kendi sırasında",
      concept: "Bingo × Görevler = Kendi sırasında",
      call: ["Hadi bingo yapalım!", "Bingo = ödül."],
      trick: [
        "Görevleri panoya istediğin yere koy.",
        "Kaç bingonun ödül vereceğini sen seç.",
        "En sevilmeyen görevi ortaya koy — bir dokunuş = dört bingo.",
        "Bağlantılı adımları tek satıra diz, hepsini yapmak zorunda kalsınlar.",
        "Onların seçimi gibi görünür — ama sırayı sen belirlersin.",
        "Takvim-bingo tatil veya sınav haftası için çok iyi gider.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoTahta",
      tag: "Küçük adımlar",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Masa oyunu",
      formula_b: "Görevler",
      formula_c: "Adım adım",
      concept: "Masa oyunu × Görevler = Adım adım",
      call: ["Tahta oyunu oynar mısın?", "Dağın eteğine varırsan ödülü kapacaksın."],
      trick: [
        "Sıralama tamamen kilitli.",
        "Otur → kitabı aç → kalemi al → bir soru → ödül → sıradaki sayfa…",
        "İlk adım yeterince küçükse, gerisi kendiliğinden gelir.",
        "Her güzergâhın kendi kare yoğunluğu var.",
        "Dağ (sona doğru yoğun) / Uzay (başta yoğun) / Nehir kıyısı (eşit) — keyfine göre seç.",
      ],
    },
    {
      id: "farm",
      name: "TodoBostan",
      tag: "Büyüme",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Büyüme",
      formula_b: "Görevler",
      formula_c: "İlerlemeyle harekete",
      concept: "Büyüme × Görevler = İlerlemeyle harekete",
      call: ["Bugün ne kadar sulayacaksın?", "Acaba büyüyecek mi?"],
      trick: [
        "Ödüllendirdiğimiz çaba, sadece yapıldı/yapılmadı değil.",
        "Bitkiler %10'luk adımlarla büyür.",
        "Bir sulamada bir büyüme kademesi hedefle.",
        "Hedefi aşarsan su renk değiştirir.",
      ],
    },
  ],
};
