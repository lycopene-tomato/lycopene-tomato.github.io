/* ============================================================
 * content/en-US/todo.js — English: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["en-US"] = window.__CONTENT__["en-US"] || {};
window.__CONTENT__["en-US"].categories = window.__CONTENT__["en-US"].categories || {};

window.__CONTENT__["en-US"].categories.todo = {
  id: "todo",
  name: "Todo",
  subtitle: "Turn “Do it!” into “Let me try!” — a habit-building lineup.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Habits",
  formula: { a: "Play", b: "Tasks", c: "Habit" },

  story: {
    tagline: "From “Do it!” to “Let me try!”",
    intro: "Playful hooks that get kids moving on their own.\nA daily setup so you don’t have to keep saying “hurry up!”",
    empathy: {
      label: "Same kind of day, every day.",
      badge: "Frustrated",
      lines: [
        "I yelled again this morning.",
        "Saying “do it!” doesn’t work.",
        "Get angry and they sulk and refuse.",
        "Every single day, the same thing on repeat.",
        "It would be over in a minute if they just started.",
      ],
      tried_label: "I’ve tried plenty.",
      tried: [
        "Made a to-do list, but they forget to check it.",
        "Wrote the tasks on paper — they just say “I don’t want to.”",
        "Reward stickers worked, but they got bored after a while.",
      ],
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Surprise",
      appstore_url: "https://apps.apple.com/us/app/todogatya/id6761904343",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Tasks",
      formula_c: "Move with surprise",
      concept: "Gacha × Tasks = Move with surprise",
      call: [
        "Wonder what we’ll get next?",
        "Want to draw one?",
      ],
      trick: [
        "Gacha lets you nudge the draw order a little, so the “dinner → brush teeth” sequence still holds.",
        "Mix rewards (a favorite snack, 10 minutes of game time) into the gacha and the “what comes next?” feeling keeps going.",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Free layout",
      appstore_url: "https://apps.apple.com/us/app/todobingo/id6762549881",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Tasks",
      formula_c: "Decide their own order",
      concept: "Bingo × Tasks = Decide their own order",
      call: [
        "Where do you want to start?",
        "One more square for bingo!",
      ],
      trick: [
        "The center square sits in every line — put the must-do here and it gets crossed for sure.",
        "Put easy tasks in the first row. “Just one more square” pulls them through.",
        "Put “solve a problem → check it → fix mistakes” in one line — they feel like they’re choosing the order, but you’re shaping it.",
        "Calendar bingo works for longer plans. Fill one square a day; skipped days can be filled in later.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoLadders",
      tag: "Small steps",
      appstore_url: "https://apps.apple.com/us/app/todoladders/id6762462275",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Board",
      formula_b: "Tasks",
      formula_c: "Move by visualizing",
      concept: "Board × Tasks = Move by visualizing",
      call: [
        "How many spaces until the goal?",
        "Three more to the next reward.",
      ],
      trick: [
        "Drop reward spaces in between, so “how many spaces to the next reward” is always visible.",
        "Break it small — “sit down → open the book → grab the pencil” — and that heavy first step finally lifts.",
        "Three stages: Mountain (rewards back-loaded) / Space (front-loaded) / Riverside (even). Pick by mood.",
      ],
    },
    {
      id: "farm",
      name: "TodoFarm",
      tag: "Stacking up",
      appstore_url: "https://apps.apple.com/us/app/todofarm/id6763425345",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Growing",
      formula_b: "Tasks",
      formula_c: "Move and it adds up",
      concept: "Growing × Tasks = Move and it adds up",
      call: [
        "How much water are you giving today?",
        "Even five minutes grows the plant five minutes’ worth.",
      ],
      trick: [
        "Not done-or-not-done. The work stacks up by how much you actually did. Five minutes counts as five, twenty as twenty.",
        "Pick the unit — minutes, repetitions, or pages. Minutes for piano, pages for drill books, repetitions for memorization.",
        "Let the plant wilt on a lazy day; it comes back when you start watering again.",
      ],
    },
  ],
};
