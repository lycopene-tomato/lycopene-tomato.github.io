(() => {
  window.useLang = function() {
    const [lang, setLangState] = React.useState(window.getLang());
    React.useEffect(() => {
      const onChange = (e) => setLangState(e.detail);
      window.addEventListener("langchange", onChange);
      return () => window.removeEventListener("langchange", onChange);
    }, []);
    return lang;
  };
  window.AppTheme = {
    gacha: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
    bingo: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
    sugoroku: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
    farm: { c: "#F5A8C0", soft: "#FFF0F4", deep: "#B85575" },
    trouble: { c: "#A8B0BC", soft: "#EEF0F2", deep: "#5B6470" },
    timer: { c: "#7BAE74", soft: "#EAF3E5", deep: "#3F7239" },
    puzzle: { c: "#A480B8", soft: "#F0E8F5", deep: "#5B3F70" }
  };
  window.getTheme = function(id, category, idx = 0) {
    if (window.AppTheme[id]) return window.AppTheme[id];
    if (category && category.accent) return category.accent;
    const h = (idx * 47 + 30) % 360;
    return { c: `hsl(${h},65%,70%)`, soft: `hsl(${h},65%,95%)`, deep: `hsl(${h},55%,35%)` };
  };
  window.resolveHeroImage = function(app, pathPrefix = "") {
    if (!app.hero_image) return null;
    return pathPrefix + "../" + app.hero_image;
  };
  window.resolveScreenshot = function(appId, lang, pathPrefix = "") {
    return pathPrefix + "../screenshots/" + lang + "/" + appId + ".png";
  };
  const LangSwitcher = () => {
    const lang = window.useLang();
    const [open, setOpen] = React.useState(false);
    const current = window.LANGS.find((l) => l.code === lang) || window.LANGS[0];
    const shortLabel = window.LANG_SHORT[current.code] || current.code.toUpperCase();
    React.useEffect(() => {
      if (!open) return;
      const onClick = (e) => {
        if (!e.target.closest("[data-lang-switcher]")) setOpen(false);
      };
      document.addEventListener("click", onClick);
      return () => document.removeEventListener("click", onClick);
    }, [open]);
    return /* @__PURE__ */ React.createElement("div", { "data-lang-switcher": true, style: { position: "relative" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setOpen(!open), "aria-label": "Language", style: {
      fontSize: 11,
      color: "#8B7355",
      padding: "4px 10px",
      border: "1px solid rgba(189,153,108,0.4)",
      borderRadius: 999,
      background: "transparent",
      cursor: "pointer",
      fontFamily: "inherit",
      whiteSpace: "nowrap",
      letterSpacing: 0.5,
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12 } }, "\u{1F310}"), current.native, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.6 } }, "\u25BE")), open && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      right: 0,
      background: "#fff",
      border: "1px solid #D8C5A8",
      borderRadius: 12,
      padding: 8,
      minWidth: 240,
      maxHeight: 360,
      overflow: "hidden",
      zIndex: 100,
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 8px 24px rgba(0,0,0,0.12)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { overflowY: "auto", flex: 1 } }, window.LANGS.map((l) => /* @__PURE__ */ React.createElement("button", { key: l.code, onClick: () => {
      window.setLang(l.code);
      setOpen(false);
    }, style: {
      display: "flex",
      width: "100%",
      textAlign: "left",
      padding: "7px 10px",
      border: "none",
      background: l.code === lang ? "#FBF6EE" : "transparent",
      fontSize: 12,
      color: "#3D2E1F",
      borderRadius: 6,
      cursor: "pointer",
      fontFamily: "inherit",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 8
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: l.code === lang ? 700 : 500 } }, l.native), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.5 } }, l.code === "en-US" ? "en" : l.code))))));
  };
  window.WaveStack = ({ accentC = "#000", topColor = "#fff", height = 64 }) => /* @__PURE__ */ React.createElement("div", { "aria-hidden": "true", style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height,
    pointerEvents: "none",
    lineHeight: 0
  } }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 1440 64",
      preserveAspectRatio: "none",
      style: { position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.22 }
    },
    /* @__PURE__ */ React.createElement("path", { d: "M0,36 C240,56 480,16 720,30 C960,44 1200,18 1440,32 L1440,64 L0,64 Z", fill: accentC })
  ), /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 1440 64",
      preserveAspectRatio: "none",
      style: { position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }
    },
    /* @__PURE__ */ React.createElement("path", { d: "M0,44 C200,22 520,58 780,38 C1020,20 1240,52 1440,40 L1440,64 L0,64 Z", fill: accentC })
  ), /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 1440 64",
      preserveAspectRatio: "none",
      style: { position: "absolute", inset: 0, width: "100%", height: "100%" }
    },
    /* @__PURE__ */ React.createElement("path", { d: "M0,50 C260,72 540,28 800,48 C1060,68 1240,38 1440,52 L1440,64 L0,64 Z", fill: topColor })
  ));
  window.WaveDivider = window.WaveStack;
  window.categoryHref = function(catId, pathPrefix = "") {
    if (catId === "todo") return `${pathPrefix}index.html`;
    return `${pathPrefix}apps/category-${catId}.html`;
  };
  window.SiteHeader = ({ pathPrefix = "", currentCategoryId = "todo" }) => {
    const lang = window.useLang();
    const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
    const [menuOpen, setMenuOpen] = React.useState(false);
    const headerBg = "#2C2218";
    const headerBorder = "#1B130C";
    return /* @__PURE__ */ React.createElement("header", { className: "site-header", style: {
      background: headerBg,
      borderBottom: `1px solid ${headerBorder}33`
    } }, /* @__PURE__ */ React.createElement("div", { className: "site-header-inner" }, /* @__PURE__ */ React.createElement("a", { href: `${pathPrefix}index.html`, style: {
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: 0.5,
      textDecoration: "none",
      color: "#FBF6EE",
      whiteSpace: "nowrap",
      fontFamily: "var(--font-display, inherit)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "/images/logo-mark.jpeg",
        alt: "Lyco App",
        width: "32",
        height: "32",
        style: { display: "block", borderRadius: 6, background: "#FBF6EE" }
      }
    ), /* @__PURE__ */ React.createElement("span", null, "Lyco App")), /* @__PURE__ */ React.createElement("nav", { className: "site-nav", style: { display: "flex", gap: 8, fontSize: 13, alignItems: "center" } }, t.categories.map((c) => {
      const active = c.id === currentCategoryId;
      return /* @__PURE__ */ React.createElement("a", { key: c.id, className: "nav-pill", href: window.categoryHref(c.id, pathPrefix), style: {
        textDecoration: "none",
        padding: "6px 14px",
        borderRadius: 999,
        fontWeight: 700,
        fontFamily: "var(--font-display, inherit)",
        color: active ? "#2C2218" : "#FBF6EE",
        background: active ? c.accent.c : "transparent",
        border: `1px solid ${active ? c.accent.c : "rgba(251,246,238,0.25)"}`,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        transition: "all .15s"
      } }, /* @__PURE__ */ React.createElement("span", { style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: active ? "#2C2218" : c.accent.c
      } }), c.name);
    }), /* @__PURE__ */ React.createElement("a", { className: "nav-pill", href: `${pathPrefix}blog/index.html`, style: {
      textDecoration: "none",
      padding: "6px 14px",
      borderRadius: 999,
      fontWeight: 700,
      fontFamily: "var(--font-display, inherit)",
      color: "#FBF6EE",
      background: "transparent",
      border: "1px solid rgba(251,246,238,0.25)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#8B7355"
    } }), t.footer && t.footer.nav_blog || "Blog"), /* @__PURE__ */ React.createElement("a", { className: "nav-pill", href: "/notes/", style: {
      textDecoration: "none",
      padding: "6px 14px",
      borderRadius: 999,
      fontWeight: 700,
      fontFamily: "var(--font-display, inherit)",
      color: "#FBF6EE",
      background: "transparent",
      border: "1px solid rgba(251,246,238,0.25)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#5B6470"
    } }), t.footer && t.footer.nav_notes || "Notes"), /* @__PURE__ */ React.createElement("a", { className: "nav-pill", href: `${pathPrefix}about/`, style: {
      textDecoration: "none",
      padding: "6px 14px",
      borderRadius: 999,
      fontWeight: 700,
      fontFamily: "var(--font-display, inherit)",
      color: "#FBF6EE",
      background: "transparent",
      border: "1px solid rgba(251,246,238,0.25)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#8B7355"
    } }), t.footer && t.footer.nav_about || "About")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement(LangSwitcher, null), /* @__PURE__ */ React.createElement("button", { className: "site-menu-btn", onClick: () => setMenuOpen(!menuOpen), "aria-label": "menu", style: {
      display: "none",
      background: "transparent",
      border: "none",
      width: 32,
      height: 32,
      cursor: "pointer",
      padding: 0,
      color: "#FBF6EE"
    } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", width: 18, height: 1.5, background: "currentColor", margin: "5px auto" } }), /* @__PURE__ */ React.createElement("span", { style: { display: "block", width: 18, height: 1.5, background: "currentColor", margin: "5px auto" } }), /* @__PURE__ */ React.createElement("span", { style: { display: "block", width: 18, height: 1.5, background: "currentColor", margin: "5px auto" } })))), menuOpen && /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid rgba(251,246,238,0.15)", padding: "12px 24px 16px", background: "#2C2218" } }, t.categories.map((c) => {
      const active = c.id === currentCategoryId;
      return /* @__PURE__ */ React.createElement("a", { key: c.id, href: window.categoryHref(c.id, pathPrefix), onClick: () => setMenuOpen(false), style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 0",
        color: "#FBF6EE",
        textDecoration: "none",
        borderBottom: "1px dashed rgba(251,246,238,0.18)",
        fontWeight: active ? 700 : 500
      } }, /* @__PURE__ */ React.createElement("span", { style: { width: 10, height: 10, borderRadius: "50%", background: c.accent.c } }), c.name);
    }), /* @__PURE__ */ React.createElement("a", { href: `${pathPrefix}blog/index.html`, onClick: () => setMenuOpen(false), style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 0",
      color: "#FBF6EE",
      textDecoration: "none",
      borderBottom: "1px dashed rgba(251,246,238,0.18)",
      fontWeight: 500
    } }, /* @__PURE__ */ React.createElement("span", { style: { width: 10, height: 10, borderRadius: "50%", background: "#8B7355" } }), t.footer && t.footer.nav_blog || "Blog"), /* @__PURE__ */ React.createElement("a", { href: "/notes/", onClick: () => setMenuOpen(false), style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 0",
      color: "#FBF6EE",
      textDecoration: "none",
      borderBottom: "1px dashed rgba(251,246,238,0.18)",
      fontWeight: 500
    } }, /* @__PURE__ */ React.createElement("span", { style: { width: 10, height: 10, borderRadius: "50%", background: "#5B6470" } }), t.footer && t.footer.nav_notes || "Notes"), /* @__PURE__ */ React.createElement("a", { href: `${pathPrefix}about/`, onClick: () => setMenuOpen(false), style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 0",
      color: "#FBF6EE",
      textDecoration: "none",
      fontWeight: 500
    } }, /* @__PURE__ */ React.createElement("span", { style: { width: 10, height: 10, borderRadius: "50%", background: "#8B7355" } }), t.footer && t.footer.nav_about || "About")));
  };
  window.SiteFooter = ({ pathPrefix = "", currentCategoryId }) => {
    const lang = window.useLang();
    const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
    const f = t.footer || {};
    const accentC = "#8B7355";
    return /* @__PURE__ */ React.createElement("footer", { className: "site-footer", style: {
      background: "#2C2218",
      color: "#FBF6EE",
      padding: "10px 20px 8px",
      textAlign: "center",
      borderTop: `1px solid #1B130C`
    } }, (f.tagline || f.tagline_sub || f.support_url) && /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "6px 14px",
      marginBottom: 6,
      letterSpacing: 0.4,
      lineHeight: 1.4
    } }, (f.tagline || f.tagline_sub) && /* @__PURE__ */ React.createElement("div", null, f.tagline && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: "#FFB263" } }, f.tagline), f.tagline && f.tagline_sub && /* @__PURE__ */ React.createElement("span", { className: "footer-tagline-sep", style: { margin: "0 8px", opacity: 0.4, fontSize: 10 } }, "\xB7"), f.tagline_sub && /* @__PURE__ */ React.createElement("span", { className: "footer-tagline-sub", style: { fontSize: 9, opacity: 0.5, fontStyle: "italic", letterSpacing: 0.2 } }, f.tagline_sub)), f.support_url && /* @__PURE__ */ React.createElement(
      "a",
      {
        href: f.support_url,
        target: "_blank",
        rel: "noopener",
        "aria-label": f.support_label || "Buy me a coffee",
        style: { display: "inline-block", lineHeight: 0 }
      },
      /* @__PURE__ */ React.createElement(
        "img",
        {
          src: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",
          alt: f.support_label || "Buy me a coffee",
          style: { height: 32, width: "auto", verticalAlign: "middle" }
        }
      )
    )), /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "0 14px",
      fontSize: 11,
      opacity: 0.8
    } }, /* @__PURE__ */ React.createElement("a", { href: `${pathPrefix}index.html`, style: { color: "inherit", textDecoration: "none" } }, f.nav_home), /* @__PURE__ */ React.createElement("a", { href: `${pathPrefix}index.html#lineup`, style: { color: "inherit", textDecoration: "none" } }, f.nav_apps), /* @__PURE__ */ React.createElement("a", { href: `${pathPrefix}blog/index.html`, style: { color: "inherit", textDecoration: "none" } }, f.nav_blog || "Blog"), f.nav_about && /* @__PURE__ */ React.createElement("a", { href: `${pathPrefix}about/`, style: { color: "inherit", textDecoration: "none" } }, f.nav_about), f.nav_privacy && /* @__PURE__ */ React.createElement("a", { href: `${pathPrefix}../privacy-policy/`, style: { color: "inherit", textDecoration: "none" } }, f.nav_privacy), /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.5, fontSize: 10 } }, "\xB7"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, opacity: 0.5, letterSpacing: 0.3 } }, f.copy)));
  };
  window.CategoryBadge = ({ category }) => /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1,
    color: category.accent.deep,
    background: category.accent.soft,
    border: `1px solid ${category.accent.c}`,
    padding: "3px 10px",
    borderRadius: 999
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: category.accent.c } }), category.name);
  window.AllAppsList = ({ pathPrefix = "", currentCategoryId }) => {
    const lang = window.useLang();
    const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
    if (!t || !t.categories) return null;
    const allHeading = t.allapps && t.allapps.heading || "All Apps";
    const allTitle = t.allapps && t.allapps.title || "";
    const allSub = t.allapps && t.allapps.sub || "";
    const inProgressLabel = t.allapps && t.allapps.in_progress || "";
    return /* @__PURE__ */ React.createElement("section", { id: "lineup", className: "reveal", "data-snap": true, style: { padding: "clamp(48px, 7vw, 72px) 24px", borderTop: "1px solid rgba(189,153,108,0.15)", background: "#fff" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 880, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 36 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, letterSpacing: 3, fontWeight: 800, color: "#8B7355", marginBottom: 8 } }, "\u2014 ", allHeading, " \u2014"), /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 22, fontWeight: 700, margin: "0 0 8px", color: "#3D2E1F", fontFamily: "var(--font-display, inherit)", letterSpacing: "0.01em" } }, allTitle), allSub && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: "#8B7355", margin: 0, lineHeight: 1.6 } }, allSub)), t.categories.map((c) => {
      const isCurrent = currentCategoryId && c.id === currentCategoryId;
      return /* @__PURE__ */ React.createElement("div", { key: c.id, style: { marginBottom: 32 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: c.accent.c } }), /* @__PURE__ */ React.createElement("a", { href: isCurrent ? "#lineup" : window.categoryHref(c.id, pathPrefix), style: {
        fontSize: 14,
        color: c.accent.deep,
        fontWeight: 700,
        letterSpacing: 2,
        textDecoration: "none"
      } }, "\u2014 ", c.name, " \u2014"), /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: c.accent.c } })), /* @__PURE__ */ React.createElement("div", { className: "all-apps-grid" }, c.apps.map((app) => {
        const inProgress = !app.appstore_url;
        const href = inProgress ? null : `${pathPrefix}apps/${app.id}.html`;
        const Card = inProgress ? "div" : "a";
        return /* @__PURE__ */ React.createElement(
          Card,
          {
            key: app.id,
            ...href ? { href } : {},
            className: "all-app-card",
            style: {
              display: "block",
              background: inProgress ? "#F0EAE0" : "#fff",
              border: `1px solid ${inProgress ? "#D8C5A8" : c.accent.c}`,
              borderLeft: `4px solid ${inProgress ? "#BDA68C" : c.accent.c}`,
              borderRadius: 8,
              padding: "12px 14px",
              textDecoration: "none",
              color: "inherit",
              opacity: inProgress ? 0.6 : 1,
              cursor: inProgress ? "default" : "pointer",
              transition: "transform .15s",
              position: "relative"
            }
          },
          /* @__PURE__ */ React.createElement("div", { style: {
            fontSize: 10,
            color: inProgress ? "#8B7355" : c.accent.deep,
            marginBottom: 4,
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          } }, /* @__PURE__ */ React.createElement("span", null, app.tag), inProgress && /* @__PURE__ */ React.createElement("span", { style: {
            fontSize: 9,
            color: "#8B7355",
            background: "#fff",
            border: "1px dashed #BDA68C",
            padding: "1px 6px",
            borderRadius: 999,
            fontWeight: 700,
            letterSpacing: 1
          } }, inProgressLabel)),
          /* @__PURE__ */ React.createElement("div", { style: {
            fontSize: 14,
            fontWeight: 700,
            color: inProgress ? "#8B7355" : "#3D2E1F",
            lineHeight: 1.3
          } }, app.name)
        );
      })));
    })));
  };
  window.HeroImage = ({ app, theme, pathPrefix = "", height = "100%", radius = 14 }) => {
    const [err, setErr] = React.useState(false);
    const src = window.resolveHeroImage(app, pathPrefix);
    if (!src || err) {
      return /* @__PURE__ */ React.createElement("div", { style: {
        width: "100%",
        height,
        borderRadius: radius,
        background: `linear-gradient(135deg, ${theme.soft}, ${theme.c})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.deep,
        fontSize: 64,
        fontWeight: 900,
        letterSpacing: 2,
        overflow: "hidden"
      } }, (app.name || "?").slice(0, 1));
    }
    return /* @__PURE__ */ React.createElement(
      "img",
      {
        src,
        alt: app.name,
        loading: "lazy",
        onError: () => setErr(true),
        style: {
          width: "100%",
          height,
          borderRadius: radius,
          objectFit: "cover",
          display: "block"
        }
      }
    );
  };
  window.StoreButton = ({ platform, href, comingSoon }) => {
    const isApple = platform === "apple";
    const isComingSoon = comingSoon || isApple && !href;
    const Tag = isComingSoon ? "div" : "a";
    const linkProps = isComingSoon ? {} : { href, target: "_blank", rel: "noopener" };
    const appleSvg = /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" }));
    const playSvg = /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M3 3v18l15-9L3 3z" }));
    return /* @__PURE__ */ React.createElement(Tag, { ...linkProps, ...isComingSoon ? {} : { className: "store-btn" }, style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: "#000",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: 10,
      textDecoration: "none",
      opacity: isComingSoon ? 0.42 : 1,
      cursor: isComingSoon ? "default" : "pointer",
      position: "relative",
      transition: "opacity 0.2s",
      whiteSpace: "nowrap"
    } }, isApple ? appleSvg : playSvg, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "left", lineHeight: 1.1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, opacity: 0.85 } }, isApple ? "Download on the" : "GET IT ON"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600, marginTop: 1 } }, isApple ? "App Store" : "Google Play")), isComingSoon && /* @__PURE__ */ React.createElement("span", { style: {
      position: "absolute",
      top: -8,
      right: -10,
      background: "#FFD27A",
      color: "#3D2E1F",
      fontSize: 9,
      fontWeight: 700,
      padding: "2px 8px",
      borderRadius: 999,
      transform: "rotate(6deg)",
      letterSpacing: 0.5,
      boxShadow: "0 2px 4px rgba(0,0,0,0.15)"
    } }, "Coming Soon"));
  };
  window.AppCard = ({ app, idx, category, pathPrefix = "" }) => {
    const lang = window.useLang();
    const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
    const theme = window.getTheme(app.id, category, idx);
    const inProgress = !app.appstore_url;
    const inProgressLabel = t.allapps && t.allapps.in_progress || "";
    const Card = inProgress ? "div" : "a";
    const cardProps = inProgress ? {} : { href: `${pathPrefix}apps/${app.id}.html` };
    return /* @__PURE__ */ React.createElement(Card, { ...cardProps, className: "app-card", style: {
      background: "#fff",
      borderRadius: 20,
      padding: 18,
      textDecoration: "none",
      color: "inherit",
      border: `2px solid ${theme.c}`,
      "--card-accent": theme.c,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      position: "relative",
      transition: "transform 0.2s, box-shadow 0.2s",
      opacity: inProgress ? 0.65 : 1,
      cursor: inProgress ? "default" : "pointer"
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: theme.c,
      color: "#fff",
      fontSize: 11,
      fontWeight: 700,
      padding: "3px 12px",
      borderRadius: 999,
      letterSpacing: 1
    } }, String(idx + 1).padStart(2, "0")), inProgress ? /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 11,
      color: "#8B7355",
      background: "#fff",
      border: "1px dashed #BDA68C",
      padding: "3px 10px",
      borderRadius: 999,
      fontWeight: 700,
      letterSpacing: 1,
      whiteSpace: "nowrap"
    } }, inProgressLabel) : app.tag && /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: 11,
      color: theme.deep,
      background: theme.soft,
      padding: "3px 10px",
      borderRadius: 999,
      fontWeight: 700,
      whiteSpace: "nowrap"
    } }, app.tag)), /* @__PURE__ */ React.createElement("div", { className: "app-card-media", style: { aspectRatio: "16 / 9", overflow: "hidden", borderRadius: 12 } }, /* @__PURE__ */ React.createElement(window.HeroImage, { app, theme, pathPrefix, radius: 12 })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 700, color: "#3D2E1F", marginBottom: 6, fontFamily: "var(--font-display, inherit)" } }, app.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#8B7355", lineHeight: 1.6, marginBottom: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { color: theme.deep, fontWeight: 700 } }, app.formula_a), /* @__PURE__ */ React.createElement("span", { style: { margin: "0 4px" } }, "\xD7"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 700 } }, app.formula_b), /* @__PURE__ */ React.createElement("span", { style: { margin: "0 4px" } }, "="), /* @__PURE__ */ React.createElement("span", null, app.formula_c)), /* @__PURE__ */ React.createElement("div", { style: {
      position: "relative",
      background: theme.soft,
      border: `1.5px solid ${theme.c}`,
      borderRadius: 14,
      padding: "10px 14px 10px 36px",
      fontSize: 12,
      color: "#3D2E1F",
      lineHeight: 1.5,
      marginTop: 4
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: -10,
      top: "50%",
      transform: "translateY(-50%)",
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: theme.c,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      fontWeight: 700,
      boxShadow: "0 2px 4px rgba(0,0,0,0.12)"
    } }, category && category.id === "record" ? "\u{1F4AD}" : category && category.id === "other" ? "\u2049" : "\u{1F4AC}"), /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: 18,
      top: -7,
      width: 12,
      height: 12,
      background: theme.soft,
      borderTop: `1.5px solid ${theme.c}`,
      borderLeft: `1.5px solid ${theme.c}`,
      transform: "rotate(45deg)"
    } }), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 500 } }, app.call && app.call[0]))), !inProgress && /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: theme.deep, fontWeight: 700 } }, /* @__PURE__ */ React.createElement("span", null, t.lineup.view_detail), /* @__PURE__ */ React.createElement("span", { className: "app-card-arrow" }, "\u2192")));
  };
})();
