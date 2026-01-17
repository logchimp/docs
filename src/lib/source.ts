import { createElement } from "react";
import { loader } from "fumadocs-core/source";
import { transformerOpenAPI } from "fumadocs-openapi/server";
import { icons } from "lucide-react";
import {
  apiReference,
  guide,
  main,
  selfHosting,
  platform,
  developing,
  sitePolicy,
} from "@/.source";

export const mainSource = loader({
  source: main.toFumadocsSource(),
  baseUrl: "/",
  icon(icon) {
    if (!icon) return;

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export const selfHostingSource = loader({
  source: selfHosting.toFumadocsSource(),
  baseUrl: "/self-hosting",
  icon(icon) {
    if (!icon) return;

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export const platformSource = loader({
  source: platform.toFumadocsSource(),
  baseUrl: "/platform",
  icon(icon) {
    if (!icon) return;

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export const guideSource = loader({
  source: guide.toFumadocsSource(),
  baseUrl: "/guide",
  icon(icon) {
    if (!icon) return;

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export const openApiSource = loader({
  source: apiReference.toFumadocsSource(),
  baseUrl: "/api-reference",
  pageTree: {
    transformers: [transformerOpenAPI()],
  },
});

export const developingSource = loader({
  source: developing.toFumadocsSource(),
  baseUrl: "/developing",
  icon(icon) {
    if (!icon) return;

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export const sitePolicySource = loader({
  source: sitePolicy.toFumadocsSource(),
  baseUrl: "/site-policy",
  icon(icon) {
    if (!icon) return;

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
