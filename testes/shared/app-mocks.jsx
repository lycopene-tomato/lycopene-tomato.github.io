// アプリ画面モック（カテゴリ対応版）

const PhoneFrame = ({ children, accent = "#FFB84D" }) => (
  <div style={{
    width: 240, height: 480,
    background: "#1a1a1a", borderRadius: 36, padding: 8,
    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06)",
    position: "relative",
  }}>
    <div style={{
      width: "100%", height: "100%",
      background: "#fff", borderRadius: 28,
      overflow: "hidden", position: "relative",
    }}>
      <div style={{
        position: "absolute", top: 0, left: "50%",
        transform: "translateX(-50%)",
        width: 100, height: 22, background: "#1a1a1a",
        borderRadius: "0 0 14px 14px", zIndex: 10,
      }}></div>
      {children}
    </div>
  </div>
);

const ScreenshotMock = ({ src, alt }) => (
  <PhoneFrame>
    <img src={src} alt={alt} loading="lazy"
      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
  </PhoneFrame>
);

const getScreenshotSrc = (id) => {
  if (typeof window !== "undefined" && window.location.pathname.includes("/apps/")) {
    return `../screenshots/${id}.png`;
  }
  return `screenshots/${id}.png`;
};

// 既存：実機スクショ系
const GachaMock    = () => <ScreenshotMock src={getScreenshotSrc("gacha")}    alt="Todoガチャ" />;
const BingoMock    = () => <ScreenshotMock src={getScreenshotSrc("bingo")}    alt="Todoビンゴ" />;
const SugorokuMock = () => <ScreenshotMock src={getScreenshotSrc("sugoroku")} alt="Todoすごろく" />;

// Todo農園 — SVG
const FarmMock = () => (
  <PhoneFrame>
    <div style={{ padding: "36px 16px 16px", height: "100%", display: "flex", flexDirection: "column", background: "linear-gradient(180deg, #E0F4FF 0%, #D8F0DD 60%, #C8E68F 100%)" }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: "#2E7A5C", textAlign: "center", letterSpacing: 1 }}>Todo農園</div>
      <div style={{ fontSize: 10, color: "#5BA886", textAlign: "center", marginTop: 4 }}>今日 3回目の水やり</div>
      <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 12 }}>
        <div style={{ position: "absolute", top: 8, right: 16, width: 32, height: 32, background: "radial-gradient(circle, #FFE070, #FFB84D)", borderRadius: "50%", boxShadow: "0 0 20px rgba(255,184,77,0.5)" }}></div>
        <div style={{ position: "absolute", top: 16, left: 14, width: 40, height: 16, background: "#fff", borderRadius: 999, opacity: 0.8 }}></div>
        <svg viewBox="0 0 200 240" style={{ width: "100%", height: "100%" }}>
          <path d="M 100 230 Q 95 180 100 130 Q 105 100 100 70" stroke="#5BA886" strokeWidth="4" fill="none" strokeLinecap="round" />
          <ellipse cx="80" cy="170" rx="20" ry="10" fill="#7DC495" transform="rotate(-25 80 170)" />
          <ellipse cx="120" cy="140" rx="22" ry="11" fill="#7DC495" transform="rotate(20 120 140)" />
          <ellipse cx="85" cy="110" rx="18" ry="9" fill="#7DC495" transform="rotate(-30 85 110)" />
          <circle cx="100" cy="65" r="8" fill="#FFE070" />
          <circle cx="92" cy="58" r="7" fill="#FF8AC0" />
          <circle cx="108" cy="58" r="7" fill="#FF8AC0" />
          <circle cx="92" cy="72" r="7" fill="#FF8AC0" />
          <circle cx="108" cy="72" r="7" fill="#FF8AC0" />
          <circle cx="100" cy="65" r="5" fill="#FFE070" />
          <path d="M 60 230 L 70 250 L 130 250 L 140 230 Z" fill="#C28860" stroke="#8B5E3C" strokeWidth="2" />
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

