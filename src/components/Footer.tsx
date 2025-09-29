"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
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
      url: "https://wellfound.com/company/codecarrot",
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
    <div className="pt-8 pb-10">
      <footer
        className={clsx(
          "flex flex-1 flex-col",
          "transition-[padding]",
          "xl:[--fd-toc-width:286px]",
          "lg:[--fd-sidebar-width:286px]",
          "md:[--fd-sidebar-width:268px]",
          "lg:px-36 md:px-16 px-12",
          "sticky",
        )}
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
            <div key={section}>
              <h6 className="font-medium">{section}</h6>
              <ul className="mt-4">
                {Object.entries(links).map(([linkName, urlInfo]) => (
                  <li className="mt-2.5" key={linkName}>
                    <Link
                      href={urlInfo.url}
                      target={urlInfo?.target}
                      rel="noreferrer"
                      className="w-fit text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-white flex items-center gap-x-2"
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
          className={clsx(
            "flex sm:flex-row flex-col items-center",
            "gap-y-4 justify-between",
            "border-t border-t-neutral-200 dark:border-t-neutral-700 pt-5 mt-5",
          )}
        >
          <Link
            href="https://logchimp.codecarrot.net"
            target="_blank"
            className="flex items-center gap-x-2"
            aria-label="go to logchimp"
          >
            {logo}
            <span className="text-lg font-semibold">LogChimp</span>
          </Link>
          <div className="text-sm">
            Copyright © {currentYear}{' '}
            <Link
              target="_blank"
              href="https://codecarrot.net"
              aria-label="Go to CodeCarrot"
              rel="noreferrer"
            >
              CodeCarrot
            </Link>
            .
          </div>
        </div>
      </footer>
    </div>
  );
}
