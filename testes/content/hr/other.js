/* ============================================================
 * content/hr/other.js — Croatian: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["hr"] = window.__CONTENT__["hr"] || {};
window.__CONTENT__["hr"].categories = window.__CONTENT__["hr"].categories || {};

window.__CONTENT__["hr"].categories.other = {
  id: "other",
  name: "Other serija",
  subtitle: "Izvan roditeljske osi — bonus napravljen u prolazu. Igra · alat · pauza.",
  lineup_title: "Bonus aplikacije.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Po osjećaju", b: "Razvoj", c: "Bonus" },

  story: {
    tagline: "Po osjećaju — kao bonus.",
    intro: "Glavna os su aplikacije koje olakšavaju roditeljstvo. Pokraj njih — bonus napravljen u prolazu.\nIgra, alat, pauza — za sad ovdje nema ničega.",
    empathy: {
      label: "Naiđe ti ponekad takva želja?",
      badge: "Opušteno",
      lines: [
        "Stavimo ono važno na stranu nakratko.",
        "Igra, alat — bilo što.",
        "……Za sad ovdje nema ničega.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Igra",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minuta",
      formula_b: "Probudi mozak",
      formula_c: "Promjena zraka",
      concept: "1 minuta × Probudi mozak = Promjena zraka",
      call: ["Samo jedna zagonetka?"],
      trick: [
        "Otprilike minuta po zagonetki.",
        "Težina raste polako.",
        "Bez reklama.",
      ],
    },
  ],
};
