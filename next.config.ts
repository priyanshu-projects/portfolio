import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES ? "/portfolio" : "",
  assetPrefix: process.env.GITHUB_PAGES ? "/portfolio/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
