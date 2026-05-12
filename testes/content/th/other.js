/* ============================================================
 * content/th/other.js — Thai: Others category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["th"] = window.__CONTENT__["th"] || {};
window.__CONTENT__["th"].categories = window.__CONTENT__["th"].categories || {};

window.__CONTENT__["th"].categories.other = {
  id: "other",
  name: "ซีรีส์ Other",
  subtitle: "นอกแกนการเลี้ยงลูก — โบนัสที่ทำขึ้นแบบไหลตามอารมณ์ เกม · เครื่องมือ · ช่วงพัก",
  lineup_title: "แอปโบนัส",
  accent: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
  eyebrow: "โบนัส",
  formula: { a: "ตามอารมณ์", b: "พัฒนา", c: "โบนัส" },

  story: {
    tagline: "ตามอารมณ์ — แบบโบนัส",
    intro: "แกนหลักคือแอปที่ช่วยให้การเลี้ยงลูกเบาขึ้น ส่วนตรงนี้คือโบนัสที่ทำขึ้นตามอารมณ์\nเกม เครื่องมือ ช่วงพัก — ตอนนี้ยังไม่มีอะไร",
    empathy: {
      label: "บางทีอยากแบบนี้ไหม?",
      badge: "เบา ๆ",
      lines: [
        "ปล่อยเรื่องสำคัญไว้ก่อน",
        "เกม เครื่องมือ — อะไรก็ได้",
        "……ตอนนี้ยังไม่มีอะไรที่นี่",
      ],
    },
  },

  apps: [
    {
      id: "puzzle",
      name: "Tiny Puzzle",
      tag: "เกม",
      appstore_url: "",
      hero_image: "images/apps/puzzle.jpeg",
      formula_a: "1 นาที",
      formula_b: "ปลุกสมอง",
      formula_c: "เปลี่ยนบรรยากาศ",
      concept: "1 นาที × ปลุกสมอง = เปลี่ยนบรรยากาศ",
      call: ["แค่ปริศนาเดียวพอ?"],
      trick: [
        "ประมาณหนึ่งนาทีต่อหนึ่งปริศนา",
        "ความยากค่อย ๆ เพิ่ม",
        "ไม่มีโฆษณา",
      ],
    },
  ],
};
