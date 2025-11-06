import type { PropsWithChildren } from "react";
import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import {
  BoxesIcon,
  HammerIcon,
  MapIcon,
  BracesIcon,
  ServerIcon,
} from "lucide-react";

export const tabs: NonNullable<DocsLayoutProps["sidebar"]>["tabs"] = [
  {
    title: "Platform",
    url: "/platform/overview",
    icon: (
      <DropdownItem>
        <BoxesIcon />
      </DropdownItem>
    ),
  },
  {
    title: "Self Hosting",
    description: "Run on your own infra",
    url: "/self-hosting/installation",
    icon: (
      <DropdownItem>
        <ServerIcon />
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
  {
    title: "Developing",
    description: "Run LogChimp in dev mode",
    url: "/developing/introduction",
    icon: (
      <DropdownItem>
        <HammerIcon />
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
