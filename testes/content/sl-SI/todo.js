/* ============================================================
 * content/sl-SI/todo.js — Slovenian: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["sl-SI"] = window.__CONTENT__["sl-SI"] || {};
window.__CONTENT__["sl-SI"].categories = window.__CONTENT__["sl-SI"].categories || {};

window.__CONTENT__["sl-SI"].categories.todo = {
  id: "todo",
  name: "Serija Todo",
  subtitle: "Iz »Naredi to!« v »Hočem poskusiti!« — aplikacije, ki gradijo navade.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Navade",
  formula: { a: "Igra", b: "Naloge", c: "Navada" },

  story: {
    tagline: "Iz »Naredi to!« v »Bom poskusil/a«.",
    intro: "Aplikacije, ki otroka skozi igro vabijo, da sam začne.",
    empathy: {
      label: "Ti zveni znano?",
      lines: [
        "Vzgoja je naporna.",
        "»Naredi to!« ne pomaga.",
        "Dvigneš glas — oni se le namrduvajo.",
        "Dan za dnem isto.",
        "V minuti bi bilo končano — le da bi začeli.",
      ],
      pivot: "Ko se igrajo, so popolnoma vpeti.\nKo bi naloge dale enak občutek…",
      idea_label: "Takrat mi je padla na pamet ideja.",
      idea: "Kaj če bi v seznam opravil zamešal kanček igre,\nda bodo začeli sami?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Presenečenje",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Naloge",
      formula_c: "Premik s presenečenjem",
      concept: "Gacha × Naloge = Premik s presenečenjem",
      call: ["Kaj bo prišlo tokrat?", "Mogoče kapsula z nagrado?"],
      trick: [
        "Diskretno lahko usmeriš, katera naloga pride na vrsto.",
        "Določi prioritete — večerja pred umivanjem zob.",
        "Med naloge razprši »kapsule z nagrado«.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Prosta razporeditev",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Naloge",
      formula_c: "V njihovem vrstnem redu",
      concept: "Bingo × Naloge = V njihovem vrstnem redu",
      call: ["Gremo na bingo!", "Bingo = nagrada."],
      trick: [
        "Naloge postavi kamor želiš na plošči.",
        "Izberi, koliko bingov prinese nagrado.",
        "Najbolj osovraženo nalogo v sredino — en dotik = štirje bingi.",
        "Poveži povezane korake v eno vrsto, da je treba opraviti vse.",
        "Zdi se kot njihova izbira — vendar vrstni red določaš ti.",
        "Koledarski bingo se odlično obnese za počitnice ali izpitni teden.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoBoard",
      tag: "Majhni koraki",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Družabna igra",
      formula_b: "Naloge",
      formula_c: "Korak za korakom",
      concept: "Družabna igra × Naloge = Korak za korakom",
      call: ["Igrajmo družabno?", "Doseži vznožje gore — in dobiš nagrado."],
      trick: [
        "Vrstni red je popolnoma zaklenjen.",
        "Sedi → odpri knjigo → zgrabi svinčnik → ena naloga → nagrada → naslednja stran…",
        "Če je prvi korak dovolj majhen, ostalo pride samo.",
        "Vsaka pot ima svojo gostoto polj.",
        "Gora (gosto na koncu) / Vesolje (gosto na začetku) / Rečni breg (enakomerno) — izberi po razpoloženju.",
      ],
    },
    {
      id: "farm",
      name: "TodoVrt",
      tag: "Rast",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Rast",
      formula_b: "Naloge",
      formula_c: "Premik z napredkom",
      concept: "Rast × Naloge = Premik z napredkom",
      call: ["Koliko zalivaš danes?", "Ali bo zraslo?"],
      trick: [
        "Nagrajujemo trud, ne le opravljeno/neopravljeno.",
        "Rastline rastejo v korakih po 10 %.",
        "Cilj: ena stopnja rasti na zalivanje.",
        "Če cilj preseže, voda spremeni barvo.",
      ],
    },
  ],
};
