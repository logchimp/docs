import { createMDX } from "fumadocs-mdx/next";

const permanentRedirects = [
  // legacy (docs v0.1)
  {
    source: "/docs/hosting",
    destination: "/self-hosting",
  },
  {
    source: "/docs/user-guide/:path",
    destination: "/guide",
  },
  {
    source: "/docs/setup",
    destination: "/platform/setup",
  },

  // (docs v0.2)
  {
    source: "/docs",
    destination: "/platform/what-is-logchimp",
  },
  {
    source: "/docs/install",
    destination: "/self-hosting/installation",
  },
  {
    source: "/docs/faq",
    destination: "/platform/additional-resources/faq",
  },
  {
    source: "/docs/miscellaneous/faq",
    destination: "/platform/additional-resources/faq",
  },
  {
    source: "/docs/support",
    destination: "/self-hosting/support",
  },
  {
    source: "/docs/resources/support",
    destination: "/self-hosting/support",
  },
  {
    source: "/docs/architecture",
    destination: "/developing/resources/architecture",
  },
  {
    source: "/docs/resources/architecture",
    destination: "/developing/resources/architecture",
  },
  {
    source: "/docs/what-is-logchimp",
    destination: "/platform/what-is-logchimp",
  },
  {
    source: "/docs/intro",
    destination: "/platform/overview",
  },
  {
    source: "/docs/miscellaneous/security-policy",
    destination: "/platform/additional-resources/security-policy",
  },
  {
    source: "/docs/cli",
    destination: "/self-hosting/installation",
  },
  {
    source: "/docs/install/getting-started",
    destination: "/self-hosting/installation",
  },
  {
    source: "/docs/install/railway",
    destination: "/self-hosting/deployments/railway",
  },
  {
    source: "/docs/install/render",
    destination: "/self-hosting/deployments/render",
  },
  {
    source: "/docs/install/docker",
    destination: "/self-hosting/docker",
  },
  {
    source: "/docs/environment-variables",
    destination: "/self-hosting/environment-variables",
  },
  {
    source: "/docs/resources/ecosystem",
    destination: "/developing/resources/ecosystem",
  },
  {
    source: "/platform",
    destination: "/platform/overview",
  },
  {
    source: "/self-hosting",
    destination: "/self-hosting/installation",
  },
  {
    source: "/developing",
    destination: "/developing/introduction",
  },
];

const redirects = [
  ...permanentRedirects.map(({ source, destination }) => ({
    source,
    destination,
    permanent: true,
  })),

  // temporary
  {
    source: "/",
    destination: "/platform/overview",
    permanent: false,
  },
];

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    // Reduce bundle size by optimizing package imports for lucide-react
    optimizePackageImports: ["lucide-react"],
  },
  allowedDevOrigins: ["localhost"],
  async redirects() {
    return redirects;
  },

  images: {
    // Use Cloudflare Image Resizing instead of bundling image optimization
    unoptimized: true,
  },
};

export default withMDX(config);

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
process.env.CF_WORKER === "1" ? initOpenNextCloudflareForDev() : undefined;
