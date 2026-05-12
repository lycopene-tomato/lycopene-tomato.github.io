/* ============================================================
 * shared/site-shared.jsx — 共通コンポーネント（44言語対応）
 * ============================================================
 * 重要: ファイルの配置は /<lang>/{index.html, apps/...} を前提。
 *  - pathPrefix は カレントHTMLからルート (/<lang>/) への相対パス
 *      /<lang>/index.html       → ""
 *      /<lang>/apps/foo.html    → "../"
 *      /<lang>/blog/index.html  → "../"
 *      /<lang>/blog/posts/x.html→ "../../"
 *  - 画像（言語非依存）は /images/apps/<id>.jpeg
 *      → 各HTMLからは pathPrefix + "../images/apps/..." で参照
 *  - スクショ（言語依存）は /screenshots/<lang>/<id>.png
 *      → /<lang>/ から見ると pathPrefix + "../screenshots/<lang>/..."
 * ============================================================ */

window.useLang = function () {
  const [lang, setLangState] = React.useState(window.getLang());
  React.useEffect(() => {
    const onChange = (e) => setLangState(e.detail);
    window.addEventListener("langchange", onChange);
    return () => window.removeEventListener("langchange", onChange);
  }, []);
  return lang;
};

window.AppTheme = {
  gacha:    { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  bingo:    { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  sugoroku: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  farm:     { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
  trouble:  { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
  timer:    { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
  puzzle:   { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" },
};

window.getTheme = function (id, category, idx = 0) {
  if (window.AppTheme[id]) return window.AppTheme[id];
  if (category && category.accent) return category.accent;
  const h = (idx * 47 + 30) % 360;
  return { c: `hsl(${h},65%,70%)`, soft: `hsl(${h},65%,95%)`, deep: `hsl(${h},55%,35%)` };
};

// 画像（言語非依存）解決：pathPrefix は /<lang>/ からの相対なので、画像は更に "../" 上
window.resolveHeroImage = function (app, pathPrefix = "") {
  if (!app.hero_image) return null;
  return pathPrefix + "../" + app.hero_image;
};

// スクショ（言語依存）解決
window.resolveScreenshot = function (appId, lang, pathPrefix = "") {
  return pathPrefix + "../screenshots/" + lang + "/" + appId + ".png";
};

// ----------------------------------------------------------
// 言語スイッチャー（44言語対応ドロップダウン + 検索）
// ----------------------------------------------------------
const LangSwitcher = () => {
  const lang = window.useLang();
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState("");
  const current = window.LANGS.find(l => l.code === lang) || window.LANGS[0];
  const shortLabel = window.LANG_SHORT[current.code] || current.code.toUpperCase();

  const filtered = React.useMemo(() => {
    if (!q) return window.LANGS;
    const lq = q.toLowerCase();
    return window.LANGS.filter(l =>
      l.code.toLowerCase().includes(lq) ||
      l.label.toLowerCase().includes(lq) ||
      l.native.toLowerCase().includes(lq)
    );
  }, [q]);

  React.useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (!e.target.closest("[data-lang-switcher]")) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <div data-lang-switcher style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)} aria-label="Language" style={{
        fontSize: 11, color: "#8B7355", padding: "4px 10px",
        border: "1px solid rgba(189,153,108,0.4)", borderRadius: 999,
        background: "transparent", cursor: "pointer", fontFamily: "inherit",
        whiteSpace: "nowrap", letterSpacing: 0.5,
        display: "inline-flex", alignItems: "center", gap: 6,
      }}>
        <span style={{ fontSize: 12 }}>🌐</span>
        {current.native}
        <span style={{ fontSize: 9, opacity: 0.6 }}>▾</span>
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", right: 0,
          background: "#fff", border: "1px solid #D8C5A8", borderRadius: 12,
          padding: 8, minWidth: 240, maxHeight: 360, overflow: "hidden",
          zIndex: 100, display: "flex", flexDirection: "column",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search language..."
            autoFocus
            style={{
              border: "1px solid #E5D8C0", borderRadius: 8,
              padding: "6px 10px", fontSize: 12, marginBottom: 6,
              fontFamily: "inherit", outline: "none",
            }}
          />
          <div style={{ overflowY: "auto", flex: 1 }}>
            {filtered.map(l => (
              <button key={l.code} onClick={() => { window.setLang(l.code); setOpen(false); }} style={{
                display: "flex", width: "100%", textAlign: "left",
                padding: "7px 10px", border: "none",
                background: l.code === lang ? "#FBF6EE" : "transparent",
                fontSize: 12, color: "#3D2E1F", borderRadius: 6, cursor: "pointer",
                fontFamily: "inherit",
                justifyContent: "space-between", alignItems: "center", gap: 8,
              }}>
                <span style={{ fontWeight: l.code === lang ? 700 : 500 }}>{l.native}</span>
                <span style={{ fontSize: 10, opacity: 0.5 }}>{l.code}</span>
              </button>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: "12px 10px", fontSize: 11, color: "#8B7355", textAlign: "center" }}>
                No match
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// カテゴリへのリンク先解決（todo は index.html、他は apps/category-<id>.html）
window.categoryHref = function (catId, pathPrefix = "") {
  if (catId === "todo") return `${pathPrefix}index.html`;
  return `${pathPrefix}apps/category-${catId}.html`;
};

window.SiteHeader = ({ pathPrefix = "", currentCategoryId = "todo" }) => {
  const lang = window.useLang();
  const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
  const [menuOpen, setMenuOpen] = React.useState(false);
  // ヘッダー/フッターはカテゴリに染めず、共通の「しまった」色で統一
  const headerBg = "#2C2218";
  const headerBorder = "#1B130C";
  return (
    <header style={{
      background: headerBg,
      borderBottom: `1px solid ${headerBorder}33`,
    }}>
      <div className="site-header-inner">
        <a href={`${pathPrefix}index.html`} style={{
          fontWeight: 700, fontSize: 16, letterSpacing: 0.5,
          textDecoration: "none", color: "#FBF6EE",
          whiteSpace: "nowrap",
          display: "inline-flex", alignItems: "center", gap: 8,
        }}>
          <img src="/images/logo-mark.jpeg" alt="Lyco App"
            width="32" height="32"
            style={{ display: "block", borderRadius: 6, background: "#FBF6EE" }} />
          <span>Lyco App</span>
        </a>
        <nav className="site-nav" style={{ display: "flex", gap: 8, fontSize: 13, alignItems: "center" }}>
          {t.categories.map((c) => {
            const active = c.id === currentCategoryId;
            return (
              <a key={c.id} href={window.categoryHref(c.id, pathPrefix)} style={{
                textDecoration: "none",
                padding: "6px 14px", borderRadius: 999,
                fontWeight: 700,
                color: active ? "#2C2218" : "#FBF6EE",
                background: active ? c.accent.c : "transparent",
                border: `1px solid ${active ? c.accent.c : "rgba(251,246,238,0.25)"}`,
                display: "inline-flex", alignItems: "center", gap: 6,
                transition: "all .15s",
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: active ? "#2C2218" : c.accent.c,
                }}></span>
                {c.name}
              </a>
            );
          })}
          <a href={`${pathPrefix}blog/index.html`} style={{
            textDecoration: "none",
            padding: "6px 14px", borderRadius: 999,
            fontWeight: 700,
            color: "#FBF6EE",
            background: "transparent",
            border: "1px solid rgba(251,246,238,0.25)",
            display: "inline-flex", alignItems: "center", gap: 6,
          }}>
            {(t.footer && t.footer.nav_blog) || "Blog"}
          </a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LangSwitcher />
          <button className="site-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu" style={{
            display: "none", background: "transparent", border: "none",
            width: 32, height: 32, cursor: "pointer", padding: 0,
            color: "#FBF6EE",
          }}>
            <span style={{ display: "block", width: 18, height: 1.5, background: "currentColor", margin: "5px auto" }}></span>
            <span style={{ display: "block", width: 18, height: 1.5, background: "currentColor", margin: "5px auto" }}></span>
            <span style={{ display: "block", width: 18, height: 1.5, background: "currentColor", margin: "5px auto" }}></span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div style={{ borderTop: "1px solid rgba(251,246,238,0.15)", padding: "12px 24px 16px", background: "#2C2218" }}>
          {t.categories.map((c) => {
            const active = c.id === currentCategoryId;
            return (
              <a key={c.id} href={window.categoryHref(c.id, pathPrefix)} onClick={() => setMenuOpen(false)} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "12px 0", color: "#FBF6EE", textDecoration: "none",
                borderBottom: "1px dashed rgba(251,246,238,0.18)",
                fontWeight: active ? 700 : 500,
              }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: c.accent.c }}></span>
                {c.name}
              </a>
            );
          })}
          <a href={`${pathPrefix}blog/index.html`} onClick={() => setMenuOpen(false)} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "12px 0", color: "#FBF6EE", textDecoration: "none",
            fontWeight: 500,
          }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#8B7355" }}></span>
            {(t.footer && t.footer.nav_blog) || "Blog"}
          </a>
        </div>
      )}
    </header>
  );
};

