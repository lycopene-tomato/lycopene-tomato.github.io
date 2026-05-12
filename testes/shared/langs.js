/* ============================================================
 * shared/langs.js — 対応言語の一覧（47言語）
 * ============================================================
 * Apple App Store の 50 ロケールに合わせています (en-US で
 * en-AU/CA/GB を統合、合計 47 ディレクトリ)。
 * code は BCP 47 (Apple ロケールと同じ命名)。
 * URL は /<code>/ をそのまま使用。
 *
 * ★ 言語を増やす場合: ここに1行追加 + content/<code>/ を作る
 * ★ デフォルト言語(=フォールバック先) は "en-US"
 * ============================================================ */

window.LANGS = [
  // 主要言語（先頭に置く）
  { code: "en-US",  label: "English",            native: "English",       dir: "ltr" },
  { code: "ja",     label: "Japanese",           native: "日本語",         dir: "ltr" },

  // ヨーロッパ
  { code: "de-DE",  label: "German",             native: "Deutsch",       dir: "ltr" },
  { code: "es-ES",  label: "Spanish (Spain)",    native: "Español (ES)",  dir: "ltr" },
  { code: "es-MX",  label: "Spanish (Mexico)",   native: "Español (MX)",  dir: "ltr" },
  { code: "fr-FR",  label: "French",             native: "Français",      dir: "ltr" },
  { code: "fr-CA",  label: "French (Canada)",    native: "Français (CA)", dir: "ltr" },
  { code: "it",     label: "Italian",            native: "Italiano",      dir: "ltr" },
  { code: "pt-BR",  label: "Portuguese (Brazil)",native: "Português (BR)",dir: "ltr" },
  { code: "pt-PT",  label: "Portuguese (Portugal)", native: "Português (PT)", dir: "ltr" },
  { code: "nl-NL",  label: "Dutch",              native: "Nederlands",    dir: "ltr" },
  { code: "sv",     label: "Swedish",            native: "Svenska",       dir: "ltr" },
  { code: "no",     label: "Norwegian",          native: "Norsk",         dir: "ltr" },
  { code: "da",     label: "Danish",             native: "Dansk",         dir: "ltr" },
  { code: "fi",     label: "Finnish",            native: "Suomi",         dir: "ltr" },
  { code: "pl",     label: "Polish",             native: "Polski",        dir: "ltr" },
  { code: "cs",     label: "Czech",              native: "Čeština",       dir: "ltr" },
  { code: "sk",     label: "Slovak",             native: "Slovenčina",    dir: "ltr" },
  { code: "hu",     label: "Hungarian",          native: "Magyar",        dir: "ltr" },
  { code: "ro",     label: "Romanian",           native: "Română",        dir: "ltr" },
  { code: "el",     label: "Greek",              native: "Ελληνικά",      dir: "ltr" },
  { code: "hr",     label: "Croatian",           native: "Hrvatski",      dir: "ltr" },
  { code: "sl-SI",  label: "Slovenian",          native: "Slovenščina",   dir: "ltr" },
  { code: "uk",     label: "Ukrainian",          native: "Українська",    dir: "ltr" },
  { code: "ru",     label: "Russian",            native: "Русский",       dir: "ltr" },
  { code: "ca",     label: "Catalan",            native: "Català",        dir: "ltr" },

  // 中東・アフリカ (RTL)
  { code: "tr",     label: "Turkish",            native: "Türkçe",        dir: "ltr" },
  { code: "ar-SA",  label: "Arabic",             native: "العربية",        dir: "rtl" },
  { code: "he",     label: "Hebrew",             native: "עברית",          dir: "rtl" },

  // インド・パキスタン
  { code: "hi",     label: "Hindi",              native: "हिन्दी",         dir: "ltr" },
  { code: "bn-BD",  label: "Bengali",            native: "বাংলা",          dir: "ltr" },
  { code: "gu-IN",  label: "Gujarati",           native: "ગુજરાતી",         dir: "ltr" },
  { code: "kn-IN",  label: "Kannada",            native: "ಕನ್ನಡ",          dir: "ltr" },
  { code: "ml-IN",  label: "Malayalam",          native: "മലയാളം",         dir: "ltr" },
  { code: "mr-IN",  label: "Marathi",            native: "मराठी",          dir: "ltr" },
  { code: "or-IN",  label: "Odia",               native: "ଓଡ଼ିଆ",          dir: "ltr" },
  { code: "pa-IN",  label: "Punjabi",            native: "ਪੰਜਾਬੀ",         dir: "ltr" },
  { code: "ta-IN",  label: "Tamil",              native: "தமிழ்",          dir: "ltr" },
  { code: "te-IN",  label: "Telugu",             native: "తెలుగు",         dir: "ltr" },
  { code: "ur-PK",  label: "Urdu",               native: "اردو",           dir: "rtl" },

  // 東南アジア
  { code: "id",     label: "Indonesian",         native: "Bahasa Indonesia", dir: "ltr" },
  { code: "ms",     label: "Malay",              native: "Bahasa Melayu", dir: "ltr" },
  { code: "th",     label: "Thai",               native: "ไทย",           dir: "ltr" },
  { code: "vi",     label: "Vietnamese",         native: "Tiếng Việt",    dir: "ltr" },

  // 東アジア
  { code: "ko",     label: "Korean",             native: "한국어",         dir: "ltr" },
  { code: "zh-Hans",label: "Chinese (Simplified)",   native: "简体中文",   dir: "ltr" },
  { code: "zh-Hant",label: "Chinese (Traditional)",  native: "繁體中文",   dir: "ltr" },
];

