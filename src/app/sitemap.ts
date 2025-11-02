import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "http://localhost:3000";

  const sections = ["docs", "guide", "api-reference", "changelog"];

  // Utility to recursively get all .mdx files
  function getMdxFiles(dir: string): string[] {
    if (!fs.existsSync(dir)) return [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    return entries.flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return getMdxFiles(fullPath);
      if (entry.isFile() && entry.name.endsWith(".mdx")) return [fullPath];
      return [];
    });
  }

  // Build URLs for each MDX file
  const docsUrls = sections.flatMap((section) => {
    const sectionDir = path.join(process.cwd(), "content", section);
    const files = getMdxFiles(sectionDir);

    return files.map(
      (filePath) =>
        `${baseUrl}/${section}${filePath
          .replace(sectionDir, "")
          .replace(/\\/g, "/")
          .replace(/\.mdx$/, "")}`,
    );
  });

  const staticPages = [{ url: baseUrl, lastModified: new Date(), priority: 1 }];

  // Convert all docs into sitemap entries
  const docEntries = docsUrls.map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: url.includes("/changelog") ? 0.7 : 0.9,
  }));

  return [...staticPages, ...docEntries];
}
