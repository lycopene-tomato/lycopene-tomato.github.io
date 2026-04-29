/* ============================================================
 * page-detail.jsx — アプリ詳細ページ（テンプレート）
 * ============================================================
 * apps/<id>.html から AppDetailPage コンポーネントが呼ばれ、
 * appId プロパティに応じて i18n.js の apps[] 配列から該当データを取り出し描画します。
 *
 * 構成: パンくず → ヒーロー(スクショ+DLボタン) → 声かけ → 仕掛け → 再DL
 *      → 前後ナビ → 他アプリ一覧 → フッター
 *
 * Claude Code 向けメモ:
 * - パスは全て pathPrefix="../" を渡してトップへの相対リンクを成立させる
 * - i18n.js の apps[] にデータ追加 + apps/<id>.html を作るだけで自動対応
 * ============================================================ */

const AppleStoreBadge = ({ url }) => {
  // url が空のときは Coming Soon 表示にして disabled な見た目に
  const enabled = !!url;
  return (
    <a
      href={enabled ? url : undefined}
      target={enabled ? "_blank" : undefined}
      rel={enabled ? "noopener noreferrer" : undefined}
      aria-disabled={!enabled}
      onClick={(e) => { if (!enabled) e.preventDefault(); }}
      style={{
        display: "inline-flex", alignItems: "center", gap: 12,
        background: enabled ? "#000" : "#8B7355", color: "#fff",
        padding: "14px 28px", borderRadius: 12, textDecoration: "none",
        cursor: enabled ? "pointer" : "not-allowed", opacity: enabled ? 1 : 0.6,
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M17.05 12.04c-.03-3.07 2.51-4.55 2.62-4.62-1.43-2.09-3.66-2.38-4.45-2.41-1.89-.19-3.69 1.11-4.65 1.11-.96 0-2.44-1.08-4.01-1.05-2.07.03-3.97 1.2-5.03 3.05-2.14 3.71-.55 9.21 1.55 12.22 1.02 1.47 2.24 3.13 3.84 3.07 1.54-.06 2.12-.99 3.99-.99 1.86 0 2.39.99 4.02.96 1.66-.03 2.71-1.5 3.73-2.99 1.17-1.71 1.65-3.39 1.68-3.48-.04-.02-3.22-1.24-3.25-4.87zM14.04 3.27c.85-1.04 1.43-2.47 1.27-3.91-1.23.05-2.72.82-3.6 1.85-.79.92-1.48 2.39-1.29 3.79 1.37.11 2.77-.7 3.62-1.73z"/>
      </svg>
      <div style={{ textAlign: "left", lineHeight: 1.1 }}>
        <div style={{ fontSize: 9, opacity: 0.8 }}>{enabled ? "Download on the" : "Coming Soon"}</div>
        <div style={{ fontSize: 17, fontWeight: 600 }}>App Store</div>
      </div>
    </a>
  );
};

window.AppDetailPage = ({ appId }) => {
  const lang = window.useLang();
  const t = window.I18N[lang];
  const idx = t.apps.findIndex(a => a.id === appId);
  const app = t.apps[idx];

  // 該当IDなし
  if (!app) {
    return (
      <div style={{ padding: 80, textAlign: "center" }}>
        <h1>アプリが見つかりません</h1>
        <a href="../index.html">← {t.detail.home}</a>
      </div>
    );
  }

  const theme = window.getTheme(app.id, idx);
  const Mock = window.AppMocks[app.id];
  const prev = idx > 0 ? t.apps[idx - 1] : null;
  const next = idx < t.apps.length - 1 ? t.apps[idx + 1] : null;

  return (
    <div style={{ width: "100%", background: "#FBF6EE", color: "#3D2E1F", minHeight: "100vh" }}>
      <window.SiteHeader pathPrefix="../" />

      {/* パンくず */}
      <div style={{ padding: "20px 24px", maxWidth: 1100, margin: "0 auto", fontSize: 13, color: "#8B7355" }}>
        <a href="../index.html" style={{ color: "inherit", textDecoration: "none" }}>{t.detail.home}</a>
        <span style={{ margin: "0 8px" }}>›</span>
        <a href="../index.html#lineup" style={{ color: "inherit", textDecoration: "none" }}>{t.lineup.label}</a>
        <span style={{ margin: "0 8px" }}>›</span>
        <span style={{ color: theme.deep, fontWeight: 700 }}>{app.name}</span>
      </div>

      {/* HERO */}
      <section style={{ padding: "clamp(20px, 4vw, 40px) 24px clamp(60px, 8vw, 80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 240, height: 240, background: theme.c, opacity: 0.12, borderRadius: "50%" }}></div>
        <div style={{ position: "absolute", top: 100, left: -60, width: 160, height: 160, background: theme.c, opacity: 0.08, borderRadius: "50%" }}></div>

        <div className="detail-hero" style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div className="detail-hero-text">
            <div style={{ fontSize: 12, color: theme.deep, letterSpacing: 3, fontWeight: 700, marginBottom: 12 }}>
              APP {String(idx + 1).padStart(2, "0")} / {String(t.apps.length).padStart(2, "0")}
              {app.tag && <span style={{ marginLeft: 12, background: theme.soft, padding: "3px 10px", borderRadius: 999, fontSize: 11 }}>{app.tag}</span>}
            </div>
            <h1 style={{ fontSize: "clamp(36px, 7vw, 64px)", margin: "0 0 20px", fontWeight: 700, letterSpacing: "0.02em", color: "#3D2E1F" }}>{app.name}</h1>
            <div style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "#5C4936", lineHeight: 1.7, marginBottom: 32 }}>
              <span style={{ color: theme.deep, fontWeight: 700 }}>{app.formula_a}</span>
              <span style={{ color: "#BDA68C", margin: "0 10px", fontWeight: 400 }}>×</span>
              <span style={{ fontWeight: 700 }}>{app.formula_b}</span>
              <span style={{ color: "#BDA68C", margin: "0 10px", fontWeight: 400 }}>=</span>
              <br />
              <span style={{ fontWeight: 700, color: theme.deep }}>{app.formula_c}</span>
            </div>
            <AppleStoreBadge url={app.appstore_url} />
          </div>

          <div className="detail-hero-mock" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: -20, background: theme.c, opacity: 0.1, borderRadius: 30 }}></div>
            {Mock && (
              <div style={{ position: "relative", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }}>
                <Mock />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "clamp(60px, 8vw, 80px) 24px", background: "#fff" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>

          {/* 声かけ */}
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: theme.deep, letterSpacing: 2, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 24, height: 2, background: theme.c, display: "inline-block" }}></span>
              💬 {t.detail.label_call}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {app.call.map((q, j) => (
                <div key={j} style={{
                  background: theme.soft, padding: "16px 24px", borderRadius: 20,
                  fontSize: "clamp(15px, 2.4vw, 17px)", color: "#3D2E1F", fontWeight: 500,
                  border: `1px dashed ${theme.c}`,
                }}>
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* 仕掛け */}
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: theme.deep, letterSpacing: 2, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 24, height: 2, background: theme.c, display: "inline-block" }}></span>
              ⚙️ {t.detail.label_trick}
            </div>
            <div style={{ background: "#FBF6EE", borderRadius: 16, padding: "clamp(24px, 4vw, 32px) clamp(20px, 4vw, 36px)", borderLeft: `4px solid ${theme.c}` }}>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {app.trick.map((tr, j) => (
                  <li key={j} style={{ fontSize: "clamp(14px, 2.2vw, 15px)", lineHeight: 1.9, color: "#3D2E1F", paddingLeft: 32, position: "relative", marginBottom: 12 }}>
                    <span style={{
                      position: "absolute", left: 0, top: 4,
                      width: 22, height: 22, borderRadius: "50%",
                      background: theme.c, color: "#fff",
                      fontSize: 11, fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>{j + 1}</span>
                    {tr}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 再DL */}
          <div style={{ textAlign: "center", padding: "48px 0", borderTop: "1px dashed #D8C5A8" }}>
            <div style={{ fontSize: 14, color: "#8B7355", marginBottom: 16 }}>{t.detail.dl_sub}</div>
            <AppleStoreBadge url={app.appstore_url} />
          </div>
        </div>
      </section>

      {/* 前後ナビ */}
      <section style={{ padding: "clamp(40px, 6vw, 60px) 24px", background: "#FBF6EE" }}>
        <div className="detail-prevnext" style={{ maxWidth: 1100, margin: "0 auto" }}>
          {prev ? (
            <a href={`${prev.id}.html`} style={{
              background: "#fff", borderRadius: 16, padding: "20px 24px",
              textDecoration: "none", color: "inherit",
              border: `1px solid ${window.getTheme(prev.id, idx - 1).c}`,
              display: "flex", alignItems: "center", gap: 16,
            }}>
              <span style={{ fontSize: 20, color: window.getTheme(prev.id, idx - 1).deep }}>←</span>
              <div>
                <div style={{ fontSize: 11, color: "#8B7355", marginBottom: 4 }}>{t.detail.prev}</div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{prev.name}</div>
              </div>
            </a>
          ) : <div></div>}
          {next ? (
            <a href={`${next.id}.html`} style={{
              background: "#fff", borderRadius: 16, padding: "20px 24px",
              textDecoration: "none", color: "inherit",
              border: `1px solid ${window.getTheme(next.id, idx + 1).c}`,
              display: "flex", alignItems: "center", gap: 16, justifyContent: "flex-end", textAlign: "right",
            }}>
              <div>
                <div style={{ fontSize: 11, color: "#8B7355", marginBottom: 4 }}>{t.detail.next}</div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{next.name}</div>
              </div>
              <span style={{ fontSize: 20, color: window.getTheme(next.id, idx + 1).deep }}>→</span>
            </a>
          ) : <div></div>}
        </div>

        {/* 他アプリ */}
        <div style={{ maxWidth: 1100, margin: "60px auto 0" }}>
          <div style={{ fontSize: 13, color: "#8B7355", letterSpacing: 2, textAlign: "center", marginBottom: 24 }}>— {t.detail.label_other} —</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
            {t.apps.filter(a => a.id !== app.id).map((a, i) => {
              const tt = window.getTheme(a.id, i);
              return (
                <a key={a.id} href={`${a.id}.html`} style={{
                  background: "#fff", borderRadius: 12, padding: "12px 14px",
                  textDecoration: "none", color: "inherit",
                  borderLeft: `3px solid ${tt.c}`,
                  fontSize: 13, fontWeight: 700,
                }}>
                  <div style={{ fontSize: 10, color: tt.deep, marginBottom: 2 }}>{a.tag || ""}</div>
                  {a.name}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <window.SiteFooter pathPrefix="../" />
    </div>
  );
};
