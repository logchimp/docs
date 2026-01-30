import { platformSource } from "@/src/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXComponents } from "@/src/components/MDXComponents";

export default async function Page(props: PageProps<"/platform/[[...slug]]">) {
  const params = await props.params;
  const page = platformSource.getPage(params.slug);
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
  return platformSource.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/platform/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = platformSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
