import { ImageResponse } from "next/og";

// Required for `output: export` — prerender the OG image at build time.
export const dynamic = "force-static";

export const alt = "The HootLab Media — Creative marketing that makes brands impossible to ignore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Og() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F7F7F5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 16, height: 16, background: "#F5A21A", borderRadius: 4 }} />
          <div style={{ fontSize: 24, letterSpacing: 2, color: "#082E6D", fontWeight: 700 }}>
            THE HOOTLAB MEDIA
          </div>
        </div>
        <div style={{ fontSize: 66, lineHeight: 1.1, marginTop: 30, color: "#082E6D", fontWeight: 800 }}>
          Creative marketing that
        </div>
        <div style={{ fontSize: 66, lineHeight: 1.1, color: "#F5A21A", fontWeight: 800 }}>
          makes brands impossible to ignore.
        </div>
        <div style={{ fontSize: 26, marginTop: 30, color: "#5b6577" }}>
          Reels · Social · Brand Strategy · Performance
        </div>
      </div>
    ),
    { ...size },
  );
}
