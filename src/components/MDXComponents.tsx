import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import type { ImageProps } from "next/image";

// Custom components
import { Alert } from "./Alert";

export const MDXComponents = {
  ...defaultMdxComponents,

  // img for markdown
  img: (props: ImageProps) => (
    <ImageZoom {...props} className="border-2 rounded-2xl w-fit !important" />
  ),

  // img for <Image> from Next/Image
  Image: (props: ImageProps) => <ImageZoom {...props} className="" />,

  // Custom components
  Alert,
};
