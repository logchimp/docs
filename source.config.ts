import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const main = defineDocs({
  dir: "content/",
});

export const platform = defineDocs({
  dir: "content/platform",
});

export const selfHosting = defineDocs({
  dir: "content/self-hosting",
});

export const guide = defineDocs({
  dir: "content/guide",
});

export const apiReference = defineDocs({
  dir: "content/api-reference",
});

export const developing = defineDocs({
  dir: "content/developing",
});

export default defineConfig({
  mdxOptions: {},
});
