import { mainSource } from "@/src/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

export const { GET } = createFromSource(mainSource, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: "english",
});
