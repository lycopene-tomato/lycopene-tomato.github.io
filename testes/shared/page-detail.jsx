/* ============================================================
 * shared/page-detail.jsx — アプリ詳細ページ（44言語対応）
 * ============================================================
 * 使い方（HTMLから）:
 *   <div id="root"></div>
 *   <script type="text/babel">
 *     ReactDOM.createRoot(document.getElementById("root")).render(
 *       <window.AppDetailPage appId="gacha" pathPrefix="../" />
 *     );
 *   </script>
 *
 * 言語別スクショ:
 *   ../images/screenshots/<lang>/<appId>-1.jpeg ...
 *   なければ ../images/screenshots/<appId>-1.jpeg にフォールバック
 * ============================================================ */

window.AppDetailPage = function AppDetailPage({ appId, pathPrefix }) {
  const prefix = pathPrefix || "../";
  const lang = (typeof window.useLang === "function") ? window.useLang() : (window.getLang ? window.getLang() : "en");
  const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
  const found = window.findApp(lang, appId);
  if (!t || !found) {
    return (
      <div style={{ padding: 80, textAlign: "center" }}>
        <h1>App not found: {appId}</h1>
        <a href={`${prefix}index.html`}>← Home</a>
      </div>
    );
  }
  const { app, category, catIndex, appIndex } = found;
  const accent = category.accent;
  const allApps = category.apps;
  const prev = allApps[(appIndex - 1 + allApps.length) % allApps.length];
  const next = allApps[(appIndex + 1) % allApps.length];

  return (
    <>
      <window.SiteHeader pathPrefix={prefix} currentCategoryId={category.id} />

      {/* HERO */}
      <section className="hero reveal" data-snap data-progress-color={accent.c}
        style={{ background: accent.soft, padding: "32px 18px", textAlign: "center", color: accent.deep }}>
        <h1 style={{ fontSize: 28, fontWeight: 900, margin: "0 0 6px" }}>{app.name}</h1>
        <div style={{ marginTop: 18, padding: "16px 14px", background: "#fff", borderRadius: 14, color: "#333" }}>
          <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 800, color: accent.deep, marginBottom: 6 }}>
            {t.detail.label_concept}
          </div>
          <div style={{ fontSize: 17, fontWeight: 800 }}>
            <span style={{ color: accent.c }}>{app.formula_a}</span>
            <span style={{ margin: "0 .35em", opacity: 0.5 }}>×</span>
            <span>{app.formula_b}</span>
            <span style={{ margin: "0 .35em", opacity: 0.5 }}>=</span>
            <span style={{ color: accent.c }}>{app.formula_c}</span>
          </div>
        </div>
        {app.hero_image && (
          <img src={window.resolveHeroImage(app, prefix)} alt={app.name}
            style={{ display: "block", maxWidth: 360, width: "100%", margin: "20px auto 0", borderRadius: 14 }} />
        )}
      </section>

      {/* CALL */}
      {app.call && app.call.length > 0 && (
        <section className="reveal" data-snap data-progress-color={accent.c}
          style={{ padding: "0 18px", maxWidth: 640, margin: "32px auto" }}>
          <div style={{
            position: "relative",
            border: `2px solid ${accent.c}`,
            borderRadius: 16,
            padding: "32px 24px 24px",
            background: "#fff",
          }}>
            <div style={{
              position: "absolute", top: -11, left: 20,
              pointerEvents: "none",
            }}>
              <span style={{
                display: "inline-block",
                background: "#FBF6EE",
                padding: "2px 14px",
                borderRadius: 999,
                fontSize: 13, fontWeight: 800, letterSpacing: 3,
                color: accent.deep,
              }}>{(category && category.label_call) || t.detail.label_call}</span>
            </div>
            <ul style={{ paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 8, color: accent.deep, fontSize: 14, lineHeight: 1.6 }}>
              {app.call.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </section>
      )}

      {/* TRICK */}
      {app.trick && app.trick.length > 0 && (
        <section className="reveal" data-snap data-progress-color={accent.c}
          style={{ padding: "0 18px", maxWidth: 640, margin: "32px auto" }}>
          <div style={{
            position: "relative",
            border: `2px solid ${accent.c}`,
            borderRadius: 16,
            padding: "32px 24px 24px",
            background: "#fff",
          }}>
            <div style={{
              position: "absolute", top: -11, left: 20,
              pointerEvents: "none",
            }}>
              <span style={{
                display: "inline-block",
                background: "#FBF6EE",
                padding: "2px 14px",
                borderRadius: 999,
                fontSize: 13, fontWeight: 800, letterSpacing: 3,
                color: accent.deep,
              }}>{t.detail.label_trick}</span>
            </div>
            <ul style={{ paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 8, color: accent.deep, fontSize: 14, lineHeight: 1.6 }}>
              {app.trick.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </section>
      )}

      {/* SCREENS (optional, language-specific path) */}
      <window.AppScreens lang={lang} appId={app.id} pathPrefix={prefix} accent={accent} label={t.detail.label_screen} />

      {/* STORE LINKS — 説明を読み終えたあとに表示 */}
      <section className="reveal" data-snap data-progress-color={accent.c}
        style={{ padding: "0 18px", maxWidth: 640, margin: "28px auto 8px", textAlign: "center" }}>
        <div style={{
          display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap",
        }}>
          <window.StoreButton platform="apple" href={app.appstore_url} />
          <window.StoreButton platform="google" comingSoon={true} />
        </div>
      </section>

      {/* SAME CATEGORY NAV */}
      <section className="reveal" style={{ padding: "32px 18px 16px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ fontSize: 12, letterSpacing: 3, fontWeight: 800, color: accent.deep, marginBottom: 12, textAlign: "center" }}>
          {t.detail.label_same_category}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <a href={`${prefix}apps/${prev.id}.html`} style={{
            textDecoration: "none", color: "inherit",
            padding: "12px 14px", background: "#fff",
            minWidth: 0,
            borderLeft: `4px solid ${accent.c}`,
            borderRadius: 10, boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}>
            <div style={{ fontSize: 11, color: accent.deep, opacity: 0.7, marginBottom: 4 }}>← {t.detail.prev}</div>
            <div style={{ fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{prev.name}</div>
          </a>
          <a href={`${prefix}apps/${next.id}.html`} style={{
            textAlign: "right", textDecoration: "none", color: "inherit",
            padding: "12px 14px", background: "#fff",
            minWidth: 0,
            borderRight: `4px solid ${accent.c}`,
            borderRadius: 10, boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}>
            <div style={{ fontSize: 11, color: accent.deep, opacity: 0.7, marginBottom: 4 }}>{t.detail.next} →</div>
            <div style={{ fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{next.name}</div>
          </a>
        </div>
      </section>

      {/* OTHER CATEGORIES (トップページと同じ E パターン) */}
      {window.CatNavPatternE && (
        <window.CatNavPatternE t={t} currentId={category.id} prefix={prefix} accent={accent} />
      )}

      <window.SiteFooter pathPrefix={prefix} />
    </>
  );
};

// 言語別スクリーンショット（あれば表示。なければ何も出さない）
window.AppScreens = function AppScreens({ lang, appId, pathPrefix, accent, label }) {
  const [imgs, setImgs] = React.useState([]);
  React.useEffect(() => {
    let alive = true;
    (async () => {
      // /ja/apps/<id>.html から見ると images/ は 2 階層上 (../../images/...)
      // pathPrefix は /<lang>/ までの相対なので、images/ にはさらに "../" 1 つ要る。
      const base = `${pathPrefix}../`;
      const candidates = [];
      for (let i = 1; i <= 6; i++) {
        // 言語別パス → 共通パス → png/jpeg どちらでも
        candidates.push([
          `${base}images/screenshots/${lang}/${appId}-${i}.jpeg`,
          `${base}images/screenshots/${lang}/${appId}-${i}.png`,
          `${base}images/screenshots/${appId}-${i}.jpeg`,
          `${base}images/screenshots/${appId}-${i}.png`,
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
            img.onload = () => res(url);
            img.onerror = tryNext;
            img.src = url;
          };
          tryNext();
        });
        if (ok) found.push(ok);
      }
      if (alive) setImgs(found);
    })();
    return () => { alive = false; };
  }, [lang, appId, pathPrefix]);

  if (imgs.length === 0) return null;

  return (
    <section className="reveal" style={{ padding: "0 18px", maxWidth: 640, margin: "32px auto" }}>
      <div style={{
        position: "relative",
        border: `2px solid ${accent.c}`,
        borderRadius: 16,
        padding: "32px 24px 24px",
        background: "#fff",
      }}>
        <div style={{
          position: "absolute", top: -11, left: 20,
          pointerEvents: "none",
        }}>
          <span style={{
            display: "inline-block",
            background: "#FBF6EE",
            padding: "2px 14px",
            borderRadius: 999,
            fontSize: 13, fontWeight: 800, letterSpacing: 3,
            color: accent.deep,
          }}>{label}</span>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          maxWidth: 420,
          margin: "0 auto",
        }}>
          {imgs.map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,.08)" }} />
          ))}
        </div>
      </div>
    </section>
  );
};
