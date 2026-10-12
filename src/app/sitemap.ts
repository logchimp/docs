import type { MetadataRoute } from "next";
import {
  mainSource,
  selfHostingSource,
  platformSource,
  guideSource,
  openApiSource,
  developingSource,
} from "../lib/source";

const SITE_URL = "https://docs.logchimp.app";
const buildTime = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const sources = [
    mainSource,
    selfHostingSource,
    platformSource,
    guideSource,
    openApiSource,
    developingSource,
  ];

  return sources.flatMap((s) =>
    s.getPages().map((page) => ({
      url: new URL(page.url, SITE_URL).toString(),
      lastModified: buildTime,
    })),
  );
}
