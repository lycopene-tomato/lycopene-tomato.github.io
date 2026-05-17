/* ============================================================
 * content/en-US/record.js — English: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["en-US"] = window.__CONTENT__["en-US"] || {};
window.__CONTENT__["en-US"].categories = window.__CONTENT__["en-US"].categories || {};

window.__CONTENT__["en-US"].categories.record = {
  id: "record",
  name: "Log",
  subtitle: "Turn the daily “again?” into seeing the child grow and the parent breathe easier.",
  lineup_title: "An app to organize it, fitted to what you’re logging.",
  label_call: "That nagging feeling",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Prevent",
  formula: { a: "Again?", b: "Logs", c: "Growth?" },

  story: {
    tagline: "“Again?” becomes “it’s easing.”",
    intro: "Left as memory, the small changes don’t show.\nWritten down, the child’s growth and the parent’s peace become visible.",
    empathy: {
      label: "Today too…",
      badge: "On edge",
      lines: [
        "Another call from school.",
        "My chest tightens.",
        "But really — “again”?",
        "Same as last time? Or has it shifted?",
        "Memory alone can’t tell.",
      ],
      tried_label: "I’ve been taking notes, but…",
      tried: [
        "Wrote it on paper — can’t find it later.",
        "Phone notes are hard to organize.",
        "“Wasn’t there something like this before?” — but I can’t check.",
      ],
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Parent notes",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      pricing: "Free",
      formula_a: "Trouble",
      formula_b: "Logs",
      formula_c: "Organized so it’s visible",
      concept: "Trouble × Logs = Organized so it’s visible",
      call: [
        "Who’s ___ again?",
        "Same kid as last time’s fight?",
      ],
      trick: [
        "Calendar dots for each incident date, with counts grouped by friend. Organized by “who” and “when.”",
        "Parent-only notes (the other parent’s contact, the kid’s personality) are protected behind a mental-math parent gate.",
        "Sort by place (school, family, after-school), and switch easily between multiple siblings.",
      ],
      setupSteps: [
        { title: "Add the people first", desc: "Put the relevant names in per place — school, family, after-school. Saves searching “who was that kid again?” every time." },
        { title: "Log it the day something happens", desc: "Even one line is enough. Later you can check, “same kid as last time’s fight?”" },
        { title: "Lock parent-only notes behind the gate", desc: "Contacts, personality notes — opened only by solving a quick mental-math problem. The kid won’t see them if they grab the phone." },
      ],
    },
  ],
};
