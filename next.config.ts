import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   dynamicIO: true,
  //   staleTimes: {
  //     dynamic: 30,
  //   },
  // },
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
