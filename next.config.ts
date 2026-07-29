import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error: allowedDevOrigins is required by recent Next.js security updates but may be missing from older local TS types.
  allowedDevOrigins: ["192.168.56.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Added pravatar to allow the Co-Host mock images
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;