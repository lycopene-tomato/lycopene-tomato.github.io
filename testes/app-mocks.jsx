// アプリ画面モック - スクショの代わりに表示する簡易UI
// 実機スクショに後で差し替え可能

const PhoneFrame = ({ children, accent = "#FFB84D" }) => (
  <div style={{
    width: 240,
    height: 480,
    background: "#1a1a1a",
    borderRadius: 36,
    padding: 8,
    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06)",
    position: "relative",
  }}>
    <div style={{
      width: "100%",
      height: "100%",
      background: "#fff",
      borderRadius: 28,
      overflow: "hidden",
      position: "relative",
    }}>
      <div style={{
        position: "absolute",
        top: 0, left: "50%",
        transform: "translateX(-50%)",
        width: 100, height: 22,
        background: "#1a1a1a",
        borderRadius: "0 0 14px 14px",
        zIndex: 10,
      }}></div>
      {children}
    </div>
  </div>
);

// 実機スクショを PhoneFrame の中に流し込むヘルパー
// src は public/screenshots/<id>.png 想定。1320x2868 など縦長スクショなら
// object-fit: cover で center-crop されます。
const ScreenshotMock = ({ src, alt }) => (
  <PhoneFrame>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center top",
        display: "block",
      }}
    />
  </PhoneFrame>
);

// パスは index.html / apps/<id>.html どちらから読まれても解決できるよう
// ルート相対 (/screenshots/...) ではなく、呼び出し時に pathPrefix を渡す形にする。
// ただし script タグからの読み込みなのでカレントは HTML と同じ → 相対パスで OK。
// index.html: ./screenshots/...  /  apps/<id>.html: ../screenshots/...
// → 簡便のため "screenshots/<id>.png" を返し、apps/<id>.html 側は <base> や
//   親ディレクトリのパスで解決させる方針はコストが高いので、両方に効く
//   絶対パス (/screenshots/...) を採用しても良いが、デプロイ先が GitHub Pages の
//   サブパス (例: /testes/) でも壊れないようにここでは相対 "../screenshots/..." と
//   "./screenshots/..." を場所に応じて切り替える。
const getScreenshotSrc = (id) => {
  // window.location.pathname に /apps/ が含まれていれば詳細ページ
  if (typeof window !== "undefined" && window.location.pathname.includes("/apps/")) {
    return `../screenshots/${id}.png`;
  }
  return `screenshots/${id}.png`;
};

// Todoガチャ画面 (実機スクショ)
const GachaMock = () => <ScreenshotMock src={getScreenshotSrc("gacha")} alt="Todoガチャ" />;

// Todoビンゴ画面 (実機スクショ)
const BingoMock = () => <ScreenshotMock src={getScreenshotSrc("bingo")} alt="Todoビンゴ" />;

// Todoすごろく画面 (実機スクショ)
const SugorokuMock = () => <ScreenshotMock src={getScreenshotSrc("sugoroku")} alt="Todoすごろく" />;

