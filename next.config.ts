import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["@/", "next-intl"],
  generateEtags: false,
};

export default nextConfig;
