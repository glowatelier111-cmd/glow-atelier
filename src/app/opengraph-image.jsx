import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/logo/logo-og.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #090807 0%, #16110e 45%, #0f0c0a 100%)",
        }}
      >
        <img src={logoSrc} width={640} height={135} />
        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#dccfbe",
          }}
        >
          Laserska epilacija · Hydrafacial · Oblikovanje tijela
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 24,
            color: "#b6a794",
          }}
        >
          Rijeka
        </div>
      </div>
    ),
    { ...size }
  );
}