window.DEFAULT_LANG = "en-US";
window.LANG_FALLBACK = "en-US";

// ----------------------------------------------------------
// 短縮ラベル（ヘッダーの言語ボタン用）
// ----------------------------------------------------------
window.LANG_SHORT = {};
window.LANGS.forEach((l) => {
  window.LANG_SHORT[l.code] = l.code.toUpperCase().replace(/-.+$/, "");
});

// ----------------------------------------------------------
// Accept-Language → サポート言語コードへのマッピング
//   - 完全一致 → 該当言語コード
//   - 言語サブタグ一致 (ja-JP → ja, en-AU → en-US 等) → 主区別の代表ロケール
//   - 部分一致 (zh-TW → zh-Hant 等) → 文字種別ベースのフォールバック
// ----------------------------------------------------------
window.matchLang = function (acceptLang) {
  if (!acceptLang) return window.DEFAULT_LANG;
  const codes = window.LANGS.map((l) => l.code);
  const codesLower = codes.map((c) => c.toLowerCase());
  const tags = String(acceptLang).split(",").map((s) => s.trim().split(";")[0]);

  // 1. 完全一致 (大文字小文字を無視)
  for (const tag of tags) {
    const idx = codesLower.indexOf(tag.toLowerCase());
    if (idx >= 0) return codes[idx];
  }

  // 2. 特別ルール (Apple ロケールの分化を主区別へフォールバック)
  const specialMap = {
    "en-au": "en-US", "en-ca": "en-US", "en-gb": "en-US", "en": "en-US",
    "es": "es-ES",
    "fr": "fr-FR",
    "de": "de-DE",
    "nl": "nl-NL",
    "pt": "pt-BR",
    "sl": "sl-SI",
    "ar": "ar-SA",
    "ur": "ur-PK",
    "bn": "bn-BD",
    "gu": "gu-IN", "kn": "kn-IN", "ml": "ml-IN", "mr": "mr-IN",
    "or": "or-IN", "pa": "pa-IN", "ta": "ta-IN", "te": "te-IN",
    "zh-tw": "zh-Hant", "zh-hk": "zh-Hant", "zh": "zh-Hans",
  };
  for (const tag of tags) {
    const lower = tag.toLowerCase();
    if (specialMap[lower]) return specialMap[lower];
    // 言語サブタグ単体でもチェック (ja-JP → ja)
    const primary = lower.split("-")[0];
    if (specialMap[primary]) return specialMap[primary];
    const idx = codesLower.findIndex((c) => c.split("-")[0] === primary);
    if (idx >= 0) return codes[idx];
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
