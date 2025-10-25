import { developingSource } from "@/src/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/src/lib/layout.shared";
import { tabs } from "@/src/components/sidebar/tabs";

export default function Layout({ children }: LayoutProps<"/developing">) {
  return (
    <DocsLayout
      tree={developingSource.pageTree}
      {...baseOptions()}
      sidebar={{
        tabs,
      }}
      tabMode="navbar"
    >
      {children}
    </DocsLayout>
  );
}
