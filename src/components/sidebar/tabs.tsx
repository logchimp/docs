import type { PropsWithChildren } from "react";
import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { BookIcon, MapIcon, BracesIcon } from "lucide-react";

export const tabs: NonNullable<DocsLayoutProps["sidebar"]>["tabs"] = [
  {
    title: "Documentation",
    description: "Setup your LogChimp",
    url: "/docs",
    icon: (
      <DropdownItem>
        <BookIcon />
      </DropdownItem>
    ),
  },
  {
    title: "Guide",
    description: "Get started with LogChimp",
    url: "/guide",
    icon: (
      <DropdownItem>
        <MapIcon />
      </DropdownItem>
    ),
  },
  {
    title: "API Reference",
    description: "Reference for the API",
    url: "/api-reference",
    icon: (
      <DropdownItem>
        <BracesIcon />
      </DropdownItem>
    ),
  },
];

function DropdownItem({ children }: PropsWithChildren) {
  return (
    <div className="[&_svg]:size-full rounded-lg size-full max-md:border max-md:p-1.5">
      {children}
    </div>
  );
}
