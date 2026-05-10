/* ============================================================
 * shared/langs.js — 対応言語の一覧（44言語）
 * ============================================================
 * App Store 対応言語に合わせています。
 * code は ISO 639-1 (一部 BCP-47 サブタグ付き)。
 * URL は /<code>/ をそのまま使用。
 *
 * ★ 言語を増やす場合: ここに1行追加 + content/<code>/ を作る
 * ★ デフォルト言語(=フォールバック先) は "en"
 * ============================================================ */

window.LANGS = [
  // 主要言語（先頭に置く）
  { code: "en",     label: "English",            native: "English",     dir: "ltr" },
  { code: "ja",     label: "Japanese",           native: "日本語",        dir: "ltr" },

  // ヨーロッパ
  { code: "de",     label: "German",             native: "Deutsch",       dir: "ltr" },
  { code: "es",     label: "Spanish",            native: "Español",       dir: "ltr" },
  { code: "es-MX",  label: "Spanish (Mexico)",   native: "Español (MX)",  dir: "ltr" },
  { code: "fr",     label: "French",             native: "Français",      dir: "ltr" },
  { code: "fr-CA",  label: "French (Canada)",    native: "Français (CA)", dir: "ltr" },
  { code: "it",     label: "Italian",            native: "Italiano",      dir: "ltr" },
  { code: "pt-BR",  label: "Portuguese (Brazil)",native: "Português (BR)",dir: "ltr" },
  { code: "pt-PT",  label: "Portuguese (Portugal)", native: "Português (PT)", dir: "ltr" },
  { code: "nl",     label: "Dutch",              native: "Nederlands",    dir: "ltr" },
  { code: "sv",     label: "Swedish",            native: "Svenska",       dir: "ltr" },
  { code: "no",     label: "Norwegian",          native: "Norsk",         dir: "ltr" },
  { code: "da",     label: "Danish",             native: "Dansk",         dir: "ltr" },
  { code: "fi",     label: "Finnish",            native: "Suomi",         dir: "ltr" },
  { code: "is",     label: "Icelandic",          native: "Íslenska",      dir: "ltr" },
  { code: "pl",     label: "Polish",             native: "Polski",        dir: "ltr" },
  { code: "cs",     label: "Czech",              native: "Čeština",       dir: "ltr" },
  { code: "sk",     label: "Slovak",             native: "Slovenčina",    dir: "ltr" },
  { code: "hu",     label: "Hungarian",          native: "Magyar",        dir: "ltr" },
  { code: "ro",     label: "Romanian",           native: "Română",        dir: "ltr" },
  { code: "el",     label: "Greek",              native: "Ελληνικά",      dir: "ltr" },
  { code: "bg",     label: "Bulgarian",          native: "Български",     dir: "ltr" },
  { code: "hr",     label: "Croatian",           native: "Hrvatski",      dir: "ltr" },
  { code: "uk",     label: "Ukrainian",          native: "Українська",    dir: "ltr" },
  { code: "ru",     label: "Russian",            native: "Русский",       dir: "ltr" },

  // 中東・アフリカ
  { code: "tr",     label: "Turkish",            native: "Türkçe",        dir: "ltr" },
  { code: "ar",     label: "Arabic",             native: "العربية",        dir: "rtl" },
  { code: "he",     label: "Hebrew",             native: "עברית",          dir: "rtl" },

  // インド
  { code: "hi",     label: "Hindi",              native: "हिन्दी",          dir: "ltr" },

  // 東南アジア
  { code: "id",     label: "Indonesian",         native: "Bahasa Indonesia", dir: "ltr" },
  { code: "ms",     label: "Malay",              native: "Bahasa Melayu", dir: "ltr" },
  { code: "th",     label: "Thai",               native: "ไทย",           dir: "ltr" },
  { code: "vi",     label: "Vietnamese",         native: "Tiếng Việt",    dir: "ltr" },

  // 東アジア
  { code: "ko",     label: "Korean",             native: "한국어",         dir: "ltr" },
  { code: "zh-Hans",label: "Chinese (Simplified)",   native: "简体中文",   dir: "ltr" },
  { code: "zh-Hant",label: "Chinese (Traditional)",  native: "繁體中文",   dir: "ltr" },
  { code: "zh-HK",  label: "Chinese (Hong Kong)",    native: "繁體中文 (HK)", dir: "ltr" },

  // その他
  { code: "ca",     label: "Catalan",            native: "Català",        dir: "ltr" },
  { code: "et",     label: "Estonian",           native: "Eesti",         dir: "ltr" },
  { code: "lv",     label: "Latvian",            native: "Latviešu",      dir: "ltr" },
  { code: "lt",     label: "Lithuanian",         native: "Lietuvių",      dir: "ltr" },
  { code: "sl",     label: "Slovenian",          native: "Slovenščina",   dir: "ltr" },
  { code: "fil",    label: "Filipino",           native: "Filipino",      dir: "ltr" },
];

window.DEFAULT_LANG = "en";
window.LANG_FALLBACK = "en";

// ----------------------------------------------------------
// 短縮ラベル（ヘッダーの言語ボタン用）
// ----------------------------------------------------------
window.LANG_SHORT = {};
window.LANGS.forEach((l) => {
  window.LANG_SHORT[l.code] = l.code.toUpperCase().replace(/-.+$/, "");
});

// ----------------------------------------------------------
// Accept-Language → サポート言語コードへのマッピング
// ----------------------------------------------------------
window.matchLang = function (acceptLang) {
  if (!acceptLang) return window.DEFAULT_LANG;
  const codes = window.LANGS.map((l) => l.code.toLowerCase());
  // 完全一致を優先
  const tags = String(acceptLang).split(",").map((s) => s.trim().split(";")[0].toLowerCase());
  for (const tag of tags) {
    if (codes.includes(tag)) return window.LANGS[codes.indexOf(tag)].code;
  }
  // 言語サブタグだけで一致（例: "ja-JP" → "ja"）
  for (const tag of tags) {
    const primary = tag.split("-")[0];
    const idx = codes.findIndex((c) => c.split("-")[0] === primary);
    if (idx >= 0) return window.LANGS[idx].code;
  }
  return window.DEFAULT_LANG;
};

// ----------------------------------------------------------
// 言語コード保存・取得
// ----------------------------------------------------------
window.getLang = function () {
  // URLパスから推定（/<lang>/...）優先
  try {
    const m = location.pathname.match(/^\/(?:[^/]+\/)*?([a-z]{2,3}(?:-[A-Za-z]+)?)(?:\/|$)/);
    if (m) {
      const cand = m[1];
      if (window.LANGS.some((l) => l.code.toLowerCase() === cand.toLowerCase())) {
        return window.LANGS.find((l) => l.code.toLowerCase() === cand.toLowerCase()).code;
      }
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
  const re = new RegExp("^/(?:.*?/)?" + cur + "(/|$)");
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
