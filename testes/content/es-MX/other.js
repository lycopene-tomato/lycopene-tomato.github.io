/* ============================================================
 * content/es-MX/other.js — Spanish (Mexico): Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["es-MX"] = window.__CONTENT__["es-MX"] || {};
window.__CONTENT__["es-MX"].categories = window.__CONTENT__["es-MX"].categories || {};

window.__CONTENT__["es-MX"].categories.other = {
  id: "other",
  name: "Serie Other",
  subtitle: "Fuera de la línea de crianza, un extra hecho a la ligera. Juego · utilidad · respiro.",
  lineup_title: "Apps extra.",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "Extra",
  formula: { a: "Espontáneo", b: "Desarrollo", c: "Extra" },

  story: {
    tagline: "Hecho con ganas, como extra.",
    intro: "Lo principal son las apps de «hacer la crianza un poco más fácil». Esto es lo de fuera, un extra hecho a la ligera.\nJuego, utilidades, respiros — todavía no hay nada.",
    empathy: {
      label: "¿A veces apetece esto?",
      badge: "Relax",
      lines: [
        "Dejemos lo principal a un lado.",
        "Un juego, una utilidad, lo que sea.",
        "……Aunque todavía no hay nada.",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "Juego",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 minuto",
      formula_b: "Ejercicio mental",
      formula_c: "Cambio de aire",
      concept: "1 minuto × Ejercicio mental = Cambio de aire",
      call: ["¿Solo un puzle?"],
      trick: [
        "Cada puzle dura cerca de un minuto.",
        "La dificultad sube poco a poco.",
        "Sin anuncios.",
      ],
    },
  ],
};
