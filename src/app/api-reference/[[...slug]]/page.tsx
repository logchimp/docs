import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { APIPage } from "fumadocs-openapi/ui";

import { Alert } from "@/src/components/Alert";
import { openApiSource } from "@/src/lib/source";
import { openapi } from "@/src/lib/openapi";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = openApiSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            Alert: (props) => <Alert {...props} />,
            APIPage: (props) => {
              const apiProps = openapi.getAPIPageProps?.(props);
              if (!apiProps) {
                console.error("Unable to get API page props");
                return <div>Error loading API documentation</div>;
              }
              return <APIPage {...apiProps} />;
            },
          }}
        />
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
