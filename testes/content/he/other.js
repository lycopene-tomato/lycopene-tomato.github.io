/* ============================================================
 * content/he/other.js — Hebrew: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["he"] = window.__CONTENT__["he"] || {};
window.__CONTENT__["he"].categories = window.__CONTENT__["he"].categories || {};

window.__CONTENT__["he"].categories.other = {
  id: "other",
  name: "סדרת Other",
  subtitle: "מחוץ לציר ההורות — בונוס שנעשה תוך כדי. משחק · כלי · הפסקה.",
  lineup_title: "אפליקציות בונוס.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "בונוס",
  formula: { a: "לפי תחושה", b: "פיתוח", c: "בונוס" },

  story: {
    tagline: "לפי תחושה — כבונוס.",
    intro: "הציר הראשי הוא אפליקציות שמקלות על ההורות. כאן בצד — בונוס שנעשה תוך כדי.\nמשחק, כלי, הפסקה — בינתיים אין כלום.",
    empathy: {
      label: "לפעמים בא לך כזה דבר?",
      badge: "רגוע",
      lines: [
        "נשים את העיקר בצד.",
        "משחק, כלי — לא משנה מה.",
        "……בינתיים אין כאן כלום.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "משחק",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "דקה",
      formula_b: "להעיר את המוח",
      formula_c: "שינוי אוויר",
      concept: "דקה × להעיר את המוח = שינוי אוויר",
      call: ["רק חידה אחת?"],
      trick: [
        "בערך דקה לחידה.",
        "הקושי עולה לאט.",
        "בלי פרסומות.",
      ],
    },
  ],
};
