/* ============================================================
 * content/es-MX/todo.js — Spanish (Mexico): Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["es-MX"] = window.__CONTENT__["es-MX"] || {};
window.__CONTENT__["es-MX"].categories = window.__CONTENT__["es-MX"].categories || {};

window.__CONTENT__["es-MX"].categories.todo = {
  id: "todo",
  name: "Serie Todo",
  subtitle: "Convierte «¡hazlo!» en «¡quiero probar!» — apps para crear hábitos.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Hábitos",
  formula: { a: "Juego", b: "Tareas", c: "Hábito" },

  story: {
    tagline: "De «¡hazlo!» a «¡yo lo intento!».",
    intro: "Apps que invitan a moverse por iniciativa propia — a través del juego.",
    empathy: {
      label: "¿Te suena?",
      lines: [
        "Educar es agotador.",
        "«¡Hazlo!» no funciona.",
        "Aunque levantes la voz, solo se enfadan.",
        "Lo mismo, cada día.",
        "Se acabaría en un minuto si empezaran ya.",
      ],
      pivot: "Cuánta atención cuando juegan.\nOjalá las tareas fueran igual…",
      idea_label: "Y se me ocurrió:",
      idea: "Mezclar un poco de juego en la lista de tareas,\npara que se pongan en marcha solos.",
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
      formula_b: "Tareas",
      formula_c: "Moverse con sorpresa",
      concept: "Gacha × Tareas = Moverse con sorpresa",
      call: ["¿Qué saldrá esta vez?", "¿Quizá una cápsula de recompensa?"],
      trick: [
        "Puedes dirigir suavemente qué tarea sale.",
        "Define prioridades: cena antes que cepillarse los dientes.",
        "Intercala «cápsulas de recompensa» aquí y allá.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Tablero libre",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Tareas",
      formula_c: "Su propio orden",
      concept: "Bingo × Tareas = Su propio orden",
      call: ["¡A por el bingo!", "Bingo y hay recompensa."],
      trick: [
        "Coloca las tareas donde quieras en el tablero.",
        "Elige cuántos bingos dan recompensa.",
        "Pon la tarea pesada en el centro — un toque y son cuatro bingos.",
        "Encadena pasos en línea para que tengan que hacerlos todos.",
        "Parece su elección, pero el orden lo decides tú.",
        "El bingo de calendario va genial para verano o exámenes.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoOca",
      tag: "Pasos pequeños",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Juego de mesa",
      formula_b: "Tareas",
      formula_c: "Paso a paso",
      concept: "Juego de mesa × Tareas = Paso a paso",
      call: ["¿Echamos una partida?", "Llega al pie de la montaña y hay premio."],
      trick: [
        "Orden completamente fijo.",
        "Sentarse → abrir el libro → coger el lápiz → resolver uno → premio → siguiente página…",
        "Si el primer paso es pequeño, el resto va solo.",
        "Cada nivel tiene una densidad de casillas distinta.",
        "Montaña (al final pesa) / Espacio (al inicio pesa) / Río (uniforme) — elige según el ánimo.",
      ],
    },
    {
      id: "farm",
      name: "TodoHuerto",
      tag: "Crecer",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Crecer",
      formula_b: "Tareas",
      formula_c: "Moverse con progreso",
      concept: "Crecer × Tareas = Moverse con progreso",
      call: ["¿Cuánta agua hoy?", "¿Crecerá?"],
      trick: [
        "Premia el esfuerzo, no solo el hecho/no-hecho.",
        "Las plantas crecen un 10 % cada vez.",
        "Objetivo: una etapa de crecimiento por riego.",
        "Si lo superas, el agua cambia de color.",
      ],
    },
  ],
};
