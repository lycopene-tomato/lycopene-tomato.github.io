/* ============================================================
 * site-shared.jsx — 共通コンポーネント
 * ============================================================
 *
 * このファイルには、トップページと詳細ページの両方で使う
 * UI コンポーネントとロジックが入っています。
 *
 * - useLang()      : 言語切替の購読フック
 * - getTheme(id)   : アプリIDからテーマカラーを取得
 * - SiteHeader     : 共通ヘッダー（ロゴ・ナビ・言語切替・モバイルメニュー）
 * - SiteFooter     : 共通フッター
 * - AppCard        : アプリ一覧グリッドのカード
 *
 * 📐 レスポンシブ仕様
 * - 1024px以上 : デスクトップ（4列カード、横並びナビ）
 * - 640〜1024px : タブレット（2〜3列カード）
 * - 〜640px     : スマホ（1列カード、ハンバーガーメニュー）
 *
 * Claude Code への注意:
 * - 全ての文面は i18n.js から取得しています。直接書かないでください。
 * - 新しい共通要素を追加する場合は window.<Name> でグローバル公開してください。
 *   （Babel が各 <script> を別スコープにするため、これが必要）
 * ============================================================ */

// ----------------------------------------------------------
// 言語切替の購読フック
// 内部で getLang() を呼び、langchange イベントで再レンダリング
// ----------------------------------------------------------
window.useLang = function () {
  const [lang, setLangState] = React.useState(window.getLang());
  React.useEffect(() => {
    const onChange = (e) => setLangState(e.detail);
    window.addEventListener("langchange", onChange);
    return () => window.removeEventListener("langchange", onChange);
  }, []);
  return lang;
};

// ----------------------------------------------------------
// アプリのテーマカラー
// id をキーに固定。順序が変わってもカラーは変わりません。
//
// 新しいアプリ追加時はここにエントリを足してください。
// 省略しても getTheme() が HSL で自動生成します（10〜20個でも OK）。
//
// 各テーマは:
//   c    : メインカラー（ボーダー、見出し下線、ボタン背景など）
//   soft : 背景に敷く薄い色（カードの中の枠など）
//   deep : 文字に使う濃い色（ラベル、ボタン文字）
// ----------------------------------------------------------
window.AppTheme = {
  gacha:    { c: "#FFB84D", soft: "#FFF4E0", deep: "#B8651A" },
  bingo:    { c: "#C9A8FF", soft: "#F0E8FF", deep: "#6B3FA0" },
  sugoroku: { c: "#A8E6A3", soft: "#E8F4D8", deep: "#4A7A2E" },
  farm:     { c: "#7BC8FF", soft: "#E0F4FF", deep: "#2E7A8C" },
  wbs:      { c: "#FF8AC0", soft: "#FFF0F4", deep: "#C9501F" },
  // ▼ 新アプリのテーマをここに追加 ▼
};

window.getTheme = function (id, idx = 0) {
  if (window.AppTheme[id]) return window.AppTheme[id];
  // 未登録 ID は HSL で自動配色（無限に色を生成可能）
  const h = (idx * 47 + 30) % 360;
  return {
    c:    `hsl(${h}, 65%, 70%)`,
    soft: `hsl(${h}, 65%, 95%)`,
    deep: `hsl(${h}, 55%, 35%)`,
  };
};

