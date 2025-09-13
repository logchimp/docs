import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: "content/docs",
});

export const guide = defineDocs({
  dir: "content/guide",
});

export const apiReference = defineDocs({
  dir: "content/api-reference",
});

export default defineConfig({
  mdxOptions: {},
});