// Todo農園画面
const FarmMock = () => (
  <PhoneFrame>
    <div style={{ padding: "36px 16px 16px", height: "100%", display: "flex", flexDirection: "column", background: "linear-gradient(180deg, #E0F4FF 0%, #D8F0DD 60%, #C8E68F 100%)" }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: "#2E7A5C", textAlign: "center", letterSpacing: 1 }}>Todo農園</div>
      <div style={{ fontSize: 10, color: "#5BA886", textAlign: "center", marginTop: 4 }}>今日 3回目の水やり</div>
      <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 12 }}>
        {/* 太陽 */}
        <div style={{ position: "absolute", top: 8, right: 16, width: 32, height: 32, background: "radial-gradient(circle, #FFE070, #FFB84D)", borderRadius: "50%", boxShadow: "0 0 20px rgba(255,184,77,0.5)" }}></div>
        {/* 雲 */}
        <div style={{ position: "absolute", top: 16, left: 14, width: 40, height: 16, background: "#fff", borderRadius: 999, opacity: 0.8 }}></div>
        {/* 植物 */}
        <svg viewBox="0 0 200 240" style={{ width: "100%", height: "100%" }}>
          {/* 茎 */}
          <path d="M 100 230 Q 95 180 100 130 Q 105 100 100 70" stroke="#5BA886" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* 葉 */}
          <ellipse cx="80" cy="170" rx="20" ry="10" fill="#7DC495" transform="rotate(-25 80 170)" />
          <ellipse cx="120" cy="140" rx="22" ry="11" fill="#7DC495" transform="rotate(20 120 140)" />
          <ellipse cx="85" cy="110" rx="18" ry="9" fill="#7DC495" transform="rotate(-30 85 110)" />
          {/* 花 */}
          <circle cx="100" cy="65" r="8" fill="#FFE070" />
          <circle cx="92" cy="58" r="7" fill="#FF8AC0" />
          <circle cx="108" cy="58" r="7" fill="#FF8AC0" />
          <circle cx="92" cy="72" r="7" fill="#FF8AC0" />
          <circle cx="108" cy="72" r="7" fill="#FF8AC0" />
          <circle cx="100" cy="65" r="5" fill="#FFE070" />
          {/* プランター */}
          <path d="M 60 230 L 70 250 L 130 250 L 140 230 Z" fill="#C28860" stroke="#8B5E3C" strokeWidth="2" />
          {/* 水滴アニメ */}
          <circle cx="70" cy="40" r="3" fill="#7BC8FF" opacity="0.7" />
          <circle cx="130" cy="50" r="2" fill="#7BC8FF" opacity="0.7" />
        </svg>
      </div>
      <div style={{ background: "#fff", borderRadius: 12, padding: "8px 12px", boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize: 9, color: "#5BA886", fontWeight: 700, marginBottom: 4 }}>成長 60%</div>
        <div style={{ height: 6, background: "#E8F4DD", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ width: "60%", height: "100%", background: "linear-gradient(90deg, #7DC495, #5BA886)", borderRadius: 3 }}></div>
        </div>
      </div>
    </div>
  </PhoneFrame>
);

// TodoWBS画面
const WbsMock = () => {
  const tasks = [
    { t: "ごはん", c: "#FF8AC0", w: 22 },
    { t: "歯みがき", c: "#FFB84D", w: 14 },
    { t: "宿題", c: "#7BC8FF", w: 30 },
    { t: "ピアノ", c: "#A8E6A3", w: 18 },
    { t: "ゲーム", c: "#C9A8FF", w: 36 },
  ];
  return (
    <PhoneFrame>
      <div style={{ padding: "36px 14px 14px", height: "100%", display: "flex", flexDirection: "column", background: "linear-gradient(180deg, #FFF4F0 0%, #FFE0D0 100%)" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#C9501F", textAlign: "center", letterSpacing: 1 }}>TodoWBS</div>
        <div style={{ fontSize: 10, color: "#E08060", textAlign: "center", marginTop: 4 }}>17:00 〜 21:00</div>
        {/* 時刻軸 */}
        <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", padding: "0 4px", fontSize: 8, color: "#999", fontWeight: 600 }}>
          <span>17</span><span>18</span><span>19</span><span>20</span><span>21</span>
        </div>
        <div style={{ height: 1, background: "#ddd", margin: "2px 4px 12px" }}></div>
        {/* 矢羽 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          {tasks.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <div style={{
                width: `${t.w * 4}px`,
                maxWidth: "85%",
                height: 28,
                background: t.c,
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 8px 50%)",
                paddingLeft: 12,
                display: "flex",
                alignItems: "center",
                fontSize: 10,
                fontWeight: 700,
                color: "#fff",
                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
              }}>{t.t}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", borderRadius: 8, padding: "6px 10px", marginTop: 8, fontSize: 9, color: "#C9501F", fontWeight: 700, textAlign: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
          ⏱ 早く終わるとゲーム時間+15分
        </div>
      </div>
    </PhoneFrame>
  );
};

window.AppMocks = {
  gacha: GachaMock,
  bingo: BingoMock,
  sugoroku: SugorokuMock,
  farm: FarmMock,
  wbs: WbsMock,
};
window.PhoneFrame = PhoneFrame;
