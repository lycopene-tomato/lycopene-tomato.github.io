/* ============================================================
 * content/sl-SI/other.js — Slovenian: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["sl-SI"] = window.__CONTENT__["sl-SI"] || {};
window.__CONTENT__["sl-SI"].categories = window.__CONTENT__["sl-SI"].categories || {};

window.__CONTENT__["sl-SI"].categories.other = {
  id: "other",
  name: "Serija Other",
  subtitle: "Izven starševske osi — bonus, narejen mimogrede. Igra · orodje · premor.",
  lineup_title: "Bonus aplikacije.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Bonus",
  formula: { a: "Iz vzgiba", b: "Razvoj", c: "Bonus" },

  story: {
    tagline: "Iz vzgiba — kot bonus.",
    intro: "Glavna os so aplikacije, ki olajšajo starševstvo. Poleg — bonus, narejen mimogrede.\nIgra, orodje, premor — zaenkrat ničesar.",
    empathy: {
      label: "Te kdaj prime ta želja?",
      badge: "Sproščeno",
      lines: [
        "Dajmo pomembno za hip ob stran.",
        "Igra, orodje — karkoli.",
        "……Zaenkrat tukaj ni ničesar.",
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
      formula_b: "Zbujanje možganov",
      formula_c: "Sprememba zraka",
      concept: "1 minuta × Zbujanje možganov = Sprememba zraka",
      call: ["Samo ena uganka?"],
      trick: [
        "Približno minuta na uganko.",
        "Težavnost narašča počasi.",
        "Brez oglasov.",
      ],
    },
  ],
};
