import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

export default defineCloudflareConfig({
  // Use Cloudflare R2 to store Next.js incremental cache (ISR/data cache), instead of inside the Worker.
  incrementalCache: r2IncrementalCache,
  // To use KV instead of R2, switch to the KV override and add a KV binding in wrangler.jsonc:
  // import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";
  // incrementalCache: kvIncrementalCache,
});
