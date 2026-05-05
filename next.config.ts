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
  async redirects() {
    return [
      // Spanish help URLs missing the /es locale prefix → add it (301)
      {
        source: "/ayuda-accidente-camion",
        destination: "/es/ayuda-accidente-camion",
        permanent: true,
      },
      {
        source: "/ayuda-accidente-camion/:slug",
        destination: "/es/ayuda-accidente-camion/:slug",
        permanent: true,
      },
      // English help URLs that picked up an /es prefix → strip it (301)
      {
        source: "/es/truck-accident-help",
        destination: "/truck-accident-help",
        permanent: true,
      },
      {
        source: "/es/truck-accident-help/:slug",
        destination: "/truck-accident-help/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
