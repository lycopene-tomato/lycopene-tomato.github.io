/* eslint-disable */
/*
 * blog配下のページに、共通のサイトヘッダー/フッターを差し込む薄いラッパー。
 * 使い方:
 *   <body>
 *     <div id="site-header"></div>
 *     <div class="wrap">…記事本文…</div>
 *     <div id="site-footer"></div>
 *
 *     <!-- React + Babel + langs + content + i18n-loader + site-shared.jsx -->
 *     <script type="text/babel" src="../../shared/blog-shell.jsx"
 *             data-path-prefix="../../"></script>
 *
 *  data-path-prefix は blog/index.html → "../" 、blog/daily/index.html → "../../"、
 *  blog/daily/posts/x.html → "../../../" のように、その階層から見たサイトルートまでの相対。
 */
(function () {
  const tag = document.currentScript;
  const pathPrefix = (tag && tag.dataset && tag.dataset.pathPrefix) || "../";

  function mount() {
    const headerEl = document.getElementById("site-header");
    const footerEl = document.getElementById("site-footer");
    if (window.SiteHeader && headerEl) {
      ReactDOM.createRoot(headerEl).render(
        <window.SiteHeader pathPrefix={pathPrefix} currentCategoryId={null} />
      );
    }
    if (window.SiteFooter && footerEl) {
      ReactDOM.createRoot(footerEl).render(
        <window.SiteFooter pathPrefix={pathPrefix} currentCategoryId={null} />
      );
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
