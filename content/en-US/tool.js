/* ============================================================
 * content/en-US/tool.js — English: Timer category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["en-US"] = window.__CONTENT__["en-US"] || {};
window.__CONTENT__["en-US"].categories = window.__CONTENT__["en-US"].categories || {};

window.__CONTENT__["en-US"].categories.tool = {
  id: "tool",
  name: "Timer",
  subtitle: "Turn “later” into “now.” Timers built for the kid who keeps putting things off.",
  seoTitle: "visual timers and countdowns for procrastinating kids",
  seoDesc: "Timers that turn “later” into “now”: a planet-launch visual timer for kids who fight every countdown, and a countdown of the days you still have together.",
  lineup_title: "Countdowns that fit the moment.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Beat procrastination",
  formula: { a: "Hook", b: "Later", c: "Now" },

  story: {
    tagline: "“Later” becomes “now.”",
    intro: "For the kid stuck on “in a minute” and “just five more.”\nApps that use time and boundaries to make switching gears possible.",
    empathy: {
      label: "Sound familiar?",
      badge: "Dragging it out",
      lines: [
        "“Five more minutes” never ends.",
        "“Just a bit” turns into 30 minutes.",
        "Open a comic and the day is gone.",
        "The more you say “do it,” the more they freeze.",
        "A plain timer only starts a fight.",
      ],
      tried_label: "I’ve tried everything.",
      tried: [
        "Saying “five more minutes” doesn’t help — they don’t feel five minutes yet.",
        "Even during the break, I have to keep calling out “three minutes,” “two minutes.”",
        "Take the screen away and they explode.",
      ],
      pivot: "“Five more minutes” is always my call, never theirs.\nMaybe that’s why the ending never feels like theirs, either.",
      idea_label: "So I thought —",
      idea: "What if the child set the clock themselves?\nMaybe the end of “later” would finally feel fair.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Active break",
      appstore_url: "https://apps.apple.com/app/id6767539058",
      hero_image: "images/apps/timer.jpeg",
      pricing: "Free",
      formula_a: "Launch",
      formula_b: "Later",
      formula_c: "One more launch to start",
      concept: "Launch × Later = One more launch to start",
      seoTitle: "a visual timer for kids who melt down when time’s up",
      seoDesc: "The kid launches a planet around the sun to start the break — no number draining against his will — so the end is one he agreed to. Mercury to Neptune, distance sets the length; Pluto is the ∞ challenge.",
      call: [
        "Take a little break?",
        "Want to launch one more?",
      ],
      trick: [
        "Not “press for 5 minutes” — you set the time yourself by choosing the launch angle and power. The ending feels earned.",
        "Each planet runs on its own clock. The farther from the sun, the longer the orbit; closer in, it spirals down and gets pulled back.",
        "Only Pluto runs the ∞ Challenge — no gravity buildup over time. A reward for beating your own longest record.",
      ],
      setupSteps: [
        { title: "Pick one planet", desc: "Closer planets for a short break, farther ones if you want it longer. We started with the Moon or Mars." },
        { title: "Set the angle and power, then launch", desc: "How hard you pull the arrow decides how long the break runs. Not “5 minutes” — your own gut feel." },
        { title: "When it comes back, choose “one more?”", desc: "Since the break was their choice, the end of it doesn’t turn into a fight. Pluto, with no gravity, is where the longest-record runs happen." },
      ],
    },
    {
      id: "lastdays",
      name: "LastDays",
      tag: "Time remaining",
      appstore_url: "https://apps.apple.com/app/id6779920918",
      hero_image: "images/apps/lastdays.jpeg",
      pricing: "Free",
      formula_a: "Age",
      formula_b: "Goodbye",
      formula_c: "Time together",
      concept: "Age × Goodbye = Time together",
      seoTitle: "a countdown of the time left with your kid",
      seoDesc: "From ages and graduation dates it counts the days you still have together and puts the number on your home screen. 'They grow up so fast' lands differently as an actual number. Share image included.",
      call: [
        "How many more?",
        "What did we do together today?",
      ],
      trick: [
        "Just enter their birth date and gender. 13 indicators turn into “how many more” and “how many days left.”",
        "Tim Urban’s “The Tail End”: by age 18, about 93% of the total time you’ll ever spend with your child is already over. The vague becomes a number.",
        "Tap any number and it becomes a share image you’d actually post. Their name and birthday never appear in the image — share without worry.",
      ],
      setupSteps: [
        { title: "Enter birth date and gender", desc: "Thirty seconds. From here, 13 indicators start counting down. Nothing at home has to change." },
        { title: "Tap the easy settings", desc: "Dual income / daycare / preschool / after-school care — match your life and the numbers feel real. Fine-tune later if you want." },
        { title: "Tap an indicator you care about", desc: "“X more hugs,” “X more bedtime stories” turn into a clean share image. Your child’s name and birthday never show up." },
      ],
    },
  ],
};
