import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/notebook/page";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { openApiSource } from "@/src/lib/source";
import { APIPage } from "@/src/components/ApiPage";
import { MDXComponents } from "@/src/components/MDXComponents";

export default async function Page(
  props: PageProps<"/api-reference/[[...slug]]">,
) {
  const params = await props.params;
  const page = openApiSource.getPage(params.slug);
  if (!page) notFound();

  if (page.data.type === "openapi") {
    return (
      <DocsPage toc={page.data.toc} full>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <APIPage {...page.data.getAPIPageProps()} />
        </DocsBody>
      </DocsPage>
    );
  }

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
