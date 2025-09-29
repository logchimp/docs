import { createElement } from "react";
import { loader } from "fumadocs-core/source";
import { transformerOpenAPI } from "fumadocs-openapi/server";
import { icons } from "lucide-react";
import { apiReference, docs, guide, main } from "@/.source";

export const mainSource = loader({
  source: main.toFumadocsSource(),
  baseUrl: "/",
  icon(icon) {
    if (!icon) {
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export const docsSource = loader({
  source: docs.toFumadocsSource(),
  baseUrl: "/docs",
  icon(icon) {
    if (!icon) {
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});

export const guideSource = loader({
  source: guide.toFumadocsSource(),
  baseUrl: "/guide",
  icon(icon) {
    if (!icon) {
      return;
    }

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
