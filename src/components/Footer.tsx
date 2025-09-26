"use client";

import Link from "next/link";
import { logo } from "@/src/lib/layout.shared";
import { cn } from "fumadocs-ui/utils/cn";
import { usePathname } from "fumadocs-core/framework";
import { useSidebar } from "fumadocs-ui/contexts/sidebar";

type FooterLink = {
  url: string;
  target?: string;
};
const footerData: Record<string, Record<string, FooterLink>> = {
  LogChimp: {
    Home: {
      url: "https://logchimp.codecarrot.net",
    },
    Mission: {
      url: "https://logchimp.codecarrot.net/mission",
    },
    Partners: {
      url: "https://logchimp.codecarrot.net/partners",
    },
    Team: {
      url: "https://logchimp.codecarrot.net/team",
    },
    Brand: {
      url: "https://logchimp.codecarrot.net/brand",
    },
  },
  "Use Cases": {
    Roadmap: {
      url: "/guide/roadmaps",
    },
    Board: {
      url: "/guide/boards",
    },
    Posts: {
      url: "/guide/posts",
    },
  },
  "Getting Started": {
    Guide: {
      url: "/guide",
    },
    Installation: {
      url: "/docs/install/getting-started",
    },
  },
  Community: {
    Github: {
      url: "https://github.com/logchimp/logchimp",
      target: "_blank",
    },
    Discord: {
      url: "https://discord.com/invite/N34We6e",
      target: "_blank",
    },
    Twitter: {
      url: "https://twitter.com/logchimp",
      target: "_blank",
    },
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const currPath = usePathname();
  const { collapsed } = useSidebar();

  return (
    <div className="border-t bg-fd-card/50">
      <footer
        className={cn(
          `
        	flex flex-1 flex-col
        	transition-[padding]
        	xl:[--fd-toc-width:286px]
        	lg:[--fd-sidebar-width:286px]
        	md:[--fd-sidebar-width:268px]
        	my-6
        	lg:px-36 md:px-16 px-12
      	`,
        )}
        style={{
          marginInlineStart: collapsed
            ? "auto"
            : currPath === "/"
              ? ""
              : "var(--fd-sidebar-width)",
        }}
      >
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerData).map(([section, links]) => (
            <div className="footer-nav" key={section}>
              <h6 className="font-medium">{section}</h6>
              <ul className="mt-4">
                {Object.entries(links).map(([linkName, urlInfo]) => (
                  <li className="mt-2.5" key={linkName}>
                    <Link
                      href={urlInfo.url}
                      target={urlInfo?.target}
                      rel="noreferrer"
                      className="text-fd-muted-foreground hover:text-fd-info"
                    >
                      {linkName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="
						flex sm:flex-row flex-col
						gap-y-4 justify-between
						border-t pt-5 mt-5 items-center
					"
        >
          <div className="items-center inline-flex">
            {logo}
            <span className="pl-2 text-lg">LogChimp</span>
          </div>
          <div className="text-sm">
            Copyright © {currentYear} CodeCarrot.
            <Link
              target="_blank"
              href="https://codecarrot.net"
              aria-label="Go to CodeCarrot"
              rel="noreferrer"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
