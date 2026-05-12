/* ============================================================
 * content/tr/tool.js — Turkish: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["tr"] = window.__CONTENT__["tr"] || {};
window.__CONTENT__["tr"].categories = window.__CONTENT__["tr"].categories || {};

window.__CONTENT__["tr"].categories.tool = {
  id: "tool",
  name: "Timer serisi",
  subtitle: "\"Sonra\" \"şimdi\"ye dönüşür — erteleme karşıtı zamanlayıcılar.",
  lineup_title: "Duruma göre geri sayım.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Erteleme karşıtı",
  formula: { a: "Araç", b: "An", c: "Çözüldü" },

  story: {
    tagline: "\"Sonra\" \"şimdi\"ye dönüşür.",
    intro: "Her zaman \"beş dakika daha\" diyen çocuk için.\nDeğişimin tıkırtısı için zaman ve sınır.",
    empathy: {
      label: "Bu anı tanıyor musun?",
      lines: [
        "Bir şey olur olmaz telefonu alıyorum.",
        "Uygulamayı arıyorum, ayarı arıyorum, kayboluyorum.",
        "Sonunda… \"boşver\".",
        "Dur, ben ne yapacaktım?",
        "İhtiyacım olan aracı hemen açmak istiyorum.",
      ],
      pivot: "Çok işlevli uygulamalar güçlü görünür. Bu anda değil.\nŞimdi bir tek şeye ihtiyacım var.",
      idea_label: "O anda aklıma bir fikir geldi.",
      idea: "Tek bir ana yönelik küçük araçlar yapmak.\nAç, dokun — bitti.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Zaman",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Fırlatma",
      formula_b: "Sonra",
      formula_c: "Yeni fırlatmayla harekete",
      concept: "Fırlatma × Sonra = Yeni fırlatmayla harekete",
      call: ["Mola verelim mi?", "Bir fırlatma daha?"],
      trick: [
        "\"5 dk'ya bas\" değil — zamanı fırlatmanın açısı ve hızı yaratır. Bitiş de yerinde hissettirir.",
        "Her gezegenin kendi süresi var. Güneş'ten uzak: daha uzun; çok yakın: yutucu sarmal.",
        "Yalnız Plüton, zamanla yer çekimi artmayan ∞ meydan okumadır. Rekoru kırmak ödüldür.",
      ],
    },
  ],
};
