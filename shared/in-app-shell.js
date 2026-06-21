(() => {
  window.InAppAppsPage = function() {
    const lang = window.useLang();
    const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK];
    const inApp = t && t.in_app || {};
    const fromApp = React.useMemo(() => {
      try {
        return new URLSearchParams(window.location.search).get("from") || "";
      } catch (e) {
        return "";
      }
    }, []);
    const allApps = window.flattenApps(lang) || [];
    const otherApps = allApps.filter((a) => a.id !== fromApp);
    const ctSuffix = "?ct=in-app-from-" + (fromApp || "unknown");
    return /* @__PURE__ */ React.createElement("div", { style: { background: "#FBF6EE", minHeight: "100vh", color: "#3D2E1F" } }, /* @__PURE__ */ React.createElement("header", { style: {
      padding: "12px 16px",
      textAlign: "center",
      borderBottom: "1px solid #EBE4D6",
      background: "#FFFBF1"
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      fontSize: 14,
      fontWeight: 800,
      letterSpacing: 1.5,
      color: "#5C4936"
    } }, "Lyco App")), /* @__PURE__ */ React.createElement("main", { style: { maxWidth: 720, margin: "0 auto", padding: "28px 18px 60px" } }, /* @__PURE__ */ React.createElement("h1", { style: { fontSize: 22, fontWeight: 900, margin: "0 0 10px", lineHeight: 1.4 } }, inApp.title || "Other apps"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, opacity: 0.75, lineHeight: 1.7, margin: "0 0 24px" } }, inApp.lead || ""), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: 12 } }, otherApps.map((app) => {
      const theme = window.getTheme(app.id, app._category) || { soft: "#FFF0F4" };
      const iconSrc = "../../images/icons/" + app.id + ".png";
      const detailHref = (app.appstore_url || "") + ctSuffix;
      return /* @__PURE__ */ React.createElement(
        "a",
        {
          key: app.id,
          href: detailHref,
          target: "_blank",
          rel: "noopener",
          style: {
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "14px 16px",
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: 14,
            textDecoration: "none",
            color: "inherit"
          }
        },
        /* @__PURE__ */ React.createElement(
          "img",
          {
            src: iconSrc,
            alt: "",
            loading: "lazy",
            style: {
              width: 56,
              height: 56,
              borderRadius: 12,
              flexShrink: 0,
              objectFit: "cover",
              background: theme.soft
            }
          }
        ),
        /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 800, marginBottom: 4 } }, app.name), /* @__PURE__ */ React.createElement("div", { style: {
          fontSize: 12,
          opacity: 0.75,
          lineHeight: 1.5,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis"
        } }, app.concept || "")),
        /* @__PURE__ */ React.createElement("span", { style: {
          fontSize: 11,
          color: "#8B7355",
          flexShrink: 0,
          paddingLeft: 8
        } }, "\u2192")
      );
    }), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "https://lycoapp.com/?ct=in-app-home-from-" + (fromApp || "unknown"),
        target: "_blank",
        rel: "noopener",
        style: {
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "14px 16px",
          background: "#fff",
          border: "1px solid #eee",
          borderRadius: 14,
          textDecoration: "none",
          color: "inherit",
          marginTop: 8
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            width: 56,
            height: 56,
            borderRadius: 12,
            flexShrink: 0,
            background: "#FFE2EA",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        },
        /* @__PURE__ */ React.createElement(
          "img",
          {
            src: "../../images/logo-puzzle.png",
            alt: "",
            loading: "lazy",
            style: {
              width: 38,
              height: 38,
              objectFit: "contain",
              display: "block"
            }
          }
        )
      ),
      /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 800, marginBottom: 4 } }, "Own Your Day!"), /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: 12,
        opacity: 0.75,
        lineHeight: 1.5
      } }, "Start with One Step")),
      /* @__PURE__ */ React.createElement("span", { style: {
        fontSize: 11,
        color: "#8B7355",
        flexShrink: 0,
        paddingLeft: 8
      } }, "\u2192")
    ))));
  };
})();
