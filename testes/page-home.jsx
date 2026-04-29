/* ============================================================
 * page-home.jsx — トップページ
 * ============================================================
 * 構成:  Hero → Empathy → Lineup → Footer
 *
 * Claude Code 向けメモ:
 * - 文面は全て window.I18N[lang] から取得（i18n.js）
 * - レイアウトは全幅。コンテンツは max-width で中央寄せ
 * - レスポンシブはCSSメディアクエリで制御（HTML側 <style> に集約）
 * ============================================================ */

window.HomePage = () => {
  const lang = window.useLang();
  const t = window.I18N[lang];

  return (
    <div style={{ width: "100%", background: "#FBF6EE", color: "#3D2E1F" }}>
      <window.SiteHeader />

      {/* ============================================
           HERO（ファーストビュー）
       ============================================ */}
      <section className="hero" style={{ padding: "clamp(60px, 10vw, 100px) 24px clamp(40px, 6vw, 80px)", position: "relative", overflow: "hidden" }}>
        {/* 装飾の落書き（モバイルでは非表示） */}
        <svg className="deco-only-pc" style={{ position: "absolute", top: 60, left: 60, opacity: 0.4 }} width="80" height="80" viewBox="0 0 80 80">
          <path d="M10 40 Q 25 10, 40 40 T 70 40" stroke="#E89A3D" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="65" cy="35" r="3" fill="#E89A3D" />
        </svg>
        <svg className="deco-only-pc" style={{ position: "absolute", top: 120, right: 80, opacity: 0.5 }} width="60" height="60" viewBox="0 0 60 60">
          <path d="M30 5 L35 22 L52 22 L38 32 L43 50 L30 40 L17 50 L22 32 L8 22 L25 22 Z" fill="#FFE070" stroke="#E89A3D" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <svg className="deco-only-pc" style={{ position: "absolute", bottom: 40, left: 120, opacity: 0.4 }} width="100" height="60" viewBox="0 0 100 60">
          <path d="M5 50 Q 30 30, 50 35 T 95 25" stroke="#7BAE74" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="4 4" />
        </svg>

        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <div style={{ fontSize: 13, color: "#8B7355", letterSpacing: 4, marginBottom: 24 }}>{t.hero.eyebrow}</div>
          <h1 className="hero-title" style={{ margin: 0, fontWeight: 700, letterSpacing: "0.02em" }}>
            <span style={{ color: "#E89A3D", position: "relative", display: "inline-block" }}>
              {t.hero.title_a}
              <svg style={{ position: "absolute", bottom: -8, left: 0, width: "100%" }} height="12" viewBox="0 0 120 12" preserveAspectRatio="none">
                <path d="M2 8 Q 30 2, 60 6 T 118 5" stroke="#FFD27A" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <span style={{ color: "#BDA68C", margin: "0 16px", fontWeight: 400 }}>{t.hero.title_x}</span>
            <span style={{ color: "#7BAE74", position: "relative", display: "inline-block" }}>
              {t.hero.title_b}
              <svg style={{ position: "absolute", bottom: -8, left: 0, width: "100%" }} height="12" viewBox="0 0 140 12" preserveAspectRatio="none">
                <path d="M2 8 Q 35 2, 70 6 T 138 5" stroke="#A8D9A0" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            <span style={{ color: "#BDA68C", margin: "0 16px", fontWeight: 400 }}>{t.hero.title_eq}</span>
            <span style={{ color: "#D26B8A", position: "relative", display: "inline-block" }}>
              {t.hero.title_c}
              <svg style={{ position: "absolute", bottom: -10, left: -8, right: -8 }} width="calc(100% + 16px)" height="20" viewBox="0 0 160 20" preserveAspectRatio="none">
                <ellipse cx="80" cy="10" rx="76" ry="7" stroke="#F5A8C0" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="hero-sub" style={{ marginTop: "clamp(36px, 6vw, 60px)", color: "#5C4936", whiteSpace: "pre-line" }}>{t.hero.sub}</p>
          <a href="#lineup" style={{
            display: "inline-block", marginTop: 40,
            background: "#E89A3D", color: "#fff",
            padding: "16px 40px", borderRadius: 999,
            textDecoration: "none", fontWeight: 700, fontSize: 15,
            boxShadow: "0 6px 0 #B8651A",
          }}>{t.hero.cta} ↓</a>
        </div>
      </section>

      {/* ============================================
           EMPATHY（共感メッセージ）
       ============================================ */}
      <section id="empathy" style={{ padding: "clamp(60px, 8vw, 80px) 24px", background: "#fff", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: "#8B7355", letterSpacing: 3, textAlign: "center", marginBottom: 12 }}>— {t.empathy.label} —</div>

          <div style={{
            background: "#FBF6EE", border: "2px dashed #D8C5A8", borderRadius: 16,
            padding: "clamp(28px, 5vw, 40px) clamp(24px, 5vw, 48px)", position: "relative",
          }}>
            <div style={{ position: "absolute", top: -16, right: 32, background: "#FFD27A", padding: "6px 16px", fontSize: 12, transform: "rotate(3deg)", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>ママの本音</div>
            {t.empathy.lines.map((line, i) => (
              <p key={i} style={{ fontSize: "clamp(15px, 2.4vw, 17px)", lineHeight: 2.2, margin: 0, color: "#3D2E1F" }}>{line}</p>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <div style={{ fontSize: 14, color: "#8B7355", marginBottom: 12 }}>✏️ {t.empathy.tried_label}</div>
            {t.empathy.tried.map((line, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "clamp(14px, 2.2vw, 16px)", lineHeight: 1.8, marginBottom: 8, color: "#5C4936" }}>
                <span style={{ color: "#D26B8A", fontWeight: 700 }}>→</span>
                <span style={{ textDecoration: "line-through", textDecorationColor: "#D26B8A", textDecorationThickness: 2 }}>{line}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, padding: "32px 0", borderTop: "1px dashed #D8C5A8", borderBottom: "1px dashed #D8C5A8" }}>
            <p style={{ fontSize: "clamp(16px, 2.6vw, 18px)", lineHeight: 2, whiteSpace: "pre-line", color: "#3D2E1F", margin: 0 }}>{t.empathy.pivot}</p>
          </div>

          <div style={{ marginTop: 48, textAlign: "center" }}>
            <div style={{ fontSize: 14, color: "#8B7355", marginBottom: 16 }}>💡 {t.empathy.idea_label}</div>
            <p style={{ fontSize: "clamp(18px, 3vw, 22px)", lineHeight: 1.9, fontWeight: 700, whiteSpace: "pre-line", color: "#E89A3D", margin: 0 }}>{t.empathy.idea}</p>
          </div>

          <p style={{ fontSize: "clamp(14px, 2.2vw, 16px)", lineHeight: 2, marginTop: 56, color: "#5C4936", whiteSpace: "pre-line", textAlign: "center" }}>{t.empathy.closing}</p>
        </div>
      </section>

      {/* ============================================
           LINEUP（アプリ一覧グリッド）
           ※アプリ数が増えても自動でグリッドが拡張されます
       ============================================ */}
      <section id="lineup" style={{ padding: "clamp(60px, 10vw, 100px) 24px", background: "#FBF6EE", scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 13, color: "#8B7355", letterSpacing: 3, marginBottom: 12 }}>— {t.lineup.label} —</div>
            <h2 style={{ fontSize: "clamp(26px, 5vw, 36px)", margin: 0, color: "#3D2E1F", fontWeight: 700 }}>{t.lineup.title}</h2>
            <p style={{ color: "#8B7355", marginTop: 12 }}>{t.lineup.sub}</p>
            <div style={{ marginTop: 16, fontSize: 13, color: "#BDA68C" }}>
              {t.lineup.app_count_prefix} <span style={{ color: "#E89A3D", fontWeight: 700 }}>{t.apps.length}</span> {t.lineup.app_count_suffix}
            </div>
          </div>
          <div className="lineup-grid">
            {t.apps.map((app, i) => (
              <window.AppCard key={app.id} app={app} idx={i} />
            ))}
            {/* Coming Soon プレースホルダ */}
            <div style={{
              background: "transparent", borderRadius: 20, padding: 24,
              border: "2px dashed #D8C5A8",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              minHeight: 380, color: "#BDA68C", gap: 12,
            }}>
              <div style={{ fontSize: 36 }}>＋</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{t.lineup.coming_soon}</div>
              <div style={{ fontSize: 12, textAlign: "center", lineHeight: 1.6, padding: "0 16px", whiteSpace: "pre-line" }}>
                {t.lineup.coming_soon_sub}
              </div>
            </div>
          </div>
        </div>
      </section>

      <window.SiteFooter />
    </div>
  );
};
