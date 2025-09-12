import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    // Reduce bundle size by optimizing package imports for lucide-react
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/what-is-logchimp",
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