// ----------------------------------------------------------
// 言語スイッチャー（ヘッダー右端）
// LANGS が1件しかなければシンプルなラベル表示、
// 2件以上ならクリックで切替メニューを開く
// ----------------------------------------------------------
const LangSwitcher = () => {
  const lang = window.useLang();
  const [open, setOpen] = React.useState(false);
  const current = window.LANGS.find(l => l.code === lang) || window.LANGS[0];

  if (window.LANGS.length <= 1) {
    return (
      <div style={{ fontSize: 13, color: "#8B7355", padding: "6px 14px", border: "1px dashed #BDA68C", borderRadius: 999 }}>
        🌐 {current.label}
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)} style={{
        fontSize: 13, color: "#8B7355", padding: "6px 14px",
        border: "1px dashed #BDA68C", borderRadius: 999,
        background: "transparent", cursor: "pointer", fontFamily: "inherit",
      }}>
        🌐 {current.label} ▾
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", right: 0,
          background: "#fff", border: "1px solid #D8C5A8", borderRadius: 12,
          padding: 6, minWidth: 140, zIndex: 100,
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        }}>
          {window.LANGS.map(l => (
            <button key={l.code} onClick={() => { window.setLang(l.code); setOpen(false); }} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "8px 12px", border: "none", background: l.code === lang ? "#FBF6EE" : "transparent",
              fontSize: 13, color: "#3D2E1F", borderRadius: 8, cursor: "pointer",
              fontFamily: "inherit",
            }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------------
// 共通ヘッダー
//
// pathPrefix : トップは "" / 詳細ページは "../"
//   詳細ページは apps/ サブディレクトリにあるため、
//   index.html へのリンクは ../index.html になります。
// ----------------------------------------------------------
window.SiteHeader = ({ pathPrefix = "" }) => {
  const lang = window.useLang();
  const t = window.I18N[lang];
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(251,246,238,0.92)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(189,153,108,0.2)",
    }}>
      <div className="site-header-inner">
        <a href={`${pathPrefix}index.html`} style={{
          fontWeight: 700, fontSize: 18, letterSpacing: 1,
          textDecoration: "none", color: "#3D2E1F",
        }}>
          <span style={{ color: "#E89A3D" }}>遊び</span>
          <span style={{ color: "#BDA68C", margin: "0 4px" }}>×</span>
          <span style={{ color: "#7BAE74" }}>やる事</span>
        </a>

        <nav className="site-nav" style={{ display: "flex", gap: 32, fontSize: 14, color: "#6B5642" }}>
          <a href={`${pathPrefix}index.html#empathy`} style={{ color: "inherit", textDecoration: "none" }}>{t.nav.story}</a>
          <a href={`${pathPrefix}index.html#lineup`} style={{ color: "inherit", textDecoration: "none" }}>{t.nav.apps}</a>
        </nav>

        <div className="site-header-right" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LangSwitcher />
          {/* モバイル時のみハンバーガーボタン表示 */}
          <button className="site-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu" style={{
            display: "none", background: "transparent", border: "1px solid #BDA68C",
            borderRadius: 10, width: 40, height: 40, cursor: "pointer", padding: 0,
            color: "#3D2E1F",
          }}>
            <span style={{ display: "block", width: 18, height: 2, background: "currentColor", margin: "5px auto" }}></span>
            <span style={{ display: "block", width: 18, height: 2, background: "currentColor", margin: "5px auto" }}></span>
            <span style={{ display: "block", width: 18, height: 2, background: "currentColor", margin: "5px auto" }}></span>
          </button>
        </div>
      </div>

      {/* モバイル用展開メニュー */}
      {menuOpen && (
        <div className="site-mobile-menu" style={{ borderTop: "1px solid rgba(189,153,108,0.2)", padding: "12px 24px 16px" }}>
          <a href={`${pathPrefix}index.html#empathy`} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "12px 0", color: "#3D2E1F", textDecoration: "none", borderBottom: "1px dashed #D8C5A8" }}>{t.nav.story}</a>
          <a href={`${pathPrefix}index.html#lineup`} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "12px 0", color: "#3D2E1F", textDecoration: "none" }}>{t.nav.apps}</a>
        </div>
      )}
    </header>
  );
};

