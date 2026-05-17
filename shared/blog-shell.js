(() => {
  (function() {
    const tag = document.currentScript;
    const pathPrefix = tag && tag.dataset && tag.dataset.pathPrefix || "../";
    function mount() {
      const headerEl = document.getElementById("site-header");
      const footerEl = document.getElementById("site-footer");
      if (window.SiteHeader && headerEl) {
        ReactDOM.createRoot(headerEl).render(
          /* @__PURE__ */ React.createElement(window.SiteHeader, { pathPrefix, currentCategoryId: null })
        );
      }
      if (window.SiteFooter && footerEl) {
        ReactDOM.createRoot(footerEl).render(
          /* @__PURE__ */ React.createElement(window.SiteFooter, { pathPrefix, currentCategoryId: null })
        );
      }
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", mount);
    } else {
      mount();
    }
  })();
})();
