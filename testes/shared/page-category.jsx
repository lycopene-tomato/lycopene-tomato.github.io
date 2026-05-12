/* ============================================================
 * shared/page-category.jsx — カテゴリLP（汎用・44言語対応）
 * ============================================================
 * 使い方（HTMLから）:
 *   <div id="root"></div>
 *   <script type="text/babel">
 *     ReactDOM.createRoot(document.getElementById("root")).render(
 *       <window.CategoryPage categoryId="todo" pathPrefix="" />
 *     );
 *   </script>
 *
 * pathPrefix:
 *   - /<lang>/index.html      なら ""
 *   - /<lang>/apps/xxx.html   なら "../"
 * ============================================================ */

window.CategoryPage = function CategoryPage({ categoryId, pathPrefix }) {
  const prefix = pathPrefix || "";
  const lang = (typeof window.useLang === "function") ? window.useLang() : (window.getLang ? window.getLang() : "en");
  const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
  if (!t || !t.categories) {
    return <div style={{ padding: 80, textAlign: "center" }}>Loading…</div>;
  }
  const category = t.categories.find((c) => c.id === categoryId);
  if (!category) {
    return (
      <div style={{ padding: 80, textAlign: "center" }}>
        <h1>Category not found: {categoryId}</h1>
        <a href={`${prefix}index.html`}>← Home</a>
      </div>
    );
  }

  // hero formula auto-fit
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
          if (el.scrollWidth <= maxW - 1) lo = mid; else hi = mid;
        }
        el.style.fontSize = Math.floor(lo) + "px";
      });
    };
    fit();
    const timers = [50, 200, 500, 1000].map((ms) => setTimeout(fit, ms));
    window.addEventListener("resize", fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", fit);
    };
  }, [categoryId, lang]);

  const accent = category.accent || { c: "#888", soft: "#eee", deep: "#444" };
  const formula = category.formula || {};
  const story = category.story || {};
  const empathy = story.empathy || {};

  return (
    <>
      <window.SiteHeader pathPrefix={prefix} currentCategoryId={categoryId} />

      {/* ページ全体を accent.soft で着色（カテゴリ毎に背景色が異なる） */}
      <div style={{ background: accent.soft, minHeight: "100vh" }}>

      {/* ==================== HERO ==================== */}
      <section
        className="hero reveal"
        data-snap
        data-progress-color={accent.c}
        style={{
          background: accent.soft,
          padding: "32px 16px 28px",
          textAlign: "center",
          color: accent.deep,
        }}
      >
        <div className="hero-formula" style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center", marginBottom: 16 }}>
          <div className="hero-formula__line" style={{ whiteSpace: "nowrap", fontWeight: 900, lineHeight: 1.1 }}>
            <span style={{ color: accent.c }}>{formula.a}</span>
            <span style={{ margin: "0 .15em", opacity: 0.55 }}>×</span>
            <span>{formula.b}</span>
          </div>
          <div className="hero-formula__line" style={{ whiteSpace: "nowrap", fontWeight: 900, lineHeight: 1.1 }}>
            <span style={{ margin: "0 .15em", opacity: 0.55 }}>=</span>
            <span style={{ color: accent.c }}>{formula.c}</span>
          </div>
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{story.tagline}</div>
        <div style={{ fontSize: 13, opacity: 0.85, whiteSpace: "pre-line" }}>{story.intro}</div>
      </section>

      {/* ==================== EMPATHY ==================== */}
      {empathy.lines && (
        <section id="empathy" className="reveal" data-snap data-progress-color={accent.c} style={{ padding: "clamp(60px, 8vw, 80px) 24px", background: "#fff", scrollMarginTop: 80 }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ fontSize: 13, color: "#8B7355", letterSpacing: 3, textAlign: "center", marginBottom: 12 }}>— {empathy.label} —</div>

            <div style={{
              background: "#FBF6EE", border: "2px dashed #D8C5A8", borderRadius: 16,
              padding: "clamp(28px, 5vw, 40px) clamp(24px, 5vw, 48px)", position: "relative",
            }}>
              <div style={{
                position: "absolute", top: -16, right: 32,
                background: "#FFD27A", padding: "6px 16px", fontSize: 12,
                transform: "rotate(3deg)", boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}>{empathy.badge || (t.empathy && t.empathy.badge) || ""}</div>
              {empathy.lines.map((line, i) => (
                <p key={i} style={{ fontSize: "clamp(15px, 2.4vw, 17px)", lineHeight: 2.2, margin: 0, color: "#3D2E1F" }}>{line}</p>
              ))}
            </div>

            {empathy.tried && empathy.tried.length > 0 && (
              <div style={{ marginTop: 48 }}>
                {empathy.tried_label && (
                  <div style={{ fontSize: 14, color: "#8B7355", marginBottom: 12 }}>✏️ {empathy.tried_label}</div>
                )}
                {empathy.tried.map((line, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "clamp(14px, 2.2vw, 16px)", lineHeight: 1.8, marginBottom: 8, color: "#5C4936" }}>
                    <span style={{ color: "#D26B8A", fontWeight: 700 }}>→</span>
                    <span style={{ textDecoration: "line-through", textDecorationColor: "#D26B8A", textDecorationThickness: 2 }}>{line}</span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>
      )}

      {/* ==================== LINEUP ==================== */}
      <section className="reveal" data-snap data-progress-color={accent.c} style={{ padding: "32px 16px 40px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ fontSize: 12, letterSpacing: 3, fontWeight: 800, color: accent.deep, marginBottom: 4 }}>
          {(t.lineup && t.lineup.label) || "LINEUP"}
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 900, margin: "0 0 16px" }}>{(category && category.lineup_title) || (t.lineup && t.lineup.title) || ""}</h2>

        <div className="lineup-grid" style={{ display: "grid", gap: 16 }}>
          {category.apps.map((app, i) => (
            <window.AppCard key={app.id} app={app} idx={i} category={category} pathPrefix={prefix} />
          ))}
        </div>
      </section>

      {/* ==================== CATEGORY NAV — Pattern E ==================== */}
      {t.categories && t.categories.length > 1 && (
        <window.CatNavPatternE t={t} currentId={categoryId} prefix={prefix} accent={accent} />
      )}

      <window.AllAppsList pathPrefix={prefix} currentCategoryId={categoryId} />
      </div>
      <window.SiteFooter pathPrefix={prefix} currentCategoryId={categoryId} />
    </>
  );
};
