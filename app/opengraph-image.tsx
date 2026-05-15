import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Software Group Innovation — Technology Solutions for Impact-Driven Organizations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050d1a",
          padding: "64px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "50%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,212,255,0.18) 0%, transparent 65%)",
            transform: "translateX(-50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 65%)",
          }}
        />

        {/* Top: Logo wordmark + badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* SGI monogram */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #00d4ff 0%, #0ea5e9 100%)",
            }}
          >
            <span
              style={{
                color: "#050d1a",
                fontSize: "22px",
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              SGI
            </span>
          </div>
          <span
            style={{
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Software Group Innovation
          </span>
        </div>

        {/* Center: Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#00d4ff",
              }}
            />
            <span
              style={{
                color: "#00d4ff",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              African Technology Startup
            </span>
          </div>
          <div
            style={{
              fontSize: "58px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Technology Solutions
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #00d4ff 0%, #0ea5e9 50%, #34d399 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              for Impact-Driven
            </span>
            <br />
            Organizations.
          </div>
        </div>

        {/* Bottom: Domain + practice areas */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              color: "#64748b",
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            sgi-africa.com
          </span>
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              "Technology",
              "Financial Innovation",
              "Health",
              "Cybersecurity",
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 14px",
                  borderRadius: "100px",
                  border: "1px solid rgba(0,212,255,0.25)",
                  backgroundColor: "rgba(0,212,255,0.08)",
                  color: "#94a3b8",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
