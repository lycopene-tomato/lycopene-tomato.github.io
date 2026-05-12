/* ============================================================
 * content/hr/todo.js — Croatian: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["hr"] = window.__CONTENT__["hr"] || {};
window.__CONTENT__["hr"].categories = window.__CONTENT__["hr"].categories || {};

window.__CONTENT__["hr"].categories.todo = {
  id: "todo",
  name: "Todo serija",
  subtitle: "Od „Učini to!\" do „Želim probati!\" — aplikacije koje grade navike.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Navike",
  formula: { a: "Igra", b: "Zadaci", c: "Navika" },

  story: {
    tagline: "Od „Učini to!\" do „Pokušat ću\".",
    intro: "Aplikacije koje kroz igru pozivaju dijete da krene samo od sebe.",
    empathy: {
      label: "Zvuči poznato?",
      lines: [
        "Odgajati djecu je iscrpljujuće.",
        "„Učini to!\" ne pomaže.",
        "Podigneš ton — oni se samo namrgode.",
        "Dan za danom isto.",
        "Završilo bi za minutu, samo da krenu.",
      ],
      pivot: "Dok se igraju, potpuno su uronjeni.\nKad bi se barem zadaci tako osjećali…",
      idea_label: "Tada mi je sinula ideja.",
      idea: "A da malo igre upletem u popis obaveza,\nda krenu sami od sebe?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Iznenađenje",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Zadaci",
      formula_c: "Pokret kroz iznenađenje",
      concept: "Gacha × Zadaci = Pokret kroz iznenađenje",
      call: ["Što će ovaj put izaći?", "Možda nagradna kapsula?"],
      trick: [
        "Možeš diskretno usmjeriti koji zadatak izlazi.",
        "Postavi prioritete — večera prije pranja zubi.",
        "Među zadatke ubaci „nagradne kapsule\".",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Slobodan raspored",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Zadaci",
      formula_c: "Njihovim redoslijedom",
      concept: "Bingo × Zadaci = Njihovim redoslijedom",
      call: ["Idemo po bingo!", "Bingo = nagrada."],
      trick: [
        "Postavi zadatke gdje želiš na ploči.",
        "Izaberi koliko bingoa donosi nagradu.",
        "Najmanje omiljen zadatak stavi u sredinu — jedan dodir = četiri bingoa.",
        "Poveži povezane korake u jedan red da se svi moraju obaviti.",
        "Izgleda kao njihov izbor — ali redoslijed odrediš ti.",
        "Kalendarski bingo odlično pristaje za praznike ili tjedan ispita.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoPloča",
      tag: "Mali koraci",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Društvena igra",
      formula_b: "Zadaci",
      formula_c: "Korak po korak",
      concept: "Društvena igra × Zadaci = Korak po korak",
      call: ["Da odigramo društvenu igru?", "Stigneš do podnožja brda — slijedi nagrada."],
      trick: [
        "Redoslijed je potpuno zaključan.",
        "Sjedni → otvori knjigu → uzmi olovku → jedan zadatak → nagrada → sljedeća stranica…",
        "Ako je prvi korak dovoljno malen, ostalo dolazi samo.",
        "Svaka ruta ima vlastitu gustoću polja.",
        "Planina (gusto na kraju) / Svemir (gusto na početku) / Riječna obala (ravnomjerno) — biraj prema raspoloženju.",
      ],
    },
    {
      id: "farm",
      name: "TodoVrt",
      tag: "Rast",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Rast",
      formula_b: "Zadaci",
      formula_c: "Pokret kroz napredak",
      concept: "Rast × Zadaci = Pokret kroz napredak",
      call: ["Koliko zalijevaš danas?", "Hoće li narasti?"],
      trick: [
        "Nagrađujemo trud, ne samo napravljeno/nije napravljeno.",
        "Biljke rastu u koracima od 10 %.",
        "Cilj: jedna razina rasta po zalijevanju.",
        "Ako pretjeraš s ciljem, voda mijenja boju.",
      ],
    },
  ],
};
