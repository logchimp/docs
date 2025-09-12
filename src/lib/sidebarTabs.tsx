import type { PropsWithChildren } from "react";
import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { BookIcon, MapIcon, TerminalIcon } from "lucide-react";

export const tabs: NonNullable<DocsLayoutProps["sidebar"]>["tabs"] =  [
  {
    title: "Documentation",
    description: "Setup your LogChimp",
    url: "/docs",
    // icon: (
    //   <DropdownItem>
    //     <BookIcon />
    //   </DropdownItem>
    // ),
  },
  {
    title: "Guide",
    url: "/guide",
    // icon: (
    //   <DropdownItem>
    //     <MapIcon />
    //   </DropdownItem>
    // ),
  },
  {
    title: "API Reference",
    description: "Reference for the API",
    url: "/api-reference",
    // icon: (
    //   <DropdownItem>
    //     <TerminalIcon />
    //   </DropdownItem>
    // ),
  },
];

export const tabss: NonNullable<DocsLayoutProps["sidebar"]>["tabs"] = {
  transform: (option, node) => {
    console.log(option, node);
    return { ...option, icon: node.icon };
  },
  // tabs: f,
};

function DropdownItem({ children }: PropsWithChildren) {
  return (
    <div className="size-8 border border-zinc-300 rounded-md [&>svg]:size-4">
      {children}
    </div>
  );
}
