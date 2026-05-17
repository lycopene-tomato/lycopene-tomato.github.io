/* ============================================================
 * shared/langs.js — 対応言語の一覧 (2 言語: ja + en-US)
 * ============================================================
 * 1 言語あたりの翻訳ドリフトを排除し、ja を正本として en-US を
 * 厳密照合で維持する方針のため、対応言語を 2 つに絞ってあります。
 * App Store メタデータ (50 ロケール) は別管理。
 *
 * ★ 言語を増やす場合: ここに 1 行追加 + content/<code>/ を作る
 * ★ デフォルト言語 (= フォールバック先) は "en-US"
 * ============================================================ */

window.LANGS = [
  { code: "en-US",   label: "English",                 native: "English",  dir: "ltr" },
  { code: "ja",      label: "Japanese",                native: "日本語",    dir: "ltr" },
  { code: "zh-Hant", label: "Chinese (Traditional)",   native: "繁體中文",  dir: "ltr" },
  { code: "ko",      label: "Korean",                  native: "한국어",    dir: "ltr" },
];

window.DEFAULT_LANG = "en-US";
window.LANG_FALLBACK = "en-US";

// ----------------------------------------------------------
// 短縮ラベル (ヘッダーの言語ボタン用)
// ----------------------------------------------------------
window.LANG_SHORT = {};
window.LANGS.forEach((l) => {
  window.LANG_SHORT[l.code] = l.code.toUpperCase().replace(/-.+$/, "");
});

// ----------------------------------------------------------
// Accept-Language → サポート言語コードへのマッピング
//   - ja-*           → ja
//   - ko-*           → ko
//   - zh-Hant/TW/HK  → zh-Hant
//   - zh-Hans/CN/SG  → en-US (簡体字は未対応)
//   - その他         → en-US
// ----------------------------------------------------------
window.matchLang = function (acceptLang) {
  if (!acceptLang) return window.DEFAULT_LANG;
  const tags = String(acceptLang).split(",").map((s) => s.trim().split(";")[0]);
  for (const tag of tags) {
    const lower = tag.toLowerCase();
    if (lower === "ja" || lower.startsWith("ja-")) return "ja";
    if (lower === "ko" || lower.startsWith("ko-")) return "ko";
    // 繁体字判定: zh-Hant, zh-TW, zh-HK, zh-MO は繁体字
    if (lower === "zh-hant" || lower.startsWith("zh-hant-") ||
        lower === "zh-tw" || lower === "zh-hk" || lower === "zh-mo") {
      return "zh-Hant";
    }
  }
  return window.DEFAULT_LANG;
};

// ----------------------------------------------------------
// 言語コード保存・取得
// ----------------------------------------------------------
window.getLang = function () {
  // URLパスから推定（/<lang>/...）優先
  try {
    const m = location.pathname.match(/^\/(?:[^/]+\/)*?([a-z]{2,3}(?:-[A-Za-z]+)?)(?:\/|$)/i);
    if (m) {
      const cand = m[1];
      const hit = window.LANGS.find((l) => l.code.toLowerCase() === cand.toLowerCase());
      if (hit) return hit.code;
    }
  } catch (e) {}
  const saved = localStorage.getItem("lp_lang");
  if (saved && window.LANGS.some((l) => l.code === saved)) return saved;
  return window.DEFAULT_LANG;
};

window.setLang = function (code) {
  if (!window.LANGS.some((l) => l.code === code)) return;
  localStorage.setItem("lp_lang", code);
  // URL の言語セグメントを書き換えて遷移
  const cur = window.getLang();
  if (cur === code) {
    window.dispatchEvent(new CustomEvent("langchange", { detail: code }));
    return;
  }
  // /<cur>/... → /<code>/...
  const path = location.pathname;
  let next;
  if (path.includes("/" + cur + "/")) {
    next = path.replace("/" + cur + "/", "/" + code + "/");
  } else if (path.endsWith("/" + cur)) {
    next = path.replace("/" + cur, "/" + code);
  } else {
    // 推定できない場合はそのまま保存して reload
    localStorage.setItem("lp_lang", code);
    location.reload();
    return;
  }
  location.href = next + location.search + location.hash;
};
