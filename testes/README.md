# testes/ — Lycopene サイト構造（Claude Code 向けマニュアル）

> **このドキュメントは Claude Code 向けの作業マニュアルです。**
> 「テキストだけ差し替えたい」「言語を増やしたい」「ブログを追加したい」が、ここを見るだけで完結するように書いています。
>
> 想定デプロイ：GitHub Pages（静的ファイルのみ・ビルド不要）。
> ブラウザ上で React + Babel(Standalone) を読み、JSX をその場でトランスパイルして動かしています。

---

## 0. 全体アーキテクチャ（30秒で読む）

```
                 ┌──────────────────────┐
                 │  testes/index.html   │  ← UA判定でリダイレクト
                 └─────────┬────────────┘
                           │
         ┌─────────────────┴──────────────────┐
         │                                    │
   /ja/index.html                       /en/index.html
   /ja/apps/<appId>.html                /en/apps/<appId>.html
   /ja/apps/category-<id>.html          /en/apps/category-<id>.html
   /ja/blog/...                         /en/blog/...
         │                                    │
         └────── 同じ shared/ を読む ──────────┘
                           │
                ┌──────────┴──────────┐
                │                     │
         shared/*.jsx           content/<lang>/*.js
         （描画ロジック）          （翻訳テキスト）
```

**HTMLは型枠（テンプレ）。テキストは持っていない。**
HTMLは `pathPrefix` と `appId` / `categoryId` だけを React コンポーネントに渡す薄いシェルです。
**翻訳は `content/<lang>/*.js` だけで完結します。**

---

## 1. ディレクトリ構造

```
testes/
├── index.html                    ← UA判定リダイレクタ（中身ほぼ空）
├── README.md                     ← このファイル
│
├── shared/                       ← 言語非依存の実装（基本触らない）
│   ├── langs.js                  ← 対応44言語リスト・getLang/setLang/matchLang
│   ├── i18n-loader.js            ← __CONTENT__ → window.I18N へ組み立て（en フォールバック含む）
│   ├── motion.css / motion.js    ← スクロール演出（ぼわーん／フェードイン等）
│   ├── site-shared.jsx           ← Header / Footer / AppCard / AllAppsList / LangSwitcher
│   ├── page-category.jsx         ← カテゴリLP汎用（4カテゴリ全てを1テンプレで描画）
│   ├── page-detail.jsx           ← アプリ詳細ページ汎用
│   ├── category-nav-patterns.jsx ← LP下部の「ほかのフィールドへ」ナビ（Pattern A〜E）
│   └── blog-shell.jsx            ← ブログ index / 記事ページ共通シェル
│
├── content/                      ← ★ 翻訳・テキストはここを編集する
│   ├── ja/
│   │   ├── common.js             ← ヘッダー/フッター/ヒーロー/共通文言
│   │   ├── todo.js               ← Todo系カテゴリ + 配下アプリのテキスト
│   │   ├── record.js             ← 記録系
│   │   ├── tool.js               ← ツール系
│   │   └── other.js              ← その他
│   └── en/                       ← 同じ構成（英語）
│
├── images/
│   ├── apps/<appId>.jpeg         ← 言語非依存のアプリ紹介画像
│   └── screenshots/              ← 言語別スクショ（任意）
│       ├── <lang>/<appId>-1..6.jpeg   ← 言語別優先
│       └── <appId>-1..6.jpeg          ← 言語別が無ければこちらにフォールバック
│
├── ja/                           ← 日本語サイト
│   ├── index.html                ← Todo系LP（トップ兼用）
│   ├── apps/
│   │   ├── category-record.html
│   │   ├── category-tool.html
│   │   ├── category-other.html
│   │   └── <appId>.html          ← 各アプリ詳細（gacha / bingo / farm / …）
│   └── blog/
│       ├── index.html            ← ブログ一覧（ベタ書き <li class="post">）
│       └── posts/<slug>.html     ← 各記事
│
└── en/                           ← 英語サイト（/ja/ と同構成）
```

---

## 2. テキストを差し替える（最頻出）

### 共通テキスト（ヘッダー・フッター・ヒーロー）

→ `content/<lang>/common.js`

```js
window.__CONTENT__.ja.common = {
  nav: { apps: "アプリ一覧", story: "コンセプト", ... },
  hero: { title_a: "遊び", title_b: "やる事", title_c: "習慣", sub: "...", cta: "..." },
  empathy: { ... },
  lineup: { ... },
  detail: { ... },
  footer: { ... },
};
```

**キー名は変えない。値だけ書き換える。**

### カテゴリ・アプリのテキスト

→ `content/<lang>/<category>.js`（todo / record / tool / other）

