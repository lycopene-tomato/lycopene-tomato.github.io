(() => {
  const __jaWrapCache = {};
  function jaWrap(text) {
    if (!text || typeof Intl === "undefined" || !Intl.Segmenter) return text;
    if (__jaWrapCache[text] !== void 0) return __jaWrapCache[text];
    let segs;
    try {
      segs = Array.from(new Intl.Segmenter("ja", { granularity: "word" }).segment(text), (x) => x.segment);
    } catch (e) {
      return text;
    }
    const chunks = [];
    let pend = "";
    for (const s of segs) {
      if (/^[「『（]+$/.test(s)) {
        pend += s;
        continue;
      }
      const startsNew = pend !== "";
      const t = pend + s;
      pend = "";
      const prev = chunks.length ? chunks[chunks.length - 1] : "";
      const attach = /^[、。」』）！？!?…ー〜]+$/.test(s) || /^\s+$/.test(s) || /^[0-9０-９]+$/.test(s) || /[0-9０-９]$/.test(prev) || /^[ぁ-ん]+$/.test(s) && s.length <= 3;
      if (chunks.length && attach && !startsNew) chunks[chunks.length - 1] += t;
      else chunks.push(t);
    }
    if (pend) chunks.push(pend);
    return __jaWrapCache[text] = chunks.join("\u200B");
  }
  window.CategoryPage = function CategoryPage({ categoryId, pathPrefix }) {
    const prefix = pathPrefix || "";
    const lang = typeof window.useLang === "function" ? window.useLang() : window.getLang ? window.getLang() : "en";
    const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
    if (!t || !t.categories) {
      return /* @__PURE__ */ React.createElement("div", { style: { padding: 80, textAlign: "center" } }, "Loading\u2026");
    }
    const category = t.categories.find((c) => c.id === categoryId);
    if (!category) {
      return /* @__PURE__ */ React.createElement("div", { style: { padding: 80, textAlign: "center" } }, /* @__PURE__ */ React.createElement("h1", null, "Category not found: ", categoryId), /* @__PURE__ */ React.createElement("a", { href: `${prefix}index.html` }, "\u2190 Home"));
    }
    React.useEffect(() => {
      const fit = () => {
        document.querySelectorAll(".hero-formula__line").forEach((el) => {
          const parent = el.parentElement;
          if (!parent) return;
          const maxW = parent.clientWidth;
          if (!maxW || maxW < 50) return;
          let lo = 16, hi = 96;
          for (let i = 0; i < 10; i++) {
            const mid = (lo + hi) / 2;
            el.style.fontSize = mid + "px";
            if (el.scrollWidth <= maxW - 1) lo = mid;
            else hi = mid;
          }
          el.style.fontSize = Math.floor(lo) + "px";
        });
      };
      fit();
      const timers = [50, 200, 500, 1e3].map((ms) => setTimeout(fit, ms));
      window.addEventListener("resize", fit);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
      return () => {
        timers.forEach(clearTimeout);
        window.removeEventListener("resize", fit);
      };
    }, [categoryId, lang]);
    const jw = lang === "ja" ? jaWrap : (s) => s;
    const accent = category.accent || { c: "#888", soft: "#eee", deep: "#444" };
    const formula = category.formula || {};
    const story = category.story || {};
    const empathy = story.empathy || {};
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(window.SiteHeader, { pathPrefix: prefix, currentCategoryId: categoryId }), /* @__PURE__ */ React.createElement("div", { style: { background: accent.soft, minHeight: "100vh" } }, /* @__PURE__ */ React.createElement("style", null, `
        .emp-lines p, .lineup-title { text-wrap: balance; }
        :lang(ja) .emp-lines p, :lang(ja) .emp-tried span, :lang(ja) .emp-pivot, :lang(ja) .emp-idea-box, :lang(ja) .lineup-title,
        :lang(ko) .emp-lines p, :lang(ko) .emp-tried span, :lang(ko) .emp-pivot, :lang(ko) .emp-idea-box, :lang(ko) .lineup-title {
          word-break: keep-all;
        }
        @media (max-width: 480px) {
          #empathy { padding-top: 48px !important; padding-bottom: 48px !important; }
          .emp-box { padding: 24px 20px !important; }
          .emp-lines p { line-height: 2 !important; }
          .emp-tried { margin-top: 32px !important; }
          .emp-pivot, .emp-idea-box { white-space: normal !important; text-wrap: balance; }
          .emp-pivot { margin-top: 30px !important; line-height: 1.95 !important; }
          .emp-idea { margin-top: 28px !important; }
          .emp-idea-box { padding: 20px 16px !important; line-height: 1.9 !important; }
        }
      `), (() => {
      const nextBg = empathy.lines ? "#fff" : accent.soft;
      return /* @__PURE__ */ React.createElement(
        "section",
        {
          className: "hero reveal",
          "data-snap": true,
          "data-progress-color": accent.c,
          style: {
            background: `radial-gradient(560px 280px at 12% -10%, ${accent.c}2E, transparent 70%),
                       radial-gradient(480px 260px at 92% 110%, ${accent.c}24, transparent 70%),
                       ${accent.soft}`,
            padding: "40px 16px 88px",
            textAlign: "center",
            color: accent.deep,
            position: "relative",
            overflow: "hidden"
          }
        },
        /* @__PURE__ */ React.createElement("div", { className: "hero-deco hero-deco--1", style: { background: accent.c } }),
        /* @__PURE__ */ React.createElement("div", { className: "hero-deco hero-deco--2", style: { background: accent.c } }),
        /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { className: "hero-formula", style: { display: "flex", flexDirection: "column", gap: 4, alignItems: "center", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { className: "hero-formula__line", style: { whiteSpace: "nowrap", fontWeight: 700, lineHeight: 1.1, fontFamily: "var(--font-display, inherit)", letterSpacing: "0.02em" } }, /* @__PURE__ */ React.createElement("span", { style: { color: accent.deep } }, formula.a), /* @__PURE__ */ React.createElement("span", { style: { margin: "0 .15em", opacity: 0.55 } }, "\xD7"), /* @__PURE__ */ React.createElement("span", null, formula.b)), /* @__PURE__ */ React.createElement("div", { className: "hero-formula__line", style: { whiteSpace: "nowrap", fontWeight: 700, lineHeight: 1.1, fontFamily: "var(--font-display, inherit)", letterSpacing: "0.02em" } }, /* @__PURE__ */ React.createElement("span", { style: { margin: "0 .15em", opacity: 0.55 } }, "="), /* @__PURE__ */ React.createElement("span", { style: { color: accent.deep } }, formula.c))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 700, marginBottom: 8, fontFamily: "var(--font-display, inherit)" } }, story.tagline), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, opacity: 0.85, whiteSpace: "pre-line" } }, story.intro)),
        /* @__PURE__ */ React.createElement(window.WaveStack, { accentC: accent.c, topColor: nextBg, height: 64 })
      );
    })(), empathy.lines && /* @__PURE__ */ React.createElement("section", { id: "empathy", className: "reveal", "data-snap": true, "data-progress-color": accent.c, style: { padding: "clamp(60px, 8vw, 80px) 24px", background: "#fff", scrollMarginTop: 80 } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 720, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#8B7355", letterSpacing: 3, textAlign: "center", marginBottom: 12 } }, "\u2014 ", empathy.label, " \u2014"), /* @__PURE__ */ React.createElement("div", { className: "emp-box emp-lines", style: {
      background: "#FBF6EE",
      border: "2px dashed #D8C5A8",
      borderRadius: 16,
      padding: "clamp(28px, 5vw, 40px) clamp(24px, 5vw, 48px)",
      position: "relative"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: -16,
      right: 32,
      background: "#FFD27A",
      padding: "6px 16px",
      fontSize: 12,
      transform: "rotate(3deg)",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    } }, empathy.badge || t.empathy && t.empathy.badge || ""), empathy.lines.map((line, i) => /* @__PURE__ */ React.createElement("p", { key: i, style: { fontSize: "clamp(15px, 2.4vw, 17px)", lineHeight: 2.2, margin: 0, color: "#3D2E1F" } }, jw(line)))), empathy.tried && empathy.tried.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "emp-tried", style: { marginTop: 48 } }, empathy.tried_label && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "#8B7355", marginBottom: 12 } }, "\u270F\uFE0F ", empathy.tried_label), empathy.tried.map((line, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "flex-start", gap: 12, fontSize: "clamp(14px, 2.2vw, 16px)", lineHeight: 1.8, marginBottom: 8, color: "#5C4936" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#D26B8A", fontWeight: 700 } }, "\u2192"), /* @__PURE__ */ React.createElement("span", { style: { textDecoration: "line-through", textDecorationColor: "#D26B8A", textDecorationThickness: 2 } }, jw(line))))), empathy.pivot && /* @__PURE__ */ React.createElement("div", { className: "emp-pivot", style: { marginTop: 44, textAlign: "center", fontSize: "clamp(15px, 2.4vw, 17px)", lineHeight: 2.1, color: "#3D2E1F", whiteSpace: "pre-line", fontFamily: "var(--font-display, inherit)", fontWeight: 600 } }, jw(empathy.pivot)), empathy.idea && /* @__PURE__ */ React.createElement("div", { className: "m-rise emp-idea", style: { marginTop: 40 } }, empathy.idea_label && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "#8B7355", marginBottom: 12, textAlign: "center" } }, "\u{1F4A1} ", empathy.idea_label), /* @__PURE__ */ React.createElement("div", { className: "emp-idea-box", style: {
      background: accent.soft,
      border: `2px solid ${accent.c}`,
      borderRadius: 16,
      padding: "clamp(24px, 4vw, 36px) clamp(20px, 4vw, 44px)",
      textAlign: "center",
      fontSize: "clamp(15px, 2.5vw, 18px)",
      lineHeight: 2,
      color: accent.deep,
      fontWeight: 700,
      whiteSpace: "pre-line",
      fontFamily: "var(--font-display, inherit)"
    } }, jw(empathy.idea))))), /* @__PURE__ */ React.createElement("section", { className: "reveal", "data-snap": true, "data-progress-color": accent.c, style: { padding: "32px 16px 40px", maxWidth: 720, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, letterSpacing: 3, fontWeight: 800, color: accent.deep, marginBottom: 4 } }, t.lineup && t.lineup.label || "LINEUP"), /* @__PURE__ */ React.createElement("h2", { className: "lineup-title", style: { fontSize: 22, fontWeight: 700, margin: "0 0 16px", fontFamily: "var(--font-display, inherit)", letterSpacing: "0.01em" } }, jw(category && category.lineup_title || t.lineup && t.lineup.title || "")), /* @__PURE__ */ React.createElement("div", { className: "lineup-grid", style: { display: "grid", gap: 16 } }, category.apps.map((app, i) => /* @__PURE__ */ React.createElement(window.AppCard, { key: app.id, app, idx: i, category, pathPrefix: prefix })))), t.categories && t.categories.length > 1 && /* @__PURE__ */ React.createElement(window.CatNavPatternE, { t, currentId: categoryId, prefix, accent }), /* @__PURE__ */ React.createElement(window.AllAppsList, { pathPrefix: prefix, currentCategoryId: categoryId })), /* @__PURE__ */ React.createElement(window.SiteFooter, { pathPrefix: prefix, currentCategoryId: categoryId }));
  };
})();
