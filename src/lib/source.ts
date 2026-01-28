import { createElement } from "react";
import { loader } from "fumadocs-core/source";
// import { transformerOpenAPI } from "fumadocs-openapi/server";
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

export const mainSource = loader({
  source: main.toFumadocsSource(),
  baseUrl: "/",
  plugins: [lucideIconsPlugin()],
});

export const selfHostingSource = loader({
  source: selfHosting.toFumadocsSource(),
  baseUrl: "/self-hosting",
  plugins: [lucideIconsPlugin()],
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
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
  pageTree: {
    // transformers: [transformerOpenAPI()],
  },
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
