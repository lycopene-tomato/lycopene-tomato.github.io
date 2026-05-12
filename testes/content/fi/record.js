/* ============================================================
 * content/fi/record.js — Finnish: Log category
 * ============================================================ */
window.__CONTENT__ = window.__CONTENT__ || {};
window.__CONTENT__["fi"] = window.__CONTENT__["fi"] || {};
window.__CONTENT__["fi"].categories = window.__CONTENT__["fi"].categories || {};

window.__CONTENT__["fi"].categories.record = {
  id: "record",
  name: "Log-sarja",
  subtitle: "Tallenna pienet tapahtumat, näe kuvio, ehkäise seuraava kerta.",
  lineup_title: "Sovelluksia, jotka järjestävät sisällön mukaan.",
  label_call: "Huoli",
  accent: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  eyebrow: "Ennaltaehkäisy",
  formula: { a: "Muistiinpanot", b: "Faktat", c: "Ehkäise ensi kerralla" },

  story: {
    tagline: "Muuta \"taas\" muotoon \"tällä kertaa olen valmis\".",
    intro: "Ei tunteita — muistiinpanoja. Kun kuvio nousee esiin, niin myös vastaus.",
    empathy: {
      label: "Tänään taas…",
      badge: "Stressi",
      lines: [
        "Koulu soittaa. Taas.",
        "Sydän puristuu.",
        "Mutta onko tämä todella \"taas\"?",
        "Sama kuin viime kerralla? Vai eri?",
        "Pelkkä muisti ei riitä——.",
      ],
      tried_label: "Olinhan tehnyt muistiinpanoja.",
      tried: [
        "Paperilla — myöhemmin en löydä.",
        "Puhelimen muistiinpanot: vaikea järjestää.",
        "\"Eikö tämä jo tapahtunut?\" — eikä tapaa tarkistaa.",
      ],
      pivot: "Muisti kasaantuu, kunnes räjähtää.\nMuistiinpano näyttää kokonaiskuvan yhdellä silmäyksellä.",
      idea_label: "Silloin sain idean.",
      idea: "Napata hetki nopeasti,\nja käyttää kuviota seuraavan kerran ehkäisyyn.",
    },
  },

  apps: [
    {
      id: "trouble",
      name: "TroubleNote",
      tag: "Kouluelämä",
      appstore_url: "https://apps.apple.com/app/id000000000",
      hero_image: "images/apps/trouble.jpeg",
      formula_a: "Muistiinpanot",
      formula_b: "Faktat",
      formula_c: "Rauhallinen reagointi",
      concept: "Muistiinpanot × Faktat = Rauhallinen reagointi",
      call: ["Kuka ○○ olikaan?", "Sama lapsi kuin edellisessä riidassa?"],
      trick: [
        "Kirjaa päivä, paikka, osalliset ja mitä tapahtui.",
        "Suunniteltu täytettäväksi myöhemmin, kylmin päin.",
        "Päivän mukaan järjestäen toistuvat kuviot tulevat esiin itsestään.",
        "Opettajatapaamiseen — poimi vain olennaisin.",
        "Liitä kuvia tai ääniviestejä (kaikki säilyy laitteella).",
        "Vie PDF- tai tekstimuotoon.",
      ],
    },
  ],
};
