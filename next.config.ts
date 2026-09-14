import type { NextConfig } from "next";
import { ROUTES } from "./src/lib/constants";

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
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      // Recover malformed language links using the same registry as the switcher.
      ...(Object.keys(ROUTES.en) as Array<keyof typeof ROUTES.en>).flatMap((key) => {
        if (key === "home") return [];
        return [
          { source: `/es${ROUTES.en[key]}`, destination: ROUTES.es[key], statusCode: 301 },
          { source: ROUTES.es[key].replace(/^\/es/, ""), destination: ROUTES.en[key], statusCode: 301 },
        ];
      }),
      ...["privacy-policy", "terms-of-use"].map((slug) => ({
        source: `/es/${slug}`, destination: `/${slug}`, statusCode: 301,
      })),
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