```js
window.__CONTENT__.ja.categories.todo = {
  id: "todo",                  // ← 変えない（URL・ファイル名と直結）
  name: "Todo系",
  subtitle: "...",
  accent: { c, soft, deep },   // ← 色は触らない（デザインで決め打ち）
  eyebrow: "習慣化",
  formula: { a, b, c },        // ← ヒーローの「遊び × やる事 = 習慣」
  story: { tagline, intro, empathy: {...} },
  apps: [
    {
      id: "gacha",             // ← 変えない（URL・ファイル名と直結）
      name: "Todoガチャ",
      tag: "サプライズ",
      appstore_url: "",        // ← App Store公開時にURLを入れる
      hero_image: "images/apps/gacha.jpeg",
      formula_a: "...", formula_b: "...", formula_c: "...",
      concept: "...",
      call: ["セリフ1", "セリフ2"],
      trick: ["仕掛け1", "仕掛け2"],
    },
    // ...
  ],
};
```

**順序の決まり**

- `apps` の並び順 = LPでの表示順
- カテゴリの並び順は `shared/i18n-loader.js` の `CATEGORY_ORDER`（`["todo","record","tool","other"]`）

---

## 3. アプリを追加する

1. `content/ja/<category>.js` の `apps` 配列に1要素追加
2. `content/en/<category>.js` にも同じ `id` で追加（テキストだけ翻訳）
3. **アプリ詳細ページのHTML**を作る（テンプレートをコピー）
   - `cp ja/apps/gacha.html ja/apps/<newId>.html`
   - 中の `appId="gacha"` を `appId="<newId>"` に書き換える
   - `en/` も同様
4. 紹介画像を `images/apps/<newId>.jpeg` に置く
5. （任意）スクショを `images/screenshots/<lang>/<newId>-1..6.jpeg` に置く

---

## 4. 言語を追加する（44言語のうち未作成のものを足す）

対応言語は `shared/langs.js` の `window.LANGS` に **44言語** すでに定義済み。
ディレクトリと content/ が無いだけ。

1. `content/<新コード>/` を作って 5 ファイル（common, todo, record, tool, other）を翻訳
   - **`content/en/` をそのままコピーして翻訳するのが速い**
2. `<新コード>/` ディレクトリを作って `ja/` と同じ HTML 構成をコピー
   - `cp -r ja <新コード>` 後、各HTMLの `<html lang="ja">` を新言語に書き換え
   - HTML本体は **すべて pathPrefix とコンポーネント呼び出しだけ** なので翻訳不要
3. ルート `index.html` の中の `EXISTING = ["ja","en"]` 配列に新コードを追加
   - これを忘れると、UA判定で当たっても 404 にフォールバックされる
4. （任意）スクショを `images/screenshots/<新コード>/` に置く

> **★ 重要：HTMLは触らない**
> HTMLは「テンプレ」であってテキストは持っていない。
> 翻訳作業は **`content/<lang>/*.js` だけ** で完結します。

---

## 5. ブログを書く

### ファイル配置

```
<lang>/blog/
├── index.html                    ← 一覧。<li class="post"> を手で積んでいく
└── posts/<slug>.html             ← 各記事
```

### 新しい記事を追加する

1. `<lang>/blog/posts/<slug>.html` を、既存の記事をコピーして作る
   - 例：`cp ja/blog/posts/no-more-nagging.html ja/blog/posts/<slug>.html`
2. 記事内の `<h1>` / 本文 / 日付（`<time datetime="...">`）を書き換える
3. 画像を貼るなら `images/blog/<file>` に置いて、`<img src="../../../images/blog/<file>">` で参照
4. **一覧に追記**：`<lang>/blog/index.html` の `<ul class="posts">` の先頭に `<li class="post">` を1件追加
   - 新しいものを上に積む
5. 1記事3分で書ける分量を目安に（長文は続かない）

> 記事ページ／一覧ページは `shared/blog-shell.jsx` がヘッダー・フッター・言語切替を流し込みます。
> 記事HTMLには本文だけ書けばOK（`<article>` の中に `<h1>` ＋ `<time>` ＋ 本文）。

---

## 6. スクリーンショットの配置

`images/screenshots/<lang>/<appId>-1..6.jpeg`

- 言語別パスを **優先** で探し、無ければ `images/screenshots/<appId>-N` を見る
- ファイルが無ければ詳細ページの「スクリーン」セクション自体が出ません（壊れません）
- jpeg / png どちらでも OK

---

## 7. デプロイ（GitHub Pages）

1. このリポジトリの `testes/` を **リポジトリ直下**に置く構成にする
   - もしくは Pages 設定で `testes/` を root にする
2. ルートの `index.html` が `Accept-Language` を見て `/ja/` か `/en/` にリダイレクト
3. localStorage に `lp_lang` が保存されていれば、それを優先（ヘッダーの言語切替で保存される）