// ----------------------------------------------------------
// 共通フッター
// ----------------------------------------------------------
window.SiteFooter = ({ pathPrefix = "" }) => {
  const lang = window.useLang();
  const t = window.I18N[lang];
  return (
    <footer style={{ background: "#3D2E1F", color: "#FBF6EE", padding: "60px 24px", textAlign: "center" }}>
      <div style={{ fontSize: "clamp(20px, 4vw, 24px)", fontWeight: 700, marginBottom: 16 }}>
        <span style={{ color: "#FFD27A" }}>遊び</span>
        <span style={{ opacity: 0.5, margin: "0 8px" }}>×</span>
        <span style={{ color: "#A8E6A3" }}>やる事</span>
        <span style={{ opacity: 0.5, margin: "0 8px" }}>=</span>
        <span style={{ color: "#F5A8C0" }}>習慣</span>
      </div>
      <div style={{ fontSize: 13, opacity: 0.6, marginBottom: 24 }}>{t.footer.copy}</div>
      <div style={{ fontSize: 12, opacity: 0.5 }}>
        <a href={`${pathPrefix}index.html`} style={{ color: "inherit", margin: "0 12px" }}>{t.footer.nav_home}</a>
        <a href={`${pathPrefix}index.html#lineup`} style={{ color: "inherit", margin: "0 12px" }}>{t.footer.nav_apps}</a>
        {t.footer.nav_privacy && (
          <a href={`${pathPrefix}privacy-policy/`} style={{ color: "inherit", margin: "0 12px" }}>{t.footer.nav_privacy}</a>
        )}
      </div>
    </footer>
  );
};

// ----------------------------------------------------------
// AppCard — 一覧グリッドの1枚
// pathPrefix : 詳細ページへのリンクのプレフィックス
// ----------------------------------------------------------
window.AppCard = ({ app, idx, pathPrefix = "" }) => {
  const lang = window.useLang();
  const t = window.I18N[lang];
  const theme = window.getTheme(app.id, idx);
  const Mock = window.AppMocks[app.id];

  return (
    <a href={`${pathPrefix}apps/${app.id}.html`} className="app-card" style={{
      background: "#fff", borderRadius: 20, padding: 24,
      textDecoration: "none", color: "inherit",
      border: `2px solid ${theme.c}`,
      display: "flex", flexDirection: "column", gap: 16,
      position: "relative",
      transition: "transform 0.2s, box-shadow 0.2s",
    }}>
      {/* 番号 + タグ をカード上端に並べる（はみ出し対策） */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 8, marginTop: -4,
      }}>
        <div style={{
          background: theme.c, color: "#fff",
          fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 999,
          letterSpacing: 1,
        }}>
          {String(idx + 1).padStart(2, "0")}
        </div>
        {app.tag && (
          <div style={{
            fontSize: 11, color: theme.deep, background: theme.soft,
            padding: "3px 10px", borderRadius: 999, fontWeight: 700,
            whiteSpace: "nowrap",
          }}>
            {app.tag}
          </div>
        )}
      </div>

      {/* ミニアプリプレビュー */}
      <div style={{
        background: theme.soft, borderRadius: 14, height: 200,
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden", position: "relative",
      }}>
        {Mock ? (
          <div style={{ transform: "scale(0.62)", transformOrigin: "center", filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))" }}>
            <Mock />
          </div>
        ) : (
          <div style={{ fontSize: 14, color: theme.deep, fontWeight: 700 }}>{t.lineup.coming_soon}</div>
        )}
      </div>

      <div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#3D2E1F", marginBottom: 6 }}>{app.name}</div>
        <div style={{ fontSize: 13, color: "#8B7355", lineHeight: 1.6, marginBottom: 12 }}>
          <span style={{ color: theme.deep, fontWeight: 700 }}>{app.formula_a}</span>
          <span style={{ margin: "0 4px" }}>×</span>
          <span style={{ fontWeight: 700 }}>{app.formula_b}</span>
          <span style={{ margin: "0 4px" }}>=</span>
          <span>{app.formula_c}</span>
        </div>
        <div style={{
          background: "#FBF6EE", borderRadius: 10, padding: "10px 12px",
          fontSize: 12, color: "#5C4936",
          borderLeft: `3px solid ${theme.c}`, lineHeight: 1.5,
        }}>
          💬 {app.call[0]}
        </div>
      </div>

      <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: theme.deep, fontWeight: 700 }}>
        <span>{t.lineup.view_detail}</span>
        <span>→</span>
      </div>
    </a>
  );
};
