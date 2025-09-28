"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { logo } from "@/src/lib/layout.shared";
import { usePathname } from "fumadocs-core/framework";
import { useSidebar } from "fumadocs-ui/contexts/sidebar";

type FooterLink = {
  url: string;
  target?: string;
  badgeText?: string;
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
    Careers: {
      url: "https://wellfound.com/company/codecarrot/jobs",
      target: "_blank",
      badgeText: "hiring",
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
    GitHub: {
      url: "https://github.com/logchimp/logchimp",
      target: "_blank",
    },
    Discord: {
      url: "https://discord.com/invite/N34We6e",
      target: "_blank",
    },
    "X (Formerly Twitter)": {
      url: "https://x.com/logchimp",
      target: "_blank",
    },
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const currPath = usePathname();
  const { collapsed } = useSidebar();
  const [sidebarExists, setSidebarExists] = useState(false);

  useEffect(() => {
    const exists = !!document?.querySelector(
      `.\\*\\:w-\\(\\--fd-sidebar-width\\)`,
    );
    setSidebarExists(exists);
  }, [currPath]);

  return (
    <div className="border-t bg-fd-card/50">
      <footer
        className="
        	flex flex-1 flex-col
        	transition-[padding]
        	xl:[--fd-toc-width:286px]
        	lg:[--fd-sidebar-width:286px]
        	md:[--fd-sidebar-width:268px]
        	my-6
        	lg:px-36 md:px-16 px-12
        	sticky
      	"
        style={{
          marginInlineStart: collapsed
            ? "auto"
            : !sidebarExists
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
                      className="w-fit text-fd-muted-foreground hover:text-fd-info flex items-center gap-x-2"
                    >
                      {linkName}
                      {urlInfo.badgeText && (
                        <span
                          className="text-white rounded-full px-2 py-0.5 text-xs font-bold"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, #484d7c, #5a5183, #6c5589, #7f598e, #915c91)",
                          }}
                        >
                          {urlInfo.badgeText.toUpperCase()}
                        </span>
                      )}
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
