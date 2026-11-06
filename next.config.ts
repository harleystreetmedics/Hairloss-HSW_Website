import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export, same as the Endolift sibling site (see docs/decisions.md #3).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Tailwind runs through postcss.config.mjs, so webpack and Turbopack build the CSS the same way.
};

export default nextConfig;
