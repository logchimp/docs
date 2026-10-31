import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import type { ImageProps } from "next/image";

// Custom components
import { Alert } from "./Alert";

export const MDXComponents = {
  ...defaultMdxComponents,

  // img for markdown - expects standard HTML img attributes but we cast for ImageZoom
  img: (props: any) => (
    <ImageZoom {...props} className="border-2 rounded-2xl w-fit" />
  ),

  // Image component from Next.js
  Image: (props: ImageProps) => <ImageZoom {...props} className="" />,

  // Custom components
  Alert,
};
