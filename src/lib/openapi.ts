import { createOpenAPI } from "fumadocs-openapi/server";

export const openapi = createOpenAPI({
  input: ["./content/api-reference/openapi.yaml"],
  shikiOptions: {
    themes: {
      dark: "vesper",
      light: "vitesse-light",
    },
  },
});
