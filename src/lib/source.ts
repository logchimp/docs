import { loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { openapiPlugin } from "fumadocs-openapi/server";
import {
  apiReference,
  guide,
  main,
  selfHosting,
  platform,
  developing,
  sitePolicy,
} from "fumadocs-mdx:collections/server";

export const mainSource = loader({
  source: main.toFumadocsSource(),
  baseUrl: "/",
  plugins: [lucideIconsPlugin()],
});

export const selfHostingSource = loader({
  source: selfHosting.toFumadocsSource(),
  baseUrl: "/self-hosting",
  plugins: [lucideIconsPlugin()],
});

export const platformSource = loader({
  source: platform.toFumadocsSource(),
  baseUrl: "/platform",
  plugins: [lucideIconsPlugin()],
});

export const guideSource = loader({
  source: guide.toFumadocsSource(),
  baseUrl: "/guide",
  plugins: [lucideIconsPlugin()],
});

export const openApiSource = loader({
  source: apiReference.toFumadocsSource(),
  baseUrl: "/api-reference",
  plugins: [openapiPlugin()],
});

export const developingSource = loader({
  source: developing.toFumadocsSource(),
  baseUrl: "/developing",
  plugins: [lucideIconsPlugin()],
});

export const sitePolicySource = loader({
  source: sitePolicy.toFumadocsSource(),
  baseUrl: "/site-policy",
  plugins: [lucideIconsPlugin()],
});
