/* ============================================================
 * content/es-MX/tool.js — Spanish (Mexico): Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["es-MX"] = window.__CONTENT__["es-MX"] || {};
window.__CONTENT__["es-MX"].categories = window.__CONTENT__["es-MX"].categories || {};

window.__CONTENT__["es-MX"].categories.tool = {
  id: "tool",
  name: "Serie Timer",
  subtitle: "Convierte el «luego» en «ahora» — temporizadores antiprocrastinación.",
  lineup_title: "Cuenta atrás según la situación.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Antiprocrastinación",
  formula: { a: "Herramienta", b: "Momento", c: "Resuelto" },

  story: {
    tagline: "El «luego» se vuelve «ahora».",
    intro: "Para quien no para de decir «un ratito más».\nDa tiempo y límites para crear un disparador de cambio.",
    empathy: {
      label: "¿Conoces este momento?",
      lines: [
        "Cojo el celular en cuanto algo pasa.",
        "Busco la app, busco el ajuste, me pierdo.",
        "Y al final… «da igual».",
        "Espera, ¿qué iba a hacer?",
        "Solo quiero abrir la herramienta justa al instante.",
      ],
      pivot: "Las apps multifunción parecen potentes. No en este momento.\nAhora necesito una sola cosa.",
      idea_label: "Y se me ocurrió:",
      idea: "Crear herramientas pequeñas para un único momento.\nAbrir, tocar, listo.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Tiempo",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Lanzamiento",
      formula_b: "Luego",
      formula_c: "Mover con otra vuelta",
      concept: "Lanzamiento × Luego = Mover con otra vuelta",
      call: ["¿Descansamos un momento?", "¿Lanzamos una vez más?"],
      trick: [
        "No «pulsa 5 min», sino que creas tu propio tiempo con el ángulo y el impulso del lanzamiento. El final también convence.",
        "Cada planeta tiene su tiempo. Cuanto más lejos del Sol, más larga la vuelta; cerca, espiral que absorbe.",
        "Solo Plutón es el reto ∞ sin aumento de gravedad por el tiempo. Premiamos batir el récord máximo.",
      ],
    },
  ],
};
