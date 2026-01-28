import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { MDXComponents } from "@/src/components/MDXComponents";
import { openApiSource } from "@/src/lib/source";

export default async function Page(
  props: PageProps<"/api-reference/[[...slug]]">,
) {
  const params = await props.params;
  const page = openApiSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={MDXComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return openApiSource.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/api-reference/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = openApiSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
