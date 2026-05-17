/* ============================================================
 * shared/i18n-loader.js — content/<lang>/*.js を window.I18N に組立
 * ============================================================
 * 各言語ファイルは window.__CONTENT__[lang] にデータを書き込む
 * 規約になっています:
 *
 *   window.__CONTENT__.<lang>.common      = { nav, hero, empathy, lineup, detail, footer }
 *   window.__CONTENT__.<lang>.categories  = { todo: {...}, record: {...}, tool: {...}, other: {...} }
 *
 * このローダーは上記をフラットな I18N 構造に変換します:
 *
 *   window.I18N.<lang> = {
 *     ...common,
 *     categories: [todo, record, tool, other]   // 配列順
 *   }
 *
 * カテゴリの並び順は CATEGORY_ORDER で固定。
 * ============================================================ */

window.CATEGORY_ORDER = ["todo", "record", "tool", "other"];

window.I18N = window.I18N || {};

(function build() {
  const src = window.__CONTENT__ || {};
  const langs = Object.keys(src);
  langs.forEach((lang) => {
    const c = src[lang] || {};
    const common = c.common || {};
    const cats = c.categories || {};
    const orderedCats = window.CATEGORY_ORDER
      .map((id) => cats[id])
      .filter(Boolean);
    window.I18N[lang] = Object.assign({}, common, {
      categories: orderedCats,
    });
  });
})();

// ----------------------------------------------------------
// findApp / flattenApps（旧 i18n.js から踏襲）
// ----------------------------------------------------------
window.flattenApps = function (lang) {
  const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK || "en-US"];
  if (!t || !t.categories) return [];
  const out = [];
  t.categories.forEach((cat) => {
    cat.apps.forEach((app) => {
      out.push({ ...app, _category: cat });
    });
  });
  return out;
};

window.findApp = function (lang, appId) {
  const t = window.I18N[lang] || window.I18N[window.LANG_FALLBACK || "en-US"];
  if (!t || !t.categories) return null;
  for (let ci = 0; ci < t.categories.length; ci++) {
    const cat = t.categories[ci];
    const ai = cat.apps.findIndex((a) => a.id === appId);
    if (ai >= 0) {
      return { app: cat.apps[ai], category: cat, catIndex: ci, appIndex: ai };
    }
  }
  return null;
};