> **未公開言語へのリダイレクト保護**
> `index.html` 内の `EXISTING = [...]` に列挙された言語のみリダイレクト先候補になります。
> 言語ディレクトリを増やしたら、ここを必ず更新してください。

### ローカル動作確認

```sh
cd testes
python3 -m http.server 8000
```

`http://localhost:8000/` にアクセス → 言語判定でリダイレクト
`http://localhost:8000/ja/` / `/en/` で直接見られます。

---

## 8. shared/ の中で何が起きているか

| ファイル | 役割 |
|---|---|
| `langs.js` | `window.LANGS`（44言語）／`getLang()`／`setLang()`／`matchLang()` |
| `i18n-loader.js` | `<script>` で読まれた `window.__CONTENT__` を `window.I18N` に整形。翻訳が無いキーは `en` にフォールバック |
| `site-shared.jsx` | `Header` / `Footer` / `LangSwitcher` / `AppCard` / `AllAppsList`。`window.*` に export |
| `page-category.jsx` | カテゴリLP（ヒーロー＋ストーリー＋アプリ一覧＋他カテゴリへのナビ） |
| `page-detail.jsx` | アプリ詳細（ヒーロー＋コンセプト＋スクショ＋同カテゴリ他アプリ） |
| `category-nav-patterns.jsx` | LP下部の「ほかのフィールドへ」ナビのバリエーション（Pattern A〜E） |
| `blog-shell.jsx` | ブログ一覧／記事の共通シェル（ヘッダー・フッター・言語切替を差し込む） |
| `motion.css` / `motion.js` | スクロール in-view で `.m-fade` `.m-rise`（ぼわーんと下から） を発火 |

### モーション（motion.css / motion.js）

クラスを付けるだけで発火します：

```html
<section class="m-rise">…</section>          <!-- 下からふわっと -->
<h2 class="m-fade">…</h2>                    <!-- フェードイン -->
<div class="m-rise" style="--m-delay: 120ms">…</div>  <!-- 段差 -->
```

LP内の **コンテンツ切り替わり目** にこれを足すと「ぼわーん」が出ます。

---

## 9. SEO の方針

- 各HTMLに `<meta name="description">` を設定（テンプレ生成時に入れている）
- `<link rel="canonical">` を各ページに **手動で追加するのが望ましい**（このバージョンは未挿入）
- ブログは **更新頻度がSEOに効く**ので、少しずつ更新する想定
- ブログ記事は **ロングテール狙い**（「Todoガチャ 朝の支度」「Bingo 宿題」など具体的な使い方ワード）
- アプリ詳細ページは `<h1>{アプリ名}</h1>` で構造化（現状 `<h1>` あり）

---

## 10. よくある「変えていいもの・悪いもの」

| 種類 | 変えていい？ |
|------|---|
| `content/<lang>/*.js` の **値**（文字列） | ✅ 変えてOK |
| `content/<lang>/*.js` の **キー名** | ❌ 触らない |
| `id`（カテゴリID・アプリID） | ❌ URLとファイル名と直結 |
| `accent`（カテゴリの色） | ❌ デザインで決め打ち |
| `apps` 配列の **追加・並び替え** | ✅ ただし HTML も同期させる |
| HTMLファイルの中身 | 基本❌（`pathPrefix` と `appId` / `categoryId` 以外は触らない） |
| `shared/` 配下 | ❌ コンポーネント本体（デザイン全体に影響） |
| `images/` 配下の追加 | ✅ |
| ブログ記事の追加 | ✅ |

---

## 11. ファイルが見つからない時のフォールバック

- 翻訳が無い言語は **英語(`en`)** の文字列を使う（`shared/i18n-loader.js`）
- アプリ画像が無い時は最初の文字でプレースホルダ表示
- スクショが無い時はセクション自体が非表示
- ブラウザの言語が未対応の時は **`/en/`** にリダイレクト

---

## 12. デバッグの早見表

| 症状 | 原因 / 直し方 |
|---|---|
| 文字が `undefined` で出る | `content/<lang>/*.js` のキー名がコンポーネント側と一致していない |
| 言語切替しても切り替わらない | `localStorage.lp_lang` を消してリロード（DevTools → Application → Local Storage） |
| 新言語に飛ばない | ルート `index.html` の `EXISTING` 配列に追加し忘れ |
| スクショが出ない | `images/screenshots/<lang>/<appId>-1.jpeg` のパス／拡張子をチェック |
| LPの「下からぼわーん」が出ない | セクションに `class="m-rise"` を付け忘れ／親に `overflow:hidden` |
| Babel 由来のエラー | `shared/*.jsx` を `<script type="text/babel">` で読めているか確認 |

---

## ライセンス

© 2026 Lycopene.
