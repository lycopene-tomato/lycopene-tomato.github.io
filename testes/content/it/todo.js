/* ============================================================
 * content/it/todo.js — Italian: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["it"] = window.__CONTENT__["it"] || {};
window.__CONTENT__["it"].categories = window.__CONTENT__["it"].categories || {};

window.__CONTENT__["it"].categories.todo = {
  id: "todo",
  name: "Serie Todo",
  subtitle: "Da «Fallo!» a «Voglio provarci!» — app per creare abitudini.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Abitudini",
  formula: { a: "Gioco", b: "Compiti", c: "Abitudine" },

  story: {
    tagline: "Da «Fallo!» a «Lo provo!».",
    intro: "App che invitano i bambini a partire da soli — attraverso il gioco.",
    empathy: {
      label: "Ti suona familiare?",
      lines: [
        "Crescere figli è duro.",
        "«Fallo!» non funziona.",
        "Anche alzando la voce, si chiudono e basta.",
        "Lo stesso copione, ogni giorno.",
        "Basterebbe un minuto, se solo iniziassero.",
      ],
      pivot: "Quando giocano sono concentratissimi.\nSe i compiti facessero lo stesso effetto…",
      idea_label: "E allora mi è venuta un'idea.",
      idea: "E se infilassi un po' di gioco nella lista delle cose da fare,\nin modo che partano da soli?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Sorpresa",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Compiti",
      formula_c: "Muoversi a sorpresa",
      concept: "Gacha × Compiti = Muoversi a sorpresa",
      call: ["Cosa uscirà stavolta?", "Magari una capsula premio?"],
      trick: [
        "Puoi orientare con discrezione quale compito esce.",
        "Imposta le priorità — cena prima dei denti.",
        "Mescola qua e là delle «capsule premio».",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Schema libero",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Compiti",
      formula_c: "Nel loro ordine",
      concept: "Bingo × Compiti = Nel loro ordine",
      call: ["Forza, facciamo bingo!", "Bingo = premio."],
      trick: [
        "Sistema i compiti dove vuoi sulla griglia.",
        "Scegli quanti bingo servono per un premio.",
        "Metti il compito più pesante al centro — un tocco = quattro bingo.",
        "Incatena le tappe collegate in una riga, così devono farle tutte.",
        "Sembra una loro scelta — ma l'ordine lo decidi tu.",
        "Il bingo da calendario va benissimo per ferie ed esami.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoOca",
      tag: "Passi piccoli",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Gioco da tavolo",
      formula_b: "Compiti",
      formula_c: "Passo dopo passo",
      concept: "Gioco da tavolo × Compiti = Passo dopo passo",
      call: ["Facciamo un giro dell'oca?", "Arriva ai piedi del monte e vinci un premio."],
      trick: [
        "Ordine completamente bloccato.",
        "Sedersi → aprire il libro → prendere la matita → un esercizio → premio → pagina successiva…",
        "Se il primo passo è piccolo a sufficienza, il resto viene da solo.",
        "Ogni percorso ha la sua densità di caselle.",
        "Montagna (denso alla fine) / Spazio (denso all'inizio) / Riva del fiume (uniforme) — scegli secondo l'umore.",
      ],
    },
    {
      id: "farm",
      name: "TodoOrto",
      tag: "Crescita",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Crescita",
      formula_b: "Compiti",
      formula_c: "Muoversi con i progressi",
      concept: "Crescita × Compiti = Muoversi con i progressi",
      call: ["Quanta acqua oggi?", "Crescerà?"],
      trick: [
        "Si premia lo sforzo, non solo il fatto o non fatto.",
        "Le piante crescono a step del 10 %.",
        "Obiettivo: una tacca di crescita per innaffiata.",
        "Se vai oltre, l'acqua cambia colore.",
      ],
    },
  ],
};
