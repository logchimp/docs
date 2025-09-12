import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const logo = (
  <>
    <img
      alt="Documentation"
      src="https://logchimp.codecarrot.net/logchimp.svg"
      width={30}
      height={30}
      aria-label="LogChimp"
    />
  </>
);

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: "https://github.com/logchimp/logchimp?ref=docs",
    nav: {
      title: (
        <div className="flex items-center gap-2.5">
          {logo}
          <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
            LogChimp Documentation
          </span>
        </div>
      ),
      transparentMode: "none",
    },
    links: [
      // {
      //   type: "menu",
      // text: "Main",
      //
      //   url: "https://logchimp.codecarrot.net",
      //   items: [
      //     {
      //
      //       type: "main",
      //       text: "Get Started",
      //       url: "https://logchimp.codecarrot.net",
      //     },
      //   ],
      // },
      // {
      //   title: "Account",
      //   url: "https://app.logchimp.com",
      //   links: [
      //     {
      //       type: "button",
      //       text: "Login",
      //       url: "https://app.logchimp.com/login",
      //       secondary: true,
      //     },
      //   ],
      // },
    ],
  };
}