// TodoWBS — SVG
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
        <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", padding: "0 4px", fontSize: 8, color: "#999", fontWeight: 600 }}>
          <span>17</span><span>18</span><span>19</span><span>20</span><span>21</span>
        </div>
        <div style={{ height: 1, background: "#ddd", margin: "2px 4px 12px" }}></div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          {tasks.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <div style={{
                width: `${t.w * 4}px`, maxWidth: "85%", height: 28,
                background: t.c,
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 8px 50%)",
                paddingLeft: 12, display: "flex", alignItems: "center",
                fontSize: 10, fontWeight: 700, color: "#fff",
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

// 忘れ物ノート — シンプルな記録リスト型UI
const WasuremonoMock = () => {
  const items = [
    { day: "月", item: "体操服", subj: "体育", c: "#FF8AC0" },
    { day: "火", item: "リコーダー", subj: "音楽", c: "#C9A8FF" },
    { day: "水", item: "ぞうきん", subj: "—", c: "#7BC8FF" },
    { day: "木", item: "宿題プリント", subj: "国語", c: "#FFB84D" },
  ];
  return (
    <PhoneFrame>
      <div style={{ padding: "36px 14px 14px", height: "100%", display: "flex", flexDirection: "column", background: "linear-gradient(180deg, #F4F8FC 0%, #E3EFF8 100%)" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#2C5F85", textAlign: "center", letterSpacing: 1 }}>忘れ物ノート</div>
        <div style={{ fontSize: 9, color: "#4A90C8", textAlign: "center", marginTop: 4 }}>今月 4件</div>

        {/* 集計 */}
        <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
          <div style={{ flex: 1, background: "#fff", borderRadius: 8, padding: "8px 6px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#4A90C8" }}>4</div>
            <div style={{ fontSize: 7, color: "#888" }}>今月</div>
          </div>
          <div style={{ flex: 1, background: "#fff", borderRadius: 8, padding: "8px 6px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#7BAE74" }}>↓2</div>
            <div style={{ fontSize: 7, color: "#888" }}>先月比</div>
          </div>
          <div style={{ flex: 1, background: "#fff", borderRadius: 8, padding: "8px 6px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#C9501F" }}>月</div>
            <div style={{ fontSize: 7, color: "#888" }}>多い曜日</div>
          </div>
        </div>

        {/* 履歴 */}
        <div style={{ flex: 1, marginTop: 12, display: "flex", flexDirection: "column", gap: 5, overflow: "hidden" }}>
          {items.map((it, i) => (
            <div key={i} style={{
              background: "#fff", borderRadius: 8, padding: "8px 10px",
              display: "flex", alignItems: "center", gap: 8,
              borderLeft: `3px solid ${it.c}`,
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: "50%",
                background: "#F4F8FC", color: "#2C5F85",
                fontSize: 10, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{it.day}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#3D2E1F" }}>{it.item}</div>
                <div style={{ fontSize: 8, color: "#888" }}>{it.subj}</div>
              </div>
              <div style={{ fontSize: 11, color: "#BBB" }}>›</div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 8, background: "#4A90C8", color: "#fff",
          borderRadius: 999, padding: "8px 0", textAlign: "center",
          fontSize: 10, fontWeight: 700,
        }}>
          ＋ 今日の記録
        </div>
      </div>
    </PhoneFrame>
  );
};

// トラブルノート — 出来事タイムライン型UI
const TroubleMock = () => {
  const events = [
    { d: "11/12", t: "教室", who: "Aさん", c: "#5E81A8" },
    { d: "11/05", t: "校庭", who: "Bさん", c: "#5E81A8" },
    { d: "10/28", t: "教室", who: "Aさん", c: "#5E81A8" },
  ];
  return (
    <PhoneFrame>
      <div style={{ padding: "36px 14px 14px", height: "100%", display: "flex", flexDirection: "column", background: "linear-gradient(180deg, #F2F5F8 0%, #E8EEF5 100%)" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#3A506B", textAlign: "center", letterSpacing: 1 }}>トラブルノート</div>
        <div style={{ fontSize: 9, color: "#5E81A8", textAlign: "center", marginTop: 4 }}>記録 3件 ／ 今月</div>

        {/* 注釈 */}
        <div style={{
          background: "#fff", border: "1px dashed #B8C4D4",
          borderRadius: 8, padding: "8px 10px", marginTop: 12,
          fontSize: 8, color: "#3A506B", lineHeight: 1.5, textAlign: "center",
        }}>
          落ち着いた時に、後から書く。<br />それでいい。
        </div>

        {/* タイムライン */}
        <div style={{ flex: 1, marginTop: 12, position: "relative", paddingLeft: 18, overflow: "hidden" }}>
          <div style={{
            position: "absolute", left: 6, top: 4, bottom: 4,
            width: 2, background: "#D5DCE5",
          }}></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {events.map((e, i) => (
              <div key={i} style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", left: -18, top: 6,
                  width: 10, height: 10, borderRadius: "50%",
                  background: e.c,
                  boxShadow: "0 0 0 3px #fff, 0 0 0 4px #D5DCE5",
                }}></div>
                <div style={{
                  background: "#fff", borderRadius: 8, padding: "8px 10px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#3A506B" }}>{e.d}</div>
                    <div style={{ fontSize: 8, color: "#888", background: "#F2F5F8", padding: "2px 6px", borderRadius: 4 }}>{e.t}</div>
                  </div>
                  <div style={{ fontSize: 9, color: "#5C4936", marginTop: 4 }}>
                    関係: <span style={{ fontWeight: 700 }}>{e.who}</span>
                  </div>
                  <div style={{
                    height: 4, background: "#F2F5F8", borderRadius: 2, marginTop: 6,
                    width: "70%",
                  }}></div>
                  <div style={{
                    height: 4, background: "#F2F5F8", borderRadius: 2, marginTop: 3,
                    width: "50%",
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 8, background: "#3A506B", color: "#fff",
          borderRadius: 999, padding: "8px 0", textAlign: "center",
          fontSize: 10, fontWeight: 700,
        }}>
          ＋ 出来事を残す
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
  wasuremono: WasuremonoMock,
  trouble: TroubleMock,
};
window.PhoneFrame = PhoneFrame;
