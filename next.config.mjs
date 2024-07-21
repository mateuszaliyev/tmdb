import "./src/environment.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "media.themoviedb.org",
        pathname: "/t/p/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
