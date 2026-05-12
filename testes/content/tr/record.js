/* ============================================================
 * content/tr/record.js — Turkish: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["tr"] = window.__CONTENT__["tr"] || {};
window.__CONTENT__["tr"].categories = window.__CONTENT__["tr"].categories || {};

window.__CONTENT__["tr"].categories.record = {
  id: "record",
  name: "Log serisi",
  subtitle: "Küçük olguları yakala, örüntüyü gör, bir sonrakini önle.",
  lineup_title: "İçeriğe göre düzenleyen uygulamalar.",
  label_call: "Endişe",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Önleme",
  formula: { a: "Notlar", b: "Olgular", c: "Bir sonrakini önle" },

  story: {
    tagline: "\"Yine oldu\"yu \"bu kez hazırım\"a çevir.",
    intro: "Duygu değil — not. Örüntü görünür hale gelince yanıt da gelir.",
    empathy: {
      label: "Bugün yine…",
      badge: "Stres",
      lines: [
        "Okul arıyor. Yine.",
        "Yüreğim sıkışıyor.",
        "Ama gerçekten \"yine\" mi?",
        "Geçen sefer gibi mi? Yoksa farklı mı?",
        "Sadece hafıza yetmiyor——.",
      ],
      tried_label: "Aslında not da almıştım.",
      tried: [
        "Kâğıttakini sonra bulamıyorum.",
        "Telefon notları: düzene koymak zor.",
        "\"Bu daha önce olmamış mıydı?\" — kontrol etme imkânı yok.",
      ],
      pivot: "Hafıza birikip patlayana kadar üst üste yığılır.\nNot ise bütünü tek bakışta gösterir.",
      idea_label: "O anda aklıma bir fikir geldi.",
      idea: "Anı hızlıca yakala,\nörüntü ile bir sonrakini önle.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Okul hayatı",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Notlar",
      formula_b: "Olgular",
      formula_c: "Sakin tepki",
      concept: "Notlar × Olgular = Sakin tepki",
      call: ["○○ kimdi, hatırlatır mısın?", "Geçen tartışmadakiyle aynı çocuk mu?"],
      trick: [
        "Tarihi, yeri, olayda kimin olduğunu ve ne olduğunu kaydet.",
        "Sonradan, soğukkanlılıkla doldurulması için tasarlandı.",
        "Tarihe göre sıralayınca tekrarlayan örüntüler kendiliğinden ortaya çıkar.",
        "Okul görüşmesinde sadece özü çek al.",
        "Fotoğraf veya ses notu ekle (her şey cihazda kalır).",
        "PDF veya metin olarak dışa aktar.",
      ],
    },
  ],
};
