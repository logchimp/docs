import { guideSource } from "@/src/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/src/lib/layout.shared";
import { tabs } from "@/src/lib/sidebarTabs";

export default function Layout({ children }: LayoutProps<"/guide">) {
  return (
    <DocsLayout
      tree={guideSource.pageTree}
      {...baseOptions()}
      sidebar={{
        tabs,
      }}
    >
      {children}
    </DocsLayout>
  );
}
