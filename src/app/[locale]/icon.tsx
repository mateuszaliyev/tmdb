import { ImageResponse } from "next/og";

import { Logo } from "@/components/logo";

export const runtime = "edge";

export const size = {
  height: 512,
  width: 512,
};

export const contentType = "image/png";

const Icon = () =>
  new ImageResponse(
    (
      <div
        style={{
          ...size,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Logo style={{ height: size.width / 2, width: size.width }} />
      </div>
    ),
    { ...size },
  );

export default Icon;
