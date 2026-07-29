import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore: allowedDevOrigins is needed for local dev network access
  allowedDevOrigins: ["192.168.56.1"],
  images: {
    // ... rest of your config
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
