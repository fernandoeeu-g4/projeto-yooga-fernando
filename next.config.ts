import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatar.iran.liara.run",
      },
      {
        hostname: "i.imgur.com",
      },
    ],
  },
};

export default nextConfig;
