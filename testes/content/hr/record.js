/* ============================================================
 * content/hr/record.js — Croatian: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["hr"] = window.__CONTENT__["hr"] || {};
window.__CONTENT__["hr"].categories = window.__CONTENT__["hr"].categories || {};

window.__CONTENT__["hr"].categories.record = {
  id: "record",
  name: "Log serija",
  subtitle: "Uhvati male događaje, vidi obrazac, preduhitri idući put.",
  lineup_title: "Aplikacije koje slažu prema sadržaju.",
  label_call: "Briga",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Prevencija",
  formula: { a: "Bilješke", b: "Činjenice", c: "Preduhitri idući put" },

  story: {
    tagline: "Pretvori „opet\" u „ovaj put sam spremna\".",
    intro: "Nisu emocije — bilješke. Kad se obrazac pokaže, pokazuje se i odgovor.",
    empathy: {
      label: "Danas opet…",
      badge: "Stres",
      lines: [
        "Zove škola. Opet.",
        "Stišće u prsima.",
        "Ali je li ovo doista „opet\"?",
        "Isto kao prošli put? Ili drugačije?",
        "Samo pamćenje nije dovoljno——.",
      ],
      tried_label: "Pa zapisala sam.",
      tried: [
        "Na papiru — poslije ih ne nalazim.",
        "Bilješke u telefonu: teško je rasporediti.",
        "„Nije li se već dogodilo?\" — bez načina da provjerim.",
      ],
      pivot: "Sjećanje se gomila dok ne prsne.\nBilješka pokazuje cijelu sliku na jedan pogled.",
      idea_label: "Tada mi je sinula ideja.",
      idea: "Uhvati trenutak brzo,\ni kroz obrazac preduhitri idući put.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Školski život",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Bilješke",
      formula_b: "Činjenice",
      formula_c: "Smirena reakcija",
      concept: "Bilješke × Činjenice = Smirena reakcija",
      call: ["Tko je bio ○○?", "Isto dijete kao u prošloj svađi?"],
      trick: [
        "Zapiši datum, mjesto, uključene osobe i što se dogodilo.",
        "Zamišljeno za naknadno popunjavanje, mirne glave.",
        "Sortirano po datumu — ponavljajući obrasci sami isplivaju.",
        "Za sastanak s učiteljima — izvuci samo bit.",
        "Priloži fotografije ili glasovne bilješke (sve ostaje na uređaju).",
        "Izvoz u PDF ili tekst.",
      ],
    },
  ],
};
