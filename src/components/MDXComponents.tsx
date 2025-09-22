import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { openapi } from "@/src/lib/openapi";
import { APIPage } from "fumadocs-openapi/ui";
import type { ComponentProps } from "react";
import type { ImageProps } from "next/image";

// Custom components
import { Alert } from "./Alert";

type APIPageProps = Parameters<NonNullable<typeof openapi.getAPIPageProps>>[0];
export const MDXComponents = {
  ...defaultMdxComponents,

  // img for markdown
  img: (props: ImageProps) => (
    <ImageZoom {...props} className="border-2 rounded-2xl w-fit !important" />
  ),

  // img for <Image> from Next/Image
  Image: (props: ImageProps) => <ImageZoom {...props} className="" />,

  // OpenAPI Doc
  APIPage: (props: APIPageProps) => (
    <APIPage {...openapi.getAPIPageProps(props)} />
  ),

  // Custom components
  Alert,
};
