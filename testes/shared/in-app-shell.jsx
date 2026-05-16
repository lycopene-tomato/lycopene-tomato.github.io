/* ============================================================
 * shared/in-app-shell.jsx — WebView 用 cross-promotion LP
 * ============================================================
 * アプリ内 about 画面が WebView で開くページ。
 * `?from=<app_id>` で誘導元アプリを示し、そのアプリは一覧から除外
 * (= 他のアプリだけを並べる)。カードタップで通常の LP
 * (`/<lang>/apps/<slug>.html`) に UTM 付きで遷移。
 *
 * 軽量ヘッダー (Lyco App ロゴだけ)、言語切替なし (URL パスで決定)、
 * フッターもなし。noindex は HTML 側で <meta robots> を入れる。
 *
 * 使い方: HTML 側で <window.InAppAppsPage /> を root にマウント。
 * ============================================================ */

window.InAppAppsPage = function () {
  const lang = window.useLang();
  const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
  const inApp = (t && t.in_app) || {};

  // URL から ?from=<app_id> を取得
  const fromApp = React.useMemo(() => {
    try {
      return new URLSearchParams(window.location.search).get("from") || "";
    } catch (e) {
      return "";
    }
  }, []);

  // 全アプリ (todo / record / tool / other を flatten)
  const allApps = window.flattenApps(lang) || [];
  // 誘導元アプリは除外 (他アプリを主役に)
  const otherApps = allApps.filter((a) => a.id !== fromApp);

  // UTM パラメータ: どの誘導元から流れてきたかを計測
  const utmMedium = fromApp ? "from-" + fromApp : "from-unknown";
  const utmSuffix = "?utm_source=in-app&utm_medium=" + utmMedium;

  return (
    <div style={{ background: "#FBF6EE", minHeight: "100vh", color: "#3D2E1F" }}>
      {/* 軽量ヘッダー: Lyco App ロゴだけ、言語切替・ナビなし */}
      <header style={{
        padding: "12px 16px",
        textAlign: "center",
        borderBottom: "1px solid #EBE4D6",
        background: "#FFFBF1",
      }}>
        <span style={{
          fontSize: 14,
          fontWeight: 800,
          letterSpacing: 1.5,
          color: "#5C4936",
        }}>Lyco App</span>
      </header>

      <main style={{ maxWidth: 720, margin: "0 auto", padding: "28px 18px 60px" }}>
        <h1 style={{ fontSize: 22, fontWeight: 900, margin: "0 0 10px", lineHeight: 1.4 }}>
          {inApp.title || "Other apps"}
        </h1>
        <p style={{ fontSize: 13, opacity: 0.75, lineHeight: 1.7, margin: "0 0 24px" }}>
          {inApp.lead || ""}
        </p>

        <div style={{ display: "grid", gap: 12 }}>
          {otherApps.map((app) => {
            const theme = window.getTheme(app.id, app._category) || { soft: "#FFF0F4" };
            const heroSrc = window.resolveHeroImage(app, "../");
            const detailHref = "../apps/" + app.id + ".html" + utmSuffix;
            return (
              <a
                key={app.id}
                href={detailHref}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 16px",
                  background: "#fff",
                  border: "1px solid #eee",
                  borderRadius: 14,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {heroSrc && (
                  <img
                    src={heroSrc}
                    alt=""
                    loading="lazy"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      flexShrink: 0,
                      objectFit: "cover",
                      background: theme.soft,
                    }}
                  />
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 4 }}>
                    {app.name}
                  </div>
                  <div style={{
                    fontSize: 12,
                    opacity: 0.75,
                    lineHeight: 1.5,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {app.concept || ""}
                  </div>
                </div>
                <span style={{
                  fontSize: 11,
                  color: "#8B7355",
                  flexShrink: 0,
                  paddingLeft: 8,
                }}>→</span>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
};
