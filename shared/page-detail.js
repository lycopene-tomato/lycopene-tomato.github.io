(() => {
  window.AppDetailPage = function AppDetailPage({ appId, pathPrefix }) {
    const prefix = pathPrefix || "../";
    const lang = typeof window.useLang === "function" ? window.useLang() : window.getLang ? window.getLang() : "en";
    const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
    const found = window.findApp(lang, appId);
    React.useEffect(() => {
      if (!found) return void 0;
      const steps = found.app.setupSteps;
      if (!Array.isArray(steps) || steps.length === 0) return void 0;
      const labelSetup = t && t.detail && t.detail.label_setup_steps || "Getting started";
      const data = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `${found.app.name} \u2014 ${labelSetup}`,
        "inLanguage": lang,
        "step": steps.map((s, i) => ({
          "@type": "HowToStep",
          "position": i + 1,
          "name": s.title,
          "text": s.desc || s.title
        }))
      };
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.setAttribute("data-howto-for", appId);
      el.text = JSON.stringify(data);
      document.head.appendChild(el);
      return () => {
        el.remove();
      };
    }, [appId, lang, found]);
    if (!t || !found) {
      return /* @__PURE__ */ React.createElement("div", { style: { padding: 80, textAlign: "center" } }, /* @__PURE__ */ React.createElement("h1", null, "App not found: ", appId), /* @__PURE__ */ React.createElement("a", { href: `${prefix}index.html` }, "\u2190 Home"));
    }
    const { app, category, catIndex, appIndex } = found;
    const accent = category.accent;
    const allApps = category.apps;
    const prev = allApps[(appIndex - 1 + allApps.length) % allApps.length];
    const next = allApps[(appIndex + 1) % allApps.length];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(window.SiteHeader, { pathPrefix: prefix, currentCategoryId: category.id }), /* @__PURE__ */ React.createElement(
      "section",
      {
        className: "hero",
        "data-snap": true,
        "data-progress-color": accent.c,
        style: { position: "relative", background: accent.soft, padding: "32px 18px", textAlign: "center", color: accent.deep }
      },
      app.pricing && /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: 10,
        left: 10,
        padding: "2px 8px",
        background: "#fff",
        borderRadius: 999,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 1,
        color: accent.deep,
        opacity: 0.65
      } }, app.pricing),
      /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 28, fontWeight: 900, margin: "0 0 6px" } }, app.name),
      /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, padding: "16px 14px", background: "#fff", borderRadius: 14, color: "#333" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, letterSpacing: 2, fontWeight: 800, color: accent.deep, marginBottom: 6 } }, t.detail.label_concept), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 17, fontWeight: 800 } }, /* @__PURE__ */ React.createElement("span", { style: { color: accent.c } }, app.formula_a), /* @__PURE__ */ React.createElement("span", { style: { margin: "0 .35em", opacity: 0.5 } }, "\xD7"), /* @__PURE__ */ React.createElement("span", null, app.formula_b), /* @__PURE__ */ React.createElement("span", { style: { margin: "0 .35em", opacity: 0.5 } }, "="), /* @__PURE__ */ React.createElement("span", { style: { color: accent.c } }, app.formula_c))),
      app.hero_image && /* @__PURE__ */ React.createElement(
        "img",
        {
          src: window.resolveHeroImage(app, prefix),
          alt: app.name,
          style: { display: "block", maxWidth: 360, width: "100%", margin: "20px auto 0", borderRadius: 14 }
        }
      )
    ), app.call && app.call.length > 0 && /* @__PURE__ */ React.createElement(
      "section",
      {
        "data-snap": true,
        "data-progress-color": accent.c,
        style: { padding: "0 18px", maxWidth: 640, margin: "32px auto" }
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        position: "relative",
        border: `2px solid ${accent.c}`,
        borderRadius: 16,
        padding: "32px 24px 24px",
        background: "#fff"
      } }, /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: -11,
        left: 20,
        pointerEvents: "none"
      } }, /* @__PURE__ */ React.createElement("span", { style: {
        display: "inline-block",
        background: "#FBF6EE",
        padding: "2px 14px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: 3,
        color: accent.deep
      } }, category && category.label_call || t.detail.label_call)), /* @__PURE__ */ React.createElement("ul", { style: { paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 8, color: accent.deep, fontSize: 14, lineHeight: 1.6 } }, app.call.map((c, i) => /* @__PURE__ */ React.createElement("li", { key: i }, c))))
    ), app.trick && app.trick.length > 0 && /* @__PURE__ */ React.createElement(
      "section",
      {
        "data-snap": true,
        "data-progress-color": accent.c,
        style: { padding: "0 18px", maxWidth: 640, margin: "32px auto" }
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        position: "relative",
        border: `2px solid ${accent.c}`,
        borderRadius: 16,
        padding: "32px 24px 24px",
        background: "#fff"
      } }, /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: -11,
        left: 20,
        pointerEvents: "none"
      } }, /* @__PURE__ */ React.createElement("span", { style: {
        display: "inline-block",
        background: "#FBF6EE",
        padding: "2px 14px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: 3,
        color: accent.deep
      } }, t.detail.label_trick)), /* @__PURE__ */ React.createElement("ul", { style: { paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 8, color: accent.deep, fontSize: 14, lineHeight: 1.6 } }, app.trick.map((c, i) => /* @__PURE__ */ React.createElement("li", { key: i }, c))))
    ), Array.isArray(app.setupSteps) && app.setupSteps.length > 0 && /* @__PURE__ */ React.createElement(
      "section",
      {
        "data-snap": true,
        "data-progress-color": accent.c,
        style: { padding: "0 18px", maxWidth: 640, margin: "32px auto" }
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        position: "relative",
        border: `2px solid ${accent.c}`,
        borderRadius: 16,
        padding: "32px 24px 24px",
        background: "#fff"
      } }, /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: -11,
        left: 20,
        pointerEvents: "none"
      } }, /* @__PURE__ */ React.createElement("span", { style: {
        display: "inline-block",
        background: "#FBF6EE",
        padding: "2px 14px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: 3,
        color: accent.deep
      } }, t.detail.label_setup_steps)), /* @__PURE__ */ React.createElement("ol", { style: { paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 14, color: accent.deep, fontSize: 14, lineHeight: 1.6 } }, app.setupSteps.map((s, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800, marginBottom: 2 } }, s.title), s.desc && /* @__PURE__ */ React.createElement("div", { style: { opacity: 0.85 } }, s.desc)))))
    ), app.code_sample && /* @__PURE__ */ React.createElement(
      "section",
      {
        "data-snap": true,
        "data-progress-color": accent.c,
        style: { padding: "0 18px", maxWidth: 640, margin: "32px auto" }
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        position: "relative",
        border: `2px solid ${accent.c}`,
        borderRadius: 16,
        padding: "32px 20px 20px",
        background: "#1E1E1E"
      } }, /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: -11,
        left: 20,
        pointerEvents: "none"
      } }, /* @__PURE__ */ React.createElement("span", { style: {
        display: "inline-block",
        background: "#FBF6EE",
        padding: "2px 14px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: 3,
        color: accent.deep
      } }, "CODE")), /* @__PURE__ */ React.createElement("pre", { style: {
        margin: 0,
        fontFamily: 'Menlo, Consolas, "Courier New", monospace',
        fontSize: 12,
        lineHeight: 1.6,
        color: "#E0E0E0",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
        overflowX: "auto"
      } }, app.code_sample))
    ), /* @__PURE__ */ React.createElement(window.AppScreens, { lang, appId: app.id, appName: app.name, pathPrefix: prefix, accent, label: t.detail.label_screen }), /* @__PURE__ */ React.createElement(
      "section",
      {
        "data-snap": true,
        "data-progress-color": accent.c,
        style: { padding: "0 18px", maxWidth: 640, margin: "28px auto 8px", textAlign: "center" }
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        display: "flex",
        gap: 12,
        justifyContent: "center",
        flexWrap: "wrap"
      } }, /* @__PURE__ */ React.createElement(window.StoreButton, { platform: "apple", href: app.appstore_url }), /* @__PURE__ */ React.createElement(window.StoreButton, { platform: "google", comingSoon: true }))
    ), /* @__PURE__ */ React.createElement("section", { style: { padding: "32px 18px 16px", maxWidth: 720, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, letterSpacing: 3, fontWeight: 800, color: accent.deep, marginBottom: 12, textAlign: "center" } }, t.detail.label_same_category), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, /* @__PURE__ */ React.createElement("a", { href: `${prefix}apps/${prev.id}.html`, style: {
      textDecoration: "none",
      color: "inherit",
      padding: "12px 14px",
      background: "#fff",
      minWidth: 0,
      borderLeft: `4px solid ${accent.c}`,
      borderRadius: 10,
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: accent.deep, opacity: 0.7, marginBottom: 4 } }, "\u2190 ", t.detail.prev), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, prev.name)), /* @__PURE__ */ React.createElement("a", { href: `${prefix}apps/${next.id}.html`, style: {
      textAlign: "right",
      textDecoration: "none",
      color: "inherit",
      padding: "12px 14px",
      background: "#fff",
      minWidth: 0,
      borderRight: `4px solid ${accent.c}`,
      borderRadius: 10,
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: accent.deep, opacity: 0.7, marginBottom: 4 } }, t.detail.next, " \u2192"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, next.name)))), window.CatNavPatternE && /* @__PURE__ */ React.createElement(window.CatNavPatternE, { t, currentId: category.id, prefix, accent }), /* @__PURE__ */ React.createElement(window.SiteFooter, { pathPrefix: prefix }));
  };
  window.AppScreens = function AppScreens({ lang, appId, appName, pathPrefix, accent, label }) {
    const [imgs, setImgs] = React.useState([]);
    React.useEffect(() => {
      let alive = true;
      (async () => {
        const base = `${pathPrefix}../`;
        const candidates = [];
        for (let i = 1; i <= 6; i++) {
          candidates.push([
            `${base}images/screenshots/${lang}/${appId}-${i}.jpeg`,
            `${base}images/screenshots/${lang}/${appId}-${i}.png`,
            `${base}images/screenshots/${appId}-${i}.jpeg`,
            `${base}images/screenshots/${appId}-${i}.png`
          ]);
        }
        const found = [];
        for (const list of candidates) {
          const ok = await new Promise((res) => {
            let i = 0;
            const tryNext = () => {
              if (i >= list.length) return res(null);
              const url = list[i++];
              const img = new Image();
              img.onload = () => res({ url, landscape: img.naturalWidth > img.naturalHeight });
              img.onerror = tryNext;
              img.src = url;
            };
            tryNext();
          });
          if (ok) found.push(ok);
        }
        if (alive) setImgs(found);
      })();
      return () => {
        alive = false;
      };
    }, [lang, appId, pathPrefix]);
    if (imgs.length === 0) return null;
    const isLandscape = imgs.every((im) => im.landscape);
    return /* @__PURE__ */ React.createElement("section", { style: { padding: "0 18px", maxWidth: 640, margin: "32px auto" } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "relative",
      border: `2px solid ${accent.c}`,
      borderRadius: 16,
      padding: "32px 24px 24px",
      background: "#fff"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: -11,
      left: 20,
      pointerEvents: "none"
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-block",
      background: "#FBF6EE",
      padding: "2px 14px",
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: 3,
      color: accent.deep
    } }, label)), /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: isLandscape ? "1fr" : "repeat(3, 1fr)",
      gap: 12,
      maxWidth: 420,
      margin: "0 auto"
    } }, imgs.map((im, i) => /* @__PURE__ */ React.createElement("img", { key: i, src: im.url, alt: `${appName || appId} screenshot ${i + 1}`, style: { width: "100%", borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,.08)" } })))));
  };
})();
