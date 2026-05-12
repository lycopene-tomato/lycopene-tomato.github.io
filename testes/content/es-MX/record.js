/* ============================================================
 * content/es-MX/record.js — Spanish (Mexico): Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["es-MX"] = window.__CONTENT__["es-MX"] || {};
window.__CONTENT__["es-MX"].categories = window.__CONTENT__["es-MX"].categories || {};

window.__CONTENT__["es-MX"].categories.record = {
  id: "record",
  name: "Serie Log",
  subtitle: "Anota lo pequeño. Ve el patrón. Evita la próxima vez.",
  lineup_title: "Apps para ordenar por contenido.",
  label_call: "Inquietud",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Prevenir",
  formula: { a: "Registros", b: "Sucesos", c: "Evitar la próxima vez" },

  story: {
    tagline: "Convierte «ya otra vez» en «esta vez estoy preparado».",
    intro: "No emociones, registros. El patrón aparece, y con él la respuesta.",
    empathy: {
      label: "¿Otra vez hoy?",
      badge: "Nervios",
      lines: [
        "Llamada del cole otra vez.",
        "Se me encoge el corazón.",
        "Pero, ¿de verdad es «otra vez»?",
        "¿Lo mismo que la última, o algo distinto?",
        "Solo con la memoria no se ve——.",
      ],
      tried_label: "Sí tomaba notas.",
      tried: [
        "Lo apunto en papel y después no lo encuentro.",
        "Las notas del celular cuesta organizarlas.",
        "Pienso «¿no pasó antes algo así?» y no puedo comprobarlo.",
      ],
      pivot: "La memoria almacena hasta explotar.\nEl registro deja ver el conjunto.",
      idea_label: "Y se me ocurrió:",
      idea: "Captura rápida del momento,\ny usa el patrón para evitar la próxima.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Día a día escolar",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Registros",
      formula_b: "Sucesos",
      formula_c: "Reaccionar con calma",
      concept: "Registros × Sucesos = Reaccionar con calma",
      call: ["¿Quién era ○○ exactamente?", "¿Es el mismo niño de la última pelea?"],
      trick: [
        "Registra fecha, lugar, personas implicadas y qué pasó.",
        "Pensado para rellenar más tarde, ya con la cabeza fría.",
        "Al ordenar por fecha emergen los patrones recurrentes.",
        "Extrae solo lo destacado para reuniones con tutores.",
        "Adjunta fotos o notas de voz (todo dentro del dispositivo).",
        "Exporta en PDF o texto.",
      ],
    },
  ],
};
