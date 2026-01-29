import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { openapi } from "@/src/lib/openapi";
import { type ApiPageProps, createAPIPage } from "fumadocs-openapi/ui";
import type { ImageProps } from "next/image";

// Custom components
import { Alert } from "./Alert";

export const APIPage = createAPIPage(openapi, {
  shikiOptions: {
    themes: {
      dark: "vesper",
      light: "vitesse-light",
    },
  },
});

export const MDXComponents = {
  ...defaultMdxComponents,

  // img for markdown
  img: (props: ImageProps) => (
    <ImageZoom {...props} className="border-2 rounded-2xl w-fit !important" />
  ),

  // img for <Image> from Next/Image
  Image: (props: ImageProps) => <ImageZoom {...props} className="" />,

  // OpenAPI Doc
  APIPage: (props: ApiPageProps) => <APIPage {...props} />,

  // Custom components
  Alert,
};
