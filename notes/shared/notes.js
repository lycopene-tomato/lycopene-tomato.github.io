/* Architecture Notes — shared behaviors (progressive enhancement only)
   1) 読了プログレスバー (#progress-bar があるページのみ)
   2) pre ブロックへのコピーボタン注入
   どちらも失敗してもページ閲覧には影響しない。
   ※ BMC widget は各 HTML 末尾のインライン script + shared/bmc-quotes.js が担当
   (document.write でパーサー挿入 = 静的タグと同じタイミングを保証)。 */
(function () {
  "use strict";

  /* --- reading progress --- */
  var bar = document.getElementById("progress-bar");
  if (bar) {
    addEventListener("scroll", function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    }, { passive: true });
  }

  /* --- copy button on <pre class="paste"> ---
     付録 (再現メモ) の貼り付け用サンプルだけに付ける。本文中の pre は
     「読ませる」ためのもので、コピーさせる意図がないので対象外。 */
  if (navigator.clipboard) {
    var pres = document.querySelectorAll("article pre.paste");
    var labelCopy = document.documentElement.lang === "ja" ? "コピー" : "copy";
    var labelDone = document.documentElement.lang === "ja" ? "コピーした" : "copied";
    pres.forEach(function (pre) {
      var text = pre.innerText.trim(); /* ボタン注入前に本文を確定させる */
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "copy-btn";
      btn.textContent = labelCopy;
      btn.setAttribute("aria-label", labelCopy);
      btn.addEventListener("click", function () {
        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = labelDone;
          setTimeout(function () { btn.textContent = labelCopy; }, 1600);
        });
      });
      /* ボタンは pre の「外」(ラッパー) に置く。pre の中に入れると縦スクロール
         した時に一緒に流れて画面外へ消えてしまうため。 */
      var wrap = document.createElement("div");
      wrap.className = "paste-wrap";
      pre.parentNode.insertBefore(wrap, pre);
      wrap.appendChild(btn);
      wrap.appendChild(pre);
    });
  }

})();