window.SiteFooter = ({ pathPrefix = "", currentCategoryId }) => {
  const lang = window.useLang();
  const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
  const f = t.footer || {};
  // ヘッダー/フッターは共通の落ち着いた色で統一（カテゴリ色に染めない）
  const accentC = "#8B7355";
  return (
    <footer style={{
      background: "#2C2218", color: "#FBF6EE",
      padding: "10px 20px 8px", textAlign: "center",
      borderTop: `1px solid #1B130C`,
    }}>
      {(f.tagline || f.tagline_sub) && (
        <div style={{ marginBottom: 6, letterSpacing: 0.4, lineHeight: 1.4 }}>
          {f.tagline && (
            <span style={{ fontSize: 12, fontWeight: 700, color: "#FFB263" }}>{f.tagline}</span>
          )}
          {f.tagline && f.tagline_sub && (
            <span style={{ margin: "0 8px", opacity: 0.4, fontSize: 10 }}>·</span>
          )}
          {f.tagline_sub && (
            <span style={{ fontSize: 10, opacity: 0.65 }}>{f.tagline_sub}</span>
          )}
        </div>
      )}
      <div style={{
        display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center",
        gap: "0 14px", fontSize: 11, opacity: 0.8,
      }}>
        <a href={`${pathPrefix}index.html`} style={{ color: "inherit", textDecoration: "none" }}>{f.nav_home}</a>
        <a href={`${pathPrefix}index.html#lineup`} style={{ color: "inherit", textDecoration: "none" }}>{f.nav_apps}</a>
        <a href={`${pathPrefix}blog/index.html`} style={{ color: "inherit", textDecoration: "none" }}>{f.nav_blog || "Blog"}</a>
        {f.nav_privacy && (
          <a href={`${pathPrefix}../privacy-policy/`} style={{ color: "inherit", textDecoration: "none" }}>{f.nav_privacy}</a>
        )}
        <span style={{ opacity: 0.5, fontSize: 10 }}>·</span>
        <span style={{ fontSize: 10, opacity: 0.5, letterSpacing: 0.3 }}>{f.copy}</span>
      </div>
    </footer>
  );
};

