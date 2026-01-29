import type { MetadataRoute } from "next";
import {
  mainSource,
  selfHostingSource,
  platformSource,
  guideSource,
  openApiSource,
  developingSource,
  sitePolicySource,
} from "../lib/source";

const buildTime = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const sources = [
    mainSource,
    selfHostingSource,
    platformSource,
    guideSource,
    openApiSource,
    developingSource,
    sitePolicySource,
  ];

  return sources.flatMap((s) =>
    s.getPages().map((page) => ({
      url: `https://docs.logchimp.codecarrot.net${page.url}`,
      lastModified: buildTime,
    })),
  );
}
