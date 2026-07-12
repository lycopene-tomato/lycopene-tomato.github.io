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
      pivot: "I watch this child closer than anyone.\nAnd still I can’t say how today differs from yesterday.",
      idea_label: "So I thought —",
      idea: "What if I stopped trusting memory, and started keeping a record?\nMaybe the small changes hiding inside “again” would come into view.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Parent notes",
      appstore_url: "https://apps.apple.com/app/id6762575526",
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
    {
      id: "growthtrend",
      name: "GrowthTrend",
      tag: "Growth chart",
      appstore_url: "https://apps.apple.com/app/id6782609505",
      hero_image: "images/apps/growthtrend.jpeg",
      pricing: "Free",
      formula_a: "Daily waves",
      formula_b: "Logs",
      formula_c: "A trend you can see",
      concept: "Daily waves × Logs = A trend you can see",
      call: [
        "Yesterday they did it. Why not today?",
        "I shouldn’t have snapped…",
      ],
      trick: [
        "One tap logs teeth-brushing, homework and the rest. A 7-day moving average runs above the daily dots — the waves swing, the line climbs gently.",
        "Tasks sort into three categories (essentials / must-do / nice-to-have) with three levels: done, tried, skipped. One tap for the child’s mood, and a bulk button for rushed mornings.",
        "Skipped days carry yesterday’s score forward, so a once-a-week lesson counts fairly across the week. A short comment, read from the data, sits above the chart.",
      ],
      setupSteps: [
        { title: "Sort tasks into three categories", desc: "Essentials (teeth, bath), must-do (homework, prep for tomorrow), nice-to-have (reading, free study). Just this sorting, to start." },
        { title: "Tap one of three levels each day", desc: "Done (green), tried (yellow), skipped (red). The day’s total becomes one dot on the chart." },
        { title: "Read the moving-average line, not the dot", desc: "Even on a “today was terrible” day, the 7-day line points up. One glance at the line, before the scolding." },
      ],
    },
  ],
};
