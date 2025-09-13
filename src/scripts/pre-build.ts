// import { buildRegistry } from "@/scripts/build-registry";
import * as OpenAPI from "fumadocs-openapi";
import { rimraf } from "rimraf";
import * as path from "node:path";
import { openapi } from "@/src/lib/openapi";

const apiReferencePath = "./content/api-reference";

export async function generateDocs() {
  await rimraf(apiReferencePath, {
    filter: createPreserveFilter([
      "openapi.yaml",
      "index.mdx",
      "overview.mdx",
      "glossary.md",
      "rate-limiting.mdx",
      "errors.md",
      "meta.json",
    ]),
  });

  await Promise.all([
    OpenAPI.generateFiles({
      input: openapi,
      output: apiReferencePath,
      per: "operation",
      groupBy: "tag",
      includeDescription: true,
    }),
  ]);
}

async function main() {
  await Promise.all([generateDocs()]);
}

await main().catch((e) => {
  console.error("Failed to run pre build script", e);
  process.exit(1);
});

// Ultra-clean version with helper function
function createPreserveFilter(preserveItems: string[]) {
  return (filepath: string) => {
    const relativePath = path.relative(apiReferencePath, filepath);
    const filename = path.basename(relativePath);

    return !preserveItems.some((item) => {
      // Exact filename match
      if (item === filename) return true;
      // Exact path match
      if (item === relativePath) return true;
      // Folder match (if item ends with /)
      if (item.endsWith("/") && relativePath.startsWith(item)) return true;

      return false;
    });
  };
}
