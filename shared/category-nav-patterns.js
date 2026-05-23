(() => {
  window.CatNavLabel = function CatNavLabel({ letter, name, desc }) {
    return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 720, margin: "32px auto 8px", padding: "0 16px", display: "flex", alignItems: "baseline", gap: 12 } }, /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 28,
      height: 28,
      background: "#3D2E1F",
      color: "#fff",
      fontSize: 13,
      fontWeight: 900,
      fontFamily: "ui-monospace, monospace"
    } }, letter), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 15, fontWeight: 800, color: "#3D2E1F" } }, name), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "#8B7355" } }, desc));
  };
  window.CatNavPatternA = function CatNavPatternA({ t, currentId, prefix, accent }) {
    const cn = t.catNav || {};
    return /* @__PURE__ */ React.createElement("section", { style: { background: accent.soft, padding: "32px 16px 48px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 720, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, letterSpacing: 3, fontWeight: 800, color: "#8B7355", marginBottom: 6 } }, "\u2014 INDEX \u2014"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "#5C4936", fontWeight: 600 } }, cn.total_prefix || "", t.categories.length, cn.total_suffix || "")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, t.categories.map((cat, idx) => {
      const isCurrent = cat.id === currentId;
      const href = isCurrent ? null : `${prefix}index.html?cat=${cat.id}`;
      const Tag = isCurrent ? "div" : "a";
      return /* @__PURE__ */ React.createElement(Tag, { key: cat.id, ...href ? { href } : {}, style: {
        display: "flex",
        flexDirection: "column",
        minHeight: 160,
        textDecoration: "none",
        background: isCurrent ? cat.accent.soft : "#fff",
        color: "#3D2E1F",
        border: `1.5px solid ${isCurrent ? cat.accent.c : "#3D2E1F"}`,
        cursor: isCurrent ? "default" : "pointer",
        boxShadow: isCurrent ? "none" : "3px 3px 0 #3D2E1F",
        transform: isCurrent ? "translate(3px, 3px)" : "none"
      } }, /* @__PURE__ */ React.createElement("div", { style: { height: isCurrent ? 14 : 8, background: cat.accent.c } }), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 14px 14px", flex: 1, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontFamily: "ui-monospace, monospace", color: "#8B7355" } }, "0", idx + 1, " / 0", t.categories.length), isCurrent && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontWeight: 800, color: cat.accent.c } }, "\u25CF ", cn.showing || "")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 17, fontWeight: 900, marginBottom: 6 } }, cat.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, lineHeight: 1.55, color: "#5C4936", flex: 1 } }, cat.subtitle || ""), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, display: "flex", justifyContent: "space-between", fontSize: 11, color: "#8B7355", fontWeight: 600 } }, /* @__PURE__ */ React.createElement("span", null, cat.apps.length, t.lineup && t.lineup.app_unit || ""), !isCurrent && /* @__PURE__ */ React.createElement("span", { style: { color: cat.accent.c, fontWeight: 800 } }, cn.view || "", " \u2192"))));
    }))));
  };
  window.CatNavPatternB = function CatNavPatternB({ t, currentId, prefix, accent }) {
    const cn = t.catNav || {};
    return /* @__PURE__ */ React.createElement("section", { style: { background: accent.soft, padding: "40px 16px 56px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 720, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "#FBF6EE",
      border: "2px dashed #D8C5A8",
      borderRadius: 16,
      padding: "32px 20px 24px",
      position: "relative"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: -14,
      left: 24,
      background: "#FFD27A",
      padding: "5px 14px",
      fontSize: 11,
      fontWeight: 700,
      transform: "rotate(-2deg)",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    } }, cn.index_label || ""), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, t.categories.map((cat, idx) => {
      const isCurrent = cat.id === currentId;
      const href = isCurrent ? null : `${prefix}index.html?cat=${cat.id}`;
      const Tag = isCurrent ? "div" : "a";
      return /* @__PURE__ */ React.createElement(Tag, { key: cat.id, ...href ? { href } : {}, style: {
        display: "flex",
        flexDirection: "column",
        minHeight: 130,
        padding: "12px 14px",
        background: "#fff",
        color: "#3D2E1F",
        textDecoration: "none",
        border: `1.5px solid ${isCurrent ? cat.accent.c : "#D8C5A8"}`,
        borderRadius: 8,
        cursor: isCurrent ? "default" : "pointer",
        position: "relative",
        overflow: "hidden"
      } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 10, height: 10, borderRadius: "50%", background: cat.accent.c } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontFamily: "ui-monospace, monospace", color: "#8B7355" } }, "0", idx + 1), isCurrent && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: cat.accent.c, fontWeight: 800, marginLeft: "auto" } }, "\u25CF ", cn.showing || "")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 900, marginBottom: 4 } }, cat.name), /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: 11,
        lineHeight: 1.55,
        color: "#5C4936",
        flex: 1,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      } }, cat.subtitle || ""), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, fontSize: 11, color: "#8B7355", fontWeight: 600, display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", null, cat.apps.length, t.lineup && t.lineup.app_unit || ""), !isCurrent && /* @__PURE__ */ React.createElement("span", { style: { color: cat.accent.c, fontWeight: 800 } }, "\u2192")));
    })))));
  };
  window.CatNavPatternC = function CatNavPatternC({ t, currentId, prefix, accent }) {
    const cn = t.catNav || {};
    return /* @__PURE__ */ React.createElement("section", { style: { background: accent.soft, padding: "40px 16px 56px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 720, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, letterSpacing: 4, fontWeight: 800, color: "#8B7355", marginBottom: 4 } }, "CONTENTS"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "#5C4936" } }, cn.find_by_category || "")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } }, t.categories.map((cat, idx) => {
      const isCurrent = cat.id === currentId;
      const href = isCurrent ? null : `${prefix}index.html?cat=${cat.id}`;
      const Tag = isCurrent ? "div" : "a";
      return /* @__PURE__ */ React.createElement(Tag, { key: cat.id, ...href ? { href } : {}, style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: 12,
        alignItems: "center",
        padding: "16px 16px",
        textDecoration: "none",
        color: "#3D2E1F",
        background: isCurrent ? cat.accent.soft : "transparent",
        borderTop: "1.5px solid #3D2E1F",
        borderBottom: "1.5px solid #3D2E1F",
        cursor: isCurrent ? "default" : "pointer",
        minHeight: 110
      } }, /* @__PURE__ */ React.createElement("span", { style: {
        fontSize: 52,
        fontWeight: 900,
        lineHeight: 1,
        color: cat.accent.c,
        fontFamily: "ui-serif, Georgia, serif"
      } }, "0", idx + 1), /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 17, fontWeight: 900, marginBottom: 4, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" } }, cat.name, isCurrent && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, padding: "2px 6px", background: cat.accent.c, color: "#fff", fontWeight: 800 } }, cn.here_now || "")), /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: 11,
        color: "#5C4936",
        lineHeight: 1.5,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      } }, cat.subtitle || ""), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6, fontSize: 10, color: "#8B7355" } }, cat.apps.length, t.lineup && t.lineup.app_unit || "", !isCurrent && /* @__PURE__ */ React.createElement("span", { style: { color: cat.accent.c, fontWeight: 800, marginLeft: 8 } }, "\u2192"))));
    }))));
  };
  window.CatNavPatternE = function CatNavPatternE({ t, currentId, prefix, accent }) {
    const cn = t.catNav || {};
    const current = t.categories.find((c) => c.id === currentId);
    return /* @__PURE__ */ React.createElement("section", { className: "reveal", "data-snap": true, "data-progress-color": accent.c, style: { background: "#FBF6EE", padding: "48px 16px 56px", borderTop: `2px solid ${accent.c}`, borderBottom: "1px solid rgba(0,0,0,0.06)" } }, /* @__PURE__ */ React.createElement("div", { className: "cat-nav-section" }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, letterSpacing: 3, fontWeight: 800, color: "#8B7355", marginTop: 4, marginBottom: 4 } }, "\u2014 ", cn.other_categories || "", " \u2014")), /* @__PURE__ */ React.createElement("div", { className: "cat-nav-grid" }, t.categories.map((cat, idx) => {
      const isCurrent = cat.id === currentId;
      const href = isCurrent ? null : `${prefix}index.html?cat=${cat.id}`;
      const Tag = isCurrent ? "div" : "a";
      const f = cat.formula || {};
      return /* @__PURE__ */ React.createElement(Tag, { key: cat.id, className: "cat-square", ...href ? { href } : {}, style: {
        background: isCurrent ? cat.accent.c : cat.accent.soft,
        color: isCurrent ? "#fff" : "inherit",
        border: `2px solid ${cat.accent.c}`,
        padding: "clamp(16px, 2.5vw, 24px)",
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        cursor: isCurrent ? "default" : "pointer"
      } }, /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: -10,
        right: -8,
        fontSize: "clamp(70px, 12vw, 120px)",
        fontWeight: 900,
        color: isCurrent ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.06)",
        lineHeight: 1,
        letterSpacing: -4,
        pointerEvents: "none"
      } }, String(idx + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 3,
        color: isCurrent ? "rgba(255,255,255,0.85)" : cat.accent.deep,
        marginBottom: 6
      } }, (cat.eyebrow || "").toUpperCase()), /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: "clamp(17px, 2.6vw, 22px)",
        fontWeight: 900,
        lineHeight: 1.15,
        color: isCurrent ? "#fff" : "#3D2E1F"
      } }, cat.name)), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: "clamp(10px, 1.5vw, 12px)",
        color: isCurrent ? "rgba(255,255,255,0.92)" : "#5C4936",
        lineHeight: 1.6,
        marginBottom: 10
      } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 700 } }, f.a), /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.6, margin: "0 4px" } }, "\xD7"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 700 } }, f.b), /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.6, margin: "0 4px" } }, "="), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 700 } }, f.c)), /* @__PURE__ */ React.createElement("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 8,
        borderTop: `1px solid ${isCurrent ? "rgba(255,255,255,0.4)" : cat.accent.c}`,
        fontSize: 11,
        color: isCurrent ? "#fff" : cat.accent.deep,
        fontWeight: 700
      } }, /* @__PURE__ */ React.createElement("span", null, cat.apps.length, t.lineup && t.lineup.app_unit || ""), /* @__PURE__ */ React.createElement("span", null, isCurrent ? `\u25CF ${cn.showing || ""}` : "\u2192"))));
    }))));
  };
  window.CatNavPatternD = function CatNavPatternD({ t, currentId, prefix, accent }) {
    const cn = t.catNav || {};
    return /* @__PURE__ */ React.createElement("section", { style: { background: accent.soft, padding: "40px 16px 56px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 720, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, letterSpacing: 3, fontWeight: 800, color: "#8B7355", marginBottom: 6 } }, "\u2014 ", cn.choose_by_category || "", " \u2014")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "2px solid #3D2E1F" } }, t.categories.map((cat, idx) => {
      const isCurrent = cat.id === currentId;
      const href = isCurrent ? null : `${prefix}index.html?cat=${cat.id}`;
      const Tag = isCurrent ? "div" : "a";
      return /* @__PURE__ */ React.createElement(Tag, { key: cat.id, ...href ? { href } : {}, style: {
        position: "relative",
        aspectRatio: "1.4 / 1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px 18px",
        textDecoration: "none",
        background: cat.accent.c,
        color: "#fff",
        outline: "1px solid #3D2E1F",
        cursor: isCurrent ? "default" : "pointer"
      } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: {
        fontSize: 11,
        fontFamily: "ui-monospace, monospace",
        fontWeight: 700,
        padding: "2px 8px",
        border: "1.5px solid #fff",
        letterSpacing: 1
      } }, "0", idx + 1), isCurrent && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontWeight: 800, padding: "3px 8px", background: "#fff", color: cat.accent.deep } }, cn.showing || "")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 900, marginBottom: 4, lineHeight: 1.1 } }, cat.name), /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: 11,
        opacity: 0.9,
        lineHeight: 1.5,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      } }, cat.subtitle || ""), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 600 } }, /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.85 } }, cat.apps.length, t.lineup && t.lineup.app_unit || ""), !isCurrent && /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 800 } }, cn.view || "", " \u2192"))));
    }))));
  };
})();
