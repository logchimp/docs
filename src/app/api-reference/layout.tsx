import { openApiSource } from "@/src/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { baseOptions } from "@/src/lib/layout.shared";
import { tabs } from "@/src/components/sidebar/tabs";

export default function Layout({ children }: LayoutProps<"/api-reference">) {
  return (
    <DocsLayout
      tree={openApiSource.pageTree}
      {...baseOptions()}
      sidebar={{
        tabs,
      }}
    >
      {children}
    </DocsLayout>
  );
}
