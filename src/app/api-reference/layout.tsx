import { openApiSource } from "@/src/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/src/lib/layout.shared";
import { tabs } from "@/src/lib/sidebarTabs";

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
