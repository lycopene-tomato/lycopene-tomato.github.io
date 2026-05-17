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
      pricing: "Free",
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
      setupSteps: [
        { title: "Put 5-10 tasks into the gacha", desc: "We started with the basics — “dinner”, “brush teeth”, “homework”. You can keep adding later." },
        { title: "Mix some rewards in too", desc: "Slip in cards like “one snack” or “10 minutes of game”. Hitting one of those keeps the momentum up." },
        { title: "Let the kid pull the gacha", desc: "Do whatever comes out, in order. It feels like they chose the order, so there’s less pushback." },
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Free layout",
      appstore_url: "https://apps.apple.com/us/app/todobingo/id6762549881",
      hero_image: "images/apps/bingo.jpeg",
      pricing: "Free",
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
      setupSteps: [
        { title: "Fill in the 3×3 grid with tasks", desc: "Doesn’t need to be nine — leave squares blank if it’s a light day. We started with just the morning routine." },
        { title: "Put the must-do in the center", desc: "Every line — across, down, diagonal — passes through it. So the “this one for sure” lands there." },
        { title: "Cross off one square at a time", desc: "When they ask “where do I start?”, let them pick. Once bingo is in sight, they keep going on their own." },
      ],
    },
    {
      id: "sugoroku",
      name: "TodoLadders",
      tag: "Small steps",
      appstore_url: "https://apps.apple.com/us/app/todoladders/id6762462275",
      hero_image: "images/apps/sugoroku.jpeg",
      pricing: "Free",
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
      setupSteps: [
        { title: "Lay out the spaces from start to goal", desc: "We use about 10 for the morning routine. Splitting it small — “sit down → open the book → grab the pencil” — keeps the steps moving." },
        { title: "Drop reward spaces in between", desc: "Every 3-4 squares, put “one sticker” or “drink some water”. The next reward is always in sight." },
        { title: "Move the piece one space at a time", desc: "Advance each time a task is done. Once the goal is close, they usually sprint to the end." },
      ],
    },
    {
      id: "farm",
      name: "TodoFarm",
      tag: "Stacking up",
      appstore_url: "https://apps.apple.com/us/app/todofarm/id6763425345",
      hero_image: "images/apps/farm.jpeg",
      pricing: "Free",
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
      setupSteps: [
        { title: "Pick what you’re growing and the unit", desc: "Minutes for piano, pages for drill books, repetitions for memorization. We have one plant per lesson." },
        { title: "Water it by how much you actually did", desc: "Not all-or-nothing. Five minutes grows five minutes’ worth. Keep it short on days you can’t go long." },
        { title: "Let it wilt, then start over", desc: "On a lazy day the plant wilts, then revives when you come back. “Quit and restarted” gets logged too, which makes it easier to keep going." },
      ],
    },
  ],
};
