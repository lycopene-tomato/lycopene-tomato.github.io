/* ============================================================
 * content/fi/todo.js — Finnish: Todo category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["fi"] = window.__CONTENT__["fi"] || {};
window.__CONTENT__["fi"].categories = window.__CONTENT__["fi"].categories || {};

window.__CONTENT__["fi"].categories.todo = {
  id: "todo",
  name: "Todo-sarja",
  subtitle: "\"Tee se nyt!\":stä \"Haluan kokeilla!\":ksi — tapoja rakentavia sovelluksia.",
  accent: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  eyebrow: "Tavat",
  formula: { a: "Leikki", b: "Tehtävät", c: "Tapa" },

  story: {
    tagline: "\"Tee se nyt!\":stä \"Kokeillaan\":ksi.",
    intro: "Sovellukset, jotka leikin kautta houkuttavat lapsen aloittamaan itse.",
    empathy: {
      label: "Kuulostaako tutulta?",
      lines: [
        "Lasten kasvattaminen on uuvuttavaa.",
        "\"Tee se nyt!\" ei toimi.",
        "Ääni nousee, ja vain murjottavat.",
        "Sama juttu joka päivä.",
        "Olisi minuutissa valmis, jos vain aloittaisivat.",
      ],
      pivot: "Leikkiessään he ovat täysin keskittyneitä.\nJos tehtävät vain tuntuisivat samalta…",
      idea_label: "Silloin sain idean.",
      idea: "Entä jos sekoittaisin hieman leikkiä tehtävälistalle,\njotta he aloittaisivat itse?",
    },
  },

  apps: [
    {
      id: "gacha",
      name: "TodoGatya",
      tag: "Yllätys",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "Gacha",
      formula_b: "Tehtävät",
      formula_c: "Liikkeelle yllätyksellä",
      concept: "Gacha × Tehtävät = Liikkeelle yllätyksellä",
      call: ["Mikä tulee tällä kertaa?", "Kenties palkintokapseli?"],
      trick: [
        "Voit hienovaraisesti ohjata, mikä tehtävä tulee.",
        "Aseta tärkeysjärjestys — illallinen ennen hampaiden pesua.",
        "Ripottele joukkoon \"palkintokapseleita\".",
      ],
    },
    {
      id: "bingo",
      name: "TodoBingo",
      tag: "Vapaa asettelu",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/bingo.jpeg",
      formula_a: "Bingo",
      formula_b: "Tehtävät",
      formula_c: "Heidän omassa järjestyksessään",
      concept: "Bingo × Tehtävät = Heidän omassa järjestyksessään",
      call: ["Tehdäänkö bingo!", "Bingo = palkinto."],
      trick: [
        "Aseta tehtävät mihin haluat laudalla.",
        "Valitse, montako bingoa antaa palkinnon.",
        "Pane epämieluisin keskelle — yksi napautus = neljä bingoa.",
        "Kytke toisiinsa liittyvät vaiheet yhdelle riville, jotta kaikki on tehtävä.",
        "Tuntuu heidän valinnaltaan — mutta järjestyksen päätät sinä.",
        "Kalenteribingo toimii hyvin lomilla tai koeviikolla.",
      ],
    },
    {
      id: "sugoroku",
      name: "TodoLautapeli",
      tag: "Pieniä askelia",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/sugoroku.jpeg",
      formula_a: "Lautapeli",
      formula_b: "Tehtävät",
      formula_c: "Askel kerrallaan",
      concept: "Lautapeli × Tehtävät = Askel kerrallaan",
      call: ["Pelataanko lautapeliä?", "Vuoren juurelle päästyä saat palkinnon."],
      trick: [
        "Järjestys on täysin lukittu.",
        "Istu → avaa kirja → ota kynä → yksi tehtävä → palkinto → seuraava sivu…",
        "Jos ensimmäinen askel on tarpeeksi pieni, loput tulee itsestään.",
        "Kullakin reitillä on oma ruutujen tiheytensä.",
        "Vuori (tiivis loppu) / Avaruus (tiivis alku) / Joen ranta (tasainen) — valitse fiiliksen mukaan.",
      ],
    },
    {
      id: "farm",
      name: "TodoPuutarha",
      tag: "Kasvu",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/farm.jpeg",
      formula_a: "Kasvu",
      formula_b: "Tehtävät",
      formula_c: "Liikkeelle edistymisestä",
      concept: "Kasvu × Tehtävät = Liikkeelle edistymisestä",
      call: ["Paljonko kastelet tänään?", "Kasvaakohan se?"],
      trick: [
        "Palkitaan vaivannäkö, ei vain tehty/ei tehty.",
        "Kasvit kasvavat 10 %:n askelin.",
        "Tavoitteena yksi kasvuvaihe per kastelu.",
        "Jos ylität tavoitteen, vesi vaihtaa väriä.",
      ],
    },
  ],
};
