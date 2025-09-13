import { createElement } from "react";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { apiReference, docs, guide } from "@/.source";

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
});
