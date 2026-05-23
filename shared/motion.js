/* ============================================================
 * motion.js — モダンなスクロール演出（軽量・スマホ前提）
 * ============================================================
 * 実装している効果:
 *   1. .reveal       : 視界に入ると下から ぽわん とフェードアップ
 *   2. .reveal-stagger > * : 子要素が1個ずつ遅れて出てくる
 *   3. data-countup="N"    : 視界に入ると 0 → N までカウントアップ
 *   4. スクロールスナップ proximity (CSS側で適用、クラス付与なし)
 *
 * 仕組み:
 *   - 全ブラウザ共通で IntersectionObserver で .is-in / .visible を付与
 *   - CSS transition でフェードアップ
 *   - (旧: scroll-driven animation 経路は Safari 18.x の不完全実装で
 *     `.reveal` が opacity:0 で凍る問題があったため撤廃)
 *
 * 注意: prefers-reduced-motion で全効果オフ
 * ============================================================ */

(function () {
  if (typeof window === "undefined") return;

  const reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced) {
    // 動きを嫌うユーザー向けには即時表示
    document.documentElement.classList.add("motion-off");
    return;
  }

  // ----- IntersectionObserver で表示クラス付与 -----
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target;
          el.classList.add("is-in");
          // インライン CSS が `.reveal.visible` で表示判定する旧仕様との互換
          el.classList.add("visible");

          // カウントアップ
          if (el.dataset.countup) {
            runCountUp(el, parseInt(el.dataset.countup, 10) || 0);
          }
          io.unobserve(el);
        }
      }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" })
    : null;

  function runCountUp(el, target) {
    const dur = 900;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      // easeOutCubic
      const v = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * v));
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = String(target);
    }
    requestAnimationFrame(tick);
  }

  // 動的に追加された要素にも対応するため MutationObserver で監視
  function scan(root) {
    if (!io) return;
    // .reveal / .reveal-stagger / [data-countup] を全部監視
    const targets = root.querySelectorAll(
      ".reveal:not(.is-in), .reveal-stagger:not(.is-in), [data-countup]:not(.is-in)"
    );
    targets.forEach((el) => {
      // JS が動いている時のみ初期 staging (opacity 0) する。CSS の
      // `.reveal-staged` ルールにより JS 無効/失敗時はデフォルト表示のまま。
      el.classList.add("reveal-staged");
      io.observe(el);
    });
  }

  // 初回 + DOMContentLoaded
  if (document.readyState !== "loading") scan(document);
  document.addEventListener("DOMContentLoaded", () => scan(document));

  // React のレンダー後に追加された要素もキャッチ（軽い MutationObserver）
  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      m.addedNodes.forEach((n) => {
        if (n.nodeType === 1) scan(n);
      });
    }
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });

  // 公開
  window.__motion = { scan };

  // ============================================================
  // スクロール進捗バー
  // ============================================================
  function setupProgressBar() {
    if (document.querySelector(".scroll-progress")) return;
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    const fill = document.createElement("div");
    fill.className = "scroll-progress__fill";
    bar.appendChild(fill);
    document.body.appendChild(bar);

    const supportsScrollTimeline =
      CSS && CSS.supports && CSS.supports("animation-timeline: scroll(root)");

    if (!supportsScrollTimeline) {
      // JS フォールバック：scroll で width を更新
      let raf = 0;
      const update = () => {
        raf = 0;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
        fill.style.width = (p * 100).toFixed(2) + "%";
      };
      window.addEventListener("scroll", () => {
        if (!raf) raf = requestAnimationFrame(update);
      }, { passive: true });
      update();
    }

    // 現在のセクション色に応じて progress 色を変える
    // data-progress-color="#XXX" を持つセクションが画面に入ったら採用
    const colorIO = new IntersectionObserver((entries) => {
      // 画面中央に最も近いものを優先
      const visible = entries
        .filter((e) => e.isIntersecting)
        .map((e) => e.target);
      if (visible.length === 0) return;
      // 最後（一番下）の要素を採用 = スクロール方向で見て現在地に近い
      const top = visible[visible.length - 1];
      const c = top.getAttribute("data-progress-color");
      if (c) bar.style.setProperty("--progress-color", c);
    }, { rootMargin: "-30% 0px -50% 0px", threshold: 0 });

    function bindColors(root) {
      root.querySelectorAll("[data-progress-color]").forEach((el) => {
        colorIO.observe(el);
      });
    }
    bindColors(document);

    // 動的追加にも対応
    const cmo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((n) => {
          if (n.nodeType === 1) bindColors(n);
        });
      }
    });
    cmo.observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState !== "loading") setupProgressBar();
  else document.addEventListener("DOMContentLoaded", setupProgressBar);

  // ============================================================
  // View Transitions（ページ間遷移）
  // ============================================================
  // 同一オリジン・通常クリック・対応ブラウザのみ
  if (document.startViewTransition) {
    document.addEventListener("click", (ev) => {
      // モディファイアキー、新規タブ、middle click は除外
      if (ev.defaultPrevented) return;
      if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
      if (ev.button !== 0) return;

      const a = ev.target.closest("a[href]");
      if (!a) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;

      const href = a.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      // javascript: や mailto: は除外
      if (/^(javascript|mailto|tel):/i.test(href)) return;

      // 同一オリジンチェック
      let url;
      try { url = new URL(a.href); } catch { return; }
      if (url.origin !== location.origin) return;

      ev.preventDefault();
      document.startViewTransition(() => {
        location.href = a.href;
      });
    }, true);
  }
})();
