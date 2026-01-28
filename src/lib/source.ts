import { createElement } from "react";
import { loader, multiple } from "fumadocs-core/source";
import { openapiPlugin, openapiSource } from "fumadocs-openapi/server";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { icons } from "lucide-react";
import {
  apiReference,
  guide,
  main,
  selfHosting,
  platform,
  developing,
  sitePolicy,
} from "fumadocs-mdx:collections/server";
import { openapi } from "@/src/lib/openapi";

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

export const openApiSource = loader(
  multiple({
    docs: apiReference.toFumadocsSource(),
    openapi: await openapiSource(openapi, {
      groupBy: "tag",
    }),
  }),
  {
    baseUrl: "/api-reference",
    plugins: [openapiPlugin()],
  },
);

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
