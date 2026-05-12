/* ============================================================
 * content/ro/todo.js — Romanian: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["ro"] = window.__CONTENT__["ro"] || {};
window.__CONTENT__["ro"].categories = window.__CONTENT__["ro"].categories || {};

window.__CONTENT__["ro"].categories.todo = {
  id: "todo",
  name: "Seria Todo",
  subtitle: "De la „Fă-o!\" la „Vreau să încerc!\" — aplicații care construiesc obiceiuri.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Obiceiuri",
  formula: { a: "Joc", b: "Sarcini", c: "Obicei" },

  story: {
    tagline: "De la „Fă-o!\" la „Să încerc\".",
    intro: "Aplicații care, prin joc, invită copilul să pornească singur.",
    empathy: {
      label: "Îți sună cunoscut?",
      lines: [
        "Creșterea copiilor este epuizantă.",
        "„Fă-o!\" nu funcționează.",
        "Ridici tonul și ei doar se bosumflă.",
        "Aceeași poveste, în fiecare zi.",
        "S-ar termina într-un minut, dacă măcar ar începe.",
      ],
      pivot: "Când se joacă, sunt complet absorbiți.\nDe-ar simți la fel și sarcinile…",
      idea_label: "Atunci mi-a venit o idee.",
      idea: "Ce-ar fi să strecor puțin joc în lista de sarcini,\nca să pornească ei singuri?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Surpriză",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Sarcini",
      formula_c: "Mișcare prin surpriză",
      concept: "Gacha × Sarcini = Mișcare prin surpriză",
      call: ["Ce iese de data asta?", "Poate o capsulă cu recompensă?"],
      trick: [
        "Poți ghida discret ce sarcină iese.",
        "Setează prioritățile — cina înainte de spălatul pe dinți.",
        "Strecoară printre ele „capsule cu recompensă\".",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Aranjare liberă",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Sarcini",
      formula_c: "În ordinea lor",
      concept: "Bingo × Sarcini = În ordinea lor",
      call: ["Hai să facem bingo!", "Bingo = recompensă."],
      trick: [
        "Pune sarcinile oriunde pe tablă.",
        "Alege câte bingo-uri dau recompensa.",
        "Pune sarcina cea mai urâtă în centru — o atingere = patru bingo-uri.",
        "Înlănțuie pașii legați pe un singur rând, ca să trebuiască făcuți toți.",
        "Pare alegerea lor — dar ordinea o stabilești tu.",
        "Bingo-calendar merge excelent în vacanțe sau în săptămâna examenelor.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoTablă",
      tag: "Pași mici",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Joc de masă",
      formula_b: "Sarcini",
      formula_c: "Pas cu pas",
      concept: "Joc de masă × Sarcini = Pas cu pas",
      call: ["Jucăm un joc de tablă?", "Ajungi la poalele muntelui — primești o recompensă."],
      trick: [
        "Ordinea e blocată complet.",
        "Așază-te → deschide cartea → ia creionul → o sarcină → recompensă → pagina următoare…",
        "Dacă primul pas e suficient de mic, restul vine singur.",
        "Fiecare traseu are propria densitate de pătrate.",
        "Munte (dens spre final) / Spațiu (dens la început) / Malul râului (uniform) — alege după dispoziție.",
      ],
    },
    {
      id: "farm",
      name: "TodoGrădină",
      tag: "Creștere",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Creștere",
      formula_b: "Sarcini",
      formula_c: "Mișcare prin progres",
      concept: "Creștere × Sarcini = Mișcare prin progres",
      call: ["Cât uzi astăzi?", "Oare va crește?"],
      trick: [
        "Recompensăm efortul, nu doar gata/nu gata.",
        "Plantele cresc în pași de 10 %.",
        "Țintește un nivel de creștere pe udare.",
        "Dacă depășești obiectivul, apa își schimbă culoarea.",
      ],
    },
  ],
};
