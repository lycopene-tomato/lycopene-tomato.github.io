/* ============================================================
 * content/en/record.js — English: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__.en = window.__CONTENT__.en || {};
window.__CONTENT__.en.categories = window.__CONTENT__.en.categories || {};

window.__CONTENT__.en.categories.record = {
  id: "record",
  name: "Log",
  subtitle: "Quietly capture small events. Spot the pattern. Prevent the next one.",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Proactive",
  formula: { a: "Logs", b: "Events", c: "Prevent next time" },

  story: {
    tagline: "Turn “it happened again” into “next time, we’re ready.”",
    intro: "Not feelings. Records. Patterns become visible, and so do the answers.",
    empathy: {
      label: "Sound familiar?",
      lines: [
        "It happened again.",
        "Wasn’t this the same thing last time?",
        "Maybe there’s a cycle?",
        "Memory alone is too fuzzy.",
        "I want to catch it next time.",
      ],
      pivot: "Memory bottles things up until they explode.\nLogs let you see the whole picture.",
      idea_label: "So I had an idea.",
      idea: "Capture the moment quickly,\nthen use the pattern to prevent next time.",
    },
  },

  apps: [
    {
      id: "wasuremono",
      name: "Forget-Me-Not",
      tag: "Belongings",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/wasuremono.jpeg",
      formula_a: "Logs",
      formula_b: "Belongings",
      formula_c: "Fewer things forgotten",
      concept: "Logs × Belongings = Fewer things forgotten",
      call: ["Did anything get left behind today?", "Let’s check tomorrow’s bag together."],
      trick: [
        "Capture what was forgotten, when, and the situation.",
        "See trends by weekday or subject — easier to plan around.",
        "Set the night-before reminders for repeat offenders.",
        "Aim is to review together with data, not to scold.",
        "Per-child entries supported.",
      ],
    },
    {
      id: "trouble",
      name: "Trouble Notebook",
      tag: "School life",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Logs",
      formula_b: "Events",
      formula_c: "Calmer follow-ups",
      concept: "Logs × Events = Calmer follow-ups",
      call: ["How was school today?", "It’s okay — I’ll write it down."],
      trick: [
        "Record date, place, people involved, and what happened.",
        "Designed to be filled in later, when the moment has cooled.",
        "Sort chronologically and recurring patterns surface.",
        "Pull out just the highlights for parent meetings.",
        "Attach photos or voice memos (stays on device).",
        "Export as PDF or text.",
      ],
    },
  ],
};
