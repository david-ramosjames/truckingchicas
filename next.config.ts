import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static pages for optimal performance
  output: undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
