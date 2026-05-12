/* ============================================================
 * content/fi/tool.js — Finnish: Tools category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["fi"] = window.__CONTENT__["fi"] || {};
window.__CONTENT__["fi"].categories = window.__CONTENT__["fi"].categories || {};

window.__CONTENT__["fi"].categories.tool = {
  id: "tool",
  name: "Timer-sarja",
  subtitle: "\"Myöhemmin\" muuttuu \"nyt\":ksi — ajastimia vitkuttelua vastaan.",
  lineup_title: "Tilanteeseen sopiva ajastin.",
  accent: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  eyebrow: "Vitkuttelun vastaan",
  formula: { a: "Työkalu", b: "Hetki", c: "Hoidettu" },

  story: {
    tagline: "\"Myöhemmin\" muuttuu \"nyt\":ksi.",
    intro: "Lapselle, joka sanoo aina \"viisi minuuttia lisää\".\nAika ja raja, jotka napsauttavat muutoksen päälle.",
    empathy: {
      label: "Onko hetki tuttu?",
      lines: [
        "Heti kun jotain tapahtuu, tartun puhelimeen.",
        "Etsin sovellusta, etsin asetusta, eksyn.",
        "Lopulta… \"antaa olla\".",
        "Hetkinen, mitä olinkaan tekemässä?",
        "Haluan vain avata oikean työkalun heti.",
      ],
      pivot: "Monitoimisovellukset näyttävät tehokkailta. Ei tässä hetkessä.\nNyt tarvitsen vain yhden asian.",
      idea_label: "Silloin sain idean.",
      idea: "Tehdä pieniä työkaluja yhtä hetkeä varten.\nAvaa, paina — valmis.",
    },
  },

  apps: [
    {
      id: "timer",
      name: "PlanetLoopTimer",
      tag: "Aika",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/timer.jpeg",
      formula_a: "Heitto",
      formula_b: "Myöhemmin",
      formula_c: "Liikkeelle uudella heitolla",
      concept: "Heitto × Myöhemmin = Liikkeelle uudella heitolla",
      call: ["Pieni tauko?", "Vielä yksi heitto?"],
      trick: [
        "Ei \"paina 5 min\" — heiton kulma ja voima luovat ajan. Loppukin tuntuu sopivalta.",
        "Jokaisella planeetalla on oma aikansa. Kauempana Auringosta: pidempi; aivan lähellä: imevä spiraali.",
        "Vain Pluto on ∞-haaste, jossa painovoima ei kasva ajan myötä. Ennätyksen rikkominen on palkinto.",
      ],
    },
  ],
};