window.CategoryBadge = ({ category }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: 6,
    fontSize: 11, fontWeight: 700, letterSpacing: 1,
    color: category.accent.deep,
    background: category.accent.soft,
    border: `1px solid ${category.accent.c}`,
    padding: "3px 10px", borderRadius: 999,
  }}>
    <span style={{ width: 6, height: 6, borderRadius: "50%", background: category.accent.c }}></span>
    {category.name}
  </span>
);

// LP末尾の「全アプリ一覧」セクション（カテゴリ別グルーピング・正本仕様）
// 正本: page-category.jsx「ALL APPS INDEX」セクションのスタイル
window.AllAppsList = ({ pathPrefix = "", currentCategoryId }) => {
  const lang = window.useLang();
  const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
  if (!t || !t.categories) return null;
  const allHeading  = (t.allapps && t.allapps.heading) || "All Apps";
  const allTitle    = (t.allapps && t.allapps.title)   || "";
  const allSub      = (t.allapps && t.allapps.sub)     || "";
  const inProgressLabel = (t.allapps && t.allapps.in_progress) || "";
  return (
    <section className="reveal" data-snap style={{ padding: "clamp(48px, 7vw, 72px) 24px", borderTop: "1px solid rgba(189,153,108,0.15)", background: "#fff" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 12, letterSpacing: 3, fontWeight: 800, color: "#8B7355", marginBottom: 8 }}>
            — {allHeading} —
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 900, margin: "0 0 8px", color: "#3D2E1F" }}>{allTitle}</h2>
          {allSub && (
            <p style={{ fontSize: 13, color: "#8B7355", margin: 0, lineHeight: 1.6 }}>{allSub}</p>
          )}
        </div>
        {t.categories.map((c) => {
          const isCurrent = currentCategoryId && c.id === currentCategoryId;
          return (
            <div key={c.id} style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: c.accent.c }}></span>
                <a href={isCurrent ? "#lineup" : window.categoryHref(c.id, pathPrefix)} style={{
                  fontSize: 14, color: c.accent.deep, fontWeight: 700,
                  letterSpacing: 2, textDecoration: "none",
                }}>— {c.name} —</a>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: c.accent.c }}></span>
              </div>
              <div className="all-apps-grid">
                {c.apps.map((app) => {
                  const inProgress = !app.appstore_url;
                  const href = inProgress ? null : `${pathPrefix}apps/${app.id}.html`;
                  const Card = inProgress ? "div" : "a";
                  return (
                    <Card key={app.id}
                      {...(href ? { href } : {})}
                      className="all-app-card"
                      style={{
                        display: "block",
                        background: inProgress ? "#F0EAE0" : "#fff",
                        border: `1px solid ${inProgress ? "#D8C5A8" : c.accent.c}`,
                        borderLeft: `4px solid ${inProgress ? "#BDA68C" : c.accent.c}`,
                        borderRadius: 8, padding: "12px 14px",
                        textDecoration: "none", color: "inherit",
                        opacity: inProgress ? 0.6 : 1,
                        cursor: inProgress ? "default" : "pointer",
                        transition: "transform .15s",
                        position: "relative",
                      }}>
                      <div style={{
                        fontSize: 10, color: inProgress ? "#8B7355" : c.accent.deep,
                        marginBottom: 4, fontWeight: 500,
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                      }}>
                        <span>{app.tag}</span>
                        {inProgress && (
                          <span style={{
                            fontSize: 9, color: "#8B7355",
                            background: "#fff", border: "1px dashed #BDA68C",
                            padding: "1px 6px", borderRadius: 999,
                            fontWeight: 700, letterSpacing: 1,
                          }}>{inProgressLabel}</span>
                        )}
                      </div>
                      <div style={{
                        fontSize: 14, fontWeight: 700,
                        color: inProgress ? "#8B7355" : "#3D2E1F",
                        lineHeight: 1.3,
                      }}>{app.name}</div>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

window.HeroImage = ({ app, theme, pathPrefix = "", height = "100%", radius = 14 }) => {
  const [err, setErr] = React.useState(false);
  const src = window.resolveHeroImage(app, pathPrefix);
  if (!src || err) {
    return (
      <div style={{
        width: "100%", height, borderRadius: radius,
        background: `linear-gradient(135deg, ${theme.soft}, ${theme.c})`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: theme.deep, fontSize: 64, fontWeight: 900, letterSpacing: 2,
        overflow: "hidden",
      }}>
        {(app.name || "?").slice(0, 1)}
      </div>
    );
  }
  return (
    <img
      src={src} alt={app.name} loading="lazy"
      onError={() => setErr(true)}
      style={{
        width: "100%", height, borderRadius: radius,
        objectFit: "cover", display: "block",
      }}
    />
  );
};

window.StoreButton = ({ platform, href, comingSoon }) => {
  const isApple = platform === "apple";
  const isComingSoon = comingSoon || (isApple && !href);
  const Tag = isComingSoon ? "div" : "a";
  const linkProps = isComingSoon ? {} : { href, target: "_blank", rel: "noopener" };
  const appleSvg = (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  );
  const playSvg = (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M3 3v18l15-9L3 3z"/>
    </svg>
  );
  return (
    <Tag {...linkProps} style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      background: "#000", color: "#fff",
      padding: "8px 16px", borderRadius: 10,
      textDecoration: "none",
      opacity: isComingSoon ? 0.42 : 1,
      cursor: isComingSoon ? "default" : "pointer",
      position: "relative",
      transition: "opacity 0.2s",
      whiteSpace: "nowrap",
    }}>
      {isApple ? appleSvg : playSvg}
      <div style={{ textAlign: "left", lineHeight: 1.1 }}>
        <div style={{ fontSize: 9, opacity: 0.85 }}>{isApple ? "Download on the" : "GET IT ON"}</div>
        <div style={{ fontSize: 16, fontWeight: 600, marginTop: 1 }}>{isApple ? "App Store" : "Google Play"}</div>
      </div>
      {isComingSoon && (
        <span style={{
          position: "absolute", top: -8, right: -10,
          background: "#FFD27A", color: "#3D2E1F", fontSize: 9, fontWeight: 700,
          padding: "2px 8px", borderRadius: 999, transform: "rotate(6deg)",
          letterSpacing: 0.5,
          boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
        }}>Coming Soon</span>
      )}
    </Tag>
  );
};

window.AppCard = ({ app, idx, category, pathPrefix = "" }) => {
  const lang = window.useLang();
  const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
  const theme = window.getTheme(app.id, category, idx);
  const inProgress = !app.appstore_url;
  const inProgressLabel = (t.allapps && t.allapps.in_progress) || "";
  const Card = inProgress ? "div" : "a";
  const cardProps = inProgress ? {} : { href: `${pathPrefix}apps/${app.id}.html` };

  return (
    <Card {...cardProps} className="app-card" style={{
      background: "#fff", borderRadius: 20, padding: 18,
      textDecoration: "none", color: "inherit",
      border: `2px solid ${theme.c}`,
      display: "flex", flexDirection: "column", gap: 14,
      position: "relative",
      transition: "transform 0.2s, box-shadow 0.2s",
      opacity: inProgress ? 0.65 : 1,
      cursor: inProgress ? "default" : "pointer",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <div style={{
          background: theme.c, color: "#fff",
          fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 999, letterSpacing: 1,
        }}>{String(idx + 1).padStart(2, "0")}</div>
        {inProgress ? (
          <div style={{
            fontSize: 11, color: "#8B7355", background: "#fff",
            border: "1px dashed #BDA68C",
            padding: "3px 10px", borderRadius: 999, fontWeight: 700, letterSpacing: 1, whiteSpace: "nowrap",
          }}>{inProgressLabel}</div>
        ) : (app.tag && (
          <div style={{
            fontSize: 11, color: theme.deep, background: theme.soft,
            padding: "3px 10px", borderRadius: 999, fontWeight: 700, whiteSpace: "nowrap",
          }}>{app.tag}</div>
        ))}
      </div>
      <div style={{ aspectRatio: "16 / 9", overflow: "hidden", borderRadius: 12 }}>
        <window.HeroImage app={app} theme={theme} pathPrefix={pathPrefix} radius={12} />
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
          position: "relative", background: theme.soft,
          border: `1.5px solid ${theme.c}`,
          borderRadius: 14, padding: "10px 14px 10px 36px",
          fontSize: 12, color: "#3D2E1F", lineHeight: 1.5, marginTop: 4,
        }}>
          <div style={{
            position: "absolute", left: -10, top: "50%", transform: "translateY(-50%)",
            width: 28, height: 28, borderRadius: "50%",
            background: theme.c, color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 700, boxShadow: "0 2px 4px rgba(0,0,0,0.12)",
          }}>{
            category && category.id === "record" ? "💭" :
            category && category.id === "other"  ? "⁉" : "💬"
          }</div>
          <div style={{
            position: "absolute", left: 18, top: -7, width: 12, height: 12, background: theme.soft,
            borderTop: `1.5px solid ${theme.c}`, borderLeft: `1.5px solid ${theme.c}`,
            transform: "rotate(45deg)",
          }}></div>
          <span style={{ fontWeight: 500 }}>{app.call && app.call[0]}</span>
        </div>
      </div>
      {!inProgress && (
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: theme.deep, fontWeight: 700 }}>
          <span>{t.lineup.view_detail}</span><span>→</span>
        </div>
      )}
    </Card>
  );
};
